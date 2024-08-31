"use client"

import ButtonStyle from "./components/ButtonStyle"
import Navbar from "./components/Navbar"
import './assets/main.css'

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <div>
          <header>

            <h1>Crie Notas em Markdown📝com Praticidade em Segundos⏱</h1>

            <div>

              <p>Contribuidores do Nippon🍥</p>

              <div className="members">
                <img src="/members/beka.jpg" className="over triple-over" alt="" />
                <img src="/members/mt.jpg" className="over double-over" alt="" />
                <img src="/members/jpp.jpg" className="over" alt="" />
                <img src="/members/joaoo.jpg" className="last" alt="" />
              </div>

            </div>

          </header>
          <div className="download-buttons">
            <ButtonStyle href="/nippon.exe" platformImg="/logo-windows-1.png" system="Baixar para Windows - v.0.0.1" platform={"windows"} />
            <ButtonStyle href="/linux-unpacked" platformImg="/logo-linux-1.png" system="Baixar para Linux - v.0.0.1" platform={"linux"} />
          </div>
          <div className="img-field">
            <img id="screenshot" src="/nippon-screen.png" alt="screenshot" />
          </div>

        </div>
      </main>

    </>
  )
}
