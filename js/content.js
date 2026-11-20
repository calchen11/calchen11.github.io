// =============================================================
//  SITE CONTENT: edit this file to update the website.
//  Dates use "YYYY-MM" (e.g. "2025-04"); use null for "Present".
//  Leave a link as "" to hide it. Keep the commas between items!
// =============================================================
const CONTENT = {
  name: "Calvin Chen",
  email: "calvinchen521@gmail.com",
  phone: "561-309-9920",
  resume: "assets/CalvinChenResume.pdf",
  github: "https://github.com/calchen11",
  linkedin: "https://www.linkedin.com/in/calvin-chen-",

  location: "Seattle, WA",

  // About Me: the short write-up under your name (placeholder: fill in later)
  // About Me: one string per paragraph
  aboutMe: [
    "Hi, I’m Calvin. I am a Chinese-American first-generation student at the University of Washington studying Informatics. I was born and raised in Lake Worth, Florida and moved to Seattle in 2018.",
    "Growing up I was always interested in the small stats or metrics that came after an event. Whether it was box scores, video game stats, or end-of-year music recaps, I was drawn to these numbers in some way. So transitioning into college, the decision to concentrate in data science came naturally and after just my first data programming class, my pursuit toward an analytical career was confirmed. I’m driven by making people’s lives easier and the continuous growth in skills, technologies, and domains makes working in this space very exciting for me.",
    // "In my free time I ...",
  ],

  // Skills: one row per group
  skills: [
    { title: "Programming", items: ["SQL", "Python", "R"] },
    { title: "Visualization & BI", items: ["Excel", "Power BI", "Tableau", "Matplotlib", "Seaborn"] },
    { title: "Other", items: ["Git/GitHub", "ChatGPT", "Claude", "Microsoft Office Suite", "Google Workspace"] },
    { title: "Soft", items: ["Empathy", "Curiosity + Continuous Learning", "Teamwork/Collaboration", "Communication", "Self-awareness", "Adaptability"] },
    { title: "Interests", items: ["Weightlifting", "Traveling", "Miami Heat", "Beli", "Reading", "Concerts", "Legos"] },
    { title: "Languages", items: ["English (native)", "Taishanese (speaking)"] },
  ],

  experience: [
    {
      title: "Data Analyst Intern",
      org: "Beats by Dre",
      location: "Remote",
      start: "2025-04",
      end: "2025-08",
      bullets: [
        "Uncovered product gaps in the market of wireless speakers by assessing themes across Beats and competitor brands",
        "Executed EDA and sentiment analysis on 4,000+ consumer surveys using Excel, Python (pandas, NumPy), NLP",
        "Highlighted 6 key product features and 7 purchase drivers, mapping spend across price tiers and buying channels",
        "Built an interactive dashboard to drive recommendations for a new product launch, presenting to marketing team",
      ],
    },
    {
      title: "Data Analyst",
      org: "Applied Analytics UW",
      location: "Seattle, WA",
      start: "2024-12",
      end: "2025-05",
      bullets: [
        "Forecasted NBA player return-to-play timelines by modeling recovery times across 6,500+ historical injury logs",
        "Cleaned injury data and engineered features with pandas and NumPy to prepare data for modeling",
        "Cut prediction error (MAE) by 8% by benchmarking linear, Random Forest, and Gradient Boosting models",
        "Revealed significant injury factors and communicated findings with 10+ Matplotlib and Seaborn visualizations",
      ],
    },
  ],

  projects: [
    {
      name: "Spotify Streaming Analysis",
      summary: "An end-to-end look at ten years of my own Spotify listening, from raw exports to database to interactive dashboards.",
      tech: ["Python", "pandas", "PostgreSQL", "Power BI"],
      github: "",
      writeup: "",
    },
    {
      name: "King County Home Sales Analysis",
      summary: "Explored what drives home prices around Seattle and built dashboards to help prospective Airbnb hosts compare neighborhoods.",
      tech: ["Google Sheets", "Tableau"],
      github: "",
      writeup: "",
    },
    {
      name: "Water, Air & Life Expectancy Analysis",
      summary: "Examined how environmental quality relates to life expectancy around the world, identifying high-risk regions for intervention efforts",
      tech: ["R", "tidyverse", "ggplot2"],
      github: "",
      writeup: "",
    },
  ],

  contact: "",
};
