import React from "react";
import TimelineEvent from "./TimelineEvent";

interface Event {
  title: string;
  description: string;
  position: "left" | "right";
}

const Timeline: React.FC = () => {
  const events: Event[] = [
    { title: "Robert Bosch", description: "Worked on Project A in 2022Worked on Project A in 2022", position: "left" },
    { title: "Project B", description: "Completed Project B in 2023", position: "right" },
    { title: "Project C", description: "Contributed to Project C in 2024", position: "left" },
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
