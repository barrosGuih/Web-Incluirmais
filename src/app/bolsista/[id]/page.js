import Style from './page.module.css';
import Link from 'next/link';
import { getAlunosById } from '../../../lib/autchat';
import Image from 'next/image';

export default async ({ params }) => {
  const bolsista = await getAlunosById(params.id);
  return (
    <div className={Style.container}>
      <div className={Style.boxperfil_bground1}>
        <div className={Style.perfilaluno}>
          <Image></Image>
          <h1 className={Style.name}>{bolsista.nome}</h1>

            <div className={Style.perfilalunobottom}>
                <div className={Style.conteudo}>
                  <h3 className={Style.name1}>Matrícula: {bolsista.matricula}</h3>
                  <h3 className={Style.name1}>Turma: {bolsista.turma || "zzz"}</h3>
                  <Link href={"./apoiadores"}>
                <button className={Style.botaoadicionar}>Adicionar apoiador</button>
                </Link>
                </div>

                
            </div>
            
        </div>
        <h1 className={Style.detalhes}>Detalhes sobre o aluno:</h1>
              <div className={Style.containerperfil}>
                <div className={Style.perfilaluno2}>
                  <p>{bolsista.descricao}</p>
                </div>

                <div className={Style.perfilaluno3}>
                <button className={Style.funcaoaluno}>Ver relatórios Quinzenais</button>
                <button className={Style.funcaoaluno}>Realizar Relatórios Sobre o Aluno</button>
                <Link href={`/agenda/${params.id}`}>
                <button className={Style.funcaoaluno}>Agenda</button>
                </Link>
            
                </div>
            
              </div>
      </div>

    </div>
  );
}