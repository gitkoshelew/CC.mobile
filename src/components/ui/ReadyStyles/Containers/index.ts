import styled from 'styled-components/native';

const ColorContainer = styled.View`
  flex: 1;
  padding: 40px 21px 3px 21px;
  background-color: ${props => props.theme.layout};
`;

const ViewContainer = styled.View`
  padding: 40px 21px 3px 21px;
`;

const ViewFlexRight = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

const ViewCenter = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 10px;
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

const ViewDynamicFlex = styled.View<{
  justifyC: string;
  alignI: string;
  flexD?: string;
  flex?: number;
}>`
  flex: ${props => props.flex || 'none'};
  justify-content: ${props => props.justifyC};
  align-items: ${props => props.alignI}
  flex-direction: ${props => (props.flexD ? props.flexD : 'column')};
`;

const ViewFlexForTwoElements = styled.View`
  display: flex;
  flex-direction: row;
  width: 40%;
`;
const MainTestingContainer = styled.View`
  width: 341px;
  padding: 11px 21px 33px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.block};
`;

export {
  ColorContainer,
  ViewContainer,
  ViewCenter,
  ViewFlex,
  ViewFlexForTwoElements,
  MainTestingContainer,
  ViewFlexRight,
  ViewFlexCenter,
  ViewDynamicFlex,
};
