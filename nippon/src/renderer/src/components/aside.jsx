import { IoDocumentOutline, IoAlbumsOutline, IoSquareOutline } from 'react-icons/io5';
import { useEffect, useState, useRef } from 'react'
export function Aside() {

    const [notes, setNotes] = useState([])
    const quickFindRef = useRef()
    const asideRef = useRef()

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

    return (
        <>

            <aside ref={asideRef}>
                <header>
                    <section className="user-info">
                        <img src="" alt="" />
                        <h3>Username</h3>
                    </section>
                    <section className="quick-find">
                        <input type="text" id='quick-find' ref={quickFindRef} placeholder="Busca rápida" />
                        <span className='command-tip'>
                            <IoSquareOutline />
                            <p>F</p>
                        </span>
                    </section>

                    <h3>Todas as notas (*)</h3>

                    <ul className='note-list'>
                        {
                            notes.map(note => {
                                return <li key={note}>
                                    <IoDocumentOutline />
                                    <p>{note}</p>
                                </li>
                            })
                        }
                    </ul>

                </header>
            </aside>

        </>
    )
}