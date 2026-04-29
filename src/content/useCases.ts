import { Layers, Users, Puzzle, Compass, Sparkles, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface UseCase {
  icon: LucideIcon;
  title: string;
  detail: string;
}

export const useCases: UseCase[] = [
  {
    icon: Layers,
    title: "Your product feels messy after growth",
    detail: "Features pile up faster than logic. We restore the underlying world.",
  },
  {
    icon: Users,
    title: "Teams disagree on priorities",
    detail: "Disagreement is usually a missing shared model, not a missing roadmap.",
  },
  {
    icon: Puzzle,
    title: "New features feel disconnected",
    detail: "We map why they don't belong — and what would make them belong.",
  },
  {
    icon: Compass,
    title: "You need clarity before building",
    detail: "Define the world first, then let scope follow naturally.",
  },
  {
    icon: Sparkles,
    title: "You want stronger emotional coherence",
    detail: "How a product feels is a design output, not an accident.",
  },
  {
    icon: Rocket,
    title: "You are launching something new",
    detail: "Set the rules of the world before users invent their own.",
  },
];
