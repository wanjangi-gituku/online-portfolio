import goal from "/goal_management_app.png";
import bulk from "/bulk_insert.png";
import events from "/events_scraper.png";

export type Projects = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveDemoLink?: string;
};

export const projectData: Projects[] = [
  {
    image: goal,
    title: "Goals Management App",
    description:
      "A simple React application built with TypeScript and Vite, allowing users to manage course goals with features like adding, deleting, and displaying goals, along with hint and warning systems.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    githubLink: "https://github.com/Ras-Pekt/react_with_typescript",
  },
  {
    image: bulk,
    title: "Bulk Insert API",
    description:
      "A Django API for efficiently bulk inserting products and their variants, by leveraging Django Rest Framework to provide a single API endpoint for creating products and their associated variants in bulk. It supports JSON serialization and deserialization, making it easy to integrate with external systems. Perfect for e-commerce platforms or inventory management systems that require high-performance bulk data operations.",
    technologies: ["Python", "Django", "Django Rest Framework"],
    githubLink: "https://github.com/Ras-Pekt/bulk_insert_API",
  },
  {
    image: events,
    title: "Cloud Security Event Scraper",
    description:
      "A powerful web scraping tool built with Scrapy to extract and store cloud security event data from a website into a structured MySQL database. This project is designed to scrape event details such as webcasts, summits, and series, and store them in a structured format for further analysis. Perfect for security professionals and researchers looking to automate event data collection.",
    technologies: ["Python", "Scrapy", "MySQL", "SQLAlchemy"],
    githubLink: "https://github.com/Ras-Pekt/events_scraper",
  },
];
