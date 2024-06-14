const container = document.querySelector(".countriy-container");

async function fetchCountry() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching countriy:", error);
  }
}

function renderCountriy(countriy) {
  countriy.forEach((country) => {
    const li = document.createElement("li");
    li.style.width = "250px";

    const img = document.createElement("img");
    img.src = country.flags.png;
    img.style.width = "250px";
    img.style.height = "250px";
    img.style.padding = "10px";
    img.style.borderRadius = "10%";
    li.append(img);

    const title = document.createElement("h3");
    title.textContent = country.name.common;
    title.style.textAlign = "center";
    title.style.padding = "10px";
    li.append(title);

    container.append(li);
  });
}

fetchCountry().then(renderCountriy);
