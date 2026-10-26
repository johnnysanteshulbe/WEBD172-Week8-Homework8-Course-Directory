import React, { useState, useEffect } from "react";
import CourseCard from "./components/CourseCard";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/courses")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Course Directory</h1>
      </header>
      <main>
        {loading ? (
          <p>Loading courses...</p>
        ) : (
          <div className="course-list">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                department={course.department}
                units={course.units}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
