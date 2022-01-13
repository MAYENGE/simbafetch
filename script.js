document.querySelector(".click").addEventListener("click", function () {
  document.getElementById("output").style.display = "block";
  const name = document.getElementById("username").value;
  fetch(`https://api.github.com/users/${name}`).then((response) =>
    response.json().then((data) => {
      console.log(data);
      document.getElementById("name").innerHTML = data.name;
      document.getElementById("company").innerHTML = data.company;
      document.getElementById("followers").innerHTML =
        data.followers + " Followers";
      document.getElementById("following").innerHTML =
        data.following + " Following";
      document.getElementById("profile").innerHTML = `
      <img src="${data.avatar_url}" />
      `;
      // document.querySelector(".stars").innerHTML = data.starred_url;
    })
  );
});
