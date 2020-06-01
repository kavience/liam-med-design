/// <reference types="react" />
import './styles/index.less';
interface IProps {
    labelBefore?: string;
    labelBeforeStyle?: object;
    labelAfterStyle?: object;
    labelAfter?: string;
    value?: any;
    style?: any;
    size?: any;
    onChange?: any;
    className?: any;
    type?: 'string' | 'number';
}
declare const _default: (props: IProps) => JSX.Element;
export default _default;
