import React, {ReactElement} from 'react';
import './css/App.css';
import {Link} from "react-router-dom";
import {get_all_subjects, SubjDescription} from './database';

function GigaHeader({header_text}: { header_text: string }) {
    return <h1 id={"main_header"}>{header_text}</h1>;
}

function SubjectItem({id, title, description}: SubjDescription) {
    return (
        <div className={"container_item"}>
            <Link to={'/subject/' + id}>
                <span className={"item_title"}>{title}</span>
            </Link>
            <p>{description}</p>
        </div>
    );
}

function IndexSubjects({subjects}: { subjects: SubjDescription[] }) {
    let items: any[] = []

    subjects.forEach((subj: SubjDescription) => {
        items.push(SubjectItem(subj))
    })
    return (
        <div>
            <div id={"toolbar"}><Link className={"btn"} to={'/create'}>Create</Link></div>
            <div className={"container"}>
                {items}
            </div>
        </div>
    );
}

function Homepage() {
    const subjesct = get_all_subjects();

    return (
        <div className="App">
            <GigaHeader header_text={"The Calculus Thing"}/>
            <IndexSubjects subjects={subjesct}/>
        </div>

    );
}

export default Homepage;
