/// <reference types="react" />
import { Option as MultipleInputWithLabelOption } from '../multiple-input-with-label';
interface Option {
    value: any;
    label?: any;
    span?: number;
    withInput?: boolean;
    inputType?: 'multiple_input' | 'checkbox' | 'input';
    inputSpan?: number;
    options?: MultipleInputWithLabelOption[] | any[];
}
interface IProps {
    value?: any;
    options?: Option[];
    onChange?: any;
    type?: 'single' | 'multiple';
}
declare const _default: (props: IProps) => JSX.Element;
export default _default;
