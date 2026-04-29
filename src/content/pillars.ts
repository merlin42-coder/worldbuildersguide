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
    oneLiner: "What people are actually here to do",
    definition: "The thing the user is really trying to get done — not the button they tapped. Good products are built around the goal, not the screen.",
    questions: [
      "What is the user actually trying to do right now?",
      "Which goals are central, and which are edge cases?",
      "Where do our goals quietly fight each other?",
    ],
  },
  {
    number: "02",
    name: "Rules",
    oneLiner: "What's allowed, what's not",
    definition: "The unwritten laws of the product. What you can do, what you can't, what the product nudges you toward, what it quietly punishes.",
    questions: [
      "What does the product treat as 'normal' behavior?",
      "Where do the rules clash with what users want?",
      "Which rules are clear, and which only show up as friction?",
    ],
  },
  {
    number: "03",
    name: "Feedback",
    oneLiner: "How the product talks back",
    definition: "Every animation, sound and message is the product replying to you. When feedback is consistent, you learn the product without ever reading a manual.",
    questions: [
      "What does success feel like inside the product?",
      "What does failure feel like — and did we mean for it to feel that way?",
      "Are we rewarding the behavior we actually want?",
    ],
  },
  {
    number: "04",
    name: "Progress",
    oneLiner: "How people move forward",
    definition: "The feeling of getting somewhere — from new to fluent, from curious to hooked. Without it, even useful products feel flat.",
    questions: [
      "What does it mean to get good at using this?",
      "Where do users plateau — and is that a feature or a problem?",
      "What does the next chapter of the relationship look like?",
    ],
  },
  {
    number: "05",
    name: "Beliefs",
    oneLiner: "What the product quietly believes",
    definition: "The worldview the product carries — about its users, its space, what matters. Beliefs are personality made structural.",
    questions: [
      "What does this product believe about its users?",
      "What does it believe about the problem it solves?",
      "Where do our beliefs differ from the competition — and is it visible?",
    ],
  },
];
