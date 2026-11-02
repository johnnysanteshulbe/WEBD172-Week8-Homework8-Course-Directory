import React, { useState, useEffect } from "react";
import CourseCard from "./components/CourseCard.jsx";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      try {
        const response = await fetch("http://localhost:3000/api/courses");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCourses(data);

      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    getCourses();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (courses.length > 0) {
      setLoading(false);
    }
  }, [courses]);

  return (
    <div className="App">
      <header>
        <h1>Course Directory</h1>
      </header>
      <main>
        {loading ? (
          <p>courses loaded from our Express API.</p>
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
