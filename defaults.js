function defaults(obj, defaultProps) {
    for(let key in obj)
    {
        if(obj[key] === undefined)
            obj[key] = defaultProps;
    }
    return obj;
}

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', gender:undefined }; // use this object to test your functions
const defaultProps = 'Male';
const updatedObj = defaults(testObject,defaultProps);
console.log(updatedObj);