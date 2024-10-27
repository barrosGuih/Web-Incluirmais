import Style from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Incluir from './imgs/incluir.png'

export default function HomeInicial() {
  return (
    <div className={Style.container}>
      <div className={Style.boxperfil_bground1}>
        <div className={Style.conteudo}>
          <div className={Style.logocontainer}>
            <Image className={Style.Logo} src={Incluir}/>
          </div>
          <h1 className={Style.texto1}>Incluir Aluno Apoiado</h1>

          <div className={Style.forms}>

            <div className={Style.containerforms}>
          <label className={Style.laforms}>Nome:</label>
            <input className={Style.forms} type='text'></input>
          </div>

          <div className={Style.containerforms}>
          <label className={Style.laforms}>Matrícula:</label>
            <input className={Style.forms} type='text'></input>
          </div>

          <div className={Style.containerforms}>
          <label className={Style.laforms}>Turma:</label>
            <input className={Style.forms} type='text'></input>
          </div>

          <div className={Style.containerdescr}>
          <label className={Style.descr}>Descrição</label>
            <textarea className={Style.conteudodescri}></textarea>
          </div>

          <div className={Style.enviardiv}>
          <input className={Style.enviar} type='submit' placeholder='Incluir Apoiado'></input>
          </div>


        </div>

        </div>
      </div>
    </div>
  );
}
