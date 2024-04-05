import type { Action } from "../../../app/redux/Action";
import type { Quest } from "../types/Quest";

type State = {
    quests: Quest[];
}

export const initState = {
    quests: [],
}
export const QuestReducer = (
    state = initState,
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
        // case 'tasks/create':
        //     console.log({
        //         ...state, // state.tasks  tasks :  []
        //         tasks: [...state.tasks, action.payload],
        //     });
            // return {
            //     ...state, // state.tasks  tasks :  []
            //     tasks: [...state.tasks, action.payload],
            // };
        case 'questions/delete':
            return {
                ...state,
                quests: state.quests.map(
                    (el: Quest) => el.id !== action.payload ? el : {...el, mute: true}
                ),
            }
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