import { 
  DiJavascript1, DiPython, DiJava, DiGo,
  DiMongodb, DiMysql, DiPostgresql, DiRedis,
  DiGit, DiTerminal
} from 'react-icons/di';
import {
  FaReact, FaVuejs, FaAngular, FaNode, FaAws,
  FaDocker, FaCode, FaMicrosoft, FaGoogle,
  FaCodeBranch, FaDatabase
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiSvelte, 
  SiExpress, SiDjango, SiSpring, SiGraphql,
  SiKubernetes, SiPostman, SiTerraform
} from 'react-icons/si';

export const profileData = {
  personalInfo: {
    name: "personalInfo.name",
    title: "personalInfo.title",
    image: "/assets/profile_1.jpeg"
  },
  introduction: "introduction",
  skills: {
    programming: [
      { name: "JavaScript", icon: DiJavascript1 },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: DiPython },
      { name: "Go", icon: DiGo },
      { name: "Java", icon: DiJava },
      { name: "C++", icon: FaCode },
      { name: "COBOL", icon: FaCode },
      { name: "Bash", icon: DiTerminal },
      { name: "Lua", icon: FaCode }
    ],
    frontend: [
      { name: "React", icon: FaReact },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Svelte", icon: SiSvelte },
      { name: "Angular", icon: FaAngular }
    ],
    backend: [
      { name: "Node.js", icon: FaNode },
      { name: "Express", icon: SiExpress },
      { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: FaCodeBranch },
      { name: "Spring Boot", icon: SiSpring },
      { name: "GraphQL", icon: SiGraphql }
    ],
    database: [
      { name: "PostgreSQL", icon: DiPostgresql },
      { name: "MySQL", icon: DiMysql },
      { name: "MongoDB", icon: DiMongodb },
      { name: "Redis", icon: DiRedis },
      { name: "Cassandra", icon: FaDatabase },
      { name: "ElasticSearch", icon: FaDatabase }
    ],
    devops: [
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "AWS", icon: FaAws },
      { name: "Azure", icon: FaMicrosoft },
      { name: "GCP", icon: FaGoogle },
      { name: "Git", icon: DiGit },
      { name: "VS Code", icon: FaCode },
      { name: "Postman", icon: SiPostman },
      { name: "Jenkins", icon: FaCodeBranch },
      { name: "Terraform", icon: SiTerraform }
    ],
    focus: [
      { name: "skills.focus.item1", icon: ""},
      { name: "skills.focus.item2", icon: ""},
      { name: "skills.focus.item3", icon: ""},
      { name: "skills.focus.item4", icon: ""},
      { name: "skills.focus.item5", icon: ""},
      { name: "skills.focus.item6", icon: ""},
    ]
  },
  experience: [
    {
      company: "experience.positions1.company",
      positions: [
        {
          title: "experience.positions1.title1",
          period: "experience.positions1.period1",
          description: "experience.positions1.description1"
        },
        {
          title: "experience.positions1.title2",
          period: "experience.positions1.period2",
          description: "experience.positions1.description2"
        }
      ]
    }
  ],
  projects: [
    {
      title: "projects.item1.title",
      description: "projects.item1.description"
    },
    {
      title: "projects.item2.title",
      description: "projects.item2.description"
    }
  ],
  socialContributions: [
    {
      title: "socialContributions.item1.title",
      period: "socialContributions.item1.period",
      description: "socialContributions.item1.description"
    },
    {
      title: "socialContributions.item2.title",
      period: "socialContributions.item2.period",
      description: "socialContributions.item2.description"
    },
    {
      title: "socialContributions.item3.title",
      period: "socialContributions.item3.period",
      description: "socialContributions.item3.description"
    },
    {
      title: "socialContributions.item4.title",
      period: "socialContributions.item4.period",
      description: "socialContributions.item4.description"
    }
  ]
};
