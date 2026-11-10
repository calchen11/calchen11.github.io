// =============================================================
//  SITE CONTENT: edit this file to update the website.
//  Dates use "YYYY-MM" (e.g. "2025-04"); use null for "Present".
//  Leave a link as "" to hide it. Keep the commas between items!
// =============================================================
const CONTENT = {
  name: "Calvin Chen",
  email: "calvinchen521@gmail.com",
  phone: "561-309-9920",
  resume: "assets/Calvin_Chen_Resume.pdf",
  github: "https://github.com/calchen11",
  linkedin: "https://www.linkedin.com/in/calvin-chen-",

  location: "Seattle, WA",

  // About Me: the short write-up under your name (placeholder: fill in later)
  aboutMe:
    "I’m Calvin, an Informatics student at the University of Washington with a strong foundation in both the technical and analytical sides of data. My interest started with box scores, video game stats, and year-end music recaps, and today I’m driven by finding the story behind the numbers. I’m looking to bring that mindset to new challenges and spark change across various industries.",

  // Skills: one row per group
  skills: [
    { title: "Programming Languages", items: ["Python", "SQL", "R"] },
    { title: "Libraries", items: ["pandas", "NumPy", "Matplotlib", "Seaborn"] },
    { title: "Tools", items: ["Excel", "Power BI", "Tableau", "Git", "Microsoft Office Suite", "Google Workspace"] },
    { title: "Concepts", items: ["EDA", "ETL/ELT", "Data Cleaning", "Data Analysis", "Data Visualization"] },
    { title: "Interests", items: ["Weightlifting", "Traveling", "Beli", "Reading", "Concerts", "Legos"] },
    { title: "Spoken Languages", items: ["English", "Taishanese"] },
  ],

  experience: [
    {
      title: "Data Analyst Intern",
      org: "Beats by Dre",
      location: "Remote",
      start: "2025-04",
      end: "2025-08",
      bullets: [
        "Uncovered product gaps in market of high-fidelity wireless speakers, assessing themes across Beats and competitors",
        "Executed EDA/sent. analysis on 4,000+ consumer surveys using Excel, Python (pandas, numpy, matplotlib), NLP",
        "Ranked 6 key product features and 7 purchase drivers, mapping spend across price tiers and buying channels",
        "Found sound quality and battery life were top-ranked features, with peak price preference at $100–200",
        "Drove recommendations for product launch, presenting findings via interactive dashboard for marketing team",
      ],
    },
    {
      title: "Data Analyst",
      org: "Applied Analytics UW",
      location: "Seattle, WA",
      start: "2024-12",
      end: "2025-05",
      bullets: [
        "Built models predicting NBA injury recovery times from 6,500+ injury logs to support player return planning",
        "Cleaned and engineered features with pandas and NumPy, encoding categoricals, standardizing, imputing nulls",
        "Benchmarked linear, Gradient Boosting, and Random Forest models, tuning hyperparameters to cut MAE by 8%",
        "Identified and communicated significant injury factors by building 10+ visualizations using matplotlib and seaborn",
      ],
    },
  ],

  projects: [
    {
      name: "Spotify Streaming Analysis",
      summary: "An end-to-end look at ten years of my own Spotify listening, from raw JSON exports to a database to interactive dashboards.",
      tech: ["Python", "pandas", "PostgreSQL", "Power BI"],
      github: "",
      writeup: "",
    },
    {
      name: "King County Home Sales Analysis",
      summary: "Explored what drives home prices around Seattle and built dashboards to help prospective Airbnb hosts compare neighborhoods.",
      tech: ["Google Sheets", "Tableau", "Tableau Prep"],
      github: "",
      writeup: "",
    },
    {
      name: "Water, Air & Life Expectancy",
      summary: "Studied how environmental quality relates to life expectancy around the world, using WHO data to identify high-risk regions.",
      tech: ["R", "tidyverse", "ggplot2"],
      github: "",
      writeup: "",
    },
  ],

  contact: "",
};
