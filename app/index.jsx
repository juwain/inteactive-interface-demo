import React from 'react';
import App from './components/App/App.jsx';

main();

function main() {
  const app = document.createElement('div');

  app.className = 'app';

  document.body.appendChild(app);

  React.render(<App />, app);
}
