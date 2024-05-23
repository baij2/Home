// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Samaksh",
  middleName: "",
  lastName: "Baijal",
  message: " Leverage data-driven insights to help stakeholders make better decisions and drive business improvements. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/baij2",
    },
    //{
    //  image: "fa-instagram",
    //  url: "https://www.instagram.com/iam_ayushtiwari/",
    //},

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/samakshbaijal/",
    },
    //{
    //  image: "fas fa-code",
    //  url: "https://leetcode.com/iamayushtiwari/",
    //},
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/iamayushtiwari/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/ayushtiwari.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  //imageLink: require("../editable-stuff/ayushtiwari.png"),
  linkedinImgUrl: "https://media.licdn.com/dms/image/C5103AQHXSkG9kclSjA/profile-displayphoto-shrink_400_400/0/1579015132602?e=1721865600&v=beta&t=iQHljMjnkWGoLwRWyeOQ0ELe0PEFhCreCeekhnAzZpQ",
  imageSize: 375,
  message:
    "Detail-oriented Business Analyst with close to 3 years of experience and Unix Admin with over 2 years of experience with a broad-based background in highly competitive and dynamic organizations. Leveraged data-driven insights to help stakeholders make better decisions and drive business improvements. Proficient in SQL, Excel and Data Visualization, enabling comprehensive data analysis and insights extraction. Strong work ethics, adaptability, and exceptional interpersonal skills.",
  resume: "https://drive.google.com/file/d/1udpyaBkFUlAVWzOvXaSdO1yLrsRihKti/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specific projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "baij2", //i.e."iamayushtiwari"
  reposLength: 3,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "CERTIFICATES",
  message:
    "I proudly demonstrate my proven proficiency in SQL, Power BI, R and Tableau. These essential skills empower me to leverage data analytical tools and database languages to help businesses make better business decisions and drive business imrpovements. With this expertise, I am well-equipped to deliver outstanding outcomes for clients and projects alike, ensuring optimal satisfaction and success.",
  images: [
    {
      img: require("./sql_certificate.png"),
      label: "",
      paragraph: ""
    },
    {
      img: require("./Tableau certificate.png"),
      label: "",
      paragraph: ""
    },
    {
     img: require("./Introduction to R certificate.png"),
      label: "",
      paragraph: ""
    },
    {
      img: require("./Introduction to Regression in R certificate.png"),
       label: "",
       paragraph: ""
     },
     {
      img: require("./Introduction to Visulization with ggplot certificate.png"),
       label: "",
       paragraph: ""
     },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Excel", value: 90 },
    { name: "Power BI", value: 80 },
    { name: "SQL", value: 80 },
    { name: "R", value: 50 },
    { name: "DAX", value: 60 },
    { name: "Tableau", value: 75 },
    { name: "Power Query", value: 50 },
    { name: "Git", value: 50 },
    { name: "Jira", value: 60 },
    { name: "Confluence", value: 70 },
    { name: "Jenkins", value: 70 },
    { name: "Unix", value: 90 },
    { name: "Tivoli", value: 80 },
    { name: "Shell Scripting", value: 50 },
    

  ],
  softSkills: [
    { name: "Leadership", value: 80 },
    { name: "Communication", value: 90 },
    { name: "Problem Solving", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Critical Thinking", value: 75 },
    { name: "Time Management", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Adaptability", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Business Analyst/Data Analyst opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "2samakshbaijal@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    //{
    //  role: 'Software Engineer - Node js Developer',// Here Add Company Name
    //  companylogo: require('../assets/img/Staqo-logo.png'),
    //  date: 'Aug 2023 – present',
    //},
    {
      role: 'Business Analyst',// Here Add Company Name
      companylogo: require('../assets/img/Capgemini_logo.png'),
      date: 'Jan 2021 – Aug 2023',
    },
    {
      role: 'Unix Admin',// Here Add Company Name
      companylogo: require('../assets/img/Capgemini_logo.png'),
      date: 'Oct 2018 – Dec 2020',
    },
  
  ]
}

// Blog SECTION
const blog = {
  show: false,
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, blog };
