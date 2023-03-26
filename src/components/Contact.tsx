import { ContactData } from "../dataModel";


export default function Contact(props: ContactData) {

    return (
        <div className="contact section">
            <h3>CONTACT</h3>
            <p className="entry">
                {props.email}
                <br />
                {props.phone}
                <br />
                <a href={props.linkedin}>LinkedIn</a>
                <br />
                <a href={props.github}>GitHub</a>
            </p>
        </div>
    );

}