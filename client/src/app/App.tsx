import React, {useEffect} from 'react';
import axios, { AxiosResponse } from 'axios';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from './redux/store';
import NavBar from '../components/NavBar/NavBar';
import Main from '../components/Main';
import QuestCard from '../components/Quest/Quest';
import QuestList from '../components/Quest/QuestList';
import { Quest } from '../components/Quest/types/Quest';
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
 useEffect(() => {
  getQuestions().catch((err) => console.log(err))
 }, [])
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route path="/main" element={<Main />} />
          <Route path="/questions" element={<QuestList />} />
          {/* <Route path="/question/:id" element={<QuestCard />} /> */}
          {/* <Route path="/sign-in" element={<SignIpPage />} /> */}
          {/* <Route path="/sign-up" element={<SignUpPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
