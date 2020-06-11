/// <reference types="react" />
import './item.less';
interface IProps {
    index: any;
    question: any;
    lastQuestion: any;
    onChangeIndex: any;
    onQuestionItemDelete: any;
    onQuestionItemOptionsDelete: any;
    onQuestionItemOptionsAdd: any;
    onQuestionClick: any;
    onQuestionItemOptionEdit: any;
    onQuestionItemEdit: any;
}
declare const _default: (props: IProps) => JSX.Element;
export default _default;
