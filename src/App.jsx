
import { useEffect } from 'react';
import { GA_ID } from './lib/ga4';
import './index.css';
import { ProfileHeader } from './components/ProfileHeader';
import { Section } from './components/Section';
import { SkillCategory } from './components/SkillCategory';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import SocialContributionCard from './components/SocialContributionCard';
import { profileData } from './data/profileData';

function App() {
  useEffect(() => {
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

  const { personalInfo, introduction, skills, experience, projects, socialContributions } = profileData;

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl text-center">
      <ProfileHeader 
        name={personalInfo.name}
        title={personalInfo.title}
        imageSrc={personalInfo.image}
      />

      <div className="max-w-2xl mx-auto text-left">
        <Section title="自己紹介">
          <p>{introduction}</p>
        </Section>

        <Section title="専門スキル">
          <div className="bg-gray-100 p-6 rounded-lg">
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
          <div className="bg-white shadow-md rounded-lg p-6">
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

      <footer className="text-center py-4 mt-8 border-t border-gray-300">
        <p className="text-gray-500">© 2025 Takuya Sato - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
