export type NewsItem = {
  date: string;
  text: string;
};

// Curated by hand from the CVs in latex/ — update here when something new happens.
export const news: NewsItem[] = [
  {
    date: "2026",
    text: "Paper on identity-revocation freshness in ERC-8004 agent identity systems submitted to AISC 2027.",
  },
  {
    date: "2026",
    text: "Paper on tool-feedback corruption in mathematical reasoning agents submitted to the NeurIPS 2026 Math-AI Workshop.",
  },
  {
    date: "Aug 2026",
    text: "Started as a Teaching Assistant for the Data Communication and Networking Lab at the University of Moratuwa.",
  },
  {
    date: "Nov 2025",
    text: "Joined WSO2 Lanka as a Cybersecurity Engineer Intern.",
  },
  {
    date: "Jan 2025",
    text: "Won the Best AI Solution Award at the DreamShot AI Hackathon for SafeCom.",
  },
];
