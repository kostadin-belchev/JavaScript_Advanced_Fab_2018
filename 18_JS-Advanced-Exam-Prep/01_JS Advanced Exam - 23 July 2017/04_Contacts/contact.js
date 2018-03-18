class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.article = this.createArticle();
        this.online = false;
    }
    get online() {
        return this._online;
    }
    set online(newBolleanValue) {
        if (newBolleanValue) {
            this.article.find('.title').addClass('online');
        } else {
            this.article.find('.title').removeClass('online');
        }
        this._online = newBolleanValue;
    }
    createArticle() { // should return jQuery element
        // return alert('Test'); // alerts 'Test' correctly
        let articleElement = $('<article>');
        let titleDiv = $('<div>').addClass('title').text(`${this.firstName} ${this.lastName}`);
        let infoDiv = $(`<div class="info">\n` +
                            `<span>&phone; ${this.phone}</span>\n` +
                            `<span>&#9993; ${this.email}</span>\n` +
                        `</div>\n`);
        infoDiv.hide();
        let infoButton = $('<button>&#8505;</button>').click(() => infoDiv.toggle());
        titleDiv.append(infoButton);
        articleElement
            .append(titleDiv)
            .append(infoDiv);
        return articleElement;
    }
    render(selectorWithoutPoundSign) {
        let selector = '#' + selectorWithoutPoundSign;
        $(selector).append(this.article);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);
  