const {Ticket} = require('./ticket.model')

class TicketList  {
    constructor() {
        this.lastNumber = 0;
        this.pendants=[];
        this.asigns=[];
    }

    get nextNumber() {
        this.lastNumber ++;
        return this.lastNumber;
    }

    // 3 que se veran em la tarjta y 10 en el historial
    get last3() {
        return this.asigns.slice(0,13)
    }

    createTicket() {
        const newTicket = new Ticket( this.nextNumber);
        this.pendants.push(newTicket);
        return newTicket;
    }

    asignTicket(agent, desktop) {
        if(this.pendants.length === 0) return null;
        const nextTicket = this.pendants.shift()

        nextTicket.agent = agent;
        nextTicket.desktop = desktop;

        this.asigns.unshift(nextTicket)
        return nextTicket
    }
}