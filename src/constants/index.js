import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  mviyo,
  ttllogo,
  safi,
  safizen,
  zimticket,
  ttl,
  thecypherhub,
  aws,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: docker,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "CSS 3",
    icon: css,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Mviyo Technologies",
    icon: mviyo,
    iconBg: "#383E56",
    date: "June 2024 - June 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Mobile application development using React Native. Mobile apps that l have contributed to include ZimTickets, Safi, and Safizen",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Integrating with RESTful APIs, third-party libraries, and services like stripe for payment processing.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Collaborated on Safi a mobile application that is used by people to book cleaning services.",
      "Collaborated on Safizen a mobile application that is used by people who offer cleaning services to find clients who uses Safi.",
      "Collaborated on ZimTicket a mobile app that is used for accessing a range of events in Zimbabwe from different event orginizers. The app facilitates the buying of tickets for events.",
    ],
  },
  {
    title: "Next.js Developer - Remote",
    company_name: "The Transform Legacy",
    icon: ttllogo,
    iconBg: "#E6DEDD",
    date: "March 2025 - present",
    points: [
      "Responsible for building task management application that they use internally to manage their projects.",
      "Collaborating with with other developers to produce high quality code.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Deploying the application on Vercel, and managing different environments.",
      "Implementing robust authentication and authorization system. Using session based authentication and role based access control.",
      "Integrating the application with AWS services, like S3 for file storage, RDS for database",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Tanya is a talented developer who is always willing to go the extra mile to ensure that the project is completed successfully.",
    name: "Tatenda Kodzai",
    designation: "Attachment Supervisor",
    company: "Mviyo Technologies",
  },
  {
    testimonial:
      "Tanya is a great team player who I worked with him when developing Safi and Safizen mobile applications.",
    name: "Methuseli Mfema",
    designation: "Core worker",
    company: "Mviyo Technologies",
  },
  {
    testimonial:
      "I mentored Tanya and l was impressed by his ability to learn DevOps principles focusing on AWS and he quickly apply them to solve real-world problems.",
    name: "Wyne Chitambara",
    designation: "Core worker",
    company: "Mviyo Technologies",
  },
];

const projects = [
  {
    name: "Safi mobile app",
    description:
      "Collaborated on Safi a mobile application that is used by people to book cleaning services.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "django rest framework",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: safi,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.mviyo.safi",
  },
  {
    name: "Safizen mobile app",
    description:
      "Collaborated on Safizen a mobile application that is used by people who offer cleaning services to find clients who uses Safi.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "django rest framework",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: safizen,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.mviyo.safi",
  },
  {
    name: "ZimTickets mobile app",
    description:
      "Collaborated on ZimTicket a mobile app that is used for accessing a range of events in Zimbabwe from different event orginizers. The app facilitates the buying of tickets for events.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
    ],
    image: zimticket,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.mviyotechnologies.zimtickets",
  },
  {
    name: "TTL web appp",
    description:
      "Built a task management application that is used by The Transform Legacy to manage their projects and produces reports.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
    ],
    image: ttl,
    source_code_link: "https://ttl-web-client.vercel.app/",
  },
  {
    name: "The cypher hub",
    description:
      "I built my own bloggging platform that l use to share my thoughts and experiences in the tech industry. I publish weekly articles and email newsletters.",
    tags: [
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: thecypherhub,
    source_code_link: "https://www.thecypherhub.tech/",
  },
];

export { services, technologies, experiences, testimonials, projects };
