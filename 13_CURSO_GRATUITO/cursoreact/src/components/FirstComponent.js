import AnotherComponent from './AnotherComponent';

function FirstComponent() {
  // Algum comentário
  const name = "Vinicius";
  return (
    <div className="firstComponent">
      {/* Comentário dentro do JSX */}
      <p>Primeiro Componente</p>
      {2 + 2 /* Template expressions */}
      <p>Nome: {name}</p> { /* Interpolação de valor */ }
      <AnotherComponent />
    </div>
  );
}

export default FirstComponent;
