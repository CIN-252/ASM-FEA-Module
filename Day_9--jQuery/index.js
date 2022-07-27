$(document).ready(function () {
  function getUsersData() {
    return $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
    }); // Get API
  }
  $("#btnGet").click(async function () {
    $(".information").append(
      `<div class="loading-msg">Loading Data...</div><hr />`
    );
    const usersData = await getUsersData();
    $(".loading-msg").hide(); // Hide Content Loading Data
    // console.log("Users: ", usersData);
    for (var i = 0; i < usersData.length; i++) {
      $(".information").append(
        `<div class="info-msg">Id: ${usersData[i]?.id}</div>`
      );
      $(".information").append(
        `<div class="info-msg">Name: ${usersData[i]?.name}</div><hr />`
      );
    }
  });
  $("input#search").on("input", function (e) {
    console.log(e.target.value);
    if (e.target.value.length > 3)
      $(".information").append(
        `<div class="loading-msg">Loading Data...</div><hr />`
      );
  });
});
