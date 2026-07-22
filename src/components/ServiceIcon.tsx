import { Waves, Thermometer, Droplets, GraduationCap, type LucideIcon } from "lucide-react";
import type { ServiceContent } from "@/i18n/dictionary";

const iconMap: Record<ServiceContent["icon"], LucideIcon> = {
  cfd: Waves,
  heat: Thermometer,
  fluids: Droplets,
  courses: GraduationCap,
};

export default function ServiceIcon({
  icon,
  className,
  size = 24,
}: {
  icon: ServiceContent["icon"];
  className?: string;
  size?: number;
}) {
  const Icon = iconMap[icon];
  return <Icon size={size} strokeWidth={1.5} className={className} aria-hidden="true" />;
}
