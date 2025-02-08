
export const GA_ID = 'G-EEGZND1FHZ';

// Page view tracking
export const pageview = (path) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  });
};

// Event tracking
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
