"use client"

import ButtonStyle from "./components/ButtonStyle";
import Navbar from "./components/Navbar";
import './assets/main.css'

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <div>
          <header>
            <h1>Crie Notas em Markdown📝com Praticidade em Segundos⏱ </h1>
          </header>
          <div className="download-buttons">
            <ButtonStyle platformImg="/logo-windows-1.png" system="Baixar para Windows ( Alfa )" platform={"windows"} />
          </div>
          <div className="img-field">
            <img id="screenshot" src="/nippon-screen.png" alt="screenshot" />
          </div>

        </div>
      </main>

    </>
  )
}
