import { ResumeData } from "./dataModel";
import photo from './profile.jpeg';

export const profile: ResumeData = {
    photo: photo,
    name: "AARON VISSCHEDIJK",
    title: "BACKEND DEVELOPER",
    contact: {
        email: "aaron.visschedijk@gmail.com",
        phone: "(+31)683547601",
        linkedin: "https://www.linkedin.com/in/aaron-visschedijk-5b1b3b1b3/",
        github: "https:://github.com/aaron-visschedijk",
    },
    about: {
        content: "As a backend developer with expertise in Python, AWS, and Terraform, I have a passion for creating and deploying scalable APIs and microservices that seamlessly connect all aspects of a digital product. I find it incredibly satisfying to make different components - data, code, infrastructure - talk with each other to create value for the end-user. Additionally, I am always trying to stay on top of the latest developments in my field and experiment with new frameworks and platforms."
    },
    languages: [
        {
            language: "English",
            level: "Native Level",
        },
        {
            language: "Dutch",
            level: "Native",
        },
        {
            language: "German",
            level: "Limited"
        }
    ],
    experiences: [
        {
            title: "Backend Developer",
            company: "Nuuday",
            duration: "Nov 2021 - Oct 2022",
            achievements: [
              "Responsible for client API development using AWS, python and terraform for streamingservice YouTV (discontinued)",
              "Integrated external Disney+ user signup into our streamingservice",
              "Responsible for client API development using kubernetes, java and terraform for customer onboarding of mobile phone plans"
            ],
            location: "Copenhagen, Denmark",
        },
        {
            title:"Unity Game Programmer",
            company:"DADIU",
            duration:"Aug 2020 - Jan 2021",
            achievements:[
              "Contributed to 2 game productions released on itch.io: Amanthi and Pacha",
              "Developed a data-driven animation system for humanoid animations recorded by a motion-capture suit in C# and Unity",
              "Built a complex character movement system that allowed for easy expansion in C# and Unity",
              "This work was done as part of my Master's degree"
            ],
            location:"Copenhagen, Denmark",
        },
        {
            title:"Python Tutor",
            company:"Private",
            duration:"Feb 2020 - Jun 2020",
            achievements: [
              "Tutored one student in a 'python for social sciences' undergrad course",
              "The student achieved a grade of 10 on a 12 point scale"
            ],
            location: "Copenhagen, Denmark"
        }

    ],
    education: [
        {
            degree:"MSC Computer Science",
            school:"University of Copenhagen",
            duration:"Aug 2019 - Sep 2021",
            location:"Copenhagen, Denmark",
        },
        {
            degree:"Exchange Semester",
            school:"University of Sydney",
            duration:"Jul 2017 - Jan 2018",
            location:"Sydney, Australia",
        },
        {
            degree:"BSc Computer Science",
            school:"Radboud University Nijmegen",
            duration:"Aug 2015 - May 2018",
            location:"Nijmegen, Netherlands",
        },
    ],
    publications: [
        {
            title: "ClipWidgets: 3D-printed Modular Tangible UI Extensions for Smartphones",
            journal: "TEI (ACM)",
            date: "2022",
            link: "https://dl.acm.org/doi/10.1145/3490149.3501314",
            description: "Published a scientific article based on my MSc. thesis research about 3D printing interactive UI components for smartphones. The article was accepted and published at ACM conference TEI2022 and is currently the most downloaded paper submission of the conference. The article was written in collaboration with Hyunyoung Kim, Carlos Tejada and Daniel Ashbrook."
 
        }
    ]
}