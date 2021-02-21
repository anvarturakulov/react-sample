import React from 'react';

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size : 32px;
        :hover {
            color: ${props => props.colored ? 'green': 'red'};
        }
    }
    h2{
        font-size: 1.2rem;
        color: grey;
        :hover{
            color:blue;
        }
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header>
            <h1>Anvar Turakulov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;