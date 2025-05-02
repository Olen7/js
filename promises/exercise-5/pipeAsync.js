function pipeAsync(...fns){
    return function(interValue){
        return fns.reduce((acc, item) => acc.then(item), Promise.resolve(interValue))
    }
}
export default pipeAsync;