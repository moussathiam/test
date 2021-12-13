import './lettre.css';

export default function Lettre({ lettre, choisir, activeTime, bonneLettre, mauvaiseLettre, ndLettre }) {
    return (
        <button
            disabled={activeTime}
            onClick={choisir}
            className={`
                lettre
                ${activeTime && 'lettre-active-time'}
                ${activeTime && bonneLettre && 'lettre-bonne'}
                ${activeTime && mauvaiseLettre && 'lettre-mauvaise'}
            `}
        >
            <span>
                {ndLettre == 2 &&
                    <span className="mx-2" style={{ textTransform: "lowercase" }}>
                        {lettre}
                    </span>
                }
                <span className="mx-2" style={{ textTransform: "uppercase" }}>
                    {lettre}
                </span>
            </span>
        </button>
    );
}