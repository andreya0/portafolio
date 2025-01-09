import { useTranslation } from "react-i18next";
import ProjectDetails from "../../components/Work/ProjectDetails";
import { getGymAppDetails } from "../../data/workdata";
export default function GymAppPage() {
  const { t } = useTranslation();
  const details = getGymAppDetails(t);
  return <ProjectDetails {...details} />;
}
