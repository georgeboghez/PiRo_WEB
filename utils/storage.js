

var theData = {
    // Global Object
}

var getItem = function(name) {
    if(typeof theData[name] === "undefined" || !theData[name] || typeof theData[name].data === "undefined") {
        return null;
    }
    if(theData[name].expiry && theData[name].expiry < new Date().getTime()){
        theData[name] = null
        return null;
    }

    return theData[name].data
}

var hasItem = function(name) {
    if(typeof theData[name] === "undefined" || !theData[name] || typeof theData[name].data === "undefined") {
        return false;
    }
    if(theData[name].expiry && theData[name].expiry < new Date().getTime()){
        theData[name] = null
        return false;
    }

    return true;
}

var setItem = function(name, data, lifetime = 0) {
    theData[name] = {
        data: data,
        stored: Date.now()
    }
    if(lifetime){
        theData[name].expiry = Date.now() + lifetime;
    }

    return true;
}

var delItem = function(name) {
    theData[name] = undefined;
    return true;
}


module.exports = {
    getItem: getItem,
    hasItem: hasItem,
    setItem: setItem,
    delItem: delItem,
}
