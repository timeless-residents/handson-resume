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
import { Moon, Sun } from 'lucide-react'; 
import { useTranslation } from 'react-i18next'; 


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // ローカルストレージから初期値を取得、なければシステムの設定を使用
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };
  const { personalInfo, introduction, skills, experience, projects, socialContributions } = profileData;

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl text-center">
    
    <div className="fixed top-4 left-4">
        <button
          onClick={() => changeLanguage('ja')}
          className={`px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ${currentLanguage === 'ja' ? 'bg-gray-300 dark:bg-gray-600 font-bold' : 'bg-gray-200 dark:bg-gray-700'}`} // 選択中の言語をハイライト
        >
          日本語
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ml-2 ${currentLanguage === 'en' ? 'bg-gray-300 dark:bg-gray-600 font-bold' : 'bg-gray-200 dark:bg-gray-700'}`} // 選択中の言語をハイライト
        >
          English
        </button>
      </div>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label={t('profileHeader.themeSwitch')}
      >
        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      <ProfileHeader 
        name={t("personalInfo.name")}
        title={t("personalInfo.title")}
        imageSrc={personalInfo.image}
      />

      <div className="max-w-2xl mx-auto text-left">
        <Section title={t("sections.introduction")}>
          <p className="dark:text-gray-300">{t(introduction)}</p>
        </Section>

        <Section title={t("sections.skills")}>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <SkillCategory title={t("skillCategories.programming")} skills={skills.programming} />
              <SkillCategory title={t("skillCategories.frontend")} skills={skills.frontend} />
              <SkillCategory title={t("skillCategories.backend")} skills={skills.backend} />
              <SkillCategory title={t("skillCategories.database")} skills={skills.database} />
            </div>
            
            <div className="mt-6">
              <SkillCategory title={t("skillCategories.devops")} skills={skills.devops} />
            </div>
            
            <div className="mt-6">
              <SkillCategory title={t("skillCategories.focus")} skills={skills.focus.map(key => t(key))} />
            </div>
          </div>
        </Section>

        <Section title={t("sections.experience")}>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </Section>

        <Section title={t("sections.projects")}>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </Section>

        <Section title={t("sections.socialContributions")}>
          <div className="space-y-4">
            {socialContributions.map((contribution, index) => (
              <SocialContributionCard key={index} {...contribution} />
            ))}
          </div>
        </Section>
      </div>

      <footer className="text-center py-4 mt-8 border-t border-gray-300 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}

export default App;
