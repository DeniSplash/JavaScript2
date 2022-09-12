module.exports = {
    mode: 'development',
    entry: './public/js/allcomp.js',
    output: {

        filename: './build.js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000
    }
}