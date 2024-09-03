import Style from './page.module.css';
import Perfil from './imgs/profile1.png';
import Image from 'next/image';

export default function ConfigPerfil() {
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
          <h1 className={Style.configname}>Configurações da conta:</h1>
          <div className={Style.botoesDiv}>
            <button className={Style.botaoconfig}>Editar nome de usuário</button>
            <button className={Style.botaoconfig}>Editar tipo de usuário</button>
            <span className={Style.lineBreak1}></span>
            <button className={Style.botaoconfig}>Configurações de privacidade</button>
            <span className={Style.lineBreak1}></span>
            <button className={Style.botaoconfig}>Mudar de conta</button>
            <button className={Style.botaoconfig1}>Excluir conta</button>
          </div>
        </div>
      </div>
    </div>
  );
}
