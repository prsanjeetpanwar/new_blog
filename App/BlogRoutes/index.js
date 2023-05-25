module.exports = function (App){
    App.use('/users',require('./user'))
    App.use('/posts',require('./post'))
    App.use('/likes',require('./like'))
    App.use('/comments',require('./comment'))
}