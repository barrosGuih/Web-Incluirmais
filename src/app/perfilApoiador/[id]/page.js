import Style from './page.module.css';
import Link from 'next/link';
import { getAlunosById } from '../../../lib/apoiadores';
import Image from 'next/image';

export default async ({ params }) => {
  const bolsista = await getAlunosById(params.id);
  return (
    <div className={Style.container}>
      <div className={Style.boxperfil_bground1}>
        <div className={Style.perfilaluno}>
          <Image></Image>
          <h1 className={Style.name}>{bolsista.nome}</h1>

                <div className={Style.conteudo}>
                    <h3 className={Style.name1}>Matrícula: {bolsista.matricula}</h3>
                    <h3 className={Style.name1}>Turma: {bolsista.turma || "zzz"}</h3>
                  <Link href={"vincularApoiador"}>
                <button className={Style.botaoadicionar}>Adicionar apoiado</button>
                </Link>
            </div>
            <Image className={Style.fotoperfil}
                  src={bolsista.foto} 
                  width={200} 
                  height={200}>
            </Image>
        </div>
        <h1 className={Style.detalhes}>Detalhes sobre o aluno:</h1>
              <div className={Style.containerperfil}>
                <div className={Style.perfilaluno2}>
                  <p>{bolsista.descricao}</p>
                </div>

                <div className={Style.perfilaluno3}>
                <Link href={'./apoiador'}>
                <button className={Style.funcaoaluno}>Ver relatórios Quinzenais entregues</button>
                </Link>
            
                </div>
                <Image className={Style.fotoperfil}
                  src={bolsista.foto} 
                  width={200} 
                  height={200}>
                </Image>
            
              </div>
      </div>

    </div>
  );
}