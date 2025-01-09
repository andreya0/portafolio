import ProjectDetails from "../../components/Work/ProjectDetails";

export default function GymAppPage() {
  return (
    <ProjectDetails
      title="Lorem Ipsum"
      description={`
        
      `}
      technologies={[
        { name: "Spring", iconName: "springboot" },
        { name: "Docker", iconName: "docker" },
        { name: "Redis", iconName: "redis" },
        { name: "MySQL", iconName: "mysql" },
        { name: "Tailwind CSS", iconName: "tailwind" },
        { name: "TypeScript", iconName: "typescript" },
        { name: "Redux", iconName: "redux" },
        { name: "Next.js", iconName: "nextjs" },
      ]}
      images={[]}
      liveDemo=""
      features={[]}
      duration=""
      team=""
      startDate=""
    />
  );
}
