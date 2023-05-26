import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { dracula } from '@uiw/codemirror-theme-dracula'

export default function Editor(props) {

    return (
        <CodeMirror
        value={props.markdown}
        onChange={props.change}
            theme={dracula}
            extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} />
    )
}