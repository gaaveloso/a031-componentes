import React from 'react'
import '../App.css'
import '../App'
import InfosUsuario from './InfosUsuario';

function CardVideo(props) {
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }
    return (
        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>
          <section className="painel-de-videos">
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{props.titulo}</h4>
                <InfosUsuario user={props.user}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{props.titulo}</h4>
              <InfosUsuario user={props.user}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{props.titulo}</h4>
              <InfosUsuario user={props.user}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{props.titulo}</h4>
              <InfosUsuario user={props.user}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{props.titulo}</h4>
              <InfosUsuario user={props.user}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{props.titulo}</h4>
              <InfosUsuario user={props.user}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{props.titulo}</h4>
              <InfosUsuario user={props.user}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{props.titulo}</h4>
              <InfosUsuario user={props.user}/>
            </div>
          </section>
        </main>
    )
}

export default CardVideo;