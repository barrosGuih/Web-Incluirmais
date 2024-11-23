import Style from './page.module.css';
import Perfil from './imgs/profile1.png';
import Image from 'next/image';
import Link from 'next/link';
import { getAlunosById } from '@/lib/autchat';

export default async ({ params }) => {
  const bolsista = await getAlunosById(params.id);
  return (
    <div className={Style.container}>
      <div className={Style.boxperfil_bground1}>
        <div className={Style.boxperfil}>
        {/*tupla*/}
          <div className={Style.tupla}>
            <Link href={`/bolsita/${params.id}`} 
              className={Style.tuplas}>
                <h1>{bolsista.nome}</h1>
                <h1></h1>
            </Link>
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
