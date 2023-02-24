import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {useEffect} from 'react';
import {getQuizzes} from '@src/bll/quizReducer';
import {ScreenLayout} from '@src/layout/ScreenLayout/index';
import {Main} from '@src/screens/Main/Main/Main';

export const MainContainer = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn);
  const isFetching = useAppSelector(state => state.app.isFetching);

  useEffect(() => {
    isLoggedIn && dispatch(getQuizzes());
  }, [dispatch, isLoggedIn]);

  return (
    <ScreenLayout isFetching={isFetching}>
      <Main />
    </ScreenLayout>
  );
};
