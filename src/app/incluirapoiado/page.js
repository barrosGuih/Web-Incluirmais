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
        </div>
  
      </div>
    </div>
  );
}
