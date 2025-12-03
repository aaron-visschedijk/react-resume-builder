import { LanguageData } from "../dataModel";

interface LanguagesProps {
    languages: LanguageData[];
}

export default function Languages({ languages }: LanguagesProps) {
    const languageElements = languages.map((language) => (
        <div
            key={language.language}
            className="language-item"
        >
            <span className="language-name">{language.language}</span>
            <span className="language-level">{language.level}</span>
        </div>
    ));

    return (
        <div className="languages section">
            <h3>LANGUAGES</h3>
            <div className="languages-list">
                {languageElements}
            </div>
        </div>
    );
}