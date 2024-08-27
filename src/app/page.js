import Home1 from './Components/navbar/page'
import ConfigPerfil from './Components/configperfil/page';
import Style from './page.module.css';

export default function Home() {
  return (
    <div className={Style.container}>
      <ConfigPerfil/>
    </div>
  );
}
