import style from './page.module.css';
import Mano from '../../../../public/perfil.png'
import Image from 'next/image';


export default function Home() {
    return (
      <div className={style.container}>
        <div className={style.conteudo}>
        <div className={style.ajustes}>
          <Image className={style.imgPerfil}
            src={Mano}
            width={150}
            height={150}
          ></Image>
          <h1 className={style.hello}>@Sicrano</h1>
        </div>
        <button className={style.configbutao}>Configurações</button>

        </div>
      </div>
    );
  }
