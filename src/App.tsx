import React, { FC } from 'react';
import GlobalStyles from './theme/global';
import { ThemeProvider } from 'styled-components';
import { useStore } from './store/RootStateContext';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';

const App: FC = observer(() => {
    const { uiStore } = useStore();

    return (
        <ThemeProvider theme={uiStore.theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
});

export default App;
