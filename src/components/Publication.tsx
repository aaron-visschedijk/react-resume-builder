import { PublicationData } from "../dataModel";


function Entry(publication: PublicationData) {
    return (
        <div className="publication entry">
            <h4>{publication.title} - <span className="notbold">Published in {publication.journal}
                <a href={publication.link}>[link]</a>
            </span></h4>
            <h5>{publication.date}</h5>
            <p>{publication.description}</p>
        </div>
    );
}

export default function Education(publications: PublicationData[]) {
    let publicationElements = [];
    for (var i in publications) {
        const publication = publications[i];
        publicationElements.push(<Entry {...publication} />);
    }

    return (
        <div className="publication section">
            <h3>PUBLICATIONS</h3>
            {publicationElements}
        </div>
    );
}