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
    title: "Things got messy as you scaled",
    detail: "Usually it's not a roadmap problem. It's that nobody shares the same picture of the product.",
  },
  {
    icon: Users,
    title: "The team can't agree on what's next",
    detail: "Usually it's not a roadmap problem. It's that nobody shares the same picture of the product.",
  },
  {
    icon: Puzzle,
    title: "New features feel bolted on",
    detail: "Set the rules of your world before users start guessing them.",
  },
  {
    icon: Compass,
    title: "You want clarity before you build",
    detail: "Decide what the product actually is first. Scope gets way easier after that.",
  },
  {
    icon: Sparkles,
    title: "You want it to feel like something",
    detail: "How a product feels isn't an accident. It's a bunch of small choices done on purpose.",
  },
  {
    icon: Rocket,
    title: "You're launching something new",
    detail: "Set the rules of your little world before users start guessing them for you.",
  },
];
