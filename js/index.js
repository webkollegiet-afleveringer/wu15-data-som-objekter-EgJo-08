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



let icon2 = document.createElement("img")
icon2.src = hero.icon2
first.append(icon2)

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


})

const advantages2 = document.querySelector(".advantages")

advantages2.innerHTML = advantages.map(advant => `
    <div>
    <img src="${advant.icon}">
    <h2>${advant.headline}</h2>
    <p>${advant.text}</p>
    </div>`)
    .join('');


services.forEach(service => console.log(service.headline))
