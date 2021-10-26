import React from "react";
import Dark from '../../assets/filmes/dark.png';
import The100 from '../../assets/filmes/the100.jpg';
import elite from '../../assets/filmes/elite.png';
import brkbad from '../../assets/filmes/brkbad.jpg';


const Secao = () =>{
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
                       <p> T3:EP8<text> "Meu Episódeo"</text></p>
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
                       <p>T3:EP8<text> "Meu Episódeo"</text></p>
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
                       <p>T3:EP8<text> "Meu Episódeo"</text></p>
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
                       <p>T3:EP8<text> "Meu Episódeo"</text></p>
                    </div>
                </li>
                <li class="filme">
                    <img class="img-fluid" src="assets/filmes/twd.jpg" />
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
                       <p>T3:EP8<text> "Meu Episódeo"</text></p>
                    </div>
                </li>
                <li class="filme">
                    <img class="img-fluid" src="assets/filmes/flash.jpg" />
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
                       <p>T3:EP8<text> "Meu Episódeo"</text></p>
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
                            <img class="img-fluid" src="assets/filmes/rickandmorty.jpg" />
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
                            <img class="img-fluid" src="assets/filmes/lacasa.jpg" />
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
                               <p>T3:EP1<text> "Meu Episódeo"</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src="assets/filmes/twd.jpg" />
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
                               <p>T3:EP8<text> "Meu Episódeo"</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src="assets/filmes/flash.jpg" />
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
                               <p>T3:EP8<text> "Meu Episódeo"</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src="assets/filmes/brkbad.jpg" />
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
                               <p>T3:EP8<text> "Meu Episódeo"</text></p>
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src="assets/filmes/brkbad.jpg" />
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
                               <p>T3:EP8<text> "Meu Episódeo"</text></p>
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
                            <img class="img-fluid" src="assets/filmes/velozes.jpg" />
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
                               
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src="assets/filmes/rota.jpg" />
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
                               
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src="assets/filmes/theold.jpg" />
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
                              
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src="assets/filmes/esquadrao6.jpg" />
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
                               
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src="assets/filmes/tropa.jpg" />
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
                               
                            </div>
                        </li>
                        <li class="filme">
                            <img class="img-fluid" src="assets/filmes/babydriver.jpg" />
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
                              
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
         </section>
        
    

 </>
   
    );
};


export default Secao;