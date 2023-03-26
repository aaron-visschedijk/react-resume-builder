import { EducationData } from "../dataModel";


function Entry(education: EducationData) {
    return (
        <div className="education entry">
            <h4>{education.degree} - <span className="notbold">{education.school}</span></h4>
            <h5>{education.duration}</h5>
            <p>{education.location}</p>
            <p>{education.description}</p>
        </div>
    );
}

export default function Education(educations: EducationData[]) {
    let educationElements = [];
    for (var i in educations) {
        const education = educations[i];
        educationElements.push(<Entry {...education} />);
    }

    return (
        <div className="education section">
            <h3>EDUCATION</h3>
            {educationElements}
        </div>
    );
}