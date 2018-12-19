const myPromis = new Promise(function(resolve, reject) {
 setTimeout(() => {
     reject('nok 1')
 })
})
.then( function whenOk(response){
    console.log("log 1", response)
    return new Promise( function (resolve, reject){
        setTimeout(() => {
            resolve('fine 2')
        }, 1000)
    }).then( function whenOk(response){
        console.log('log 3', response)
        return response
    })
    return response
})
.then( function whenOk(response){
    console.log("log 2", response)
    return response
})
.catch( function notOk(err){
    console.error(err)
})