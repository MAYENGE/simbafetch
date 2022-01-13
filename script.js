document.querySelector(".click").addEventListener("click", function () {
  document.getElementById("output").style.display = "block";
  const name = document.getElementById("username").value;
  fetch(`https://api.github.com/users/${name}`).then((response) =>
    response.json().then((data) => {
      console.log(data);
      if (data.message === "Not Found") {
        document.querySelector("#notfound").innerHTML = "User was not found 🚫";
      } else {
        document.getElementById("name").innerHTML = data.name;
        document.getElementById("company").innerHTML = data.company;
        document.getElementById("location").innerHTML =
          "location : " + data.location;
        document.querySelector("#repos").innerHTML =
          data.public_repos + "repositories";
        document.getElementById("blog").innerHTML = "blog :" + data.blog;
        document.getElementById("followers").innerHTML =
          data.followers + " Followers";
        document.getElementById("following").innerHTML =
          data.following + " Following";
        document.getElementById("profile").innerHTML = `
      <img src="${data.avatar_url}" />
      `;
        document.querySelector("#notfound").innerHTML = " ";
      }
    })
  );
});
