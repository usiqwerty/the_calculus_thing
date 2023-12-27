import React, {ReactElement} from 'react';
import {Link, useParams} from 'react-router-dom';
import './css/App.css';
import {get_topics_in_subject, TopicDescription, get_subject_by_id} from './database';


function TopicLink({id, title, content}: TopicDescription) {
    return (
        <div className={"container_item"}>
            <Link to={'/topic/' + id}>
                <span className={"item_title"}>{title}</span>
            </Link>
            <p>content</p>
        </div>
    );
}

function SubjectPage(args: any) {

    let subject_id = useParams().subject_id;
    let subject = get_subject_by_id(Number(subject_id));

    const topics = get_topics_in_subject(Number(subject_id));
    let result: any[] = [];

    topics.forEach((item) => {
        result.push(TopicLink(item))
    })
    return (
        <div>
            <div className={"about_info"}>
                <h2>{subject.title}</h2>
                {subject.description}
            </div>
            <div className={"container"}>
                {result}
            </div>
        </div>
    );
}

export default SubjectPage;
