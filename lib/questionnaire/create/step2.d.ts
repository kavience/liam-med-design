/// <reference types="lodash" />
import React from 'react';
import './step2.less';
export declare const chooseArray: {
    title: string;
    value: string;
}[];
export declare const starArray: {
    title: string;
    value: string;
}[];
export declare const descArray: {
    title: string;
    value: string;
}[];
export declare const labelsArray: {
    title: string;
    value: string;
}[];
export declare const labelsArrayMapping: import("lodash").Dictionary<{
    title: string;
    value: string;
}>;
export default class Step2 extends React.Component {
    constructor(props: any);
    questionItemRefs: {};
    lastClientY: number;
    index: number;
    generateQuestionByType: (type: any) => {
        type: any;
        value: any;
        label: string;
        title: string;
        options: {
            label: string;
            value: number;
        }[];
    } | {
        value: any;
        type: any;
        label: string;
        title: string;
        options?: undefined;
    } | undefined;
    handleBtnClick: (type: any) => () => void;
    handleChangeIndex: (index: any) => void;
    handleDragEnd: () => void;
    handleQuestionClick: (activeQuestion: any) => void;
    renderQuestions: () => JSX.Element[];
    renderBtns: () => JSX.Element;
    renderLogicEdit: () => false | JSX.Element;
    handleSaveRelation: () => void;
    renderModal: () => JSX.Element;
    render(): JSX.Element;
}
