
export class Notification {
    type: string; // either info, warning or error
    date: any;
    head: string;
    body: string;

    // constructor to facilitate creating new notifications
    constructor(type: string, head: string, body: string) {
        this.type = type;
        this.date = new Date(); // the date is generated as current date
        this.head = head;
        this.body = body;
    }
}
