import { IoEyeOutline, IoCopyOutline, IoBookmarkOutline, IoEyeOffOutline } from 'react-icons/io5';
import Editor from './MarkDownEditor';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css';

export function View() {

    const editorFieldRef = useRef()
    const previewFieldRef = useRef()
    const eyeRef = useRef()


    function showPreview() {
        if (previewFieldRef.current.style.display != 'block') {
            editorFieldRef.current.style.display = 'none'
            previewFieldRef.current.style.display = 'block'
            previewFieldRef.current.style.width = '100%'
        } else {
            previewFieldRef.current.style.display = 'none'
            editorFieldRef.current.style.display = 'block'
            editorFieldRef.current.style.width = '100%'
        }
    }

    function split() {
        editorFieldRef.current.style.display = 'block'
        previewFieldRef.current.style.display = 'block'

        previewFieldRef.current.style.width = '50%'
        editorFieldRef.current.style.width = '50%'
    }

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
                    <IoEyeOutline ref={eyeRef} onClick={showPreview} />
                    <IoCopyOutline onClick={split} />
                    <IoBookmarkOutline />
                </section>
                <div className="editor-preview">
                    <div className='editor' ref={editorFieldRef}>
                        <Editor markdown={markdown} change={handleEditorChange} />
                    </div>
                    <div className='preview' ref={previewFieldRef}>
                        <ReactMarkdown renderers={renderers}>{markdown}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    )
}