import IntroImage from "../assets/graduation-Project-Images/cape logo.png";
import InterviewImage from "../assets/graduation-Project-Images/interview.png";
import CmsImage from "../assets/graduation-Project-Images/cms-systems.png";
import EmpathyMap from "../assets/graduation-Project-Images/empathy map.png";
import ProblemStatement from "../assets/graduation-Project-Images/problem-statement.png";
import MoscowAnalysis from "../assets/graduation-Project-Images/moscow anlaysis.png";
import StortBoard1 from "../assets/graduation-Project-Images/storyboard-1.png";
import StortBoard2 from "../assets/graduation-Project-Images/storyboard-2.png";
import StortBoard3 from "../assets/graduation-Project-Images/storyboard-3.png";
import StortBoard4 from "../assets/graduation-Project-Images/storyboard-4.png";
import StortBoard5 from "../assets/graduation-Project-Images/storyboard-5.png";
import PovTable from "../assets/graduation-Project-Images/Pov-table.png";

const GraduationProjectData = {
  group1: {
    heading: "Modular website",
    subHeading: "Semester 8 User Interaction - Graduation Project",
  },
  introHeading: "Introduction",
  introText:
    "Welcome to my graduation project portfolio! Here, I'll present the process and work I've done for my graduation project. The main goal of this project is to assist marketing professionals and non-developers at Cape in creating and editing pages on the Cape Marketing website without the help of a developer, thereby making the website more modular. Here, I will showcase all the work. Feel free to explore and learn more about my project.",
  introImage: IntroImage,

  projectplan: "Project Plan",
  projectplanText:
    "The project plan includes information about the assignment, stakeholders, agreements, approach, planning, financials, and risks. The project plan was reviewed by my mentor, and I applied the feedback, adjusting it based on the project's scope and needs. It provides a roadmap for the project, outlining objectives, tasks, and timelines. The project plan was super helpful for me. It made sure I knew exactly what steps to take and when to take them. By having everything laid out, I could stay organized and focused on my own. Plus, thinking about possible problems early on helped me prepare for them, making the whole project run smoother.",

  group2: {
    heading: "Project Approach - Design thinking method",
    subHeading: "Discover phase",
  },
  group4: {
    discoverPhase:
      "During the project’s discovery phase, the main goal was to understand stakeholders and their problems/pain points. In this project, the stakeholders are the users as well. First, I formulated some interview questions and conducted interviews with the stakeholders. These interviews helped me understand the stakeholders’ pain points. Once I finished the interviews, I created an empathy map to gain a deeper understanding of the user’s needs.",
  },
  firstPhase: {
    question:
      "How do users currently engage with the existing website, and what pain points do they encounter?",
    subHeading: "Methods:",
    methods: "Stakeholder Interview",
    text: "",
    subheadingWhy: "Why:",
    why:
      "The stakeholder interview was conducted because it helped me to understand the stakeholder by gathering their opinions, pain points, goals, behavior, and experience.",
    subHeadingHow: "How:",
    how:
      "First, I formulated interview questions aimed at identifying the goals, behaviors, pain points, and experiences of the stakeholders. some of the key question includes: Can you walk me through the current process of updating the marketing website?, What challenges or obstacles do you currently face when attempting to update the website?. Then, I scheduled separate meetings with two stakeholders. During the interviews, I took detailed notes and later summarized the pain points and key takeaways.",
    resultHeading: "Result: ",
    results:
      "The interview highlighted challenges like balancing design consistency with dynamic flexibility, relying on developers for customization, and inefficiencies in blog content creation. It also emphasized the necessity of a user-friendly CMS, enabling non-developers to customize pages independently, reducing dependency on developers.",
    conclusionHeading: "Conclusion/recommendation:",
    conclusion:
      "The stakeholder interviews provided critical insights, emphasizing the need for a user-friendly CMS. Such a system would empower non-developers to customize pages independently, reducing dependency on developers and streamlining the content creation process. For instance, an intuitive CMS with drag-and-drop features and customizable templates could address the identified pain points effectively. The next step is to create an empathy map for a deeper understanding of user needs.",
    image: InterviewImage,
  },

  definePhaseHeading: "Define phase",

  definePhaseIntroText:
    "During the define phase of the project, the main goal was to organize and improve the information collected in the discover phase. I used different methods, such as an empathy map, to gain a deeper understanding of the users' needs, desires, behaviors, and emotions. The point of view table and the problem statement were useful in making decisions on prioritizing the user needs. Additionally, I conducted a trend analysis to choose a suitable CMS system for this project based on stakeholder needs and project requirements.",

  cmsSystem: {
    question:
      "What CMS options are available, and how do their features align with the project's content management needs?",
    subHeading: "Methods:",
    methods: "Trend analysis",
    text: "",
    subheadingWhy: "Why:",
    why:
      "Trend analysis helped me identify what's out there. Based on stakeholder needs and project requirements, it helped me choose the suitable CMS system for the project.",
    subHeadingHow: "How:",
    how:
      "Based on the pain points of the users and the requirements/limitations of the project, I chose five different CMS systems that would be suitable for this project. I listed out their pros, cons, and special features, and based on the project's requirements, I selected the CMS system.",
    resultHeading: "Result: ",
    results:
      "Based on the trend analysis, I've determined that CMS platforms like Contentful would be suitable for this project because they allow you to customize the editor interface to your preferences. Additionally, Contentful simplifies the use of different languages and integrates well with modern web tools like Next.js. Furthermore, it excels in uploading various media types, including animations.",
    conclusionHeading: "Conclusion/recommendation:",
    conclusion:
      "So, in conclusion, through the trend analysis, I've identified Contentful as the suitable CMS for this project due to its comprehensive features that effectively address the user needs and project requirements. The next step is to create a storyboard to visualize the project concept.",
    image: CmsImage,
  },

  empathyMap: {
    question:
      "What are the primary content management challenges faced by the marketing team?",
    subHeading: "Methods:",
    methods: "Empathy map",
    text: "",
    subheadingWhy: "Why:",
    why:
      "Creating an empathy map helped me to gain a deeper understanding of the users needs, desires, behaviors, and emotions.",
    subHeadingHow: "How:",
    how:
      "From the stakeholder interview summary and key takeaways, I identified how users behave and what concerns them, categorizing it into what users say, think, do, and feel. I recorded their words (Say), thoughts (Think), actions (Do), and emotions (Feel), creating a straightforward empathy map. This facilitates a clearer understanding of user experiences, aiding in the discovery of better solutions to their problems.",
    resultHeading: "Result: ",
    results:
      "The marketing team seeks greater control over website changes, expressing frustration with reliance on developers. They're concerned about infrequent updates affecting marketing effectiveness and actively seek solutions to reduce dependence on developers, experiencing frustration over delays and concerns about users engagement.",
    conclusionHeading: "Conclusion/recommendation:",
    conclusion:
      "So, in conclusion, through empathy mapping, I've identified what the stakeholders think, feel, say, and do to overcome dependencies on the developer. Based on these insights, the next step is to come up with a problem statement.",
    image: EmpathyMap,
  },

  problemStatemet: {
    question:
      "How do users currently engage with the CMS system, and what pain points do they encounter?",
    subHeading: "Methods:",
    methods: "POV Table, Problem statement",
    subheadingWhy: "Why:",
    why:
      "The POV table helps me understand what users need and the problem statement makes it clear what the main issue is, both of these together give me useful ideas for making decisions.",
    subHeadingHow: "How:",
    how:
      "I created a POV table and problem statement with the insights gathered from conducting stakeholder interviews and empathy mapping, which helped me understand the perspectives and needs of stakeholders.",
    resultHeading: "Result: ",
    results:
      "Problem statement: Zoe is a marketing manager at Cape who needs freedom to create and edit new pages on the marketing website without developer assistance because relying on developers for changes delays updating the marketing updates. (The POV (Point of View) table can be seen on the right side)",
    conclusionHeading: "Conclusion/recommendation:",
    conclusion:
      " The problem statement helped me understand and tackle the problem by defining its scope and directing my attention towards finding solution and The next step is to conduct a trend analysis to identify available CMS systems that suit the stakeholders needs.",
    image: ProblemStatement,
    image1: PovTable,
  },

  ideatePhaseHeading: "Ideate phase",

  storyBoard: {
    question:
      "How do the existing CMS limitations contribute to user and content management issues?",
    subHeading: "Methods:",
    methods: "Story board",
    subheadingWhy: "Why:",
    why:
      "I chose to create a storyboard because it simplifies and visually represents the project's main idea and associated challenges. The limitations of existing CMS platforms are complex, affecting various aspects of user and content management. By using a storyboard, I can break down these complexities into clear, visual segments with text alongside them, making them easier to understand and communicate.",
    subHeadingHow: "How:",
    how:
      "I wanted to bring my project idea to life, so I decided to create a storyboard using canva and AI generated images. First, I wrote down my story concept in a written form, outlining the plot and key elements. Then, with the help of the tool, I transformed my written script into a visual storyboard by generating images and adding them to each panel. This allowed me to visually communicate my project goal and make it more understandable for others.",
    resultHeading: "Result: ",
    results: "The result can be seen on the right side.",
    conclusionHeading: "Conclusion/recommendation:",
    conclusion:
      "In conclusion, creating the storyboard using Canva and AI-generated images allowed me to effectively visualize and communicate the project idea. The storyboard clearly illustrates the sequence of events, characters, and key elements, making the concepts easier for others to understand. This visualization facilitates better communication with stakeholders and team members, ensuring everyone is on the same page regarding the project's goals and challenges. Moving forward, the next step is to conduct a MoSCoW analysis to identify and prioritize the features offered by Contentful that best align with the project's requirements and stakeholders' needs.",
    image1: StortBoard1,
    image2: StortBoard2,
    image3: StortBoard3,
    image4: StortBoard4,
    image5: StortBoard5,
  },

  moscowAnalysis: {
    question:
      "What features must a CMS system include to enhance user experience and enable marketers to rely less on developers?",
    subHeading: "Methods:",
    methods: "MoSCoW",
    subheadingWhy: "Why:",
    why:
      "The MoSCoW analysis was chosen because it helps prioritize the most important requirements for a project. It ensures that essential features are addressed first, while non-critical ones can be deferred to a later stage. By categorizing the requirements and focusing on core functionality, it helps develop a clear and focused final product. This approach ensures that the final product meets the essential needs of the users and stakeholders.",
    subHeadingHow: "How:",
    how:
      "I sat together with the developer, designer, and stakeholders. Based on the suggested features from the stakeholder interviews and their suggestions and opinions, I finalized the essential features for this project.",
    resultHeading: "Result: ",
    results:
      "The result of the MoSCoW analysis indicates that the marketing website's must-have features include custom color fields, dynamic sections, versatile content fields, and autonomy for marketers. Additionally, the website should have icon upload functionality, image scaling options, customizable layouts, and a user-friendly interface. While image galleries are considered a could-have feature, language support is categorized as a won't-have feature.",
    conclusionHeading: "Conclusion/recommendation:",
    conclusion:
      "The MoSCoW analysis helped prioritize the features, and the next step is to create a proof of concept prototype to test and implement these features technically.",
    image: MoscowAnalysis,
  },

  prototypePhaseHeading: "Prototype phase",
  technicalPrototype: {
    question:
      "How can prototypes demonstrate the integration of CMS into the project's workflow?",
    subHeading: "Methods:",
    methods: "Technical Prototype",
    subheadingWhy: "Why:",
    why:
      "I choose to do a technical prototype to test features and solve issues before putting them in the main code. This way, we cut down on risks during development and make the integration smoother. Also, it helps gather feedback early and confirm if the features are doable. With a prototype, we can show stakeholders how things work, get their thoughts, and refine features accordingly for a better final product.",
    subHeadingHow: "How:",
    how:
      "After reviewing the Contentful CMS documentation and conducting a MoSCoW analysis, I developed the essential features using Next.js as the primary framework. This choice was taken by the fact that the main code base is built with Next.js. ",
    resultHeading: "Result: ",
    results:
      "The implemented features can be viewed in the GIF on the left side.",
    conclusionHeading: "Conclusion/recommendation:",
    conclusion:
      "The next step is to showcase the prototype to the stakeholders and developers, gather feedback, and begin implementing it into the main codebase.",
    image: MoscowAnalysis,
  },
  implementationPhase: "Implementation Phase",

  technicalImplementation: {
    question: "Technical Implementation of Dynamic Reusable Component Blocks",
    subHeading: "Software stack used:",
    methods: "Technical Implementation of Dynamic Reusable Component Blocks",
    subheadingWhy: "Why:",
    why:
      "The main goal of the internship was to make the marketing website modular so that non-developers, such as the marketing team, could create, edit, and delete pages and components without the help of developers. Additionally, the primary objective of my internship was to have the website in production before the end of the internship, so the technical implementation crucial.",
    subHeadingHow: "How:",
    how:
      "I received new designs from the designer for six different pages of the marketing website. My goal was to create reusable and dynamic component blocks and set them up in the CMS system so that the marketing team and non-developers could create new pages using these blocks through Contentful. I also researched how to implement certain features in the prototype phase and used those insights to develop these components.",
    resultHeading: "Result: ",
    results:
      "The result can be seen on the right side, more technical detacls can be viewed in the document below.",
    conclusionHeading: "Conclusion/recommendation:",
    conclusion: "",
    image: MoscowAnalysis,
  },
};

export default GraduationProjectData;
