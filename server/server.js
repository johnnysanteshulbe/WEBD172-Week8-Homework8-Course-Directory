import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Enable CORS so the React client can communicate with the server
app.use(cors());

// Hard-coded array containing at least four course objects
const courses = [
  {
    id: 1,
    title: "Web Development 172",
    department: "Web Development",
    units: 3,
  },
  {
    id: 2,
    title: "Web Development 171",
    department: "Web Development",
    units: 3,
  },
  {
    id: 3,
    title: "Advanced JavaScript 164",
    department: "Web Development",
    units: 3,
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    department: "Graphic Design",
    units: 3,
  },
];

// GET route at /api/courses returning JSON
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
