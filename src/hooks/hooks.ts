import {AppDispatchT, RootStateT} from '../bll/store/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NavigationUseType} from 'src/customTypes/navigation-types';

export const useAppDispatch: () => AppDispatchT = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateT> = useSelector;
export const useAppNavigate = () => useNavigation<NavigationUseType>();
