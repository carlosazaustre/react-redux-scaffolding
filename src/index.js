import React from 'react';
import ReactDOM from 'react-dom';

import 'materialize-css/dist/css/materialize.css';

const App = () => {
  return (
    <div>
      <h1>Hola Mundo!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
