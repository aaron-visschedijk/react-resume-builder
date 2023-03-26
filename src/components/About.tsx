import { AboutData } from "../dataModel";


export default function About(props: AboutData) {

    return (
        <div className="about section">
            <h3>ABOUT ME</h3>
            <p className="content entry">{props.content}</p>
        </div>
    );
}