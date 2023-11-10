import React, { useState } from 'react';

//function App() {
//  const value = 'World';
//  return <div>Hello {value}</div>;
//}

function App() {
  const [imageUrl, setImageUrl] = useState('');
  
  const handleImageAnalysis = () => {
    // Agrega aquí la lógica para analizar la imagen
    console.log('Analizando imagen:', imageUrl);
  };

  const handleImageGeneration = () => {
    // Agrega aquí la lógica para generar la imagen
    console.log('Generando imagen');
  };

  return (
    <div>
      <h1>Image Processing App</h1>

      <label htmlFor="imageUrl">URL de la imagen o solicitud:</label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <button onClick={handleImageAnalysis}>Analizar Imagen</button>
      <button onClick={handleImageGeneration}>Generar Imagen</button>
    </div>
  );
}

export default App;
