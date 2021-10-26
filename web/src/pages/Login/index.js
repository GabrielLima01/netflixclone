import React from 'react';
import Header from '../../components/Header';
import { BrowserRouter, Route, Switch, Link, } from 'react-router-dom';


const Login = () => {

    return (
        <div class="container-fluid bg-filmes" style={{
            position: 'fixed',
            height: '100%',
        }}
        >
            <Header hideMenu />
            <div id="caixa-login" class="col-4 offset-4">
                <h1 class="text-white">Entrar</h1>
                <br />

                <form>
                    <input type="email" class="form-control form control-lg" placeholder="Email ou número de telefone" />
                    <br />

                    <input type="password" class="form-control form control-lg " placeholder="Senha" />
                    <br />

                    <Link to="/home"><button id="btn-width" class="btn btn-lg btn-block btn-danger">Entrar</button></Link>
                    <div class="row mt-4">
                        <div class="col text-muted">
                            <input type="checkbox" /> Lembre-se de mim
                        </div>
                        <div class="col text-right">
                            <a href="#" class="text-muted">Precisa de ajuda?</a>
                        </div>
                        <br /><br /><br /><br />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;