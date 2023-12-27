import React from 'react';
import {useParams} from 'react-router-dom';
import './css/App.css';
import {get_topic_by_id} from "./database";
import {MathJaxContext, MathJax} from "better-react-mathjax";

function TopicPage(args: any) {
    let topic_id = Number(useParams().topic_id!);
    const topic = get_topic_by_id(topic_id);
    return (<>
        <h1>{topic.title}</h1>
        <MathJaxContext>
            {topic.content.map((content_block) => {
                if (content_block.content_type === "math") {
                    return (<MathJax inline={true}>{'\\(' + content_block.content + '\\)'}</MathJax>)
                }
                else {
                    return (<div>{content_block.content}</div>)
                }
            })}
        </MathJaxContext>
    </>);
}

export default TopicPage;
