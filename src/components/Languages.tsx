import { LanguageData } from "../dataModel";

interface LanguagesProps {
    languages: LanguageData[];
}

export default function Languages({ languages }: LanguagesProps) {
    const languageElements = languages.map((language) => (
        <span
            key={language.language}
            className="language entry"
        >
            <b>{language.language}: </b>
            {language.level}
            <br />
        </span>
    ));

    return (
        <div className="languages section">
            <h3>LANGUAGES</h3>
            <p>{languageElements}</p>
        </div>
    );
}