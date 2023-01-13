export interface ISwitchSelectProps {
  onPress?: (value: string) => void;
  value?: string | number;
  type: 'level' | 'number';
}
