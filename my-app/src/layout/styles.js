import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25vw);
    grid-gap: 0px;
    width: 100%;
    height: 100%;
    grid-template-rows: repeat(4, 25vh);
    header{
        grid-column: 1 / 5;
        grid-row: 1 / 1;
    }
    .sidebar_layout{
        grid-column: 1 / 2;
        grid-row: 2 / 5;
        width: 100%;
        height: 100%;
        background-color: red;
    }
`