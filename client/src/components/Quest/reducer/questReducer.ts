import type { Action } from "../../../app/redux/Action";
import type { Quest, Category } from "../types/Quest";

type State = {
    quest: Quest;
    quests: Quest[];
    categories: Category[];
}

export const initState = {
    quest: {
        id: 0,
    img: '',
    title: '',
    answer: '',
    cost_id: 0,
    category_id: 0,
    Category: {
        id: 0,
        title: ''
    },
    Cost: {
        id: 0,
        cost: '',
    }
    },
    quests: [],
    categories: [],
}
export const QuestReducer = (
    state: State = initState,
    action: Action
): State => {
    switch (action.type) {
        case 'questions/load':
            console.log(action.payload);
            return {
                ...state,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                quests: action.payload,
            };
        case 'categories/load':
            console.log(action.payload);
            return {
                ...state,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                categories: action.payload,
            };
            case 'questions/view':
            return {
                ...state,
                quest: {...action.payload}
            }
            case 'questions/delete':
            return {
                ...state,
                quests: state.quests.map(
                    (el: Quest) => el.id !== action.payload ? el : {...el, mute: true}
                ),
            }
        // case 'tasks/create':
        //     console.log({
        //         ...state, // state.tasks  tasks :  []
        //         tasks: [...state.tasks, action.payload],
        //     });
            // return {
            //     ...state, // state.tasks  tasks :  []
            //     tasks: [...state.tasks, action.payload],
            // };
        
        // case 'tasks/update':
        //     console.log(action.payload);
            
        //     return {
        //         ...state,
        //         tasks: state.tasks.map(
        //             (el: Task) => {
        //                 if (el.id === action.payload.id){
        //                         return action.payload
        //                 } 
        //                 return el
        //             }
        //         ),
        //     };
        default:
            return state;
    }
};