export default {
    mode: 'production',
    entry: './index.js',
    externals: {
        react: {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
        },
    },
    output: {
        library: {
            type: 'umd',
            name: 'Wouter',
        },
        filename: 'wouter.umd.js',
    },
}