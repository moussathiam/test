import { useState, useEffect } from "react";
import './identifier3.css';
import Lettre from "./Lettres";

export default function Identifier3({ listeAChoisir, ndLettre }) {

    const [lettres, setLettres] = useState([]);
    const [lettreFind, setLettreFind] = useState("");
    const [lettreChoisie, setLettreChoisie] = useState("");
    const [tours, setTours] = useState([]);
    const [nbTours, setNbTours] = useState(0);
    const [trouver, setTrouver] = useState(0);
    const [start, setStart] = useState(false);
    const [intervalle, setIntervalle] = useState(null);
    const [activeTime, setActiveTime] = useState(true);


    function aleatoire() {
        var lettreTpm = [];
        var lettre;
        setActiveTime(false);
        for (let i = 0; i < 3; i++) {
            do {
                lettre = listeAChoisir[Math.floor(Math.random() * listeAChoisir.length)];
            } while (lettreTpm.includes(lettre));
            lettreTpm.push(lettre);
        }
        setLettres(lettreTpm);
        var lettreFindTmp = lettreTpm[Math.floor(Math.random() * 3)];
        setLettreFind(lettreFindTmp);
        sound(lettreFindTmp);
        setIntervalle(setInterval(() => sound(lettreFindTmp), 4000));
        console.log("trouve : ", lettreFindTmp);
    }

    function sound(lettre) {
        var audio = new Audio(`/alphabets/${lettre}.mp3`);
        audio.volume = 1;
        audio.play();
    }

    function choisir(lettreChoisi) {
        setActiveTime(true);
        clearInterval(intervalle);
        setLettreChoisie(lettreChoisi);
        var tourtmp = tours;
        tourtmp[nbTours].lettre = lettreFind;
        if (lettreChoisi === lettreFind) {
            tourtmp[nbTours].state = 1;
            setTrouver(trouver + 1);
            setTimeout(() => {
                var audio = new Audio(`/effectSounds/true.mp3`);
                audio.volume = 0.1;
                audio.play();
            }, 300);
        } else {
            tourtmp[nbTours].state = 2;
            setTimeout(() => {
                var audio = new Audio(`/effectSounds/false.mp3`);
                audio.volume = 0.1;
                audio.play();
            }, 300);
        }
        setTours(tourtmp);
        if (nbTours < 9) {
            setTimeout(() => {
                aleatoire();
            }, 2000);
        } else {
            console.log("FIN");
            setTimeout(() => {
                var audio = new Audio(`/effectSounds/alltrue.mp3`);
                audio.volume = 0.1;
                audio.play();
            }, 2000);
        }
        setTimeout(() => {
            setNbTours(nbTours + 1);
        }, 2000);

    }

    function debut() {
        setNbTours(0);
        setTrouver(0);
        var tabTmp = [];
        for (let index = 0; index < 10; index++) {
            tabTmp.push({ state: 0, lettre: '?' });
        }
        setTours(tabTmp);
    }

    function demonte()
    {
        clearInterval(intervalle);
    }

    useEffect(() => {
        debut();
    }, []);

    useEffect(() => {
        return () => {
            clearInterval(intervalle);
            console.log("identifier demonte : ", intervalle);
        };
    }, [intervalle]);

    return (
        <div className="identifier3">
            <div className="tours row">
                {tours.map((tour, key) => (
                    <div key={key} className={`tour tour-${tour.state === 0 ? "0" : tour.state === 1 ? "ok" : "no"}`}>
                        {tour.lettre}
                    </div>
                ))}
            </div>
            {!start &&
                <>
                    <div className="commencer">
                        <button className="btn btn-success" onClick={() => { aleatoire(); setStart(true); }}>Commencer</button>
                    </div>
                </>
            }
            {nbTours < 10 && start &&
                <>
                    <div className="lettres row">
                        {lettres.map(lettre => (
                            <div className="col">
                                <Lettre ndLettre={ndLettre} mauvaiseLettre={lettre !== lettreFind && lettre === lettreChoisie ? true : false} bonneLettre={lettre === lettreFind ? true : false} choisir={() => choisir(lettre)} lettre={lettre} activeTime={activeTime} />
                            </div>
                        ))
                        }
                    </div>
                </>
            }
            {nbTours >= 10 &&
                <>
                    <div className="fin row">
                        <div className="col col-md-12 col-sm-12 resultat text-center">
                            {trouver === 10 &&
                                <div className="coupe">
                                    <img src="/coupe.png" />
                                </div>
                            }
                            {10 - trouver} faute{trouver < 9 && "s"}
                        </div>
                        <button className="btn btn-success" onClick={() => { debut(); aleatoire(); }}>Recommencer</button>
                    </div>
                </>
            }
        </div>
    );
}