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
icon2.src = hero.icon
first.append(icon2)

let services2 = document.querySelector(".services")

services.forEach(service => {
    const div = document.createElement("div")
    let illustration = document.createElement("img")

    illustration.src = service.images

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


services.forEach(service => console.log(service.headline))
