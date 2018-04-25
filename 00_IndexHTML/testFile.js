let listBuilder = (function () {
    let list = [];
    return {
        add: function (newElement) {
            list.push(newElement);
        },
        toString: function () {
            return list.join(', ');
        }
    }
})();

listBuilder.add(3);
console.log(listBuilder.list);
console.log(listBuilder.toString());



