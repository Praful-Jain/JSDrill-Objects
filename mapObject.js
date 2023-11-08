function mapObject(obj, callback) {
    for(let key in obj){
        obj[key] = callback(key,obj);
    }
    return obj;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions
const newObj = mapObject( testObject, (key,testObject) => {
    if(key == 'name')   testObject[key] = 'Johny Deep';
    else if(key == 'age')   testObject[key] = 40;
    else    testObject[key] = 'New York';
    return testObject[key];
});
console.log(newObj);