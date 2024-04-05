import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import type { AxiosResponse } from 'axios';
import axios, { Axios } from 'axios';
import { isAction } from 'redux';
import type { RootState } from '../../app/redux/store';
import type { Quest } from './types/Quest';
import { useAppDispatch } from "../../app/redux/store"

function QuestList(): JSX.Element {
    const user = useSelector((store: RootState) => store.users.user);
    const questions = useSelector((store: RootState) => store.quest.quests);
    const quest = useSelector((store: RootState) => store.quest.quest);
    const categories = useSelector((store: RootState) => store.quest.categories);
    const dispatch = useAppDispatch()
    const [form, setForm] = useState('')
    const [title, setTitle] = useState('')
    const [qu, seQu] = useState(questions)
    function getQuest(quest: Quest): void{
        dispatch({type: 'questions/view', payload: quest})
        // console.log(quest);
        const blur = document.querySelector('.blur');
        const questCard = document.getElementById('quest');
        questCard?.classList.add('active')
        blur?.classList.add('active')
    }
    async function getAnswer(): Promise<void> {
        const questCard = document.getElementById('quest');
        const cost = questCard?.dataset
        questCard?.classList.remove('active')
        if (form === quest.answer){
            const response: AxiosResponse<{message: string, scores: number}> = await axios.put('api/sign/plus/'+user.id, cost)
            if (response.data.message === 'success') {
                dispatch({type: 'users/scores', payload: response.data.scores})
                setTitle('+')
            const answerCard = document.getElementById('answer');
            answerCard?.classList.add('active')}
        } else {
            const response: AxiosResponse<{message: string, scores: number}> = await axios.put('api/sign/minus/'+user.id, cost)
            if (response.data.message === 'success') {
                dispatch({type: 'users/scores', payload: response.data.scores})
                setTitle('-')
            const answerCard = document.getElementById('answer');
            answerCard?.classList.add('active')}
        }
        
    }
    function closeWithoutAnswer(): void {
        const blur = document.querySelector('.blur');
        const questCard = document.getElementById('quest');
        questCard?.classList.remove('active')
        blur?.classList.remove('active')
    }
    function close(): void {
        const blur = document.querySelector('.blur');
        const answerCard = document.getElementById('answer');
        answerCard?.classList.remove('active')
        blur?.classList.remove('active')
        const btn = document.getElementById(`${quest.Cost.cost}${quest.Category.title}`)
        btn?.classList.add('overlay')
        setForm('')
    }

    return (
        <main className="responsive fill medium-height middle-align center-align">
            <div className="overlay blur" />
                <dialog id='quest' className='extra' data-cost={quest.Cost.cost}>
                    <div>{quest.Category.title}</div>
                    <h5>{quest.title}</h5>
                    {quest.img ? <img src={quest.img} alt="" className='responsive extra'/> : <div></div>}
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
                    <h5>{`Результат: ${title}${quest.Cost.cost}`}</h5>
                    <nav className="right-align no-space">
                            <button className="transparent link" onClick={() => close()}>Закрыть</button>
                    </nav>
                </dialog>
        {categories && (
            <table className="border fill">
            <tbody>
                {categories.map((el) => (
                    <tr key={el.id}>
                        <th>{el.title}</th>
                        {questions.filter((quest) => quest.category_id === el.id).map((quest) => (
                            <th key={quest.id}><button onClick={() => getQuest(quest)} id={`${quest.Cost.cost}${quest.Category.title}`}>{quest.Cost.cost}</button></th>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        )}
        </main>
    );
}

export default QuestList;