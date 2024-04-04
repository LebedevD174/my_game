import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import type { AxiosResponse } from 'axios';
import axios, { Axios } from 'axios';
import type { RootState } from '../../app/redux/store';

function QuestList(): JSX.Element {

    const questions = useSelector((store: RootState) => store.quest.quests);
    const [cat, setCat] = useState(undefined)
    async function getCategories():Promise<void> {
        const res: AxiosResponse<{message: string, categories: []}> = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/categories`);
        setCat(res.data.categories);
        console.log(res.data.categories);
        
    }
    useEffect(() => {
        getCategories().catch((err) => console.log(err))
    }, [])
    useEffect(() => {
        console.log(cat,'++++++++++++++++++++++++++++++++++++++');
        
    }, [cat])



    return (
        <>
        {cat && (
            <table className="border">
            <tbody>
                {Array.isArray(cat).map((el) => (
                    <tr>
                        <th>{el.title}</th>
                        {questions.filter((el) => el.category_id === el.id).map((q) => (
                            <th>{el.Cost.cost}</th>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        )}
        </>
        

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