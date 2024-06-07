// Course images
import html from "../assets/Images/Courses/html.png";
import css from "../assets/Images/Courses/css.png";
import js from "../assets/Images/Courses/js.png";
import ts from "../assets/Images/Courses/ts.png";
import react from "../assets/Images/Courses/react.png";
import node from "../assets/Images/Courses/node.png";
import express from "../assets/Images/Courses/express.png";
import mongodb from "../assets/Images/Courses/mongodb.png";
import bootstrap from "../assets/Images/Courses/bootstrap.png";
import tailwind from "../assets/Images/Courses/tailwind.png";
import git from "../assets/Images/Courses/git.png";
import english from "../assets/Images/Courses/english.png";

import basics from "../assets/Images/TypeScript/basics.png";

export const courses = [
  {
    course: "HTML",
    logo: html,
    desc: "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.",
  },
  {
    course: "CSS",
    logo: css,
    desc: "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
  },
  {
    course: "JavaScript",
    logo: js,
    desc: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.",
  },
  {
    course: "TypeScript",
    logo: ts,
    desc: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.",
  },
  {
    course: "ReactJS",
    logo: react,
    desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  },
  {
    course: "NodeJS",
    logo: node,
    desc: "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.",
  },
  {
    course: "ExpressJS",
    logo: express,
    desc: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
  },
  {
    course: "MongoDB",
    logo: mongodb,
    desc: "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.",
  },
  {
    course: "BootStrap",
    logo: bootstrap,
    desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
  },
  {
    course: "TailWindCSS",
    logo: tailwind,
    desc: "Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.",
  },
  {
    course: "GitHub",
    logo: git,
    desc: "Git is a distributed version control system that tracks versions of files. It is often used to control source code by programmers collaboratively developing software.GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.",
  },
  {
    course: "SpokenEnglish",
    logo: english,
    desc: "Speaking practice to help you learn useful language for everyday communication. Situations include meeting new people, checking understanding and making suggestions.",
    topics: [
      {
        topic: "TypeScript Variables",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quasi dolorum fugit doloribus earum aperiam ad nisi quae voluptatem hic iure dolore repellat, enim perspiciatis eos quo magni, eum deleniti.",
        codeImg: basics,
      },
      {
        topic: "TypeScript Variables",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quasi dolorum fugit doloribus earum aperiam ad nisi quae voluptatem hic iure dolore repellat, enim perspiciatis eos quo magni, eum deleniti.",
        codeImg: basics,
      },
      {
        topic: "TypeScript Variables",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quasi dolorum fugit doloribus earum aperiam ad nisi quae voluptatem hic iure dolore repellat, enim perspiciatis eos quo magni, eum deleniti.",
        codeImg: basics,
      },
    ],
  },
];
