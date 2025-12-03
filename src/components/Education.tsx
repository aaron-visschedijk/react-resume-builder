import { EducationData } from "../dataModel";


function Entry(education: EducationData) {
    return (
        <div className="education entry">
            <div className="entry-header">
                <h4>{education.degree}</h4>
                <span className="entry-company">{education.school}</span>
            </div>
            <div className="entry-meta">
                <h5>{education.duration}</h5>
                {education.location && <h5 className="entry-location">{education.location}</h5>}
            </div>
            {education.description && <p className="entry-description">{education.description}</p>}
        </div>
    );
}

interface EducationProps {
    educations: EducationData[];
}

export default function Education({ educations }: EducationProps) {
    const educationElements = educations.map((education) => (
        <Entry
            key={`${education.school}-${education.degree}-${education.duration}`}
            {...education}
        />
    ));

    return (
        <div className="education section">
            <h3>EDUCATION</h3>
            {educationElements}
        </div>
    );
}