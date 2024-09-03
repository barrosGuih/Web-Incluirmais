import style from './page.module.css';
import Mano from './imgs/profile1.png';
import task from './imgs/taskIcon1.png'
import chat from './imgs/chatIcon1.png'
import help from './imgs/helpIcon1.png'
import users from './imgs/usersIcon1.png'
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={style.bground_container}>
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
          <Link href={"/configperfil"}>
          <button
            className={style.configbutao}>Configurações</button>
            </Link>
        </div>
        <Link href={"./chatpage"} className={style.navBarBtns}>
          <button
            className={style.configbutao1}>
            <Image src={users} className={style.navImgs}></Image>
            Procurar usuários
          </button>
        </Link>
        <Link href={"./chatpage"} className={style.navBarBtns}>
          <button
            className={style.configbutao1}>
            <Image src={chat} className={style.navImgs}></Image>
            Chat
          </button>
        </Link>
        <Link href={"./chatpage"} className={style.navBarBtns}>
          <button
            className={style.configbutao1}>
            <Image src={help} className={style.navImgs}></Image>
            Ajuda
          </button>
        </Link>
        <Link href={"./chatpage"} className={style.navBarBtns}>
          <button
            className={style.configbutao1}>
            <Image src={task} className={style.navImgs}></Image>
            Tarefas
          </button>
        </Link>
      </div>
    </div>
  );
}
