function OldHorse(){
    this.age = 0;

    //grow up
    setInterval(()=>{
        this.age++;
        console.log("Old Horse id",this.age);
    }, 1000);
}

var p = new OldHorse();