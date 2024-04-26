module.exports = {
    // Otras configuraciones de Jest...
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
      'src/assets/index.js',
      'src/components/index.js' // Agrega el archivo que Babel está ignorando
    ],
  };