const rowBody = document.querySelector(".row")

let usuarios = [
    { nombre: "Marco", apellido: "García", edad: 21},
    { nombre: "Cata", apellido: "Garcia", edad: 21},
    { nombre: "Nerio", apellido: "Garcia", edad: 21},
    { nombre: "Chio", apellido: "Garcia", edad: 21},
    { nombre: "José", apellido: "Garcia", edad: 21},
    { nombre: "Dani", apellido: "Garcia", edad: 21},
    { nombre: "Ynna", apellido: "Garcia", edad: 21},
    { nombre: "Estefania", apellido: "Garcia", edad: 21}
]

for(let i = 0; i < usuarios.length; i++) {
    createCard(usuarios[i])
}

function createCard(user){
    const divCol = document.createElement('div') 
    divCol.className = "col-3"

    const card = document.createElement('div')
    card.className = 'card'

    const img = document.createElement('img')
    img.src = 'media/profile.png'
    img.className = 'card-img-top'

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    const h5 = document.createElement('h5')
    h5.className = 'card-title'
    h5.innerHTML = user.nombre + ' ' + user.apellido
    const p = document.createElement('p')
    p.className = 'card-text'
    p.innerHTML = 'Edad: ' + user.edad

    cardBody.appendChild(h5)
    cardBody.appendChild(p)

    card.appendChild(img)
    card.appendChild(cardBody)
    card.se

    divCol.appendChild(card)
    rowBody.appendChild(divCol)
}



