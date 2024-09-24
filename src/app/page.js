import Home1 from './navbar/page'
import ConfigPerfil from './configperfil/page';
import Style from './page.module.css';

export default function Home() {
  return (
    <div className={Style.container}>
      <ConfigPerfil/>
    </div>
  );
}
