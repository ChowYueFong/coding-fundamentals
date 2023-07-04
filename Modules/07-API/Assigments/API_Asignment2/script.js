const ENDPOINT = "https://api.github.com/users/";
const inputSearch = document.getElementById("search-bar");
const getUserButton = document.getElementById("get-user");
const userProfilePicture = document.getElementById("user-profile-picture");
const userProfileName = document.getElementById("user-profile-name");
const userProfileBio = document.getElementById("user-profile-bio");
const userProfileDate = document.getElementById("user-profile-date");

async function getUser(username) {
  const response = await fetch(`${ENDPOINT}${username}`);
  const data = await response.json();

  console.log(data);
  return data;
}

getUserButton.addEventListener("click", async () => {
  userProfilePicture.innerHTML = "";
  userProfileName.textContent = "";
  userProfileBio.textContent = "";
  userProfileDate.textContent = "";

  const data = await getUser(inputSearch.value);

  const image = document.createElement("img");
  image.setAttribute("src", `${data.avatar_url}`);
  userProfilePicture.appendChild(image);

  userProfileName.textContent = `${data.name}`;
  userProfileBio.textContent = `${data.bio}`;

  const date = new Date(data.created_at);
  const formattedDate = date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  console.log(formattedDate);
  userProfileDate.innerHTML = `Joined at: ${formattedDate}`;
});
