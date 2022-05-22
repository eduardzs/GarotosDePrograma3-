import React from 'react';
import {Container} from './styles';

export function Toolbar() {
    return <Container>
        <div>
            <nav>
                <h1>Pet Shop</h1>
                <ul>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Galeria</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Informações</a></li>
                </ul>
            </nav>
        </div>
    </Container>;
}
