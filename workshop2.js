let fs = require('fs');
let files = fs.readdirSync(__dirname + '/files/');


files.forEach((file)=> {
   // const contents = fs.readFileSync(`${__dirname}/files/${file}`, 'utf8');
    // console.log(contents);

    fs.readFile(`${__dirname}/files/${file}`, 'utf8', (err,file0) => {
        console.log(err,file0)
    })
})
