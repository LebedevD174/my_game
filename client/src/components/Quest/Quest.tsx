import React from 'react';
import type {Quest} from './types/Quest'

function QuestCard({question} : {question: Quest}): JSX.Element {
    return (
        <article className="no-padding border">
            <img className="responsive small" src={question.img}/>
                <div className="padding">
                    <h5>{question.title}</h5>
                    <p />
                    <nav>
                    <div className="field round border large">
                        <input type="text"/>
                        <button>Button</button>
                    </div>
                </nav>
            </div>
        </article>
    );
}

export default QuestCard;