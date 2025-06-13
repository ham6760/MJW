import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Location from './pages/Location';
import Shop from './pages/Shop';
import NotFound from './notfound/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;