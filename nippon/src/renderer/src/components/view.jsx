import { IoEyeOutline, IoCopyOutline, IoBookmarkOutline } from 'react-icons/io5';
import Editor from './MarkDownEditor';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown'

export function View() {

    const code = `## Title

    \`\`\`jsx
    function Demo() {
      return <div>demo</div>
    }
    \`\`\`
    
    \`\`\`bash
    # Not dependent on uiw.
    npm install @codemirror/lang-markdown --save
    npm install @codemirror/language-data --save
    \`\`\`
    
    [weisit ulr](https://uiwjs.github.io/react-codemirror/)
    
    \`\`\`go
    package main
    import "fmt"
    func main() {
      fmt.Println("Hello, 世界")
    }
    \`\`\`
    `;

    const [markdown, setMarkdown] = useState('');

    const handleEditorChange = (value) => {
        setMarkdown(value);
    };

    const renderers = {
        image: ({ src, alt }) => <img src={src} alt={alt} />,
    };


    return (
        <>
            <div className="view">
                <h4>file name</h4>
                <section className="actions">
                    <IoEyeOutline />
                    <IoCopyOutline />
                    <IoBookmarkOutline />
                </section>
                <div className="editor-preview">
                    <div className='editor'>
                        <Editor markdown={markdown} change={handleEditorChange} />
                    </div>
                    <div className='preview'>
                        <ReactMarkdown renderers={renderers}>{markdown}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    )
}