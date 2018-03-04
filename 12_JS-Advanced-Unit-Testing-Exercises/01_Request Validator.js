function validateRequest(request = {}) {
    // Validating method
    if (request.method) {
        let validMethodStrings = ['GET', 'POST', 'DELETE', "CONNECT"]
        if (validMethodStrings.indexOf(request.method) < 0) {
            throw new Error("Invalid request header: Invalid Method");
        }
    } else {
        throw new Error("Invalid request header: Invalid Method");
    }

    // validating URI
    if (request.uri) {
        if (request.uri === '') {
            throw new Error("Invalid request header: Invalid URI");
        } else {
            const uriRegex = /^(\*|[A-Za-z0-9.]+)$/g;
            let hasValidURI = uriRegex.test(request.uri);
            if (!hasValidURI) {
                throw new Error("Invalid request header: Invalid URI");
            }
        }
    } else {
        throw new Error("Invalid request header: Invalid URI");
    }

    // validating version
    if (request.version) {
        let validVersionStrings = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', "HTTP/2.0"]
        if (validVersionStrings.indexOf(request.version) < 0) {
            throw new Error("Invalid request header: Invalid Version");
        }
    } else {
        throw new Error("Invalid request header: Invalid Version");
    }

    // validating message
    if (request.hasOwnProperty('message')) {
        const messageRegex = /[\<\>\\&\'\"]+/g;
        let containsSpecialCharacters = messageRegex.test(request.message);
        if (containsSpecialCharacters) {
            throw new Error("Invalid request header: Invalid Message");
        }
    } else {
        throw new Error("Invalid request header: Invalid Message");
    }
    return request;
}

// console.log(validateRequest({
//     method: 'GET',
//     uri: 'kkk jjjj',
//     version: 'HTTP/0.8',
//     message: ''
// }));
// console.log(validateRequest({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }));


// validateRequest({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   });

// validateRequest({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   });
  
  