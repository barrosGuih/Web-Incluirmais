import Style from './page.module.css';
import Perfil from './imgs/profile1.png';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeInicial() {
  return (
    <div className={Style.container}>
      <div className={Style.boxperfil_bground1}>
      
        <div className={Style.boxperfil}>
          <div className={Style.contaitumpla}>

          </div>
          <div className={Style.tuplas}>
          <h1>Pedro Henrique Curvelo</h1>
            <Image/>
            

          </div>
          <div className={Style.botoessecun}>
            <Link href={'./incluirapoiado'}><button className={Style.butterc}>Incluir novo apoiado</button></Link>
            <Link href={'./homeInicial'}><button className={Style.butterc}>Voltar ao inicio</button></Link>

          
        </div>
          
        
          
        </div>
      </div>
    </div>
  );
}
