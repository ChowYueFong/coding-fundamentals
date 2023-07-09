const main = document.querySelector("#main");
const child = document.createElement("div");
const button = document.getElementById("button");
const ENDPOINT =
  "https://api.github.com/gists/ff9d9683e3e7418d6f32100efb416440";

async function getData() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();

  return JSON.parse(data.files["APIAssignment3.json"].content);
}

button.addEventListener("click", async () => {
  const data = await getData();

  const name = data.name;
  const age = data.age;
  const hobbies = data.hobbies;

  child.innerHTML = `<h2>Name: ${name}</h2>
  <div>Age: ${age}</div>
  <ul id="unordered-lists">
  </ul>`;
  main.appendChild(child);
  const unorderedLists = document.getElementById("unordered-lists");

  for (const hobby of hobbies) {
    const lists = document.createElement("li");
    lists.textContent = hobby;
    unorderedLists.appendChild(lists);
  }
});
