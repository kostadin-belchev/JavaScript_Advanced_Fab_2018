class MailBox {
    // TODO: implement this class
    constructor() {
        this._messages = [];
    }
    addMessage(subject, text) {
        this._messages.push({subject, text});
        return this;
    }
    get messageCount() {
        return this._messages.length;
    }
    deleteAllMessages() {
        this._messages.length = 0;
    }
    findBySubject(substr) {
        let matched = [];
        for (const message of this._messages) {
            if (message.subject.includes(substr)) {
                matched.push(message);
            }
        }
        return matched;
    }
    toString() {
            if (this._messages.length === 0) {
                return ` * (empty mailbox)`;
            }
            return this._messages.map( m => ` * [${m.subject}] ${m.text}`).join('\n');
        }      
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
