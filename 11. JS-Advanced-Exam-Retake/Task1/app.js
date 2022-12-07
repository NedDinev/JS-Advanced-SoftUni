window.addEventListener("load", solve);

function solve() {
  document
    .getElementById("next-btn")
    .addEventListener("click", makeReservation);

  let reservationArr = [];

  function makeReservation(event) {
    event.preventDefault();
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let dateIn = document.getElementById("date-in");
    let dateOut = document.getElementById("date-out");
    let peopleCount = document.getElementById("people-count");
    let nextBtn = document.getElementById("next-btn");

    let reservationInfo = document.querySelector(".info-list");
    let confirmReservation = document.querySelector(".confirm-list");

    function compareTime(firstDate, secondDate) {
      return new Date(firstDate) < new Date(secondDate);
    }

    if (
      /^[a-zA-Z]+$/.test(firstName.value) &&
      /^[a-zA-Z]+$/.test(lastName.value) &&
      firstName.value !== "" &&
      lastName.value !== "" &&
      peopleCount.value !== "" &&
      dateIn.value !== "" &&
      dateOut.value !== "" &&
      compareTime(dateIn.value, dateOut.value)
    ) {
      document.getElementById("verification").innerHTML = "";
      let newLi = document.createElement("li");
      newLi.classList.add("reservation-content");
      reservationInfo.appendChild(newLi);
      reservationArr.push(firstName.value);
      reservationArr.push(lastName.value);
      reservationArr.push(dateIn.value);
      reservationArr.push(dateOut.value);
      reservationArr.push(peopleCount.value);
      newLi.innerHTML = `
      <article>
      <h3>Name: ${firstName.value} ${lastName.value}</h3>
      <p>Form date: ${dateIn.value}</p>
      <p>To date: ${dateOut.value}</p>
      <p>For ${peopleCount.value} people</p>
      </article>
      `;

      firstName.value = "";
      lastName.value = "";
      dateIn.value = "";
      dateOut.value = "";
      peopleCount.value = "";
      nextBtn.disabled = true;

      let editBtn = document.createElement("button");
      editBtn.classList.add("edit-btn");
      editBtn.innerText = "Edit";
      newLi.appendChild(editBtn);
      let continueBtn = document.createElement("button");
      continueBtn.classList.add("continue-btn");
      continueBtn.innerText = "Continue";
      newLi.appendChild(continueBtn);

      editBtn.addEventListener("click", editReservation);
      continueBtn.addEventListener("click", continueReservation);

      function editReservation(event) {
        event.preventDefault;
        firstName.value = reservationArr[0];
        lastName.value = reservationArr[1];
        dateIn.value = reservationArr[2];
        dateOut.value = reservationArr[3];
        peopleCount.value = reservationArr[4];
        nextBtn.disabled = false;

        event.target.parentElement.remove();
      }

      function continueReservation(event) {
        event.preventDefault;
        confirmReservation.appendChild(newLi);
        editBtn.remove();
        continueBtn.remove();

        let confirmBtn = document.createElement("button");
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.innerText = "Confirm";
        newLi.appendChild(confirmBtn);
        let cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.innerText = "Cancel";
        newLi.appendChild(cancelBtn);
        confirmBtn.addEventListener("click", completeReservation);
        cancelBtn.addEventListener("click", cancelReservation);
      }
      function completeReservation(event) {
        reservationArr = [];
        event.target.parentElement.remove();
        nextBtn.disabled = false;

        document.getElementById(
          "verification"
        ).innerHTML = `<h1 class="reservation-confirmed">Confirmed</h1`;
      }
      function cancelReservation(event) {
        reservationArr = [];
        event.target.parentElement.remove();
        nextBtn.disabled = false;

        document.getElementById(
          "verification"
        ).innerHTML = `<h1 class="reservation-cancelled">Cancelled</h1`;
      }
    }
  }
}
