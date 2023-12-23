import React, {ReactElement} from 'react';
import {Link, useParams} from 'react-router-dom';
import './css/App.css';
import {get_topics_in_subject, TopicDescription, get_subject_by_id} from './database';


function CreatePage(){
    return (
        <div>
            <form>
                <input></input>
                <button className={"btn"} type={'submit'} value={'Submit'}></button>
            </form>
        </div>
    );
}
export default CreatePage