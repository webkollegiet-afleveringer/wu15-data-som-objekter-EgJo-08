let first = document.querySelector(".hero")

function hello() {
    first.addElement("img")

}

let img = document.createElement("img")
img.src = hero.image
first.append(img)


first.append(hero.headline)
first.append(hero.copy)

let icon2 = document.createElement("img")
icon2.src = hero.icon
first.append(icon2)




services.forEach(service => console.log(service.headline))
