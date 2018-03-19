class PaymentProcessor {
    constructor(options) {
        this._options = {
            types: ["service", "product", "other"],
            precision: 2
            };
        
        if (options !== undefined) {
            for (const key in options) {
                if (options.hasOwnProperty(key)) {
                    const element = options[key];
                    this._options[`${key}`] = element;
                }
            }
        }
        this.payments = new Map();
    }
    registerPayment(id, name, type, value) {
        if (id === '' || typeof id !== 'string') {
            throw new Error("A valid payment will have an ID that is non-empty string");
        }
        if (name === '' || typeof id !== 'string') {
            throw new Error("A valid payment will have a name that is non-empty string");
        }
        if (typeof value !== 'number') {
            throw new Error("A valid payment will have a value that is a number");
        }
        let optionTypes = this._options.types;
        if (!optionTypes.includes(type)) {
            throw new Error("A valid payment will have a valid type");
        }
        
        if (!this.payments.has(id)) {
            let pres = this._options.precision;
            value = value.toFixed(pres);
            value;
            this.payments.set(id, {name:name, type: type, value: value})
        } else {
            throw new Error('ID already exists')
        }
    }
    deletePayment(id) {
        //Function deletePayment(id) – removes the requested payment; throw an error if it’s not found
        if (!this.payments.has(id)) {
            throw new Error('ID to delete not found')
        }
        this.payments.delete(id);
    }
    get(id) {
        if (!this.payments.has(id)) {
            throw new Error('ID to get not found')
        }
        let stringToReturn = `Details about payment ID: ${id}\n`;
        stringToReturn += ` - Name: ${this.payments.get(id).name}\n`;
        stringToReturn += ` - Type: ${this.payments.get(id).type}\n`;
        stringToReturn += ` - Value: ${this.payments.get(id).value}`;
        return stringToReturn;
    }
    setOptions(options) {
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                const element = options[key];
                this._options[`${key}`] = element;
            }
        }
    }
    toString() {
        let totalBalance = 0;
        for (const payment of this.payments) {
            totalBalance += Number(payment[1].value);
        }
        let string = `Summary:\n`;
        string += ` - Payments: ${this.payments.size}\n`;
        string += ` - Balance: ${totalBalance}`;
        // - Balance: 38000.00
        return string;
    }
}
// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());

// Summary:
// - Payments: 2
// - Balance: 38000.00
// Details about payment ID: E028
// - Name: Rare-earth elements
// - Type: material
// - Value: 8000.00
// Summary:
// - Payments: 3
// - Balance: 93000.00
// Summary:
// - Payments: 2
// - Balance: 1500.00
// Summary:
// - Payments: 1
// - Balance: 0.00153
