import React from "react";

interface TimelineEventProps {
  title: string;
  description: string;
  position: "left" | "right";
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  title,
  description,
  position,
}) => {
  return (
    <div
      className={`timelineEvent ${position === "left" ? "left" : "right"}`}
    >
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;
