import styled from 'styled-components/native';

const ViewContainer = styled.View`
  padding: 30px 21px;
`;

const ViewCenter = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

const ViewFlex = styled.View`
  flex: 1;
`;

const ViewFlexForTwoElements = styled.View`
  display: flex;
  flex-direction: row;
  width: 40%;
`;

export {ViewContainer, ViewCenter, ViewFlex, ViewFlexForTwoElements};
