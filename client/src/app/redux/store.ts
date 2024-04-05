
// импорт устаревшего метода legacy_createStore + переименование
import { useDispatch } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import  rootReducer  from './rootReducer';


// контейнер состояний — store
export const store = createStore(rootReducer);

// тип для контейнера состояний — store,
// формируется с помощью утилиты ReturnType, которая получает тип возвращаемого значения
export type RootState = ReturnType<typeof store.getState>;



// чтобы диспатч был умным
type AppDispatch = typeof store.dispatch;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const useAppDispatch: () => AppDispatch = useDispatch;