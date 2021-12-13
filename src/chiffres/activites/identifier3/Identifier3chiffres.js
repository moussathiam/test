import Identifier3 from "../../../components/Identifier3";

export default function Identifier3chiffres() {

  const listeAChoisir = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'
  ];

  return (
    <div>
      <h2 className='text-center my-3'>Les chiffres  0 à 10 : activité 1</h2>
      <Identifier3 listeAChoisir={listeAChoisir} ndLettre={1} />
    </div>
  );
};