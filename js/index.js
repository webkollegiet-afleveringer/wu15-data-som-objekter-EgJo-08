let first = document.querySelector(".hero")

function hello() {
    first.addElement("img")

}

let img = document.createElement("img")
img.src = hero.image
first.append(img)

let head2 = document.createElement("h2")
head2.textContent = hero.headline
first.append(head2)

let copy = document.createElement("p")
copy.textContent = hero.copy
first.append(copy)

const div = document.createElement("div")
div.classList.add("hero-div")

let icon2 = document.createElement("img")
icon2.src = hero.icon
first.append(icon2)


first.append(div)
div.appendChild(head2)
div.appendChild(copy)
div.appendChild(icon2)


first.classList.add("hero-container");
img.classList.add("hero-image");
head2.classList.add("hero-headline");
copy.classList.add("hero-copy");

let services2 = document.querySelector(".services")

services.forEach(service => {
    const div = document.createElement("div")
    let illustration = document.createElement("img")

    illustration.src = service.illustration

    div.appendChild(illustration)

    services2.appendChild(div)

    let headline = document.createElement("h2")

    headline.textContent = service.headline

    div.appendChild(headline)
    services2.appendChild(div)

    let text = document.createElement("p")

    text.textContent = service.text

    div.appendChild(text)

    services2.appendChild(div)

    let linktext = document.createElement("a")

    linktext.textContent = service.linktext
    linktext.href = service.url

    div.appendChild(linktext)
    div.classList.add("service-card");
    illustration.classList.add("service-img");
    headline.classList.add("service-title");
    text.classList.add("service-text");
    linktext.classList.add("service-link");

})

let facilities2 = document.querySelector(".facilities")

let header = document.createElement("h2")
header.textContent = facilities.headline
facilities2.append(header)


facilities.options.forEach(facility => {
    const div = document.createElement("div")
    let illustration = document.createElement("img")

    illustration.src = facility.icon

    div.appendChild(illustration)

    facilities2.appendChild(div)

    let headline = document.createElement("h2")

    headline.textContent = facility.headline

    div.appendChild(headline)
    facilities2.appendChild(div)

    let text = document.createElement("p")

    text.textContent = facility.text

    div.appendChild(text)
    div.classList.add("facility-card");
    illustration.classList.add("facility-icon");
    headline.classList.add("facility-title");
    text.classList.add("facility-text");


})


let sites2 = document.querySelector(".sites")

let siteheader = document.createElement("h2")
siteheader.textContent = sites.headline
sites2.append(siteheader)

let sitetext = document.createElement("p")
sitetext.textContent = sites.text
sites2.append(sitetext)

let sitebtnicon = document.createElement("img")
sitebtnicon.src = sites.btnicon
sites2.append(sitebtnicon)


sites.places.forEach(site => {
    const div = document.createElement("div")
    let illustration = document.createElement("img")

    illustration.src = site.img

    div.appendChild(illustration)

    sites2.appendChild(div)

    let headline = document.createElement("h3")

    headline.textContent = site.name

    div.appendChild(headline)
    sites2.appendChild(div)

    let headline2 = document.createElement("h3")

    headline2.textContent = site.city

    div.appendChild(headline2)

    div.classList.add("site-card");
    illustration.classList.add("site-img");
    headline.classList.add("site-name");
    headline2.classList.add("site-city");
})

const advantages2 = document.querySelector(".advantages")

advantages2.innerHTML = advantages.map(advant => `
    <div class="advantage-card">
    <img class="advantage-icon" src="${advant.icon}">
    <h2 class="advantage-title">${advant.headline}</h2>
    <p class="advantage-text">${advant.text}</p>
    </div>`)
    .join('');

const footerContainer = document.querySelector(".footer");

footerContainer.innerHTML = `
  <div class="footer-top">
    <div class="footer-brand">
      <h2>${footer.brand.name}</h2>
      <h1>${footer.brand.slogan}</h1>
    </div>

    <div class="footer-sections">
      ${footer.sections.map(section => `
        <div class="footer-section">
          <h4>${section.title}</h4>
          <ul>
            ${section.links.map(link => `
              <li>${link}</li>
            `).join("")}
          </ul>
        </div>
      `).join("")}
    </div>
  </div>

  <div class="footer-bottom">
    <p>${footer.bottom.copyright}</p>
    <ul>
      ${footer.bottom.links.map(link => `
        <li>${link}</li>
      `).join("")}
    </ul>
  </div>
`;
footerContainer.classList.add("footer-container");

services.forEach(service => console.log(service.headline))
