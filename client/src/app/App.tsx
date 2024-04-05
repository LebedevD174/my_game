import React, {useEffect} from 'react';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from './redux/store';
import NavBar from '../components/NavBar/NavBar';
import Main from '../components/Main';
import QuestCard from '../components/Quest/Quest';
import QuestList from '../components/Quest/QuestList';
import type { Category, Quest } from '../components/Quest/types/Quest';
import SignInPage from '../components/Sign/SignInPage'
import SignUpPage from '../components/Sign/SignUpPage'
import type { User } from '../components/Sign/types/user';
// import './App.css';


function App(): JSX.Element {
 const dispatch = useAppDispatch();
 async function getQuestions(): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const response: AxiosResponse<{message: string, questions: Quest[]}> = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/questions/`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log(response.data)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (response.data.message === "success") {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    dispatch({type: 'questions/load', payload: response.data.questions})
  }
 }
 async function getCategories(): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const response: AxiosResponse<{message: string, categories: Category[]}> = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/categories/`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log(response.data)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (response.data.message === "success") {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    dispatch({type: 'categories/load', payload: response.data.categories})
  }
 }

 async function getUsers(): Promise<void> {
  const response: AxiosResponse<{message: string, users: User[]}> = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/sign/`);
  console.log(response.data)
 }

 async function checkUser(): Promise<void> {
  const res: AxiosResponse<{user:User}> = await axios.get(`/api/sign/check`)
  if (res.status === 200) {
    dispatch({type: 'users/signin', payload: res.data.user})
  } else {
    dispatch({type: 'users/logout'})
  }
 }

 useEffect(() => {
  getQuestions().catch((err) => console.log(err))
  getCategories().catch((err) => console.log(err))
  getUsers().catch((err) => console.log(err))
  checkUser().catch((err) => console.log(err))
 }, [])
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route path="/main" element={<Main />} />
          <Route path="/questions" element={<QuestList />} />
          {/* <Route path="/question/:id" element={<QuestCard />} /> */}
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
