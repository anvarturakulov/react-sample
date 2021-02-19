import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const App = () => {

    const data = [
        {label:'Going to learn React', important : true, id:'asas'},
        {label:'That is so good', important : false,id:'qwqw'},
        {label:'I need a break...', important : false, id:'rerer'}
    ];

    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;