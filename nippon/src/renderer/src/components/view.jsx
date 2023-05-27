import { IoEyeOutline, IoCopyOutline, IoBookmarkOutline } from 'react-icons/io5';
import Editor from './MarkDownEditor';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css';

export function View() {

    useEffect(() => {
        Prism.highlightAll()
    })

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