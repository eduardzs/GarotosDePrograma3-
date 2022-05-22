import React from 'react';
import {Toolbar} from '../componentes/navbar/toolbar'
import {Container} from './styles'
import {Sidebar} from '../componentes/sidebar/sidebar'
import {Home} from '../pages/home/index'
// import { Container } from './styles';

function Layout() {
    return <Container>
        <header>
            <Toolbar />
        </header>
        <section className="sidebar_layout">
            <Sidebar />
        </section>
        <article>
            <Home />
        </article>
    </Container>;

}

export default Layout;