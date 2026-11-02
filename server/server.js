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
    title: "Full Stack JavaScript",
    department: "WEBD",
    units: 3,
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    department: "WEBD",
    units: 3,
  },
  {
    id: 3,
    title: "Introduction to Databases",
    department: "WEBD",
    units: 3,
  },
  {
    id: 4,
    title: "User Experience Design",
    department: "WEBD",
    units: 3,
  },
  {
    id: 5,
    title: "Web Accesssibility",
    department: "WEBD",
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
