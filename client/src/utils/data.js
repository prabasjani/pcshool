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

// MongoDB
import use from "../assets/Images/MongoDB/use.png";
import compoperator from "../assets/Images/MongoDB/compoperator.png";
import createcol from "../assets/Images/MongoDB/createcol.png";
import datatypes from "../assets/Images/MongoDB/datatypes.png";
import dropdb from "../assets/Images/MongoDB/dropdb.png";
import find from "../assets/Images/MongoDB/find.png";
import findmethod from "../assets/Images/MongoDB/findmethod.png";
import index from "../assets/Images/MongoDB/index.png";
import insertmany from "../assets/Images/MongoDB/insertmany.png";
import insertoneex from "../assets/Images/MongoDB/insertoneex.png";
import limit from "../assets/Images/MongoDB/limit.png";
import logical from "../assets/Images/MongoDB/logical.png";
import show from "../assets/Images/MongoDB/show.png";
import showcols from "../assets/Images/MongoDB/showcols.png";
import sort from "../assets/Images/MongoDB/sort.png";
import sortlimit from "../assets/Images/MongoDB/sortlimit.png";
import updateone from "../assets/Images/MongoDB/updateone.png";
import updatemany from "../assets/Images/MongoDB/updatemany.png";

// Git and GitHub
import gitinit from "../assets/Images/Git/gitinit.png";
import gitadd from "../assets/Images/Git/gitadd.png";
import gitcommit from "../assets/Images/Git/gitcommit.png";
import gitpush from "../assets/Images/Git/gitpush.png";
import addremote from "../assets/Images/Git/addremote.png";
import remoteremove from "../assets/Images/Git/remoteremove.png";
import remotelist from "../assets/Images/Git/remotelist.png";
import clone from "../assets/Images/Git/clone.png";
import log from "../assets/Images/Git/log.png";
import status from "../assets/Images/Git/status.png";
import branch from "../assets/Images/Git/branch.png";
import newbranch from "../assets/Images/Git/newbranch.png";
import switchbranch from "../assets/Images/Git/switchbranch.png";
import diffbranch from "../assets/Images/Git/diffbranch.png";
import deletebranch from "../assets/Images/Git/deletebranch.png";

