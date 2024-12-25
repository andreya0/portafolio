export const getEducation = (t) => [
  {
    degree: t("castro_carazo_degree"),
    institution: t("castro_carazo"),
    year: "2021 - 2024",
    description: t("castro_carazo_description"),
    skills: [
      { name: "HTML", iconName: "html" },
      { name: "CSS", iconName: "css" },
      { name: "JavaScript", iconName: "javascript" },
      { name: "Java", iconName: "java" },
      { name: "PHP", iconName: "php" },
      { name: "Oracle", iconName: "oracle" },
      { name: "C#", iconName: "csharp" },
      { name: "Bootstrap", iconName: "bootstrap" },
      { name: "MySQL", iconName: "mysql" },
      { name: ".NET", iconName: "dotnet" },
    ],
  },
  {
    degree: t("highschool_degree"),
    institution: t("highschool"),
    year: "2015 - 2020",
    description: t("highschool_description"),
    skills: [
      { name: "Java", iconName: "java" },
      { name: "C++", iconName: "cplusplus" },
      { name: "MySQL", iconName: "mysql" },
    ],
  },
];
