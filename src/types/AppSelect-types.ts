export interface ISelectProps {
  onSelect: (value: string) => void;
  value?: string;
  size: 's' | 'm';
  data: string[];
  type: 'primary' | 'secondary';
}
