import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Page404 from "./Pages/Page404/Page404";
import SignUp from "./Pages/Signup/SignUp";
import Login from "./Pages/Login/Login";
import Courses from "./Pages/Courses/Courses";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import Cookies from "js-cookie";
import SingleCourse from "./Pages/SingleCoursePage/SingleCourse";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { db } from "./utils/firebaseConfig";
import GuestHome from "./Pages/GuestHome/GuestHome";

function App() {
  const courseData = [
    {
      courseName: "MERN Stack",
      instructor: "Sir Sufiyan",
      price: "$10",
      isFeatured: true,
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp",
      courseContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      courseName: "React JS",
      instructor: "Sir Ali",
      price: "$30",
      isFeatured: true,
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp",
      courseContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      courseName: "ES6",
      instructor: "Sir Sufiyan",
      price: "$11",
      isFeatured: true,
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp",
      courseContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      courseName: "NEXT JS",
      instructor: "Sir John",
      price: "$41",
      isFeatured: false,
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp",
      courseContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      courseName: "NEXT JS",
      instructor: "Sir John",
      price: "$41",
      isFeatured: true,
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp",
      courseContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      courseName: "Node JS",
      instructor: "Sir Rizwan",
      price: "$41",
      isFeatured: false,
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp",
      courseContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      courseName: "UI UX",
      instructor: "Ma'am Hania",
      price: "$41",
      isFeatured: true,
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-logo-1889531-1597591.png?f=webp",
      courseContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  const [userRole, setUserRole] = useState(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {userRole === "" || userRole === null ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/single-course" element={<SingleCourse />} />
            <Route path="*" element={<Page404 />} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
