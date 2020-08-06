//Grabs id from last workout and adds it to the query string (to use later when want to 'continue' workout and add more exercises)
//If there is no 'last workout' then continue button does not appear
init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

