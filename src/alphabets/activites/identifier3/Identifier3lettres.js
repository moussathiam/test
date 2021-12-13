import { useState, useEffect } from "react";
import Identifier3 from '../../../components/Identifier3';

export default function Identifier3lettres() {
    const listeAChoisir = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    return (
        <div>
            <h2 className='text-center my-3'>Les 26 lettres de l'Alphabets : activité 1</h2>
            <Identifier3 listeAChoisir={listeAChoisir} ndLettre={2} />
        </div>
    );
};
