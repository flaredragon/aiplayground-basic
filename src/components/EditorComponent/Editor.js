import React from 'react';
import MonacoEditor from 'react-monaco-editor';


class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 0,
                    code: '//type your code...'
                },
                {
                    id: 1,
                    code: '//type your code.....'
                },
            ],
            
        }
    }
    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        //editor.focus();
    }
    onChange(newValue, e) {
        console.log('onChange', newValue, e);
        let new_data = {...this.props.data};
        new_data[parseInt(this.props.ids)].code = newValue;
        this.props.onUpdate(new_data);
        // console.log(eval(newValue,'dd'));
        //console.log(this.state.data);
    }
    render() {
        // console.log("inside rende");
        // console.log(this.props.data[parseInt(this.props.ids)]);
        const code = this.props.data[parseInt(this.props.ids)].code;
        const options = {
            selectOnLineNumbers: true,
            overviewRulerBorder: false,
            // overviewRulerLanes: 0,
            minimap: true
            
        };
        return (
            <MonacoEditor
                
                width="inherit"
                height="600"
                language="javascript"
                theme="vs-dark"
                value={code}
                options={options}
                onChange={this.onChange.bind(this)}
                editorDidMount={this.editorDidMount.bind(this)}
            />
        );
    }
}

export default Editor;
