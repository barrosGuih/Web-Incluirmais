'use client'
import Style from './page.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import Link from 'next/link';
import ApoiadoForm from '../../components/incluirapoiado/apoiadoform'
import Incluir from './imgs/incluir.png'

export default function HomeInicial() {
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    fetchAlunos()
  }, [])

  const fetchAlunos = async () => {
    const response = await fetch('/api/alunos')
    if(response.ok){
      const data = await response.json()
    setAlunos(data)
    } else {
      console.error('erro seu trouxa a buscar os alunos', response.status, response.statusText);
    }
    
  }

  const addAluno = async (aluno) => {
    const response = await fetch('/api/alunos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(aluno),
    })
    if (response.ok) {
      fetchAlunos() 
    }else { console.error('Falha ao adicionar aluno:', await response.text()); }
  }

  return (
    <div className={Style.container}>
      <div className={Style.boxperfil_bground1}>
        <div className={Style.conteudo}>
        <Link href={"./homeInicial"}><div className={Style.logocontainer}>
            <Image className={Style.Logo} src={Incluir}/>
          </div></Link>
          <h1 className={Style.texto1}>Incluir Aluno Apoiado</h1>
          <ApoiadoForm onAddAluno={addAluno}></ApoiadoForm>
        </div>
      </div>
    </div>
  );
}
