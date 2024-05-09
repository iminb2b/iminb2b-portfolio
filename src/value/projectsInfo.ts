import dolla from "@/assets/images/projects-screenshot/dolla-web.png";
import portfolio from "@/assets/images/projects-screenshot/portfolio-web.png";
import explorix from "@/assets/images/projects-screenshot/explorix-web.png";
import internetAbad from "@/assets/images/projects-screenshot/internetAbab.png";
import amazon from "@/assets/images/projects-screenshot/amazon-web.png";
import aa from "@/assets/images/projects-screenshot/aa-web.png";
import factnameh from "@/assets/images/projects-screenshot/factnameh.png";
import junePortfolio from "@/assets/images/projects-screenshot/junePortfolio.png";

export type ProjectInfo = {
  img: string;
  title: string;
  objectives: string;
  description: string;
  tool: string[];
  link: string;
  slug: string;
  sourceCode: string;
  features: string[];
};

export const projectInfos: ProjectInfo[] = [
  {
    slug: "advocacyassembly",
    img: aa.src,
    title: "Advocacy Assembly - Company Project",
    objectives: "",
    description:
      "My biggest success in this project is implemented the Quiz data logic.  ",
    tool: ["Typescript", "NextJs", "Emotion"],
    link: "https://advocacyassembly.org/en/",
    sourceCode: "",
    features: [],
  },
  {
    slug: "factnamehBrowserExtension",
    img: factnameh.src,
    title: "Factnameh Browser Extension - Company Project",
    objectives: "",
    description:
      "Factnameh Browser Extension is a fact checking extension that get data from Factnameh website.",
    tool: ["Typescript", "NextJs", "Emotion"],
    link: "https://chromewebstore.google.com/detail/%D8%A7%D9%81%D8%B2%D9%88%D9%86%D9%87-%D9%81%DA%A9%D8%AA%E2%80%8C%D9%86%D8%A7%D9%85%D9%87/mjbablipiefhfeaiddmljgaoeeodlapn",
    sourceCode: "",
    features: [],
  },
  {
    slug: "internetabad",
    img: internetAbad.src,
    title: "Internet Abad - Company Project",
    objectives: "",
    description:
      "My biggest success in this project is implemented the Network Map in HomePage.  ",
    tool: ["Typescript", "NextJs", "Emotion"],
    link: "https://internetabad.factnameh.com/fa",
    sourceCode: "",
    features: [],
  },
  {
    img: junePortfolio.src,
    title: "June Nguyen Portfolio",
    objectives: "Personal Website",
    description: "Personal Website for a UI/UX graduate",
    tool: ["Typescript", "NextJs", "Emotion"],
    link: "https://junenguyen.com/",
    slug: "june-portfolio",
    sourceCode: "https://github.com/iminb2b/June-portfolio",
    features: ["Responsive design"],
  },
  {
    img: "https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Banner.jpg",
    title: "Earth Store",
    objectives: "Shopping website",
    description: "Earth Store is a website that sell arts",
    tool: ["Django", "GraphQl", "Typescript"],
    link: "https://earth.projects.iminb2b.com/",
    slug: "earth",
    sourceCode: "https://github.com/iminb2b/earth-store",
    features: ["Filtering", "Responsive design"],
  },
  {
    slug: "portfolio",
    img: portfolio.src,
    title: "Personal Portfolio",
    objectives:
      "This project is a personal portfolio website designed to showcase my work and skills as a Front-End developer.",
    description:
      "It features a clean and modern design, with easy navigation to view my projects, experience, and contact information. The website is responsive, ensuring a seamless experience across devices. Explore my portfolio to see examples of my work and learn more about my background and expertise",
    tool: ["Typescript", "NextJs", "Emotion"],
    link: "https://iminb2b.com",
    sourceCode: "https://github.com/iminb2b/iminb2b-portfolio",
    features: ["Multi Languages", "Darkmode", "Project gallery"],
  },
  {
    slug: "explorix",
    img: explorix.src,
    title: "Explorix",
    objectives: "Share travel guides and tips",
    description:
      "A travel website to share insightful travel guides, tips, and personal experiences from around the world.",
    tool: ["GraphQl", "Gatsby", "Typescript"],
    link: "https://explorix.projects.iminb2b.com",
    sourceCode: "https://github.com/iminb2b/explorix",
    features: ["Dynamic content", "SEO optimized", "Responsive design"],
  },
  {
    slug: "dolla",
    title: "Dolla",
    img: dolla.src,
    objectives: "Provide financial information and analysis",
    description:
      "A financial website offering real-time stock data, financial news, and analysis tools.",
    tool: ["GraphQl", "Gatsby", "Typescript"],
    link: "https://dolla.projects.iminb2b.com/",
    sourceCode: "https://github.com/iminb2b/dolla",
    features: ["Responsive design"],
  },

  {
    img: amazon.src,
    title: "Amazon",
    objectives: "Clone Amazon UI",
    description:
      "An Amazon clone project to replicate the shopping experience of Amazon for educational purposes.",
    tool: ["Reactjs", "Redux", "Firebase"],
    link: "https://amazon-nhungnguyen.surge.sh/",
    slug: "amazon",
    sourceCode: "https://github.com/iminb2b/amazon",
    features: ["Shopping cart", "Product search and filter", "User reviews"],
  },
];
