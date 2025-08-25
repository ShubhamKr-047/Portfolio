import { FileTextIcon } from "lucide-react";

import { USER } from "@/features/profile/data/user";

import { IntroItem } from "./intro-item";

export function ResumeItem() {
  return <IntroItem icon={FileTextIcon} content="Resume" href={USER.resume} />;
}
