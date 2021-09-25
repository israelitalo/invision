import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;