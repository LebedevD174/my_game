import React from 'react';
import { useSelector } from 'react-redux';
import { User } from './Sign/types/user';

function Main(): JSX.Element {
    const user: User = useSelector((store: RootState) => store.users.user);
    return (

        <main className="responsive fill">
            {user.id !== 0 ? <div className='padding absolute center middle'>
            <h3 className='center-align middle-align'>Добрый день</h3>
            <h3 className='center-align middle-align'>{user.name}</h3></div> : <div className='padding absolute center middle'>
            <h3 className='center-align middle-align'>Добрый день</h3>
            <h3 className='center-align middle-align'>для участия в квизе необходимо зарегистрироваться</h3></div>}
            
        </main>
    );
}

export default Main;