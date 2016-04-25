import React from 'react';
import ReactDOM from 'react-dom';

import TombZone from './components/TombZone';

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
    <TombZone />,
    document.getElementById('skeleton')
  );
});
