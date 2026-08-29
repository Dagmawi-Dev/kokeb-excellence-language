export type FamilyStory = {
  id: string;
  quote: string;
  role: string;
  language: string;
  image?: string;
  alt?: string;
  initials?: string;
  tone?: "gold" | "green" | "red" | "blue";
};

export const familyStories: FamilyStory[] = [
  {
    id: "six-months-amharic",
    image: "/images/kokeb-family-portrait.webp",
    alt: "Representative portrait of an Ethiopian parent and child",
    quote:
      "My child knew only a little Amharic. After six months of continuing with Kokeb, she could answer her grandparents and join our family conversations. The first time she spoke without my help, we all got emotional.",
    role: "Parent of an Amharic learner",
    language: "Amharic",
  },
  {
    id: "grandmother-tigrinya",
    image: "/images/kokeb-parent-portrait.webp",
    alt: "Representative portrait of an Ethiopian parent",
    quote:
      "Tigrinya was becoming something my son only heard. Now he uses it with his grandmother every weekend, and their calls feel warmer and closer.",
    role: "Family of a Tigrinya learner",
    language: "Tigrinya",
  },
  {
    id: "confidence-oromo",
    image: "/images/testimonial-family-3.webp",
    alt: "Representative portrait of an Ethiopian mother",
    quote:
      "My daughter used to become shy and switch back to English. Her teacher made speaking feel safe, and now she keeps trying even when every word is not perfect.",
    role: "Parent of an Afaan Oromo learner",
    language: "Afaan Oromo",
  },
  {
    id: "seen-one-to-one",
    image: "/images/testimonial-family-4.webp",
    alt: "Representative portrait of an Ethiopian father and daughter",
    quote:
      "The one to one class changed everything. The teacher could slow down, repeat and celebrate every small win. My child finally felt seen.",
    role: "Parent of a beginner learner",
    language: "One to one learning",
  },
  {
    id: "sunday-family-call",
    image: "/images/testimonial-family-5.webp",
    alt: "Representative portrait of an Ethiopian mother and son",
    quote:
      "Our Sunday family call feels different now. The grandparents smile because the children can answer them instead of waiting for me to translate.",
    role: "Ethiopian family living abroad",
    language: "Family connection",
  },
  {
    id: "weekend-consistency",
    image: "/images/testimonial-family-6.webp",
    alt: "Representative portrait of Ethiopian parents",
    quote:
      "Flexible weekend lessons helped us stay consistent. The children look forward to class, and the language is becoming part of normal life at home.",
    role: "Parent of two young learners",
    language: "Flexible schedule",
  },
];
