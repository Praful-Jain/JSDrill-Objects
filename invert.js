function invert(obj) {
    const resObj={};
    for(let key in obj){
        resObj[obj[key]] = key;
    }
    return resObj;
}


const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions
const resObj = invert(testObject);
console.log(resObj);