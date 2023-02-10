import { Excalidraw, Footer, MainMenu } from "@excalidraw/excalidraw"
import { useState, useEffect } from 'react'


export default function Drawboard(prop: { text: any; }) {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const CustomFooter = () => <button> Whiteboard Active</button>;

  const updateScene = () => {
    const sceneData = {
      elements: [
        {
      "id": "ppzhQk8nnTjXQbjjx78ph",
      "type": "text",
      "x": 300,
      "y": 91,
      "width": 700,
      "height": 150,
      "angle": 0,
      "strokeColor": "#000000",
      "backgroundColor": "transparent",
      "fillStyle": "hachure",
      "strokeWidth": 1,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "roundness": null,
      "seed": 543111480,
      "version": 74,
      "versionNonce": 488114504,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1675504695013,
      "link": null,
      "locked": false,
      "text": prop.text,
      "fontSize": 10,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 18,
      "containerId": null,
      "originalText": prop.text
        },
      ],
      appState: {
        viewBackgroundColor: "#edf2ff",
      },
    };
    excalidrawAPI.updateScene(sceneData);
  };

  return (
    <>
      <div>
        <div>
        <h1 className='text-white text-4xl font-bold cursor-pointer m-4 text-center absolute left-1/3'>Algo-Lego Smart Whiteboard</h1>
        </div>
        <div style={{ height: "500px" }}>
          <Excalidraw theme="dark" ref={(api) => setExcalidrawAPI(api)}>
          <MainMenu>
            <p>We are still workng on this!</p>
          </MainMenu>  
          <Footer>
            <CustomFooter />
          </Footer>
          </Excalidraw>
        </div>       
        <button onClick={updateScene} className='bg-indigo-300 px-6 py-2 rounded cursor-pointer m-4'>Update Page</button>
      </div>
    </>
  );
}
