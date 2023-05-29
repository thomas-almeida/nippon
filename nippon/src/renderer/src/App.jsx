
import { useState, useRef, useEffect } from 'react';

import { IoEyeOutline, IoDocumentOutline, IoCopyOutline, IoBookmarkOutline, IoAdd, IoCreateOutline, IoEllipsisHorizontal, IoTrashOutline } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown'
import 'prismjs/themes/prism-tomorrow.css';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { dracula } from '@uiw/codemirror-theme-dracula'
import Prism from 'prismjs'

export
  function App() {

  const [fileName, setFileName] = useState([])
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

  }, [])

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


    window.addEventListener('keydown', function (tecla) {
      if (tecla.ctrlKey && tecla.key === 'd') {
        split()
      }
    })



    window.addEventListener('keydown', function (tecla) {
      if (tecla.ctrlKey && tecla.key === 'n') {
        newNote()
      }
    })

  })


  useEffect(() => {
    window.addEventListener('keydown', function (tecla) {
      if (tecla.ctrlKey && tecla.key === 'e') {
        showPreview()
      }
    })
  }, [])

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
    setMarkdown(localStorage.getItem(note))
    var rename = document.querySelector('#rename')
    rename.value = note
    setFileName(rename.value)
  }

  function saveCurrentNote(currentNote) {
    var rename = document.querySelector('#rename')

    if (rename.value === '') {

      let notify = document.querySelector('#notify')
      notify.style.display = 'block'
      notify.innerText = 'Nota sem nome ⛔'

      let showNotify = setInterval(function () {
        notify.style.display = 'none'
        clearInterval(showNotify)
      }, 2000)

    } else {

      localStorage.setItem(rename.value, currentNote)

      let notify = document.querySelector('#notify')
      notify.style.display = 'block'
      notify.innerText = 'Nota Salva ✅'

      let showNotify = setInterval(function () {
        notify.style.display = 'none'
        clearInterval(showNotify)
      }, 2000)

    }

  }

  function newNote() {
    setStorageNote('')
    var rename = document.querySelector('#rename')
    rename.value = 'Nova nota'
    setFileName(rename.value)
    localStorage.setItem('Nova nota', setStorageNote)
  }

  function renameNote(noteName) {

    var rename = document.querySelector('#rename')

    if (rename.readOnly) {
      rename.removeAttribute('ReadOnly')
    } else {
      if (rename.value === '') {

        let notify = document.querySelector('#notify')
        notify.style.display = 'block'
        notify.innerText = 'Nota sem nome ⛔'

        let showNotify = setInterval(function () {
          notify.style.display = 'none'
          clearInterval(showNotify)
        }, 2000)

      } else {

        let noteContent = localStorage.getItem(noteName)
        localStorage.removeItem(noteName)
        localStorage.setItem(rename.value, noteContent)
        rename.readOnly = true

        let notify = document.querySelector('#notify')
        notify.style.display = 'block'
        notify.innerText = 'Nota Renomeada 📝'

        let showNotify = setInterval(function () {
          notify.style.display = 'none'
          clearInterval(showNotify)
        }, 2000)

      }
    }

  }

  function openOption(noteName) {

    let note_to_delete = document.querySelector('#note-to-delete')
    note_to_delete.innerText = noteName

    let options = document.querySelector('#mouse-option')

    if (event.target.closest('li')) {
      options.style.display = 'flex'
      options.style.left = event.clientX + 'px'
      options.style.top = event.clientY + 'px'
    } else {
      options.style.display = 'none'
    }

    document.addEventListener('click', function (event) {
      const liElement = event.target.closest('li'); // Verifica o elemento <li> mais próximo

      if (!liElement) {
        // Se o clique foi em qualquer outro lugar além da <li>, esconda a mini div
        options.style.display = 'none';
      }
    });

  }

  function removeNote() {
    let note_to_delete = document.querySelector('#note-to-delete')
    localStorage.removeItem(note_to_delete.innerText)

    let notify = document.querySelector('#notify')
    notify.style.display = 'block'
    notify.innerText = 'Nota Excluída 💡'

    let showNotify = setInterval(function () {
      notify.style.display = 'none'
      clearInterval(showNotify)
    }, 2000)

  }

  return (
    <>
      <main>
        <aside ref={asideRef}>
          <header>
            <section className="user-info">
              <img src="https://public.nftstatic.com/static/nft/webp/nft-cex/S3/1670005026631_0me2vqk7fqy4hujdwj0q1gr4ydpmkhv7_600x600.webp" alt="" />
              <h3>nippon 🍥</h3>
            </section>

            <button className='add-new' onClick={newNote}>
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
                return (
                  <>
                    <li key={note} onClick={() => load_note(note)} onContextMenu={() => openOption(note)}>
                      <IoDocumentOutline />
                      <p>{note}</p>
                    </li>

                  </>
                )

              })
            }
          </ul>

          <div className='options' id='mouse-option' onClick={removeNote}>
            <p id='note-to-delete'></p>
            <p>Deletar</p>
            <IoTrashOutline />
          </div>

        </aside>
        <div className="view">

          <div className='notify' id='notify'>
            <p>Notificação Sucesso</p>
          </div>

          <section className='file-name-field'>
            <input type="text" id='rename' placeholder='Selecione ou Crie uma nota' readOnly />
            <IoCreateOutline onClick={() => renameNote(fileName)} />
          </section>

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
