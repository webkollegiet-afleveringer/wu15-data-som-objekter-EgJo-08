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




services.forEach(service => console.log(service.headline))
