function ticketSorter(ticketsInfo, sortCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let allTickets = [];
  for (let currTicketInfo of ticketsInfo) {
    let [currDestination, currPrice, currStatus] = currTicketInfo.split("|");
    currPrice = Number(currPrice);
    let ticket = new Ticket(currDestination, currPrice, currStatus);
    allTickets.push(ticket);
  }

  let sortFunc = {
    destination() {
      let sorted = allTickets.sort(({ destination: a }, { destination: b }) =>
        a.localeCompare(b)
      );
      return sorted;
    },
    price() {
      let sorted = allTickets.sort(({ price: a }, { price: b }) => a - b);
      return sorted;
    },
    status() {
      let sorted = allTickets.sort(({ status: a }, { status: b }) =>
        a.localeCompare(b)
      );
      return sorted;
    },
  };

  return sortFunc[sortCriteria]();
}
ticketSorter(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
