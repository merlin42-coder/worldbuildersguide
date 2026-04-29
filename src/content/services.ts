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
    short: "A quick look at what's confusing users — and what's quietly contradicting itself.",
    long: "Two focused weeks where we map your product like a little world. We surface the things users feel but can't name. You walk out with a shared way to talk about what the product actually is — and what it isn't.",
    deliverables: [
      "Product world map and friction list",
      "Top contradictions, ranked by user impact",
      "One-page brief the team can rally around",
    ],
    timeline: "2 weeks",
    forWho: "Founders and product leads who can sense things drifting before they break.",
  },
  {
    number: "02",
    name: "Feature Coherence Audit",
    short: "Make sure your next big feature makes the product feel sharper, not messier.",
    long: "Before you build the next big thing, we pressure-test it against the world you've already created. The result: tighter scope, fewer regrets, and a feature that feels like it always belonged.",
    deliverables: [
      "Honest read on the feature's fit",
      "Scope tweaks that keep it coherent",
      "A plan for slotting it into what's already there",
    ],
    timeline: "3 weeks",
    forWho: "Teams about to ship something that could either deepen or dilute the product.",
  },
  {
    number: "03",
    name: "Team Alignment Workshop",
    short: "Get product, design and engineering reading from the same script.",
    long: "A working session that turns gut feelings into shared language. Everyone leaves aligned — not on the roadmap, but on the world the roadmap is supposed to build.",
    deliverables: [
      "A shared product world: goals, rules, feedback, progress, beliefs",
      "Heuristics the team can use to make calls",
      "A short doc of how you actually work together",
    ],
    timeline: "1 week + workshop",
    forWho: "Cross-functional teams quietly pulling in different directions.",
  },
];
