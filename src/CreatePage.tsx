import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './css/App.css';
import "./css/create.css";
import {get_topic_by_id, ContentBlock} from "./database";
import {MathJaxContext, MathJax} from "better-react-mathjax";

function CreatePage(args: any) {
    //let content_blocks: ContentBlock[] = [];
    const [content_blocks, setContent_blocks] = useState([{id:0, content_type: "math", content: ""}])
    const [topic_title, setTopic_title] = useState("")

    useEffect(() => {
        setTopic_title("Topic title")
        setContent_blocks([{id:0, content_type: "math", content: "y=f(x)"}])
    }, []);
    function updateBlocks(){
        for (let i=0; i<content_blocks.length;i++){
            const block = document.getElementById("content"+i)! as HTMLDivElement;
            const block_editor = block.getElementsByTagName("textarea")[0];
            let copy = content_blocks.map((x)=>x);
            copy[i].content=block_editor.value;
            setContent_blocks(copy)
        }
    }

    return (<>
        <input value={topic_title} id={"title_input"}
               onChange={() => setTopic_title((document.getElementById("title_input") as HTMLInputElement).value)}></input>
        <div id={"editor"}>
            {content_blocks.map((content_block: ContentBlock) => {

                return (
                    <div key={content_block.id} id={"content"+content_block.id}>
                        <span>{content_block.content_type}</span>
                        <textarea value={content_block.content} onChange={updateBlocks} />
                        <button>Add below...</button>
                    </div>
                )

            })}
        </div>
        <MathJaxContext>
            {content_blocks.map((content_block: ContentBlock) => {
                if (content_block.content_type === "math") {
                    return (<MathJax inline={true} key={content_block.id}>{'\\(' + content_block.content + '\\)'}</MathJax>)
                } else {
                    return (<div key={content_block.id}>{content_block.content}</div>)
                }
            })}
        </MathJaxContext>
    </>);
}

export default CreatePage;
