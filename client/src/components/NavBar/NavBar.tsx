import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../Sign/types/user';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/redux/store';
import axios, { AxiosResponse } from 'axios';

function NavBar(): React.ReactElement {
    const navigate = useNavigate()
    const user: User = useSelector((store: RootState) => store.users.user);
    const dispatch = useAppDispatch();
async function logout(): Promise<void> {
    const res: AxiosResponse<{message: string}> = await axios.get(`api/sign/out`)
    
    if (res.data.message === "success") {
        dispatch({type: 'users/logout'})
        navigate('/main')
    }
}

    return (
    <nav className="left drawer min">
        {user.id !== 0 && <div>Привет, {user.name}</div>}
        {user.id !== 0 && <div>Очки: {user.scores}</div>}
         <Link to='/main'>
            <i>home</i>
            <div>Home</div>
        </Link>
        {user.id === 0 && <>
            <Link to='/sign-up'>
            <i>Sign-up</i>
            <div>Sign-up</div>
        </Link>
        <Link to='/sign-in'>
            <i>login</i>
            <div>Sign-in</div>
        </Link></>}
        {user.id !== 0 && <><Link to='/questions'>
            <i>Help</i>
            <div>Questions</div>
        </Link>
        <Link onClick={() => logout()}>
            <i>Logout</i>
            <div>Logout</div>
        </Link></>}
        </nav>
    );
}

export default NavBar;