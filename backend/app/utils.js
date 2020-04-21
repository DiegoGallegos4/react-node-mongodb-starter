function exceptionHandler(fn) {
    return function (req, res, next) {
        try {
            return fn(req, res, next).catch(next)
        } catch (err) {

            return
        }
    }
}