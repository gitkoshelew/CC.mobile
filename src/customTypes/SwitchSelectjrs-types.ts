export interface ISwitchSelectProps {
  onPress?: (value: string) => void;
  value?: string | number;
  type: TypeSwitchSelect;
}

export enum TypeSwitchSelect {
  LEVEL = 'level',
  NUMBER = 'number',
  FILTER = 'filter',
}
