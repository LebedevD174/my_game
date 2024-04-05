import type { Action } from "../../../app/redux/Action";
import type { User } from "../types/user";

type State = {
    user: User | undefined
    users: User[]
}

export const initState = {
    user: 
    {
        id: 0,
        email: '',
        name: '',
        password: '',
        createdAt: '',
        updatedAt: '',
    },
    users: []
}
export const SignReducer = (
    state: State = initState,
    action: Action
): State => {
    switch (action.type) {
        case 'users/load':
            console.log(action.payload);
            return {
                ...state,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                users: action.payload,
            };
        case 'users/signin':
            console.log(action.payload);
            return {
                ...state,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                user: {...action.payload,}
            };
        case 'users/signup':
            console.log(action.payload);
            return {
                ...state,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                users: [...state.users, action.payload],
            };
            case 'users/logout':
            return {
                ...state,
                user: undefined
            }
        default:
            return state;
    }
};