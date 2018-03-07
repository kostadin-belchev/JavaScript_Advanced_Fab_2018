function ticketsSorting(ticketInfoArray = [], sortingString = '') {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (const ticketInfoString of ticketInfoArray) {
        let [destinationName, price, status] = ticketInfoString.split('|');
        let ticket = new Ticket(destinationName, Number(price), status);
        tickets.push(ticket);
    }

    let wayToSort = {
        destination: destinationSortFunction,
        price: priceSortFuntion,
        status: statusSortFunction
    };
    // Always sort in ascending order (default behavior for alphabetical sort)
    function destinationSortFunction(a, b) {
        let destA = a.destination;
        let destB = b.destination;
        return destA.localeCompare(destB);
    }

    function priceSortFuntion(a, b) {
        let priceA = a.price;
        let priceB = b.price;
        return priceA - priceB;
    }

    function statusSortFunction(a, b) {
        let statusA = a.status;
        let statusB = b.status;
        return statusA.localeCompare(statusB);
    }

    return tickets.sort(wayToSort[sortingString]);
}

// console.log(ticketsSorting(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// ));

console.log(ticketsSorting(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
));

