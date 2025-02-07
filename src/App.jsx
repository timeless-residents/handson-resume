import { useEffect, useState } from 'react';
import { GA_ID } from './lib/ga4';
import './index.css';
import { ProfileHeader } from './components/ProfileHeader';
import { Section } from './components/Section';
import { SkillCategory } from './components/SkillCategory';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import SocialContributionCard from './components/SocialContributionCard';
import { profileData } from './data/profileData';
import { Moon, Sun } from 'lucide-react'; // アイコンのインポート

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // ローカルストレージから初期値を取得、なければシステムの設定を使用
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // GA4のスクリプト設定（既存のコード）
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', GA_ID);
    };

    return () => document.head.removeChild(script);
  }, []);

  useEffect(() => {
    // テーマの変更を適用
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const { personalInfo, introduction, skills, experience, projects, socialContributions } = profileData;

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl text-center">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="テーマ切り替え"
      >
        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      <ProfileHeader 
        name={personalInfo.name}
        title={personalInfo.title}
        imageSrc={personalInfo.image}
      />

      <div className="max-w-2xl mx-auto text-left">
        <Section title="自己紹介">
          <p className="dark:text-gray-300">{introduction}</p>
        </Section>

        <Section title="専門スキル">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <SkillCategory title="プログラミング言語" skills={skills.programming} />
              <SkillCategory title="フロントエンド" skills={skills.frontend} />
              <SkillCategory title="バックエンド" skills={skills.backend} />
              <SkillCategory title="データベース" skills={skills.database} />
            </div>
            
            <div className="mt-6">
              <SkillCategory title="DevOpsとツール" skills={skills.devops} />
            </div>
            
            <div className="mt-6">
              <SkillCategory title="注力領域" skills={skills.focus} />
            </div>
          </div>
        </Section>

        <Section title="職歴">
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </Section>

        <Section title="オープンソース・個人開発">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </Section>

        <Section title="社会貢献活動">
          <div className="space-y-4">
            {socialContributions.map((contribution, index) => (
              <SocialContributionCard key={index} {...contribution} />
            ))}
          </div>
        </Section>
      </div>

      <footer className="text-center py-4 mt-8 border-t border-gray-300 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">© 2025 Takuya Sato - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;