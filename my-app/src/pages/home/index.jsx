import React from 'react';
import { useState } from 'react';
import {Container} from './styles';

export function Home() {
    const [evento_click, setEventClick] = useState(false)
    function onclick(){
        if(
            evento_click==false
        ){
            alert('Home');
        }
        setEventClick(!evento_click)
    }
    return <Container>
        <article>
            <p>
                Velit qui duis nisi proident dolor ex ea ea cupidatat cupidatat ut aute sint non. Laborum enim anim anim labore. Id proident voluptate id labore in qui. Nisi aliqua in officia aliqua ullamco eiusmod.
            </p>
            <button onClick={()=>onclick()}>Enviar</button>
        </article>
    </Container>;
}
