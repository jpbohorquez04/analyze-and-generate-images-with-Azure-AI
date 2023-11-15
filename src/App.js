import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [imageUrl, setImageUrl] = useState('');
  
  const handleImageAnalysis = ({ imageUrl }) => {
    const [result, setResult] = useState(null);

    useEffect(() => {
      const makeApiCall = async () => {
        const url = "https://*.cognitiveservices.azure.com/computervision/imageanalysis:analyze";
        const apiKey = "{subscription key}";
  
        const params = {
          features: "{string}",
          "model-name": "{string}",
          language: "en",
          "smartcrops-aspect-ratios": "{string}",
          "gender-neutral-caption": "False",
        };
  
        try {
          const response = await axios.post(`${url}?api-version=2023-02-01-preview`, { url: imageUrl }, {
            headers: {
              "Content-Type": "application/json",
              "Ocp-Apim-Subscription-Key": apiKey,
            },
          });
  
          // Actualizar el estado con la respuesta JSON
          setResult(response.data);
        } catch (error) {
          console.error("Error:", error);
          // Puedes manejar el error aquí si es necesario
        }
      };
  
      makeApiCall();
    }, [imageUrl]);
  
    return (
      <div>
        {result && (
          <pre>
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    );
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

      <button onClick={() => handleImageAnalysis(imageUrl)}>Analizar Imagen</button>
      <button onClick={handleImageGeneration}>Generar Imagen</button>

      <AnalyzeImage imageUrl={imageUrl} />
    </div>
  );
}
