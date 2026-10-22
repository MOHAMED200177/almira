/** "Who We Are" content. Edit the texts here; the About page and the home-page teaser both read from this file. */
export const about = {
  title: "Who We Are",
  lead: "Almira is focused on bringing animal health and nutrition products to market. These pillars are the basis of our company name, Almira: Veterinary Pharmaceuticals.",
  story: [
    "We have more than 20 years of expertise in the manufacturing of animal health and nutritional products. Our growth is both organic and through acquisitions. We have successfully integrated products, facilities and know-how from numerous prestigious brands across many of the industries we work in and continue to look for other strategic acquisitions to help us create a balanced product portfolio and achieve our goals.",
    "Building on our strong foundations, dynamic drive and clear business orientation have resulted in Almira being one of the top veterinary pharmaceutical companies operating around the world today.",
    "Almira is a privately-owned company, headquartered in Poznań, Poland. Our manufacturing subsidiary is headquartered in Poznań, and has independent manufacturing units in various other locations. Large, modern fermentation plants provide capacity for producing major molecules, purification and downstream processing as well as having extensive R&D, quality assurance and packaged goods facilities.",
    "We place a strong emphasis on addressing customer requirements which we believe can only be achieved through close partnerships. This is why Almira employs highly skilled individuals with extensive experience of the industry coupled with a deep understanding and knowledge of your local market. With offices and representatives on every continent, there is always a member of the Almira team ready and willing to help.",
  ],
  facts: [
    { value: "20+", label: "Years of expertise in animal health and nutrition" },
    { value: "Poznań", label: "Headquarters, Poland (privately owned)" },
    { value: "EU", label: "Producer with a global network" },
    { value: "Worldwide", label: "Offices and representatives on every continent" },
  ],
  strengths: [
    { icon: "flask", text: "Fermentation specialists with more than 20 years’ experience" },
    { icon: "cycle", text: "In-house capabilities for the complete production cycle; from strain to shelf" },
    { icon: "paw", text: "Experts in livestock nutrition" },
    { icon: "globe", text: "EU producer with a global network of offices and representatives" },
    { icon: "heart", text: "Customer focused" },
  ],
  seo: {
    title: "Who We Are: Almira Veterinary Pharmaceuticals",
    description:
      "Almira is a privately-owned veterinary pharmaceutical company headquartered in Poznań, Poland, with more than 20 years of expertise in animal health and nutrition products.",
  },
} as const;

export type StrengthIcon = (typeof about.strengths)[number]["icon"];
