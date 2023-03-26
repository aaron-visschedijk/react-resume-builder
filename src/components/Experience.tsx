import { ExperienceData } from "../dataModel";


function Entry(experience: ExperienceData) {
    let achievementElements = experience.achievements?.map(
        (achievement) => <li>{achievement}</li>
    );

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

export default function Experience(experiences: ExperienceData[]) {
    let experienceElements = [];
    for (var i in experiences) {
        const experience = experiences[i];
        experienceElements.push(<Entry {...experience} />);
    }

    return (
        <div className="experience section">
            <h3>WORK EXPERIENCE</h3>
            {experienceElements}
        </div>
    );
}