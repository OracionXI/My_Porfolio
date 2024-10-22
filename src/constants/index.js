//Data folder

import
  {
    aws,
    backend,
    carrent,
    creator,
    docker,
    fb,
    git,
    github,
    javascript,
    jobit,
    kubernetes,
    linkedin,
    mobile,
    mongodb,
    nodejs,
    post,
    python,
    reactjs,
    redux,
    sql,
    starbucks,
    tailwind,
    tripguide,
    typescript,
    web,
    yt
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const platform = [
    {
      id: 1,
      title: 'github',
      icon: github,
      link: "https://github.com/OracionXI"
    },
    {
      id: 2,
      title: 'linkedin',
      icon: linkedin,
      link: "https://www.linkedin.com/in/tiham-shafi-074565247/"
    },
    {
      id: 2,
      title: 'youtube',
      icon: yt,
      link: "#"
    },
    {
      id: 2,
      title: 'facebook',
      icon: fb,
      link: "https://www.facebook.com/profile.php?id=100007281077047"
    }
  ]
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Python Expertise",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Flutter",
      icon: sql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostgreSQL",
      icon: post,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "aws",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer",
      company_name: "Sysonex",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2023 - June 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "UrbanNest",
      description:
        "A real estate web-based platform that allows users to search, book, and rent houses or flats from various providers, providing a convenient and efficient solution for property rental needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "white-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/OracionXI/UrbanNest",
    },
    {
      name: "Interior Plan Filtering",
      description:
        "An AI summarizer web app powered by GPT that allows users to quickly generate concise summaries from long texts, providing a fast and efficient solution for information processing needs.",
      tags: [
        {
          name: "React",
          color: "white-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/OracionXI/Floor_Plan_Filtering",
    },
    {
      name: "Habit Tracker App",
      description:
        "A habit tracker app that helps users set, monitor, and achieve their goals by tracking daily routines and progress, providing a convenient and effective solution for personal productivity needs.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "socket",
          color: "white-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/OracionXI/Habit_Tracker",
    },
  ];
  
  export { experiences, platform, projects, services, technologies, testimonials };

