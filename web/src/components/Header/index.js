import React from 'react';
import logo from '../../assets/logo.png';
import { BrowserRouter, Route, Switch, Link, } from 'react-router-dom';

const Header = ({hideMenu}) => {
    return (
        <header class="row">
        <div class="col-2">
        <Link to="/"> <a href="#"><img class="netflix-logo" src={logo}/></a></Link>
        </div>
        
        {!hideMenu && (
        <div class="col-8">
            <ul class="menu-list">
                <li><a href="#">Início</a></li>
                <li><a href="#">Séries</a></li>
                <li><a href="#">Filmes</a></li>
            </ul>
        </div>)}
        </header>
    );
}

export default Header;