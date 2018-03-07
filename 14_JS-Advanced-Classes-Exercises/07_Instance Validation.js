class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }
    get clientId() {
        return this._clientId;
    }
    set clientId(newClientID) {
        const regex = /^\d{6}$/;
        if (!regex.test(newClientID)) {
            throw new TypeError('Client ID must be a 6-digit number')
        } else {
            this._clientId = newClientID;
        }
    }
    get email() {
        return this._email;
    }
    set email(newEmail) {
        const regex = /^\w+@[a-zA-Z.]+$/;
        if (!regex.test(newEmail)) {
            throw new TypeError('Invalid e-mail')
        } else {
            this._email = newEmail;
        }
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(newFirstName) {
        const regex = /^\S{3,20}$/i;
        if (!regex.test(newFirstName)) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        } else {
            const regex2 = /^[a-z]{3,20}$/i;
            if (!regex2.test(newFirstName)) {
                throw new TypeError('First name must contain only Latin characters')
            } else {
                this._firstName = newFirstName;
            }
        }
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(newLastName) {
        const regex = /^\S{3,20}$/i;
        if (!regex.test(newLastName)) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        } else {
            const regex2 = /^[a-z]{3,20}$/i;
            if (!regex2.test(newLastName)) {
                throw new TypeError('Last name must contain only Latin characters')
            } else {
                this._lastName = newLastName;
            }
        }
    }
}

// let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
// let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
// let acc = new CheckingAccount('423414', 'petkan@another.co.uk', 'Петкан', 'Draganov');