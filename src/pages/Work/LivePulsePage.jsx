import { useTranslation } from "react-i18next";
import ProjectDetails from "../../components/Work/ProjectDetails";
import { getLivePulseDetails } from "../../data/workdata";
const LivePulse = () => {
  const { t } = useTranslation();
  return <ProjectDetails {...getLivePulseDetails(t)} />;
};
export default LivePulse;
