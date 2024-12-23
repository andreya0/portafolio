export const getSkills = (t) => [
  {
    category: t("frontend"),
    skills: [
      {
        name: "React",
        icon: "react",
      },
      {
        name: "TypeScript",
        icon: "typescript",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
      },
      {
        name: "Bootstrap",
        icon: "bootstrap",
      },
    ],
  },
  {
    category: t("backend"),
    skills: [
      {
        name: "MySQL",
        icon: "mysql",
      },
      {
        name: "Redis",
        icon: "redis",
      },
      { name: "Spring Boot", icon: "springboot" },
      { name: ".NET", icon: "dotnet" },
    ],
  },
  {
    category: t("tools"),
    skills: [
      {
        name: "Git",
        icon: "git",
      },
      {
        name: "Docker",
        icon: "docker",
      },
      {
        name: "Postman",
        icon: "postman",
      },
    ],
  },
];
