module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
    ignore: [
        '**/assets/index.js',
        '**/components/index.js'
        ],
        
};

