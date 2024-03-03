import Cookies from "js-cookie";

export const courseData = [
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

export const featuredCourses = courseData.filter((course) => {
  if (course.isFeatured == true) {
    return true;
  }
});

// const userDataString = Cookies.get("user");
// export const userData = JSON.parse(userDataString);
