import { LanguageData } from "../dataModel";


export default function Languages(languages: LanguageData[]) {
    let languageElements = [];
    for (var i in languages) {
        const language = languages[i];
        languageElements.push(<span className="language entry"><b>{language.language}: </b>{language.level}<br /></span>);
    }

    return (
        <div className="languages section">
            <h3>LANGUAGES</h3>
            <p>{languageElements}</p>
        </div>
    );
}