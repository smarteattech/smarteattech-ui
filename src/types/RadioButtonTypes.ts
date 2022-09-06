export interface RadioButtonPropsTypes {
  title: string;
  id: number | string;
  currentValue: number | string;
  onChange: (id: number | string) => void;
}