export const courses = [
  {
    course: "HTML",
    logo: html,
    desc: "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.",
    topics: [],
  },
  {
    course: "CSS",
    logo: css,
    desc: "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
    topics: [],
  },
  {
    course: "JavaScript",
    logo: js,
    desc: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.",
    topics: [],
  },
  {
    course: "TypeScript",
    logo: ts,
    desc: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.",
    topics: [],
  },
  {
    course: "ReactJS",
    logo: react,
    desc: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
    topics: [],
  },
  {
    course: "NodeJS",
    logo: node,
    desc: "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.",
    topics: [],
  },
  {
    course: "ExpressJS",
    logo: express,
    desc: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
    topics: [],
  },
  {
    course: "MongoDB",
    logo: mongodb,
    desc: "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.",
    topics: [
      {
        topic: "DataBase",
        desc: "Database is a group of Collections. Create and Switch Database",
        codeImg: use,
      },
      {
        topic: "Delete DataBase",
        desc: "Delete the entire data including all Collections and Documents",
        codeImg: dropdb,
      },
      {
        topic: "Show all DataBase",
        desc: "Showing your all DataBases",
        codeImg: show,
      },
      {
        topic: "Collections",
        desc: "Collections is a group of Documents.",
        codeImg: createcol,
      },
      {
        topic: "Show all Collections",
        desc: "Showing your all Collections",
        codeImg: showcols,
      },
      {
        topic: "Insert One Data",
        desc: "InsertOne is adding the single document to the current Collection.  One {} having the single document but multiple data’s that was Key value pair.Multiple data’s(key value pair) seperated by ,",
        codeImg: insertoneex,
      },
      {
        topic: "Insert Many Data",
        desc: "InsertMany is adding Multiple documents to the current Collection.  Using [ ] to adding multiple document {}, {} seperated by ,",
        codeImg: insertmany,
      },
      {
        topic: "DataTypes",
        desc: "String = Sequence of charactors inside the double or single quotation, Numbers = They are two types of number. 1.Integer, 2.Double. These two are commonly called as number data type, Booleans = Some values are in either true / false , Null = null means there is no value ",
        codeImg: datatypes,
      },
      {
        topic: "Find Method",
        desc: "To find the particular / specific document in the current database. ",
        codeImg: find,
      },
      {
        topic: "Find Method with Projection",
        desc: "To find specific with the Projection. key with boolean value to display the data",
        codeImg: findmethod,
      },
      {
        topic: "Sort Method",
        desc: "String order value is 1 Alphabetical order or -1 Reverse alphabetical order,incase number order value is 1 Accending order or -1 Decending order",
        codeImg: sort,
      },
      {
        topic: "Limit Method",
        desc: "How many Documents want to show in DataBase.",
        codeImg: limit,
      },
      {
        topic: "Sort Method with Limit",
        desc: "We can use sort and limit at the time.",
        codeImg: sortlimit,
      },
      {
        topic: "Update One Document",
        desc: "We can Update or Modification with using filter and update createria. Filter is an a selection creteria which document want to update, to filter using key value pair. Update is an a modification creteria. Select with filter and update the key value pair to using set /unset",
        codeImg: updateone,
      },
      {
        topic: "Update Many Document",
        desc: "Filter was empty and then update all the documents . It also the same set / unset method.",
        codeImg: updatemany,
      },
      {
        topic: "Comparison Operator",
        desc: "Comparison Operators are used to data, based on the value comparisons. $eq,$ne,$lt,$lte,$gt,$gte . Compare the values of the key and find the matches of the datas are shown",
        codeImg: compoperator,
      },
      {
        topic: "Logical Operator",
        desc: "Logical Operators are used to data, Condition based operation  $and,$or,$not,",
        codeImg: logical,
      },
    ],
  },
  {
    course: "BootStrap",
    logo: bootstrap,
    desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
    topics: [],
  },
  {
    course: "TailWindCSS",
    logo: tailwind,
    desc: "Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.",
    topics: [],
  },

  // Git and GitHub
  {
    course: "GitHub",
    logo: git,
    desc: "Git is a distributed version control system that tracks versions of files. It is often used to control source code by programmers collaboratively developing software.GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.",
    topics: [
      {
        topic: "Git init",
        desc: "The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository.",
        codeImg: gitinit,
      },
      {
        topic: "Git add",
        desc: "The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit.",
        codeImg: gitadd,
      },
      {
        topic: "Git commit ",
        desc: "Commits can be thought of as snapshots or milestones along the timeline of a Git project. Commits are created with the git commit command to capture the state of a project at that point in time. Git Snapshots are always committed to the local repository.",
        codeImg: gitcommit,
      },
      {
        topic: "Git remote",
        desc: "To check Remote Link from Github. The git remote command is a management tool for your record of remote repositories.",
        codeImg: remotelist,
      },
      {
        topic: "Git remote add ",
        desc: "To add the Remote Link from Github. This is useful for developers creating a local copy of a central repository, since it provides an easy way to pull upstream changes or publish local commits.",
        codeImg: addremote,
      },
      {
        topic: "Git push ",
        desc: "The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.",
        codeImg: gitpush,
      },
      {
        topic: "Git clone",
        desc: "git clone is primarily used to point to an existing repo and make a clone or copy of that repo at in a new directory, at another location. ",
        codeImg: clone,
      },
      {
        topic: "Remove Remote",
        desc: "Use the git remote rm command to remove a remote URL from your repository.",
        codeImg: remoteremove,
      },
      {
        topic: "Git Branch",
        desc: "In Git, branches are a part of your everyday development process. Git branches are effectively a pointer to a snapshot of your changes.",
        codeImg: branch,
      },
      {
        topic: "Git Branch Creation",
        desc: "Specifying -b causes a new branch to be created as if git-branch[1] were called and then checked out. In this case you can use the --track or --no-track options, which will be passed to git branch.",
        codeImg: newbranch,
      },
      {
        topic: "Git Branch Switch",
        desc: "There are two ways to switch branches in Git: git checkout - used to switch between different branches or commits in a Git repository, allowing you to navigate and work on different project versions.",
        codeImg: switchbranch,
      },
      {
        topic: "Git Branch Difference",
        desc: "The git diff command helps you see, compare, and understand changes in your project. You can use it in many different situations.",
        codeImg: diffbranch,
      },
      {
        topic: "Git Branch Delete",
        desc: "If needed, use the git switch or git checkout command to move off the branch you wish to delete. Then, issue the git branch --delete <branchname> command to delete the local branch. Next, run the git branch -a command to verify the local Git branch has been deleted.",
        codeImg: deletebranch,
      },
      {
        topic: "Git Status",
        desc: "The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git. ",
        codeImg: status,
      },
      {
        topic: "Git Log",
        desc: "The git log command displays committed snapshots. It lets you list the project history, filter it, and search for specific changes. ",
        codeImg: log,
      },
    ],
  },
  {
    course: "SpokenEnglish",
    logo: english,
    desc: "Speaking practice to help you learn useful language for everyday communication. Situations include meeting new people, checking understanding and making suggestions.",
    topics: [],
  },
];
