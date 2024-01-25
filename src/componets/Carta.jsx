const Carta = ({ elemento }) => {
  console.log(elemento);
  return (
    <div>
      <p>{elemento.card.title}</p>
      <p>{elemento.card.discount}</p>
      <p>{elemento.card.price}</p>
      <p>{elemento.card.tag}</p>
      <img src={elemento.card.img} alt="imagen" />
    </div>
  );
};

export default Carta;
