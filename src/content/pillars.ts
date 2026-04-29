export interface Pillar {
  number: string;
  name: string;
  oneLiner: string;
  definition: string;
  questions: string[];
}

export const pillars: Pillar[] = [
  {
    number: "01",
    name: "Goals",
    oneLiner: "What users truly want",
    definition: "The underlying outcome a user is reaching for — not the feature they clicked on. Worlds are built around goals, not screens.",
    questions: [
      "What is the user actually trying to achieve in this session?",
      "Which goals are central to the world, and which are edge cases?",
      "Where do our goals quietly contradict each other?",
    ],
  },
  {
    number: "02",
    name: "Rules",
    oneLiner: "What is allowed and expected",
    definition: "The implicit laws of the product. What can be done, what cannot, what is encouraged, and what is quietly punished.",
    questions: [
      "What does the product say is normal behavior?",
      "Where do the rules conflict with the goals?",
      "Which rules are explicit, and which are only learned through friction?",
    ],
  },
  {
    number: "03",
    name: "Feedback",
    oneLiner: "How the product responds",
    definition: "Every motion, sound, and message is the product talking back. Coherent feedback teaches the world without a manual.",
    questions: [
      "What does success feel like inside the product?",
      "What does failure feel like — and is that intentional?",
      "Are we rewarding the behaviors we actually want?",
    ],
  },
  {
    number: "04",
    name: "Progress",
    oneLiner: "How users move forward",
    definition: "The sense of momentum: from new to fluent, from curious to committed. Worlds without progress feel flat, even when they're useful.",
    questions: [
      "What does it mean to get better at using this product?",
      "Where do users plateau — and is that a feature or a failure?",
      "What does the next chapter of the relationship look like?",
    ],
  },
  {
    number: "05",
    name: "Beliefs",
    oneLiner: "What feels true inside the product",
    definition: "The worldview the product quietly asserts — about the user, the domain, and what matters. Beliefs are the product's personality made structural.",
    questions: [
      "What does this product believe about its users?",
      "What does it believe about the problem it solves?",
      "Where do our beliefs differ from our competitors' — and is that visible?",
    ],
  },
];
