onmessage = ({ data: matrix }) => {
  const matrixView = new DataView(matrix.buffer);
  for (let i = 0; i < matrix.byteLength; i++) {
    matrixView.setInt8(i, i >= 255 ? 255 : i);
  }
  postMessage(matrix, [matrix.buffer]);
};

// onmessage = () => {
//   const matrix = [];

//   for (let i = 0; i < 10000000; i++) {
//     matrix.push(i, i >= 255 ? 255 : i);
//   }

//   postMessage(matrix);
// };
