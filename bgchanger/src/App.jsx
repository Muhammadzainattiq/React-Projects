import React, { useState } from 'react';

function App() {
  const [backgroundColor , setBackgroundColor] = useState('black');

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 className="text-white p-4 rounded-xl mb-5 text-5xl ">Background Color Changer</h1>
      <div style={{ position: 'absolute', bottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={() => changeBackgroundColor('black')} style={{ backgroundColor: 'black', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Black</button>
        <button onClick={() => changeBackgroundColor('blue')} style={{ backgroundColor: 'blue', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Blue</button>
        <button onClick={() => changeBackgroundColor('green')} style={{ backgroundColor: 'green', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Green</button>
        <button onClick={() => changeBackgroundColor('red')} style={{ backgroundColor: 'red', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Red</button>
        <button onClick={() => changeBackgroundColor('yellow')} style={{ backgroundColor: 'yellow', color: 'black', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Yellow</button>
        <button onClick={() => changeBackgroundColor('purple')} style={{ backgroundColor: 'purple', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Purple</button>
        <button onClick={() => changeBackgroundColor('orange')} style={{ backgroundColor: 'orange', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Orange</button>
        <button onClick={() => changeBackgroundColor('pink')} style={{ backgroundColor: 'pink', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Pink</button>
        <button onClick={() => changeBackgroundColor('teal')} style={{ backgroundColor: 'teal', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Teal</button>
        <button onClick={() => changeBackgroundColor('gray')} style={{ backgroundColor: 'gray', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Gray</button>
        <button onClick={() => changeBackgroundColor('brown')} style={{ backgroundColor: 'brown', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Brown</button>
        <button onClick={() => changeBackgroundColor('cyan')} style={{ backgroundColor: 'cyan', color: 'black', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Cyan</button>
        <button onClick={() => changeBackgroundColor('magenta')} style={{ backgroundColor: 'magenta', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Magenta</button>
        <button onClick={() => changeBackgroundColor('violet')} style={{ backgroundColor: 'violet', color: 'white', marginRight: '10px', borderRadius: '9999px', padding: '10px 20px', fontWeight: 'bold', border: 'none' }}>Violet</button>
      </div>
    </div>
  );
}

export default App;
