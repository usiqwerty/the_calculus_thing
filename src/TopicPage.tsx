import React, {ReactElement} from 'react';
import {useParams} from 'react-router-dom';
import './css/App.css';

function TopicPage(args:any){
    let topic_id = useParams().topic_id;
    return (<h1>topic {topic_id}</h1>);
}
export default TopicPage;
