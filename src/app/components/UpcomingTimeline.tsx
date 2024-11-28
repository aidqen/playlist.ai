import React from "react";
import { format } from "date-fns";

const Timeline = ({ instances }) => {
  const now = Date.now();
  const startOfRange = now;
  const endOfRange = now + 4 * 60 * 60 * 1000;

  const instancesInRange = instances.filter(
    (instance) => instance.timestamp >= startOfRange && instance.timestamp < endOfRange
  );

  const calculatePosition = (timestamp, startOfRange, endOfRange) => {
    const totalRange = endOfRange - startOfRange;
    const position = ((timestamp - startOfRange) / totalRange) * 100;
    return `${position}%`; // Left position as percentage
  };

  const calculateWidth = (start, finish, startOfRange, endOfRange) => {
    const totalRange = endOfRange - startOfRange;
    const duration = ((finish - start) / totalRange) * 100;
    return `${duration}%`; // Width as percentage
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Time Labels */}
      <div className="flex justify-between text-xs text-gray-500 mb-2">
        <span>{format(startOfRange, "h a")}</span>
        <span>{format(startOfRange + 1 * 60 * 60 * 1000, "h a")}</span>
        <span>{format(startOfRange + 2 * 60 * 60 * 1000, "h a")}</span>
        <span>{format(startOfRange + 3 * 60 * 60 * 1000, "h a")}</span>
        <span>{format(endOfRange, "h a")}</span>
      </div>

      {/* Timeline Bar */}
      <div className="relative bg-gray-200 h-8 rounded-md overflow-hidden">
        {instancesInRange.map((instance) => {
          const position = calculatePosition(
            instance.timestamp,
            startOfRange,
            endOfRange
          );
          const width = calculateWidth(
            instance.timestamp,
            instance.finishTimestamp,
            startOfRange,
            endOfRange
          );
          return (
            <div
              key={instance.id}
              className="absolute h-full rounded-md"
              style={{
                left: position,
                width: width,
                backgroundColor: instance.bg,
              }}
              title={instance.title}
            >
              <span className="sr-only">{instance.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
