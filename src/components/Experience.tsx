import { ExperienceData } from "../dataModel";


function Entry(experience: ExperienceData) {
    const achievementElements = experience.achievements?.map((achievement, index) => (
        <li key={index}>{achievement}</li>
    ));

    return (
        <div className="experience entry">
            <div className="entry-header">
                <h4>{experience.title}</h4>
                <span className="entry-company">{experience.company}</span>
            </div>
            <div className="entry-meta">
                <h5>{experience.duration}</h5>
                {experience.location && <h5 className="entry-location">{experience.location}</h5>}
            </div>
            {experience.description && <p className="entry-description">{experience.description}</p>}
            {achievementElements && achievementElements.length > 0 && <ul>{achievementElements}</ul>}
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