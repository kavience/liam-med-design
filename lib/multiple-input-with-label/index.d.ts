/// <reference types="react" />
export interface Option {
    enterType?: 'string' | 'number';
    labelBefore: string;
    labelAfter: string;
}
interface IProps {
    options: Option[];
    onChange?: any;
    value?: any;
    type?: 'string' | 'number';
    needWrapper?: boolean;
    className?: any;
    style?: any;
}
declare const _default: (props: IProps) => JSX.Element;
export default _default;
