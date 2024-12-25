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
    title: t("personalprojects.portfolio.title"),
    description: t("personalprojects.portfolio.description"),
    skills: [
      { name: "React", iconName: "react" },
      { name: "JavaScript", iconName: "javascript" },
      { name: "Tailwind CSS", iconName: "tailwind" },
    ],
    image: "https://i.ibb.co/8xZzpnr/Captura-de-pantalla-2024-12-24-200857.png",
    githubLink: "https://github.com/andreya0/portafolio",
  },
];
