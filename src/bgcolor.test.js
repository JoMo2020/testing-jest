import React from "react";
import Bgcolor from "./Bgcolor"
import ReactDOM from 'react-dom';

// test ('background should be blue'), () => {
//     expect(Bgcolor).toBe("blue");
// }

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bgcolor />, div);
  });