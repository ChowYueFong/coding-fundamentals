const ENDPOINT = "https://api.thecatapi.com/v1/breeds";
const infoWrapper = document.getElementById("info-wrapper");

async function getCats() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();

  return data;
}

const missingCat =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUoRSSWkxpsPdbI8_0oLiQuBBpls5-is4ZA&usqp=CAU";

async function displayInfo() {
  const cats = await getCats();

  for (const cat of cats) {
    const childs = document.createElement("div");

    const imageID = cat.reference_image_id;
    const imageData = `https://api.thecatapi.com/v1/images/${imageID}`;
    const imageURL = await getCatImage(imageData);

    if (imageURL) {
      childs.innerHTML = ` <div class="cards">
    <div id="image-div"><img src="${imageURL.url}"></div>
    <div id="text-div">
      <h3 id="name-div">${cat.name}</h3>
      <div id="description-div">${cat.description}</div>
    </div>
    <div class="profile-button">Profile</div>
  </div>`;

      infoWrapper.appendChild(childs);
    } else {
      childs.innerHTML = ` <div class="cards">
    <div id="image-div"><img src="${missingCat}"></div>
    <div id="text-div">
      <h3 id="name-div">${cat.name}</h3>
      <div id="description-div">${cat.description}</div>
    </div>
    <div class="profile-button">Profile</div>
  </div>`;

      infoWrapper.appendChild(childs);
    }
  }
}

displayInfo();

async function getCatImage(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch {
    return 0;
  }
}
