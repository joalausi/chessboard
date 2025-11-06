function initializeChessboard() {
  document.querySelectorAll('.chessboard').forEach(el => el.remove());
  // 'use strict';
  // // Allow passing a selector string, an Element, or nothing (default to <body>)
  // let mount;
  // if (!container) {
  //   mount = document.body;
  // } else if (typeof container === 'string') {
  //   mount = document.querySelector(container);
  //   if (!mount) throw new Error(`Container not found for selector: ${container}`);
  // } else if (container instanceof Element) {
  //   mount = container;
  // } else {
  //   throw new Error('Invalid container. Pass a selector, an Element, or nothing.');
  // }

  // Create the board root
  const board = document.createElement('div');
  board.className = 'chessboard';

  // Build 8x8 grid with 1-based row/col IDs, top-left white
  for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
      const square = document.createElement('div');
      square.className = 'square';

      // ID format: square-<row>-<col> (1-based)
      square.id = `square-${row}-${col}`;

      // Compute color: top-left (1,1) must be white
      const isWhite = (row + col) % 2 === 0; // 1+1=2 even white
      square.classList.add(isWhite ? 'white' : 'black');

      square.style.backgroundColor = color;
      square.dataset.originalColor = color;

      board.appendChild(square);
    }
  }

  // click behavior: make clicked square red, revert previous
   let selectedSquare = null;
  board.addEventListener('click', (evt) => {
    const target = evt.target;
    if (!target || !target.classList || !target.classList.contains('square')) return;

    if (selectedSquare && selectedSquare !== target) {
      selectedSquare.style.backgroundColor = selectedSquare.dataset.originalColor || '';
    }

    target.style.backgroundColor = 'red';
    selectedSquare = target;
  });

  document.body.appendChild(board);
  return board;
}