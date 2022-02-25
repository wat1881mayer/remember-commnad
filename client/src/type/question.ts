import { StringDispatch, NumberDispatch } from './dispatch';

export type questionProps = {
  statement: string;
  select1: string;
  select2: string;
  select3: string;
  select4: string;
  correct: number;
  handleonChangeEventofStatement: (value: string) => void;
  handleonChangeEventofSelect1: (value: string) => void;
  handleonChangeEventofSelect2: (value: string) => void;
  handleonChangeEventofSelect3: (value: string) => void;
  handleonChangeEventofSelect4: (value: string) => void;
  handleonChangeEventofCorrect: (value: number) => void;
};
