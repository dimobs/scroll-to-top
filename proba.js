
const obj = {
    name: 'Dimo',
    other() {
        console.log(this); //dimo
    function inner () {
        console.log(this); //windows
    }
    inner();
    }
}

obj.other()