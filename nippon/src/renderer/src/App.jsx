
import { useState, useRef, useEffect } from 'react';

import { IoEyeOutline, IoDocumentOutline, IoCopyOutline, IoBookmarkOutline, IoAdd } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown'
import 'prismjs/themes/prism-tomorrow.css';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { dracula } from '@uiw/codemirror-theme-dracula'
import Prism from 'prismjs'


export
  function App() {


  const [notes, setNotes] = useState([])
  const quickFindRef = useRef()
  const asideRef = useRef()
  const noteNameRef = useRef()
  const createNoteRef = useRef()

  const fetchLocalStorage = () => {
    var notesNames = []
    for (let i = 0; i < localStorage.length; i++) {
      notesNames.push(localStorage.key(i))
    }
    setNotes(notesNames)
  }

  useEffect(() => {
    setInterval(() => {
      fetchLocalStorage()
    }, 500)
  }, [])


  useEffect(() => {

    quickFindRef.current.addEventListener('input', function () {
      let noteListItem = document.querySelectorAll('.note-list li p')
      let quickFindLowerCase = quickFindRef.current.value.toLowerCase()
      for (let note of noteListItem) {
        let noteParent = note.parentNode
        if (!note.textContent.toLocaleLowerCase().includes(quickFindLowerCase)) {
          noteParent.style.display = 'none'
        } else {
          noteParent.style.display = 'flex'
        }
      }
    })

  })

  useEffect(() => {

    window.addEventListener('keydown', function (tecla) {
      if (tecla.ctrlKey && tecla.key === 'f') {
        quickFindRef.current.focus()
      }
    })

    window.addEventListener('keydown', function (tecla) {
      if (tecla.ctrlKey && tecla.key === 's') {
        saveCurrentNote(markdownlocal)
      }
    })

  })




  const editorFieldRef = useRef()
  const previewFieldRef = useRef()
  const eyeRef = useRef()


  function showPreview() {
    if (previewFieldRef.current.style.display != 'block') {
      editorFieldRef.current.style.display = 'none'
      previewFieldRef.current.style.display = 'block'
      previewFieldRef.current.style.width = '70%'
    } else {
      previewFieldRef.current.style.display = 'none'
      editorFieldRef.current.style.display = 'block'
      editorFieldRef.current.style.width = '70%'
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

  const [markdownlocal, setMarkdown] = useState('');

  const handleEditorChange = (value) => {
    setMarkdown(value);
  };

  const [storageNote, setStorageNote] = useState('')

  function load_note(note) {
    setStorageNote(localStorage.getItem(note))
    noteNameRef.current.innerText = note
    var rename = document.querySelector('#rename')
    rename.value = note
  }

  function saveCurrentNote(currentNote) {
    localStorage.setItem(noteNameRef.current.innerText, currentNote)
  }

  return (
    <>
      <main>
        <aside ref={asideRef}>
          <header>
            <section className="user-info">
              <img src="https://cdn.dribbble.com/users/8381831/avatars/normal/eb6af40c7c8968bcae225ac8c75a6bbf.png?1679945614" alt="" />
              <h3>username</h3>
            </section>

            <button className='add-new'>
              <IoAdd />
             </button>

          </header>

          <section className="quick-find">
            <input type="text" id='quick-find' ref={quickFindRef} placeholder="Busca rápida" />
            <span className='command-tip' ref={createNoteRef}>
              <p>CTRL + F</p>
            </span>
          </section>

          <h3>Minhas Notas</h3>

          <ul className='note-list'>
            {
              notes.map(note => {
                return <li key={note} onClick={() => load_note(note)}>
                  <IoDocumentOutline />
                  <p>{note}</p>
                </li>
              })
            }
          </ul>

        </aside>
        <div className="view">
          <h4 ref={noteNameRef}>file name</h4>
          <input type="text" id='rename' />
          <section className="actions">
            <IoEyeOutline ref={eyeRef} onClick={showPreview} />
            <IoCopyOutline onClick={split} />
            <IoBookmarkOutline onClick={() => saveCurrentNote(markdownlocal)} />
          </section>
          <div className="editor-preview">
            <div className='editor' ref={editorFieldRef}>

              <CodeMirror
                value={storageNote}
                onChange={handleEditorChange}
                theme={dracula}
                extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
              />
            </div>
            <div className='preview' ref={previewFieldRef}>
              <ReactMarkdown>{markdownlocal}</ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
