export interface Scenario {
  title: string;
  description: string;
  whatWeDo: string[];
}

export const scenarios: Scenario[] = [
  {
    title: "Scaling startup with messy UX",
    description: "Three years in, the product works — but every screen feels like it belongs to a different team. New hires can't explain what the product is, and even your power users have favorite paths and forbidden corners. The roadmap keeps adding without ever subtracting.",
    whatWeDo: [
      "Map the product as it actually behaves, not as it was designed",
      "Identify the contradictions that are silently costing you trust",
      "Define the underlying world so future features stop fragmenting it",
    ],
  },
  {
    title: "Launching a second product line",
    description: "The first product earned its place. The second one needs to extend the world without colonizing it — close enough to feel familiar, distinct enough to justify itself. Most second products fail this test quietly, becoming features in disguise.",
    whatWeDo: [
      "Define what the original product world stands for and excludes",
      "Position the second product as a bordering world, not a duplicate",
      "Establish the bridges and the boundaries between them",
    ],
  },
  {
    title: "Post-merger team alignment",
    description: "Two products are now one company, but the cultures, vocabularies, and product instincts haven't merged. Meetings sound like translation. Each side is convinced the other is missing the point.",
    whatWeDo: [
      "Surface the implicit worldview each team brings to the table",
      "Identify where the worldviews are compatible and where they aren't",
      "Build a shared product world both sides can argue inside of, not about",
    ],
  },
  {
    title: "Building a premium experience",
    description: "Premium isn't a price tier — it's a coherent set of choices that make every detail feel intentional. Most attempts at premium add polish without changing the underlying world, and users feel the gap immediately.",
    whatWeDo: [
      "Define what your premium world believes about its user",
      "Audit every interaction for that belief — and remove what contradicts it",
      "Establish the restraints that give the experience its weight",
    ],
  },
  {
    title: "Conference or event design as a world",
    description: "An event is a product compressed into days. Attendees are users; sessions are features; hallways are surfaces. The events that linger in memory aren't the ones with the most content — they're the ones with the clearest world.",
    whatWeDo: [
      "Define the world the event is teaching attendees to inhabit",
      "Align programming, space, and ritual around that world",
      "Design the moments where the world becomes felt, not just attended",
    ],
  },
];
