import cookiesSiteImage from './images/cookieSite.jpg';
import resumeSiteImage from './images/resumeSite.jpg';
import artBook from './images/artBook.png';
import helthOverflow from './images/helthOverflow.png';
import hrSystemImage from './images/hrSystem.jpg';
import otakuzImage from './images/otakuz.jpg';




const project1 = {
  title: "Health Overflow",
  description: "Health center web app a patient can register and get help from doctors by describing his condition, anonymously or publicly then a sector can contact the patient and help him.",
  githubLink: "https://github.com/Health-Overflow/healthOverflow",
  demoLink: "https://health-over-flow.herokuapp.com",
  badges: ["Spring boot", "thymeleaf", "CSS"],
  siteImage: helthOverflow

}

const project2 = {
  title: "Otakuz Project",
  description: "A website to see navigate animes and watch them , besides the ability to log in and create your watch list",
  githubLink: "https://github.com/stern-rader",
  demoLink: "https://otakuz.netlify.app/",
  badges: ["ReactJS", "NodeJS", "Bootstrap"],
  siteImage: otakuzImage

}


const project3 = {
  title: "Complaint System",
  description: "a complaint management system where users will be able to register, login, send a complaint and check the status of the complaint , admins should login and see all complaints.",
  githubLink: "https://github.com/Qusay114/ComplaintManagementSystem",
  demoLink: "https://github.com/Qusay114/ComplaintManagementSystem",
  badges: ["Spring boot", "thymeleaf", "Bootstrap"],
  siteImage: artBook

}


const project4 = {
  title: "Easy-Resume project",
  description: "A website to create your own resume in few steps.",
  githubLink: "https://github.com/MADQM/Easy-Resume",
  demoLink: "https://madqm.github.io/Easy-Resume/",
  badges: ["HTML", "CSS", "JavaScript"],
  siteImage: resumeSiteImage

}



const project5 = {
  title: "Cookie-Stand Project",
  description: "Cookie Stand is a website to show the Pat Cookie store locations and the sales data for them.The project is still in the developing process",
  githubLink: "https://github.com/Qusay114/cookie-stand",
  demoLink: "https://qusay114.github.io/cookie-stand/",
  badges: ["HTML", "CSS", "JavaScript"],
  siteImage: cookiesSiteImage
}


const project6 = {
  title: "HR System",
  description: "A simple HR System to add the name , email and the department of the new employee to the system",
  githubLink: "https://github.com/Qusay114/HR-system",
  demoLink: "https://qusay114.github.io/HR-system/HRSystem.html",
  badges: ["HTML", "CSS", "JavaScript"],
  siteImage: hrSystemImage
}


const projects = [project1, project2, project3, project4, project5, project6];

export default projects;