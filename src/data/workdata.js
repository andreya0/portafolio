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

export const getGymAppDetails = (t) => ({
  title: t("details.gymapp.title"),
  description: t("details.gymapp.description"),
  technologies: [
    { name: "Spring", iconName: "springboot" },
    { name: "Docker", iconName: "docker" },
    { name: "Redis", iconName: "redis" },
    { name: "MySQL", iconName: "mysql" },
    { name: "Next.js", iconName: "nextjs" },
    { name: "Tailwind CSS", iconName: "tailwind" },
    { name: "TypeScript", iconName: "typescript" },
    { name: "Redux", iconName: "redux" },
    { name: "React", iconName: "react" },
  ],
  backgroundImg:
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  images: [
    "https://i.ibb.co/tKLft6z/xd2.png",
    "https://i.ibb.co/5krWySj/otp.png",
  ],
  liveDemo: "",
  features: [
    t("details.gymapp.features.rolePermissionManagement"),
    t("details.gymapp.features.authenticationAuthorization"),
    t("details.gymapp.features.gymUserManagement"),
    t("details.gymapp.features.emailIntegration"),
    t("details.gymapp.features.performanceOptimization"),
    t("details.gymapp.features.deploymentReady"),
  ],
  duration: t("details.gymapp.duration"),
  team: t("details.gymapp.team"),
  startDate: t("details.gymapp.startDate"),
});
