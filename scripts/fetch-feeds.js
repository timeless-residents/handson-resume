import fs from 'fs';
import https from 'https';
import { parseString } from 'xml2js';


// Ensure data directory exists
const dataDir = new URL('../public/data', import.meta.url);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Helper function to fetch XML feed
const fetchFeed = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

// Helper function to write feed data to file
const writeFeedData = (filename, data) => {
  fs.writeFileSync(
    new URL(`../public/data/${filename}`, import.meta.url),
    JSON.stringify(data, null, 2)
  );
};

// Process Medium feed
const processMediumFeed = async () => {
  try {
    const data = await fetchFeed('https://medium.com/feed/@business_37716');
    parseString(data, (err, result) => {
      if (err) {
        console.error('Failed to parse Medium XML:', err);
        writeFeedData('medium-feed.json', []);
        return;
      }

      const processContent = (content) => {
        const div = content[0];
        const imgMatch = div.match(/<img[^>]+src="([^"]+)"/);
        const thumbnail = imgMatch ? imgMatch[1] : '';
        const processedContent = div.replace(/<img[^>]+>/, '');
        return { content: processedContent, thumbnail };
      };

      const articles = result.rss.channel[0].item.map(item => {
        const { content, thumbnail } = processContent(item.description);
        return {
          id: item.guid[0]._,
          title: item.title[0],
          url: item.link[0],
          published: item.pubDate[0],
          content,
          thumbnail
        };
      });

      writeFeedData('medium-feed.json', articles);
      console.log('✓ Medium feed data updated successfully');
    });
  } catch (err) {
    console.error('Error fetching Medium feed:', err);
    writeFeedData('medium-feed.json', []);
  }
};

// Process Qiita feed
const processQiitaFeed = async () => {
  try {
    const data = await fetchFeed('https://qiita.com/timeless-residents/feed');
    parseString(data, (err, result) => {
      if (err) {
        console.error('Failed to parse Qiita XML:', err);
        writeFeedData('qiita-feed.json', []);
        return;
      }

      const articles = result.feed.entry.map(entry => ({
        id: entry.id[0],
        title: entry.title[0],
        url: entry.link.find(link => link.$.rel === 'alternate')?.$?.href || '',
        published: entry.published[0],
        content: entry.content[0]._
      }));

      writeFeedData('qiita-feed.json', articles);
      console.log('✓ Qiita feed data updated successfully');
    });
  } catch (err) {
    console.error('Error fetching Qiita feed:', err);
    writeFeedData('qiita-feed.json', []);
  }
};

// Process Zenn feed
const processZennFeed = async () => {
  try {
    const data = await fetchFeed('https://zenn.dev/idev/feed');
    parseString(data, (err, result) => {
      if (err) {
        console.error('Failed to parse Zenn XML:', err);
        writeFeedData('zenn-feed.json', []);
        return;
      }

      const articles = result.rss.channel[0].item.map(item => ({
        id: item.guid[0],
        title: item.title[0],
        url: item.link[0],
        published: item.pubDate[0],
        content: item.description[0],
        thumbnail: item.enclosure?.[0]?.$.url || ''
      }));

      writeFeedData('zenn-feed.json', articles);
      console.log('✓ Zenn feed data updated successfully');
    });
  } catch (err) {
    console.error('Error fetching Zenn feed:', err);
    writeFeedData('zenn-feed.json', []);
  }
};

// Fetch all feeds
Promise.all([
  processMediumFeed(),
  processQiitaFeed(),
  processZennFeed()
]).then(() => {
  console.log('All feeds updated successfully');
}).catch(err => {
  console.error('Error updating feeds:', err);
});
