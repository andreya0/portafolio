import { image } from "framer-motion/client";

export const getWorkExperience = (t) => [
  {
    position: t("workexperience.simetria.position"),
    company: "Simetria Digital",
    period: t("workexperience.simetria.period"),
    description: [
      t("workexperience.simetria.description_1"),
      t("workexperience.simetria.description_2"),
      t("workexperience.simetria.description_3"),
      t("workexperience.simetria.description_4"),
    ],
    skills: [
      { name: "React", iconName: "react" },
      { name: "JavaScript", iconName: "javascript" },
      { name: "Tailwind CSS", iconName: "tailwind" },
      { name: ".NET Core", iconName: "dotnet" },
      { name: "MySQL", iconName: "mysql" },
      { name: "Postman", iconName: "postman" },
      { name: "Git", iconName: "git" },
      { name: "Azure DevOps", iconName: "azuredevops" },
      { name: "Swagger", iconName: "swagger" },
    ],
  },
];

export const getProjects = (t) => [
  {
    title: t("personalprojects.gymapp.title"),
    description: t("personalprojects.gymapp.description"),
    skills: [
      { name: "Spring", iconName: "springboot" },
      { name: "Docker", iconName: "docker" },
      { name: "Redis", iconName: "redis" },
      { name: "MySQL", iconName: "mysql" },
      { name: "Tailwind CSS", iconName: "tailwind" },
      { name: "TypeScript", iconName: "typescript" },
      { name: "Redux", iconName: "redux" },
      { name: "Next.js", iconName: "nextjs" },
    ],
    image: "https://i.ibb.co/cNZJ8Df/Imagen.png",
    imagePosition: "center 20%",
    detailsLink: "/work/gym-app",
  },
  {
    title: t("personalprojects.portfolio.title"),
    description: t("personalprojects.portfolio.description"),
    skills: [
      { name: "React", iconName: "react" },
      { name: "JavaScript", iconName: "javascript" },
      { name: "Tailwind CSS", iconName: "tailwind" },
    ],
    image: "https://i.ibb.co/7223FPJ/Captura.png",
    imagePosition: "31% center",
    githubLink: "https://github.com/andreya0/portafolio",
  },
];
