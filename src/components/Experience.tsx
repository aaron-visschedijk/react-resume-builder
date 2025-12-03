import { ExperienceData } from "../dataModel";


function Entry(experience: ExperienceData) {
    const achievementElements = experience.achievements?.map((achievement, index) => (
        <li key={index}>{achievement}</li>
    ));

    return (
        <div className="experience entry">
            <h4>{experience.title} - <span className="notbold">{experience.company}</span></h4>
            <h5>{experience.duration}</h5>
            <h5><span className="notbold">{experience.location}</span></h5>
            <p>{experience.description}</p>
            <ul>{achievementElements}</ul>
        </div>
    );
}

interface ExperienceProps {
    experiences: ExperienceData[];
}

export default function Experience({ experiences }: ExperienceProps) {
    const experienceElements = experiences.map((experience) => (
        <Entry
            key={`${experience.company}-${experience.title}-${experience.duration}`}
            {...experience}
        />
    ));

    return (
        <div className="experience section">
            <h3>WORK EXPERIENCE</h3>
            {experienceElements}
        </div>
    );
}