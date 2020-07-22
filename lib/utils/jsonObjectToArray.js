
function getJsonObjectToArray(obj) {
    const result = [];
    // recursive funciton
    function recursiveConverter(objToConvert) {
        if (typeof objToConvert === "object") {
            const keys = Object.keys(objToConvert);
            for (let i = 0; i < keys.length; i++) {
                const currentKeyValue = objToConvert[keys[i]];
                if(Array.isArray(currentKeyValue)) result.push([keys[i], currentKeyValue]);
                else if(typeof currentKeyValue === "object") recursiveConverter(currentKeyValue);
                else {
                    result.push([keys[i], currentKeyValue]);
                }
            }
        }
    }
    recursiveConverter(obj);

    return result;

}

module.exports = {
    getJsonObjectToArray: getJsonObjectToArray
}