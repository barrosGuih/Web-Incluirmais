'use client'
import Style from './page.module.css';
import Perfil from './imgs/profile1.png';
import Voltar from './imgs/voltar.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Apoiados ({ params }) {
  const [alunos, setAlunos] = useState([]);
  
    const fetchAlunos = async () => {
      const res = await fetch('/api/alunos');
      const data = await res.json();
      setAlunos(data);
    }
  
    useEffect(() => {
      fetchAlunos();
    }, []);
  
    return (
      <div className={Style.container}>
        <div className={Style.boxperfil_bground1}>
        <Link href={'./homeInicial'} className={Style.voltarBack}><Image src={Voltar} className={Style.imgVoltar}></Image></Link>
        <div className={Style.divSearch}>

          <div className={Style.iconSearch}></div>
              <input placeholder= "Pesquisar alunos..." className={Style.search}></input>
              {/*<Link href={'./homeInicial'}><button className={Style.butterc}>Voltar ao inicio</button></Link>*/}
              
            </div>
          <div className={Style.boxperfil}>
          {/*tupla*/}
            <div className={Style.tupla1}>
              {alunos.map(a => 
              <Link  href={"/perfilApoiado/" + a.id} className={Style.tuplas}> 
              <div className={Style.tupla}>
                  <div className={Style.divdotexto}><div><h1 className={Style.nomee}> 
                  {a.nome}</h1> <h3 className={Style.info}>data nasc: {a.data_nasc}ㅤㅤㅤTurma: {a.turma}</h3> </div></div>
                  <Image className={Style.fotoperfil}
                      src={a.foto} 
                      width={75} 
                      height={65}>
                  </Image>
              </div>
              </Link>
              )}
              </div>
         
          {/*tupla*/}
              
          </div>
          <div className={Style.botoessecun}>
              <Link href={'./incluirapoiado'}><button className={Style.butterc}> INCLUIR NOVO APOIADO</button></Link>
            </div>
        </div>
      </div>
    );
}
