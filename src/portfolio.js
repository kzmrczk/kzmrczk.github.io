
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Dawid Kazimierczak",
  title: "Hi all, I'm Dawid",
  subTitle: emoji("A space passionate 🚀 with versatile experience in mechanical engineering, modeling, satellite/launcher design and software development."),
  resumeLink: "https://drive.google.com/file/d/1z5Ks44-TSEA83Q1L1KywbOkUXZGtWD12/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/kzmrczk",
  linkedin: "https://www.linkedin.com/in/dkazimierczak/",
  gmail: "kazimierczak.dawid1@gmail.com",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What do I do",
  subTitle: "I am a curious engineer who wants to explore science and engineering in space applications",
  skills: [
    emoji("⚡ Analysis, modeling and design of mechanical structures"),
    emoji("⚡ Mechanism design and control of dynamics systems in real time - robotics, manipulators, grippers"),
    emoji("⚡ Developing tools for simulations of mechanical systems, fluid flows, satellite movement"),
    emoji("⚡ Exploring my programming skills in various domains - games and apps")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "SOLIDWORKS",
      img_path: require("./assets/images/solidworks.png"),
      img_aspect: 0.95
    },
    {
      skillName: "Inventor",
      img_path: require("./assets/images/inventor.png"),
      img_aspect: 0.66
    },
    {
      skillName: "CATIA",
      img_path: require("./assets/images/CATIA_Logotype.png"),
      img_aspect: 1.29
    },
    {
      skillName: "Ansys",
      img_path: require("./assets/images/Ansys_logo_alt.png"),
      img_aspect: 1.15
    },
    {
      skillName: "MSC Nastran/Patran",
      img_path: require("./assets/images/msc_logo.png"),
      img_aspect: 3.56
    },
    {
      skillName: "MATLAB",
      img_path: require("./assets/images/Matlab_Logo.png"),
      img_aspect: 1.11
    },
    {
      skillName: "Simulink",
      img_path: require("./assets/images/Simulink_logo.png"),
      img_aspect: 1.0
    },
    {
      skillName: "Python",
      img_path: require("./assets/images/Python_Logo.png"),
      img_aspect: 1.0
    },
    {
      skillName: "Java",
      img_path: require("./assets/images/java-logo.png"),
      img_aspect: 0.8
    },
    {
      skillName: "C++",
      img_path: require("./assets/images/c++_Logo.png"),
      img_aspect: 0.89
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "ISAE-SUPAERO",
      logo: require("./assets/images/isaeLogo.jpg"),
      subHeader: "Master of Science in Aerospace Engineering",
      duration: "Sep 2018 - Nov 2020",
      desc: "Toulouse, France",
      descBullets: [
        "Major in Space Systems",
        "Thesis: Numerical model of gas distribution in low-power Hall thruster"
      ]
    },
    {
      schoolName: "Warsaw University of Technology",
      logo: require("./assets/images/wutLogo.png"),
      subHeader: "Bachelor of Science in Aerospace Engineering",
      duration: "Oct 2014 - Jun 2018",
      desc: "Warsaw, Poland",
      descBullets: [
        "Major in Automatics and Aviation Systems",
	"Thesis: Trajectory planning and simulation of motion of manipulator in Martian rover"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern in R & D",
      company: "Exotrail",
      companylogo: require("./assets/images/exotrailLogo.jpg"),
      date: "Jun 2020 – Dec 2020",
      descBullets: [
        "Created from scratch a numerical model to study propellant gas flow in discharge channel in a Hall thruster. The model of the molecular flow and simulations were included in my master's thesis.",
        "Developed tools for simulations and post-processing in Python and C++ and created a stand-alone software with graphical user interface."
      ]
    },
    {
      role: "Mechanical Engineer",
      company: "Space Research Centre PAS",
      companylogo: require("./assets/images/cbkLogo.jpg"),
      date: "Mar 2018 – Aug 2018",
      descBullets: [
	"Designed structures meant for robotic arms for servicing satellites, using tools like Ansys Mechanical and Autodesk Inventor",
	"Responsible for integration and maintenance of designed systems.",
	"Carried out tests of robotic arm joint's performance on specifically designed test-bed systems."
	]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "kzmrczk", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const majorProjects = {

  title: "Big projects",
  subtitle: "Major projects that I worked on",

  projectsCards: [
    {
      title: "University and European Rover Challenge 2016",
      timeperiod: "Oct 2014 - Sep 2016",
      subtitle: "Responsible for the design of mobile robot ARES, in particular wheel design and manufacturing. The rover was being prepared for series of robotic competitions held annually - the European Rover Challange and the University Rover Challenge, organized by the Mars Society.",
      image1: require("./assets/images/zdjecie_aresa.JPG"),
      image2: require("./assets/images/erc2016.jpg"),
      image3: require("./assets/images/team_photo.JPG"),
      footerLink: [{name: "Read about the European Rover Challenge", url: "https://roverchallenge.eu/"}, {name: "Read about the University Rover Challenge", url: "http://urc.marssociety.org/"}, {name: "Read about the Mars Society", url: "https://www.marssociety.org/"}]
    },
    {
      title: "Trajectory planning and simulation of motion",
      timeperiod: "Oct 2017 - Jun 2018",
      subtitle: "Robotic arm, that was designed for a Martian rover, was taken as a model for developing a motion planning algorithm. The algorithm and control laws were applied to the mechanical model in MATLAB and Simulink. The movement of the arm was simulated and the algorithm was verified.",
      image1: require("./assets/images/manipulator_profil.PNG"),
      image2: require("./assets/images/dynamika_manipulatora1.gif"),
      image3: require("./assets/images/test1_trajektoria3D.png"),
      footerLink: []
    },
    {
      title: "University and European Rover Challenge 2018",
      timeperiod: "Oct 2016 - Mar 2018",
      subtitle: "From 2016 until 2018 I was working as a team leader in a project with a goal to build a Martian rover named SIRIUS. The rover was designed to be lighter and more agile than our previous versions. I was responsible for design and manufacturing of the robotic arm subsystem and three-finger gripper. I managed a group of 30 students.",
      image1: require("./assets/images/sirius_panel.jpg"),
      image2: require("./assets/images/sirius_utah.jpg"),
      image3: require("./assets/images/sirius_render.jpg"),
      footerLink: []
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certified SOLIDWORKS Associate",
      subtitle: "Awarded with a certificate in mechanical design",
      image: require("./assets/images/dsLogo.png"),
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/1BxjJPtXI1Jfu4piGQoew1i-1kMXA_rt1/view?usp=sharing" },
        { name: "Basis", url: "https://www.solidworks.com/certifications/mechanical-design-cswa-mechanical-design"}
      ]
    },
    {
      title: "Computer Aided Design training in Siemens NX10 system",
      subtitle: "Underwent a complex training in CAD and was awarded with a certificate",
      image: require("./assets/images/siemens.png"),
      footerLink: [{ name: "Certificate", url: "https://drive.google.com/file/d/1_3Ns1VozyGwDt_dfDNxy7roCraU_kFKf/view?usp=sharing" }]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Do you want to discuss a project or just to say hi? My inbox is open for all.",
  number: "+33-628508971",
  email_address: "kazimierczak.dawid1@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, majorProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
