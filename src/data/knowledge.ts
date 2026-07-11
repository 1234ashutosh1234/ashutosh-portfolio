export interface KnowledgeItem {
  keywords: string[];
  answer?: string;
  card?: "resume" | "github" | "linkedin" | "contact";
  project?: "n100" | "bluestock";
}

export const knowledge: Record<string, KnowledgeItem> = {
 n100: {
  keywords: [
    "n100",
    "financial intelligence",
    "stock analysis",
    "stock screener",
    "financial project",
  ],

  project: "n100",
},


 bluestock: {
  keywords: [
    "bluestock",
    "mutual fund",
    "nav",
    "mfapi",
    "mutual fund dashboard",
  ],

  project: "bluestock",
},

   

 skills: {
  keywords: [
    "skills",
    "technology",
    "tech stack",
    "languages",
  ],

  answer:
`My Technical Skills

• Python
• Java
• React
• Next.js
• TypeScript
• Tailwind CSS
• Machine Learning
• SQL
• Power BI
• Git & GitHub`,
},

resume: {
  keywords: [
    "resume",
    "cv",
  ],

  card: "resume",
},

github: {
  keywords: [
    "github",
    "repositories",
    "repo",
  ],

  card: "github",
},

linkedin: {
  keywords: [
    "linkedin",
    "professional profile",
  ],

  card: "linkedin",
},

contact: {
  keywords: [
    "contact",
    "email",
    "phone",
  ],

  card: "contact",
},
};

