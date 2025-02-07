import { useEffect, useState } from "react";
import { GA_ID } from "./lib/ga4";
import "./index.css";
import { ProfileHeader } from "./components/ProfileHeader";
import { Section } from "./components/Section";
import { SkillCategory } from "./components/SkillCategory";
import { ExperienceCard } from "./components/ExperienceCard";
import { ProjectCard } from "./components/ProjectCard";
import SocialContributionCard from "./components/SocialContributionCard";
import GitHubProjects from "./components/GitHubProjects";
import { profileData } from "./data/profileData";
import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AudioPlayer } from "./components/AudioPlayer";
import QiitaFeed from "./components/QiitaFeed";
import ZennFeed from "./components/ZennFeed";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // システムのカラースキーム設定を優先、なければlightモード
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return systemPrefersDark;
  });
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    // GA4のスクリプト設定（既存のコード）
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GA_ID);
    };

    return () => document.head.removeChild(script);
  }, []);

  useEffect(() => {
    // システムのカラースキーム変更を監視
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // テーマの変更を適用
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };
  const {
    personalInfo,
    introduction,
    skills,
    experience,
    projects,
    socialContributions,
  } = profileData;

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl text-center">
      <div className="fixed top-4 left-4">
        <select
          value={currentLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              changeLanguage(e.target.value);
            }
          }}
          className="appearance-none px-2 py-1 pr-6 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer outline-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 0.3rem center",
            backgroundSize: "1.5em 1.5em",
          }}
          title={t("language.select")}
          aria-label={t("language.select")}
        >
          <option value="ja" title="日本語">
            🇯🇵
          </option>
          <option value="en" title="English">
            🇺🇸
          </option>
          <option value="fr" title="Français">
            🇫🇷
          </option>
          <option value="ru" title="Русский">
            🇷🇺
          </option>
          <option value="zh" title="中文">
            🇨🇳
          </option>
          <option value="ko" title="한국어">
            🇰🇷
          </option>
        </select>
      </div>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label={t("profileHeader.themeSwitch")}
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </button>

      <ProfileHeader
        name={t("personalInfo.name")}
        title={t("personalInfo.title")}
        imageSrc={personalInfo.image}
      />

      <div className="max-w-2xl mx-auto text-left">
        <Section title={t("sections.introduction")}>
          <p className="dark:text-gray-300">{t(introduction)}</p>
          <AudioPlayer
            src="/assets/introduction.mp3"
            label={t("introduction.listen")}
          />
        </Section>

        <Section title={t("sections.skills")}>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <SkillCategory
                title={t("skillCategories.programming")}
                skills={skills.programming}
              />
              <SkillCategory
                title={t("skillCategories.frontend")}
                skills={skills.frontend}
              />
              <SkillCategory
                title={t("skillCategories.backend")}
                skills={skills.backend}
              />
              <SkillCategory
                title={t("skillCategories.database")}
                skills={skills.database}
              />
            </div>

            <div className="mt-6">
              <SkillCategory
                title={t("skillCategories.devops")}
                skills={skills.devops}
              />
            </div>

            <div className="mt-6">
              <SkillCategory
                title={t("skillCategories.focus")}
                skills={skills.focus.map((key) => t(key))}
              />
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

        <Section title={t("sections.socialContributions")}>
          <div className="space-y-4">
            {socialContributions.map((contribution, index) => (
              <SocialContributionCard key={index} {...contribution} />
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

        <Section title={t("sections.githubProjects")}>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <GitHubProjects />
          </div>
        </Section>

        <Section title={t("sections.zennArticles")}>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <ZennFeed />
          </div>
        </Section>

        <Section title={t("sections.qiitaArticles")}>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <QiitaFeed />
          </div>
        </Section>
      </div>

      <footer className="text-center py-4 mt-8 border-t border-gray-300 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">
          {t("footer.copyright")}
        </p>
      </footer>
    </div>
  );
}

export default App;
