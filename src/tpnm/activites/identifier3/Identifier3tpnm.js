import { useState, useEffect } from "react";
import Identifier3 from '../../../components/Identifier3';

export default function Identifier3tpnm() {
    
    const listeAChoisir = [
        't', 'p', 'n', 'm', 'r', 'v', 'l', 'd', 'b'
    ];

    return (
        <div>
            <h2 className='text-center my-3'>Les consonnes : activité 1</h2>
            <Identifier3 listeAChoisir={listeAChoisir} ndLettre={2} />
        </div>
    );
};
