class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
    this._playersObj = {};
  }
  get playersObj() {
    return undefined;
  }
  newAdditions(footballPlayers) {
    for (let playerInfo of footballPlayers) {
      let [currName, currAge, currPlayerValue] = playerInfo.split("/");
      if (!this._playersObj.hasOwnProperty(currName)) {
        this._playersObj[currName] = {
          age: currAge,
          playerValue: currPlayerValue,
        };
      } else {
        if (this._playersObj[currName].playerValue < currPlayerValue) {
          this._playersObj[currName].playerValue += currPlayerValue;
        }
      }
    }
    let allInvited = [];
    for (let [key, value] of Object.entries(this._playersObj)) {
      this.invitedPlayers.push({
        name: key,
        age: value.age,
        playerValue: value.playerValue,
      });
      allInvited.push(key);
    }

    return `You successfully invite ${allInvited.join(", ")}.`;
  }
  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split("/");

    if (!this._playersObj.hasOwnProperty(name)) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (playerOffer < this._playersObj[name].playerValue) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
      );
    }
    let priceDifference = this._playersObj[name].playerValue - playerOffer;
    if (this._playersObj[name].playerValue != "Bought") {
      this._playersObj[name].playerValue = "Bought";
      return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }
  }
  ageLimit(name, age) {
    if (!this._playersObj.hasOwnProperty(name)) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (this._playersObj[name].age < age) {
      let ageDifference = age - this._playersObj[name].age;
      if (ageDifference < 5) {
        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
      } else {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    } else if (this._playersObj[name].age >= age) {
      return `${name} is above age limit!`;
    }
  }
  transferWindowResult() {
    let result = `Players list:\n`;
    for (let [key, value] of Object.entries(this._playersObj)) {
      result += `Player ${key}-${value.playerValue}\n`;
    }
    return result;
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.invitedPlayers);
