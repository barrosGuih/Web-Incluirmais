<<<<<<< HEAD
import Home1 from './navbar/page'
import ConfigPerfil from './configperfil/page';
=======
import Home1 from './Components/navbar/page'
import ConfigPerfil from './Components/Configperfil/page';
>>>>>>> 647768493cc4abec0344113fc856d4f8200be853
import Style from './page.module.css';

export default function Home() {
  return (
    <div className={Style.container}>
      <ConfigPerfil/>
    </div>
  );
}
