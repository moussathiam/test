import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './template.css';
import Menu from './Menu';
import Identifier3lettres from '../alphabets/activites/identifier3/Identifier3lettres';
import Identifier3chiffres from '../chiffres/activites/identifier3/Identifier3chiffres';
import Identifier3tpnm from '../tpnm/activites/identifier3/Identifier3tpnm';

export default function Template() {
    return (
        <BrowserRouter>
            <div className='template'>
                <div className='en-tete'>
                    entete
                </div>
                <div className='nav-bar'>
                    <Menu />
                </div>
                <div className='body'>
                    <Routes>
                        <Route path="/identifier3lettres" element={<Identifier3lettres />} />
                        <Route path="/identifier3chiffres" element={<Identifier3chiffres />} />
                        <Route path="/identifier3tpnm" element={<Identifier3tpnm />} />
                    </Routes>
                </div>
                fss
            </div>
        </BrowserRouter >
    );
};
