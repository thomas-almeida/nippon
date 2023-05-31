"use client"

import Navbar from "../components/Navbar";
import '../assets/main.css'
import { useRef } from "react";


export default function Home() {

  const pixContainerRef = useRef<HTMLDivElement>(null)

  function closePix() {
    if (pixContainerRef.current) {
      pixContainerRef.current.style.display = 'none'
    }
  }

  function openPix() {
    if (pixContainerRef.current) {
      pixContainerRef.current.style.display = 'flex'
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <div>
          <header>
            <h1>O maior projeto que já tive como desenvolvedor Frontend</h1>
          </header>

          <article>
            <p>
              Se você testou o Nippon 🍥 e ele foi minimamente significativo ou teve qualidade e utilidade no seu uso do dia-a-dia, eu peço que para continuar o desenvolvimento dele com ainda mais energia e aumentar ainda mais a comunidade que me ajuda a desenvolvê-lo, se você acha que o Nippon é um projeto que vale algum valor monetário de no mínimo <b className="block-bold">R$ 5,00</b> considere se tornar um apoiador do projeto e ter seu nome destacado na página inicial deste site e nas redes sociais do Nippon.
            </p>

            <p>
              <br />
              Thomas Almeida.
              <br />
              <i>Desenvolvedor do Nippon.</i>
              <br />
              <button className="contribute-btn" onClick={openPix}>
                Contribuir
              </button>

            </p>


          </article>

          <div className="form-container" ref={pixContainerRef}>
            <div className="pix-container">
              <img src="/qrcode-pix.png" alt="" />

              <p>Ou Copie o Código QR</p>
              <p id="pix-code">
                00020126330014BR.GOV.BCB.PIX01115078059881452040000530398654045.005802BR5924THOMAS ALMEIDA RODRIGUES6009Sao Paulo62150511NIPPONAPOIO63041AE1
              </p>

              <button className="cancel-btn" onClick={closePix}>Fechar</button>

            </div>
          </div>

        </div>
      </main>
    </>
  )
}
