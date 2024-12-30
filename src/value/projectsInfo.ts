import dolla from "@/assets/images/projects-screenshot/dolla-web.png";
import portfolio from "@/assets/images/projects-screenshot/portfolio-web.png";
import explorix from "@/assets/images/projects-screenshot/explorix-web.png";
import internetAbad from "@/assets/images/projects-screenshot/internetAbad.png";
import amazon from "@/assets/images/projects-screenshot/amazon-web.png";
import aa from "@/assets/images/projects-screenshot/aa-web.png";
import factnameh from "@/assets/images/projects-screenshot/factnameh.png";
import junePortfolio from "@/assets/images/projects-screenshot/junePortfolio.png";

export type ProjectInfo = {
  img: string;
  title: string;
  objectives: string;
  description: string;
  framework: string[];
  styling: string[];
  others: string[];
  link: string;
  slug: string;
  sourceCode: string;
  isWorkProject: boolean;
  features: string[];
  role: string[];
  isPersonal: boolean;
};

export const projectInfos: ProjectInfo[] = [
  {
    slug: "advocacyassembly",
    img: aa.src,
    title: "Advocacy Assembly",
    objectives: "",
    description:
      "Advocacy Assembly is a free online training platform dedicated to empowering human rights activists, campaigners, and journalists worldwide. Since its launch in 2015, it has provided multimedia courses taught by professionals from leading organizations, covering topics such as advocacy, digital rights, data science, and digital security. ",
    framework: ["Typescript", "NextJs"],
    styling: ["Emotion"],
    others: ["GraphQl"],
    link: "https://advocacyassembly.org/en/",
    sourceCode: "",
    features: [
      "Multilingual Courses: Courses are available in various languages to cater to a global audience. ",
      "User-Centric Design: A responsive, intuitive interface optimized for both desktop and mobile users to enhance user engagement and retention.",
      "Expert Instructors: Courses are taught by professionals from leading organizations worldwide, providing practical advocacy skills.",
      "Self-Paced Learning: Participants can complete courses at their own pace, with each course designed to take up to 90 minutes.",
    ],
    isWorkProject: true,
    role: [
      "I contributed to implementing a responsive and intuitive user interface, ensuring seamless functionality on both desktop and mobile platforms. My responsibilities included developing dynamic UI components, integrating the frontend with backend APIs for real-time data synchronization, and optimizing performance to enhance user engagement and retention.",
      "I implemented how data structured of quizzes and how to calculate the points with more than 10 different types of questions",
    ],
    isPersonal: false,
  },
  {
    slug: "factnamehBrowserExtension",
    img: factnameh.src,
    title: "Factnameh Browser Extension",
    objectives: "",
    description:
      "Factnameh Browser Extension is  a fact-checking website dedicated to verifying statements and claims made by Iranian officials, personalities, and media since 2016.",
    framework: ["Typescript", "NextJs"],
    styling: ["Emotion"],
    others: ["graphQL"],
    role: [
      "I contributed to implementing a responsive and intuitive user interface, ensuring seamless functionality on both desktop and mobile platforms. My responsibilities included developing dynamic UI components, integrating the frontend with backend APIs for real-time data synchronization",
    ],
    link: "https://chromewebstore.google.com/detail/%D8%A7%D9%81%D8%B2%D9%88%D9%86%D9%87-%D9%81%DA%A9%D8%AA%E2%80%8C%D9%86%D8%A7%D9%85%D9%87/mjbablipiefhfeaiddmljgaoeeodlapn",
    sourceCode: "",
    isWorkProject: true,
    features: [
      "Fact-Checking Integration: While browsing, users can highlight any statement or claim and use the extension to search Factnameh's database for verification, determining its accuracy.",
      "User-Friendly Interface: Designed for ease of use, the extension allows quick access to Factnameh's fact-checking resources directly from the browser.",
    ],
    isPersonal: false,
  },
  {
    slug: "internetabad",
    img: internetAbad.src,
    title: "Internet Abad",
    styling: ["Emotion"],
    objectives: "",
    description:
      "InternetAbad is a project by Factnameh that uses a data-driven approach to analyze and verify processes and claims related to Iran's digital space. ",
    framework: ["Typescript", "NextJs"],
    role: [
      "I contributed to implementing a responsive and intuitive user interface, ensuring seamless functionality on both desktop and mobile platforms. My responsibilities included developing dynamic UI components, integrating the frontend with backend APIs for real-time data synchronization",
      "My biggest contribution in this project was be able to implement the interactive network graph",
    ],
    others: ["graphQL"],

    link: "https://internetabad.factnameh.com/fa",
    sourceCode: "",
    isWorkProject: true,
    features: [
      "Data-Driven Analysis:Provides insights and analysis based on data to better understand the state of the internet and information technology in Iran.",
      "Fact-Checking:Verifies the accuracy of claims and information related to Iran’s digital landscape.",
      "Profiles of Influencers:Features detailed profiles of key figures in Iran’s IT and digital governance sectors, such as Isa Zarepour, the Minister of Communications and Information Technology.",
    ],
    isPersonal: false,
  },

  {
    img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Banner.jpg",
    title: "Earth Store",
    objectives: "Shopping website",
    description: "Earth Store is a website that sell arts",
    framework: ["Typescript", "NextJs", "Django"],
    styling: ["Emotion"],
    others: ["graphQL", "firebase"],

    link: "https://earth.projects.iminb2b.com/",
    slug: "earth",
    sourceCode: "https://github.com/iminb2b/earth-store",
    isWorkProject: false,
    features: ["Filtering", "Responsive design"],
    role: [
      "I contributed to implementing a responsive and intuitive user interface, ensuring seamless functionality on both desktop and mobile platforms. My responsibilities included developing dynamic UI components, integrating the frontend with backend APIs for real-time data synchronization",
    ],
    isPersonal: true,
  },
  {
    slug: "portfolio",
    img: portfolio.src,
    title: "Personal Portfolio",
    objectives:
      "This project is a personal portfolio website designed to showcase my work and skills as a Front-End developer.",
    description:
      "It features a clean and modern design, with easy navigation to view my projects, experience, and contact information. The website is responsive, ensuring a seamless experience across devices. Explore my portfolio to see examples of my work and learn more about my background and expertise",
    framework: ["Typescript", "NextJs"],
    styling: ["Emotion"],
    others: ["firebase"],
    link: "https://iminb2b.com",
    sourceCode: "https://github.com/iminb2b/iminb2b-portfolio",
    isWorkProject: false,
    features: ["Multi Languages", "Darkmode", "Project gallery"],
    role: [
      "I contributed to implementing a responsive and intuitive user interface, ensuring seamless functionality on both desktop and mobile platforms. My responsibilities included developing dynamic UI components, integrating the frontend with backend APIs for real-time data synchronization",
    ],
    isPersonal: true,
  },
  {
    slug: "explorix",
    img: explorix.src,
    title: "Explorix",
    objectives: "Share travel guides and tips",
    description:
      "A travel website to share insightful travel guides, tips, and personal experiences from around the world.",
    framework: ["GraphQl", "Gatsby", "Typescript"],
    styling: ["Emotion"],
    others: [],
    link: "https://explorix.projects.iminb2b.com",
    sourceCode: "https://github.com/iminb2b/explorix",
    isWorkProject: false,
    features: ["Dynamic content", "SEO optimized", "Responsive design"],
    role: [
      "I contributed to implementing a responsive and intuitive user interface, ensuring seamless functionality on both desktop and mobile platforms. My responsibilities included developing dynamic UI components, integrating the frontend with backend APIs for real-time data synchronization",
    ],
    isPersonal: true,
  },
  {
    img: junePortfolio.src,
    title: "June Nguyen Portfolio",
    objectives: "Personal Website",
    description: "Personal Website for a UI/UX graduate",
    framework: ["Typescript", "NextJs"],
    styling: ["Emotion"],
    others: [],
    role: ["I implemented frontend"],
    link: "https://junenguyen.com/",
    slug: "june-portfolio",
    sourceCode: "https://github.com/iminb2b/June-portfolio",
    isWorkProject: false,
    features: ["Responsive design"],
    isPersonal: true,
  },
  {
    slug: "dolla",
    title: "Dolla",
    img: dolla.src,
    objectives: "Provide financial information and analysis",
    description:
      "A financial website offering real-time stock data, financial news, and analysis tools.",
    styling: ["Emotion"],
    framework: ["Gatsby", "Typescript"],
    others: ["graphQL", "firebase"],
    link: "https://dolla.projects.iminb2b.com/",
    sourceCode: "https://github.com/iminb2b/dolla",
    isWorkProject: false,
    features: ["Responsive design"],
    role: [
      "I contributed to implementing a responsive and intuitive user interface, ensuring seamless functionality on both desktop and mobile platforms. My responsibilities included developing dynamic UI components, integrating the frontend with backend APIs for real-time data synchronization",
    ],
    isPersonal: true,
  },

  {
    img: amazon.src,
    title: "Amazon",
    objectives: "Clone Amazon UI",
    description:
      "An Amazon clone project to replicate the shopping experience of Amazon for educational purposes.",
    framework: ["Reactjs"],
    others: ["redux", "firebase"],
    styling: ["Emotion"],
    link: "https://amazon-nhungnguyen.surge.sh/",
    slug: "amazon",
    sourceCode: "https://github.com/iminb2b/amazon",
    isWorkProject: false,
    features: ["Shopping cart", "Product search and filter", "User reviews"],
    role: [
      "I contributed to implementing a responsive and intuitive user interface, ensuring seamless functionality on both desktop and mobile platforms. My responsibilities included developing dynamic UI components, integrating the frontend with backend APIs for real-time data synchronization",
    ],
    isPersonal: true,
  },
];
