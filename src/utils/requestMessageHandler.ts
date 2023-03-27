import {setAppMessage, SeverityType} from '@src/bll/appReducer';
import {Dispatch} from '@reduxjs/toolkit';

export function requestMessageHandler(
  dispatch: Dispatch,
  severity: SeverityType,
  text: string,
) {
  dispatch(
    setAppMessage({
      text,
      severity,
    }),
  );
}
