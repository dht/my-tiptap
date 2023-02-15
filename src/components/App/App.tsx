import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Wrapper } from './App.style';
import Page from '../Page/Page';

export type AppProps = {};

export function App(_props: AppProps) {
    return (
        <Wrapper className='App-wrapper' data-testid='App-wrapper'>
            <Router>
                <Routes>
                    <Route path='/' element={<Page />} />
                </Routes>
            </Router>
        </Wrapper>
    );
}

export default App;
