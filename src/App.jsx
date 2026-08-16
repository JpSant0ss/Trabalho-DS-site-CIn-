import { useState } from 'react'
import './App.css'
import CADtelalogin from './assets/CADtelalogin.png'
import CADtelapacientes from './assets/CADtelapacientes.png'
import IPjogo from './assets/IPjogo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>João Pedro Santos</h1>

      <h2>Estudante de Sistemas de Informação (2º período)</h2>

      <p>Sou estudante de Sistemas de Informação no {" "}
  <a href="https://cin.ufpe.br/" target="_blank" rel="noopener noreferrer">
    CIn-UFPE
  </a>{" "} e atualmente estou desenvolvendo minha formação acadêmica através de disciplinas relacionadas à programação, 
  desenvolvimento de sistemas e fundamentos da computação.</p>

  <p>Tenho interesse em programação, UX/UI e criação/idealização de produtos digitais. 
    Gosto de explorar e estudar as relações entre tecnologia, design e experiência de usuário.</p>

    <p style= {{marginBottom: '35px'}}>Você pode entrar em contato comigo pelo e-mail:jpmcs@cin.ufpe.br</p>

    <h2>Portfólio:</h2>

    <h3> Projeto: Redesign do Prontuário Eletrônico SESAU (Uskara do Gusto)</h3>
    <h4>Disciplina: Concepção de artefatos digitais (CAD)</h4>

    <p style= {{marginBottom: '20px'}}>O projeto se baseia na reestruturação e redesign da interface do Prontuário Eletrônico da Secretaria de Saúde do Recife (SESAU).
       Ele foi pensado para resolver a alta fragmentação tecnológica e a baixa usabilidade dos sistemas de saúde municipais, com o objetivo de que os 
       médicos e enfermeiros acessem o histórico clínico do paciente de forma contínua, centralizada e ágil durante o atendimento na rede pública. 
       <br />
       Link do protótipo: {" "}
       <a href= "https://id-preview--253626f3-4541-4f42-bc5d-a29021b1cabb.lovable.app/" 
       target="_blank"
       rel="noopener noreferrer" > Acessar protótipo</a>
       </p>

       <img src={CADtelalogin} style={{ marginBottom: '30px' }}/>
       <img src={CADtelapacientes} style={{ marginBottom: '50px' }}/>

    <h3>Projeto: Super Mario Carne</h3>

    <h4>Disciplina: Introdução a Programação (IP)</h4>

    <p style={{marginBottom:'20px'}}> Esse projeto teve como objetivo aprimorar os conhecimentos adquiridos na cadeira Introdução a Programação,
      aprendendo sobre Pygame e POO. Nosso trabalho foi um jogo inspirado no famoso Super Mario World.
      <br />
      Link do repositório: {" "}
      <a href= "https://github.com/agls-scfc/Projeto-IP"
      target= "_blank"
      rel= "noopener noreferrer" > Acessar repositório</a>
      </p>

      <img src={IPjogo}/>
       
       

    

    </>
  )
}

export default App

