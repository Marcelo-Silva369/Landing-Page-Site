

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src="imagem1.jpg"
          alt="Descrição 1"
          className="w-full md:w-1/2 object-cover"
        />
        <img
          src="imagem2.jpg"
          alt="Descrição 2"
          className="w-full md:w-1/2 object-cover"
        />
      </div>
    </>
  );
}

export default App;
