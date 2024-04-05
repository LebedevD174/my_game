import type { Quest, QuestID, Categories } from "../../components/Tasks/types/Task";
import type { AuthForm, User } from "../../components/User/User";


export type Action =
    | { type: 'questions/load'; payload: Quest[] }
    | { type: 'questions/delete'; payload: QuestID }
    | { type: 'questions/view'; payload: Quest }
    | { type: 'categories/load'; payload: Categories[] }

    | { type: 'users/load'; payload: User[] }
    | { type: 'users/view'; payload: User }
    | { type: 'users/signin'; payload: User }
    | { type: 'users/signup'; payload: User }
    | { type: 'users/logout'}