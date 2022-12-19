import {AppDispatchT, RootStateT} from '../bll/store/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useAppDispatch: () => AppDispatchT = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateT> = useSelector;