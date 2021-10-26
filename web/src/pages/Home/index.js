import React, { useState, useEffect, Fragment } from 'react';
import Header from '../../components/Header';
import Dark from '../../assets/filmes/dark.png';
import The100 from '../../assets/filmes/the100.jpg';
import elite from '../../assets/filmes/elite.png';
import brkbad from '../../assets/filmes/brkbad.jpg';
import twd from '../../assets/filmes/twd.jpg';
import flash from '../../assets/filmes/flash.jpg';
import lacasa from '../../assets/filmes/lacasa.jpg';
import old from '../../assets/filmes/theold.jpg';
import velozes from '../../assets/filmes/velozes.jpg';
import esquadrao6 from '../../assets/filmes/esquadrao6.jpg';
import tropa from '../../assets/filmes/tropa.jpg';
import rick from '../../assets/filmes/rickandmorty.jpg';
import rota from '../../assets/filmes/rota.jpg';
import brooklyn99 from '../../assets/filmes/brooklyn99.jpg';
import greys from '../../assets/filmes/greys.jpg';
import riverdale from '../../assets/filmes/riverdale.jpg';
import myname from '../../assets/filmes/myname.jpg';
import refem from '../../assets/filmes/refem.jpg';
import voce from '../../assets/filmes/voce.jpg';



// Tive que dar vários imports das imagens, pois pelo src{''} não estava indo e não deu tempo de conseguir consumir uma API externa
// Lógica do componente
const Home = () => {

    //Retornar o HTML do componente
    return (
        <>
        <div class="container-fluid">
        <Header/>
            <div id="hero" class="container-fluid">
                <div class="container">
                    <div class="row" id="hero-infos">
                        
                        <div class="col-6">
                            <img class="logo" src="../../assets/round6logo.png" />
                            <h1 id="h1-left" class="text-white">Top 1 de hoje no Brasil.</h1>
                            <p id="p-left" class="text-white">Centena de jogadores falidos aceitam um estranho convite
                                para um jogo de sobrevivência. Um prêmio milionário aguarda,
                                mas as apostas são altas e mortais.
                            </p>
                            <br />

                            <button class="btn btn-lg btn-custom-white">
                                <span class="mdi mdi-play"> </span> Assistir
                            </button>

                            <button class="btn btn-lg btn-custom-translucent">
                                <span class="mdi mdi-information-outline"></span> Mais Informações
                            </button>
                        </div>
                    </div>
                </div>
            </div>
   


<div id="main-content">
<section>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h5 id="h5-left" class="text-white">Populares da Netflix</h5> 
            </div>
        </div>
        <div class="col-12">
            <ul class="filme-lista">
                <li class="filme">
                <img class="img-fluid" src={Dark}/>
                    <div class="filme-info">
                        <div class="col-12">
                            <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                <span class="mdi mdi-play"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-down text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-plus text-white"></span>
                            </a>
                        </div>
                       <p> T3:EP2<text> "Os sobreviventes"</text></p>
                    </div>
                </li>
                <li class="filme">
                    <img class="img-fluid" src={brkbad} />
                    <div class="filme-info">
                        <div class="col-12">
                            <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                <span class="mdi mdi-play"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-down text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-plus text-white"></span>
                            </a>
                        </div>
                       <p>T3:EP2<text> "Cavalo sem nome"</text></p>
                    </div>
                </li>
                <li class="filme">
                    <img class="img-fluid" src={The100} />
                    <div class="filme-info">
                        <div class="col-12">
                            <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                <span class="mdi mdi-play"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-down text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-plus text-white"></span>
                            </a>
                        </div>
                       <p>T2:EP1<text> "O 48"</text></p>
                    </div>
                </li>
                <li class="filme">
                    <img class="img-fluid" src={elite} />
                    <div class="filme-info">
                        <div class="col-12">
                            <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                <span class="mdi mdi-play"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-down text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-plus text-white"></span>
                            </a>
                        </div>
                       <p>T4:EP3<text> "Mentiras e tentação"</text></p>
                    </div>
                </li>
                <li class="filme">
                    <img class="img-fluid" src={twd} />
                    <div class="filme-info">
                        <div class="col-12">
                            <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                <span class="mdi mdi-play"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-down text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-plus text-white"></span>
                            </a>
                        </div>
                       <p>T5:EP2<text> "Desconhecidos"</text></p>
                    </div>
                </li>
                <li class="filme">
                    <img class="img-fluid" src={riverdale} />
                    <div class="filme-info">
                        <div class="col-12">
                            <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                <span class="mdi mdi-play"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-thumb-down text-white"></span>
                            </a>
                            <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                <span class="mdi mdi-plus text-white"></span>
                            </a>
                        </div>
                       <p>T1:EP1<text> "Na margem do rio"</text></p>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        </section>
    </div>
 </div>



 <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 id="h5-left" class="text-white">Recomendados da Netflix</h5> 
                    </div>
                </div>
                <div class="col-12">
                    <ul class="filme-lista">
                        <li class="filme">
                            <img class="img-fluid" src={rick}/>
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                               <p> T1:EP1<text> "Piloto"</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src={lacasa} />
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                               <p>T5:EP2<text> "Você acredita em reencarnação?"</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src={flash} />
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                               <p>T5:EP1<text> "Nora"</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src={voce} />
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                               <p>T1:EP4<text> "Vivendo com o inimigo"</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src={brooklyn99} />
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                               <p>T6:EP3<text> "O Dedo-duro"</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src={greys} />
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                               <p>T1:EP2<text> "O primeiro plantão é o mais difícil"</text></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
         </section>
         
         <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 id="h5-left" class="text-white">Filmes de Ação</h5> 
                    </div>
                </div>
                <div class="col-12">
                    <ul class="filme-lista">
                        <li class="filme">
                            <img class="img-fluid" src={velozes} />
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                                <p>Lançamento:<text> 2017</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src={tropa} />
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                                <p>Lançamento:<text> 2007</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src={old}/>
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                                <p>Lançamento:<text> 2020</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src={esquadrao6} />
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                                <p>Lançamento:<text> 2019</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src={refem} />
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                                <p>Lançamento:<text> 2018</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src={myname} />
                            <div class="filme-info">
                                <div class="col-12">
                                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                                        <span class="mdi mdi-play"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-up text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-thumb-down text-white"></span>
                                    </a>
                                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                                        <span class="mdi mdi-plus text-white"></span>
                                    </a>
                                </div>
                                <p>Lançamento:<text> 2021</text></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
         </section>
        
    

 </>
        ); 

    };



export default Home;
