import React from 'react';
import { BraftEditorProps } from 'braft-editor';
import 'braft-editor/dist/index.css';
export interface EditorProps extends BraftEditorProps {
    bordered?: boolean;
    onUpload?: any;
    onChange?: any;
    style?: any;
}
export default class Editor extends React.Component<EditorProps> {
    state: {
        value: null;
    };
    static getDerivedStateFromProps(prevProps: EditorProps, state: any): {
        value?: undefined;
    } | {
        value: any;
    };
    render(): JSX.Element;
}
