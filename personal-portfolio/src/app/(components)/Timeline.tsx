import React from "react";
import TimelineEvent from "./TimelineEvent";

interface Event {
  title: string;
  description: string[]; // Change description to an array of strings
  position: "left" | "right";
}

const Timeline: React.FC = () => {
  const events: Event[] = [
    {
      title: "Robert Bosch - Innovation Analyst",
      description: [
        "Proposed a USSD-based verification system to reduce revenue loss from counterfeit power tools; tested with 30 artisans and 5 Bosch Power Tools stakeholders.",
        "Led technical discovery with 3 law firms across North and South Africa through 6 prototyping sessions, identifying potential to reduce legal research costs by 50%.",
        "Developed system requirements and user stories for an AI-powered legal research system, collaborating with 20 legal professionals and business stakeholders.",
        "Designed and delivered generative AI training to a cross-functional team of 33 colleagues, focusing on practical implementation strategies for various Bosch business units.",
      ],
      position: "left",
    },
    {
      title: "Data Trace Int. - Software Engineer",
      description: [
        "Led design and development of the KenVIP responsive web portal aimed at digitizing national vaccination coverage records and enhancing decision-making within the Ministry of Health.",
        "Consolidated vaccination coverage data from 6 Ministry of Health sources, employing ETL tools like NiFi for cleaning and PostgreSQL for data storage.",
        "Developed 13 national vaccine coverage dashboards using SQL and Superset, enabling data-driven insights.",
        "Built a comprehensive data pipeline to streamline data processing and storage, improving data accuracy and accessibility.",
      ],
      position: "right",
    },
    {
      title: "Ingressive For Good - Apprentice",
      description: [
        "Awarded a scholarship by Ingressive for Good, selected as 1 of 1,000 recipients from 19,500 African applicants.",
        "Completed a month-long virtual training in UI/UX design, delivering milestone projects including:",
        "An e-commerce website prototype emphasizing user-centric design and functionality.",
        "A health and wellness app prototype prioritizing user experience and accessibility.",
      ],
      position: "left",
    },
  ];

  return (
    <div className="timelineContainer p-8 border border-red-400">
      <h2 className="timelineTitle">Past Work</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            title={event.title}
            description={event.description}
            position={event.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
