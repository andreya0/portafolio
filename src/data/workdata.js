export const getWorkExperience = (t) => [
  {
    position: t("workexperience.fcs.position"),
    company: "FCS Consultores",
    period: t("workexperience.fcs.period"),
    description: [
      t("workexperience.fcs.description_1"),
      t("workexperience.fcs.description_2"),
      t("workexperience.fcs.description_3"),
      t("workexperience.fcs.description_4"),
    ],
    skills: [
      { name: "React", iconName: "react" },
      { name: "Tailwind CSS", iconName: "tailwind" },
      { name: ".NET Core", iconName: "dotnet" },
      { name: "Firebase", iconName: "firebase" },
      { name: "Node JS", iconName: "nodejs" },
    ],
  },
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
    title: t("personalprojects.livepulse.title"),
    description: t("personalprojects.livepulse.description"),
    skills: [
      { name: "React", iconName: "react" },
      { name: "TypeScript", iconName: "typescript" },
      { name: "Spring", iconName: "springboot" },
      { name: "Tailwind CSS", iconName: "tailwind" },
      { name: "MongoDB", iconName: "mongo" },
      { name: "Docker", iconName: "docker" },
      { name: "Redis", iconName: "redis" },
      { name: "Kafka", iconName: "kafka" },
      { name: "Nginx", iconName: "nginx" },
      { name: "Vite.js", iconName: "vite" },
    ],
    image: "https://i.ibb.co/SdHqk4D/main.png",
    imagePosition: "center 20%",
    detailsLink: "/work/live-pulse",
  },

  {
    title: t("details.gymapp.title"),
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
      { name: "Hibernate", iconName: "hibernate" },
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
    { name: "Hibernate", iconName: "hibernate" },
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

export const getLivePulseDetails = (t) => ({
  title: t("personalprojects.livepulse.title"),
  description: t("details.livepulse.description"),
  technologies: [
    { name: "React", iconName: "react" },
    { name: "TypeScript", iconName: "typescript" },
    { name: "Spring", iconName: "springboot" },
    { name: "Tailwind CSS", iconName: "tailwind" },
    { name: "MongoDB", iconName: "mongo" },
    { name: "Docker", iconName: "docker" },
    { name: "Redis", iconName: "redis" },
    { name: "Kafka", iconName: "kafka" },
    { name: "Nginx", iconName: "nginx" },
    { name: "Vite.js", iconName: "vite" },
  ],
  backgroundImg:
    "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  images: [
    "https://i.ibb.co/SdHqk4D/main.png",
    "https://i.ibb.co/GRXD8js/streaming-page.png",
    "https://i.ibb.co/tz8fXWC/phoneview.jpg",
    "https://i.ibb.co/v1CQxwv/Config-Page.png",
    "https://i.ibb.co/YXLwZbc/Offline.png",
    "https://i.ibb.co/QF79nCZ/Inicio-Sesion.png",
  ],
  liveDemo: "",
  features: [
    t("details.livepulse.features.realTimeInteraction"),
    t("details.livepulse.features.streamManagement"),
    t("details.livepulse.features.userExperience"),
    t("details.livepulse.features.eventDrivenArchitecture"),
    t("details.livepulse.features.scalableMicroservices"),
    t("details.livepulse.features.hybridCommunication"),
    t("details.livepulse.features.dataPersistence"),
    t("details.livepulse.features.productionReady"),
    t("details.livepulse.features.mobileFirstDesign"),
  ],
  duration: t("details.livepulse.duration"),
  github: "https://github.com/andreya0/Live-Pulse",
});
