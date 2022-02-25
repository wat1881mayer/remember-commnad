import OptionAttrs from './optionAttrs';

export default interface CommandAttrs {
  command: string;
  description: string;
  example: string;
  options: OptionAttrs[];
}
