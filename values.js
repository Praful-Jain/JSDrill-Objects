function values(obj) {
    const res=[];
    for(let key in obj)
    {
        res.push(obj[key]);
    }    
    return res;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions
const res = values(testObject);
console.log(res);