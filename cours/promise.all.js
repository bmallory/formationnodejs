var p1 = new Promise((resolve, reject) => {
    setTimeout((param) => {
        console.log(param)
        resolve(param)
    }, 1000, 'un')
});

var p2 = new Promise((resolve, reject) => {
    setTimeout((param) => {
        console.log(param)
        resolve(param)
    }, 2000, 'deux')
});

var p3 = new Promise((resolve, reject) => {
    setTimeout((param) => {
        console.log(param)
        resolve(param)
    }, 1000, 'trois')
});
var p4 = new Promise((resolve, reject) => {
    setTimeout((param) => {
        console.log(param)
        resolve(param)
    }, 4000, 'quatre')
});
// var p5 = new Promise((resolve, reject) => {
//     reject('reject')
// });


Promise.race([p1,p2,p3,p4])
.then((res)=> {console.log(res, "AAAA")})
.catch( (e) => console.log(e));

const verifyUser = async function(){
    try{
        const pp1 = await p1;
        const pp2 = await p2;
        const pp3 = await p3;
        const pp4 = await p4;

        return pp4;
    } catch(e){

    }
};


console.log(verifyUser());