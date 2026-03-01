const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const journalEntries = [
  {
    id: 1,
    date: "Feb 22, 2026",
    title: "debug.log",
    link: "https://www.notion.so/debug-log-b618ea8a859d44ee903ec6d788abb29c?source=copy_link",
    tag: "Development • Life • Growth",
  },
  {
    id: 2,
    date: "Feb 17, 2026",
    title: "Midnight-builds",
    link: "https://www.notion.so/midnight-builds-d0d892d6a50246a0a308ee7bd7099a81?source=copy_link",
    tag: "Life • Philosophy",
  },
  {
    id: 3,
    date: "Feb 12, 2026",
    title: "version-history",
    link: "https://www.notion.so/version-history-d2509782c5094635a865a02a11b6fbd1?source=copy_link",
    tag: "Growth • Systems",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "tailwindCSS"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart", "BLoC", "Provider"],
  },
  {
    category: "Backend",
    items: ["Go", "PHP", "Node.js", "FastAPI"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "Firebase", "Supabase"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#0a8064ff",
    link: "https://github.com/SakinaKheraj",
  },
  {
    id: 2,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#103076ff",
    link: "https://x.com/Sakina132",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#571078ff",
    link: "www.linkedin.com/in/sakinakheraj",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];


export {
  navLinks,
  navIcons,
  dockApps,
  journalEntries,
  techStack,
  socials,
  photosLinks,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "SeekrAI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "SeekrAI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "SeekrAI is a **structured AI chatbot** built around intentional and focused interaction.",
            "Each user is allowed **10 sessions per day**, promoting meaningful and distraction-free conversations.",
            "The application handles **session tracking, controlled access logic, and smooth conversational flow** seamlessly.",
            "Built with **Flutter, Firebase, Dart, Gemini API Integration, Pydantic Models, and FastAPI** for a scalable and responsive experience."
          ],
        },
        // {
        //   id: 2,
        //   name: "seekrai.com",
        //   icon: "/images/safari.png",
        //   kind: "file",
        //   fileType: "url",
        //   href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
        //   position: "top-10 right-20",
        // },
        {
          id: 4,
          name: "seekrai.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/seekrai.png",
        },
        {
          id: 5,
          name: "seekrai.git",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/SakinaKheraj/Seekr",
          position: "top-34 left-81",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "InvenTrack",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "InvenTrack.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "InvenTrack is a smart AI-powered pantry manager that helps you **track groceries, monitor expiry dates, and reduce food waste effortlessly**.",
            "It allows you to **add, edit, consume, and manage items with photos, expiry alerts, and low-stock warnings** for complete inventory control.",
            "The built-in **AI Kitchen (powered by Google Gemini)** generates full recipes using exactly what’s available in your pantry.",
            "Built with **Flutter, Dart, Provider, SQLite (sqflite), Google Gemini API, fl_chart, and flutter_local_notifications**, it delivers a smooth, modern, and cross-platform experience."
          ],
        },
        // {
        //   id: 2,
        //   name: "inventrack.com",
        //   icon: "/images/safari.png",
        //   kind: "file",
        //   fileType: "url",
        //   // href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
        //   position: "top-10 left-20",
        // },
        {
          id: 4,
          name: "inventrack.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-12 right-94",
          imageUrl: "/images/inventrack.png",
        },
        {
          id: 5,
          name: "InvenTrack.git",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/SakinaKheraj/InvenTrack",
          position: "top-51 left-30",
        },
      ],
    },

    // ▶ Project 3
    // {
    //   id: 7,
    //   name: "Food Delivery App",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-10 left-80",
    //   windowPosition: "top-[33vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "Food Delivery App Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 left-10",
    //       description: [
    //         "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
    //         "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
    //         "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
    //         "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "food-delivery-app.com",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
    //       position: "top-10 right-20",
    //     },
    //     {
    //       id: 4,
    //       name: "food-delivery-app.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 right-80",
    //       imageUrl: "/images/project-3.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Design.fig",
    //       icon: "/images/plain.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://google.com",
    //       position: "top-60 right-20",
    //     },
    //   ],
    // },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Expertise.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      description: [
        "I specialize in building **high-performance mobile applications** using **Flutter and Dart**.",
        "On the web, I craft **interactive and responsive interfaces** with **React**.",
        "In the backend, I leverage **Go, Node.js, FastAPI, and PHP** to build scalable and robust systems.",
        "I work with diverse databases including **PostgreSQL, MySQL, Firebase, and Supabase** for optimized data management."
      ],
    },
    {
      id: 2,
      name: "Philosophy.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-28 right-56",
      description: [
        "I believe that **clean code** is just as important as a beautiful user interface.",
        "My goal is to create products that are not only functional but also **delightful to use**.",
        "I’m constantly learning and exploring new technologies to stay at the **forefront of modern development**."
      ],
    },
    // {
    //   id: 3,
    //   name: "Flutter_Vision.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/flutter-glass.png", // We will move the generated image here
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-50 left-5",
      subtitle: "Meet the Developer Behind the Code",
      description: [
        "Hey! I’m **Sakina** 👋, a developer who enjoys building sleek, interactive applications that solve real-world problems.",
        "I specialize in **Flutter, React, and Backend architecture**—crafting smooth, fast, and delightful experiences.",
        "I’m big on **clean UI, good UX**, and writing code that is as readable as it is efficient.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, exploring new AI tools (like Go and FastAPI), or building side projects that challenge my creativity.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Secret_Note.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-10",
      description: [
        "You caught me! 🕵️‍♂️",
        "If you're looking for someone with this much attention to detail (who even checks the trash?), let's chat.",
        "I believe that every part of a product matters—even the ones most people never see.",
        "Let's build something great together!",
      ],
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  text: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  image: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };