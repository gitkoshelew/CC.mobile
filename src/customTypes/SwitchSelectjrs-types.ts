export interface ISwitchSelectProps {
  onPress?: (value: string) => void;
  value?: string | number;
  type: TypeSwitchSelect;
  disabled?: boolean;
}

export enum TypeSwitchSelect {
  LEVEL = 'level',
  NUMBER = 'number',
  FILTER = 'filter',
  TYPE_ANSWER = 'typeAnswer',
}
