import styled from 'styled-components/native';
import {Color} from '@theme/colors';

const ViewContainer = styled.View`
  padding: 30px 21px 3px 21px;
`;

const ScrollViewContainer = styled.ScrollView`
  padding: 30px 21px;
`;

const ViewFlexRight = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

const ViewCenter = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const ViewFlexCenter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const ViewFlex = styled.View`
  flex: 1;
`;

const ViewFlexForTwoElements = styled.View`
  display: flex;
  flex-direction: row;
  width: 40%;
`;
const MainTestingContainer = styled.View`
  width: 341px;
  padding: 11px 21px 33px;
  border: 1px solid ${Color.White};
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  background-color: ${Color.White};
`;

export {
  ViewContainer,
  ViewCenter,
  ViewFlex,
  ViewFlexForTwoElements,
  ScrollViewContainer,
  MainTestingContainer,
  ViewFlexRight,
  ViewFlexCenter,
};
