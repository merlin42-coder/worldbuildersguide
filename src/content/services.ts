export interface Service {
  number: string;
  name: string;
  short: string;
  long: string;
  deliverables: string[];
  timeline: string;
  forWho: string;
}

export const services: Service[] = [
  {
    number: "01",
    name: "Product Clarity Sprint",
    short: "Rapid diagnosis of friction, confusion, and hidden contradictions.",
    long: "A focused two-week engagement where we map your product as a world — surfacing the contradictions users feel but cannot name. You leave with a shared vocabulary for what the product actually is, and what it isn't.",
    deliverables: [
      "Product world map and friction inventory",
      "Top contradictions ranked by user impact",
      "One-page strategic brief for the team",
    ],
    timeline: "2 weeks",
    forWho: "Founders and product leads sensing drift before it becomes damage.",
  },
  {
    number: "02",
    name: "Feature Coherence Audit",
    short: "Ensure new features strengthen the product world instead of fragmenting it.",
    long: "Before you build the next big thing, we pressure-test it against the world you've already created. The result is sharper scope, fewer regrets, and a feature that feels like it always belonged.",
    deliverables: [
      "Coherence assessment of the proposed feature",
      "Recommended scope adjustments",
      "Integration plan within existing product logic",
    ],
    timeline: "3 weeks",
    forWho: "Teams about to ship a feature that could either deepen or dilute the product.",
  },
  {
    number: "03",
    name: "Team Alignment Workshop",
    short: "Create shared product logic across product, design, and engineering.",
    long: "An intensive working session that turns implicit assumptions into explicit shared language. Teams leave aligned not on a roadmap, but on the world the roadmap is meant to build.",
    deliverables: [
      "Defined product world: goals, rules, feedback, progress, beliefs",
      "Shared decision-making heuristics",
      "Documented working principles",
    ],
    timeline: "1 week + workshop",
    forWho: "Cross-functional teams pulling in subtly different directions.",
  },
];
