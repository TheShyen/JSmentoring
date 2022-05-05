'use strict';

let json = `{ "name": "John", "age": 30 }`;

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function test() {
    throw new ValidationError("Ups!");
}

try {
    test();
} catch (err) {
    console.log(err.message); // Ups!
    console.log(err.name); // ValidationError
    console.log(err.stack); // ValidationError: Ups!
}
//
class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("no property" + property);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
} 

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
    if (!user.name) {
        throw new PropertyRequiredError("name");
    }

    return user;
}

try {
    let user = readUser('{ "age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("incorrect data " + err.message);// incorrect data no propertyname
        console.log(err.name); // PropertyRequiredError
        console.log(err.property); // name
    } else if (err instanceof SyntaxError) {
        console.log("JSON Syntax Error" + err.message);
    } else {
        throw err;
    }
}
//
class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ValidationError extends MyError { }

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("no property" + property);
        this.property = property;
    }
}

console.log( new PropertyRequiredError("field").name); // PropertyRequiredError

// ****
class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = "ReadError";
    }
}
  
class ValidationError extends Error {}
class PropertyRequiredError extends ValidationError {}
  
function validateUser() {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
  
    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}
  
function readUser(json) {
    let user;
  
    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error", err);
        } else {
            throw err;
        }
    }
  
    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Validation Error" + err);
        } else {
            throw err;
        }
    }
  
}

try {
    readUser('{bad json}');
} catch (e) {
    if (e instanceof ReadError) {
        console.log(e); // ReadError: Syntax Error

        console.log("initial error" + e.cause); // initial errorSyntaxError: Unexpected token b in JSON at position 1
    } else {
        throw e;
    }
}
  