import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import type { AxiosResponse } from 'axios';
import axios, { Axios } from 'axios';
import { isAction } from 'redux';
import type { RootState } from '../../app/redux/store';
import type { Quest, QuestID } from './types/Quest';
import { useAppDispatch } from "../../app/redux/store"

function QuestList(): JSX.Element {

    const questions = useSelector((store: RootState) => store.quest.quests);
    const quest = useSelector((store: RootState) => store.quest.quest);
    const categories = useSelector((store: RootState) => store.quest.categories);
    const dispatch = useAppDispatch()
    const [form, setForm] = useState('')
    function getQuest(quest: Quest): void{
        dispatch({type: 'questions/view', payload: quest})
        // console.log(quest);
        const questCard = document.getElementById('quest');
        questCard?.classList.add('active')
    }
    function getAnswer(): void{
        console.log(form);
        const questCard = document.getElementById('quest');
        questCard?.classList.remove('active')
        // if (form === quest.answer){}
        const answerCard = document.getElementById('answer');
        answerCard?.classList.add('active')
    }
    function closeWithoutAnswer(): void {
        const questCard = document.getElementById('quest');
        questCard?.classList.remove('active')
    }
    function close(): void {
        const answerCard = document.getElementById('answer');
        answerCard?.classList.remove('active')
        setForm('')
    }

    return (
        <main className="responsive">
            <div className="overlay blur" />
                <dialog id='quest' className='large'>
                    <div>{quest.Category.title}</div>
                    <h5>{quest.title}</h5>
                    <div>{quest.img}</div>
                    <div className="field label border round">
                            <input type="text" value={form} onChange={(event) => setForm(event.target.value)}/>
                            <label>Введите ответ</label>
                        </div>
                            <button className="transparent link" onClick={() => closeWithoutAnswer()}>Закрыть</button>
                            <button className="transparent link" onClick={() => getAnswer()}>Ответить</button>
                </dialog>
            <div className="overlay blur" />
                <dialog id='answer' className='medium'>
                    <h5>{`Правильный ответ: ${quest.answer}`}</h5>
                    <h5>{`Ваш ответ: ${form}`}</h5>
                    <h5>{`Результат: `}</h5>
                    <nav className="right-align no-space">
                            <button className="transparent link" onClick={() => close()}>Закрыть</button>
                    </nav>
                </dialog>
        {categories && (
            <table className="border">
            <tbody>
                {categories.map((el) => (
                    <tr key={el.id}>
                        <th>{el.title}</th>
                        {questions.filter((quest) => quest.category_id === el.id).map((quest) => (
                            <th key={quest.id}><button onClick={() => getQuest(quest)}>{quest.Cost.cost}</button></th>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        )}
        </main>
        

// <table class="border">
//   <thead>
//     <tr>
//       <th>Header</th>
//       <th>Header</th>
//       <th>Header</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Cell</td>
//       <td>Cell</td>
//       <td>Cell</td>
//     </tr>
//     <tr>
//       <td>Cell</td>
//       <td>Cell</td>
//       <td>Cell</td>
//     </tr>
//     <tr>
//       <td>Cell</td>
//       <td>Cell</td>
//       <td>Cell</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <th>Footer</th>
//       <th>Footer</th>
//       <th>Footer</th>
//     </tr>
//   </tfoot>
// </table>

    );
}

export default QuestList;