import type { Quest, QuestID } from "../../components/Tasks/types/Task";
import type { AuthForm, User } from "../../components/User/User";


export type Action =
    | { type: 'questions/load'; payload: Quest[] }
    | { type: 'questions/delete'; payload: QuestID }
    | { type: 'questions/view'; payload: Quest }

    | { type: 'users/load'; payload: User[] }
    | { type: 'users/view'; payload: User }
    | { type: 'users/login'; payload: User }
    | { type: 'users/logout'}
    | { type: 'users/signup'; payload: User };