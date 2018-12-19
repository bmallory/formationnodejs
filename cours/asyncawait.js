function resolveAcfter2Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    })
}

async function asyncCall(){
    console.log('calling');
    var result = await resolveAcfter2Seconds();
    console.log(result);
}

asyncCall();
console.log("sqdqs");