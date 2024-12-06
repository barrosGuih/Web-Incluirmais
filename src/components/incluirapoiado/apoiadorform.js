"use client"
import { useState } from 'react'
import Style from './style.css'
import Link from 'next/link'

export default function AlunoForm({ onAddAluno }) {
const [nome, setnome] = useState('')
const [matricula, setmatricula] = useState('')
const [turma, setturma] = useState('')
const [descricao, setdescricao] = useState('')
const [data_nasc, setdata_nasc] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  onAddAluno({ nome, matricula, turma, descricao, data_nasc })
  setnome('')
  setmatricula('')
  setturma('')
  setdescricao('')
  setdata_nasc('')
  

 }

 return(
    <form onSubmit={handleSubmit}>
          <div className={Style.forms}>

            <div className={Style.containerforms}>
          <label className={Style.laforms}>Nome:</label>
            <input className={Style.forms} 
            type='text'
            value={nome}
            onChange={(e) => setnome(e.target.value)}></input>
          </div>

          <div className={Style.containerforms}>
          <label className={Style.laforms}>Matrícula:</label>
            <input className={Style.forms} 
            type='text'
            value={matricula}
            onChange={(e) => setmatricula(e.target.value)}></input>
          </div>

          <div className={Style.containerforms}>
          <label className={Style.laforms}>Data de nascimento: </label>
            <input className={Style.forms} 
            type='date'
            value={data_nasc}
            onChange={(e) => setdata_nasc(e.target.value)}></input>
          </div>

          <div className={Style.containerforms}>
          <label className={Style.laforms}>Turma:</label>
            <input className={Style.forms } 
            type='text'
            value={turma}
            onChange={(e) => setturma(e.target.value)}></input>
          </div>

          <div className={Style.containerdescr}>
          <label className={Style.descr}>Descrição</label>
            <input className={Style.forms}
            type='text'
            value={descricao}
            onChange={(e) => setdescricao(e.target.value)}></input>
          </div>

          <div className={Style.enviardiv}>
          <Link href={'./apoiadorincluido'}><button className={Style.enviar}type='submit' placeholder='Incluir Apoiado'>Cadastrar Apoiador</button></Link>
          </div>
        </div>
        </form>
        
    )
}

