import React from "react";

function CourseCard({ title, department, units }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>
        <strong>Department:</strong> {department}
      </p>
      <p>
        <strong>Units:</strong> {units}
      </p>
    </div>
  );
}

export default CourseCard;
