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
                    code: '//type your code.....d'
                },
            ],
            
        }
    }
    editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        // editor.focus();
    }
    onChange(newValue, e) {
        console.log('onChange', newValue, e);
        let new_data = {...this.state.data};
        new_data[parseInt(this.props.ids)].code = newValue;
        this.setState({ data: new_data });
        //console.log(this.state.data);
    }
    render() {
        // console.log(this.props);
        const code = this.state.data[parseInt(this.props.ids)].code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <MonacoEditor
                width="800"
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
