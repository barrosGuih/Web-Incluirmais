import Style from './page.module.css';
import Perfil from './imgs/profile1.png';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeInicial() {
  return (
    <div className={Style.container}>
      <div className={Style.boxperfil_bground1}>
        <div className={Style.boxperfil}>
          <div className={Style.ajustes}>
            <Image
              src={Perfil}
              className={Style.img}
            ></Image>
            <h1 className={Style.hello}>Bem Vindo, Sicrano!</h1>
          </div>
          <h1 className={Style.configname}>Seja bem vindo ao INCLUIR+</h1>
          <h3 className={Style.information}>Aqui você encontrará facilidade de acesso
às ajudas psicopedagogas, onde você
encontrará alunos apoiadores, aprovados
pelo sistema de aluno apoiador, para auxiliar
seus problemas durante as aulas.

Começe a fazer umas pesquisas para saber
qual o seu aluno apoiador de hoje!</h3>
        <div className={Style.botooes}>
            <Link className={Style.botaohome} href={"./apoiadores"}><button className={Style.botaohome}>Apoiadores</button></Link>
            <Link className={Style.botaohome1} href={"./apoiados"}><button className={Style.botaohome1}>Apoiados</button></Link>
        </div>
          
        </div>
      </div>
    </div>
  );
}
