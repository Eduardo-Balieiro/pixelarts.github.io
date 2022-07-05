function gerarPaletteDeCores() {
    const cores = document.getElementsByClassName('color');
    cores[0].style.backgroundColor = 'black';
    cores[1].style.backgroundColor = 'green';
    cores[2].style.backgroundColor = 'blue';
    cores[3].style.backgroundColor = 'red';
    sessionStorage.setItem('selectedColor', cores[0].style.backgroundColor);
  }
  
  function gerarPixels() {
  const caixaPixels = document.getElementById( 'pixel-board' );
    for ( let i = 1; i <= 25; i += 1 ) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      caixaPixels.appendChild(pixel);
    }
  }
  
  function mudarCorSelecionada(x) {
    const corSelecionadaAntes = document.getElementsByClassName('color selected')[0];
    corSelecionadaAntes.classList.remove('selected');
    x.target.classList.add('selected');
    console.log(document.getElementsByClassName('selected')[0]);
    sessionStorage.clear();
    sessionStorage.setItem('selectedColor', x.target.style.backgroundColor);
  }
  function colorPixel(x) {
    const color = sessionStorage.getItem('selectedColor');
    const pixel = x.target;
    pixel.style.backgroundColor = color;
  }
  function clearBoard() {
    const board = document.getElementsByClassName('pixel');
    for (let i = 0; i < board.length; i += 1) {
      board[i].style.backgroundColor = 'white';
    }
  }
  
  gerarPaletteDeCores();
  gerarPixels();
  
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', colorPixel);
  
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', clearBoard);
  
  const coresDoPalette = document.querySelector('#color-palette');
  coresDoPalette.addEventListener('click', mudarCorSelecionada);