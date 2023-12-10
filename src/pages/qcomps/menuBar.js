import React from 'react';

export default function MenuBar() {
  return (
    <div>
      <AButton id="button1" color="green" size="50px">
        Button 1
      </AButton>
      <AButton id="button2" color="blue" size="40px">
        Button 2
      </AButton>
    </div>
  );
}

function AButton({ id, color, size, children }) {
  return (
    <button
      id={id}
      onClick={() => {
        const button = document.getElementById(id);
        if (button) {
          button.style.backgroundColor = color;
          button.style.fontSize = size;
        }
      }}
    >
      {children}
    </button>
  );
}
