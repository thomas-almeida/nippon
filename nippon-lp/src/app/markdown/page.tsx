"use client"

import Navbar from "../components/Navbar";
import '../assets/main.css'

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <div>
          <header>
            <h1>O que é Markdown📝 e Como Escrever Notas no Nippon🍥</h1>
          </header>

          <article>
            <p>
              Markdown é uma linguagem de marcação simples e leve que permite a formatação de textos de maneira fácil e rápida. Com sua sintaxe simplificada, é possível adicionar elementos de formatação, como cabeçalhos, listas, links e ênfases, utilizando apenas caracteres comuns de texto. Ao escrever em Markdown, não é necessário lidar com códigos HTML complexos, tornando-o acessível até mesmo para aqueles que não possuem conhecimento em programação. Além disso, o Markdown é amplamente utilizado em diversas plataformas, como blogs, fóruns e sistemas de gerenciamento de conteúdo, pois permite a criação de documentos bem estruturados e legíveis, sem perder a praticidade.
            </p>

            <p>
              Com o Nippon 🍥 você pode escrever suas anotações com markdown usando uma interface incrivelmente prática e feita para que o seu foco na hora de digitar suas notas e documentações seja otimizado ao máximo. Este é um projeto que surgiu com a necessidade de ser um app minimalista, com poucos elementos ou recursos que apenas aumentam a ansidade de um usuário na hora de tentar ser organizado, o Nippon 🍥 foi desenvolvido para ser um app simplificado e com recursos verdadeiramente úteis para os usuários.
            </p>

            <p>
              Eu mesmo, já tentei concentrar minhas anotações e documentos em varios apps que recomendam por aí, mas pela “overdose” de recursos inúteis para tarefas super simples  eu nunca consegui terminar um projeto ou checklist sequer nestes apps. Daí somando isso junto das skills de desenvolvedor de software o Nippon 🍥 é hoje meu principal produto Frontend e portfólio, onde espero de coração entreter e ajudar usuários a escreverem suas notas com facilidade e muita praticidade.
            </p>

            <p>

              Alguns exemplos de como escrever Notas em MD:

              <ul>
                <li>#: <h3>Títulos</h3></li>
                <li>****: <b>Negrito</b></li>
                <li>**: <i>Itálico</i></li>
                <li> + : Listas</li>
                <li>[Clique Aqui](https://Nippon): Links</li>
                <li>![Nippon Logo](https://Nippon): Imagens (sim, vc precisa do link delas)</li>
              </ul>


            </p>

            <p>

              Atalhos do teclado que otimizam a experiência de escrever notas e documentações com o  Nippon 🍥 :

              <ul>
                <li>CTRL + F: Busca Rápida</li>
                <li>CTRL + S: Salvar Nota</li>
                <li>CTRL + D: Dividir entre editor e preview</li>
                <li>CTRL + E: Mostrar Editor / Mostrar Preview</li>
                <li>CTRL + N: Criar nova Nota</li>
              </ul>


            </p>
          </article>

        </div>
      </main>
    </>
  )
}
