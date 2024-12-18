import React from "react";

interface TimelineEventProps {
  title: string;
  description: string[]; 
  position: "left" | "right";
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  title,
  description,
  position,
}) => {
  return (
    <div
      className={`timelineEvent ${
        position === "left" ? "md:text-left" : "md:text-right"
      } md:${position} text-right`} /* Right aligned by default on mobile */
    >
      <div className="content">
        <h3>{title}</h3>
        <ul className="list-disc ml-5">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineEvent;
