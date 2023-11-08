function pairs(obj) {
    const res=[];
    for(let key in obj)
    {
        let value = obj[key];
        res.push({key,value});
    }
    return res;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions
const res = pairs(testObject);
console.log(res);