


const button = document.querySelector('button')

const tbody = document.querySelector('table>tbody')

createInputOnTable('jose', 'guzman', 'email');

button.addEventListener('click', function() {
    const inputName = document.getElementById('inputName')
    console.log(inputName.value)

    const inputSurname = document.getElementById('inputSurname')
    console.log(inputSurname.value)

    const inputEmail = document.getElementById('inputEmail')
    console.log( inputEmail.value)
    createInputOnTable('jose2', 'guzman2', 'email2');

    
})



function createInputOnTable(inputName, inputSurname, inputEmail) {
    const newTr = document.createElement('tr')
    
    const newTh = document.createElement('th')
    newTh.setAttribute('scope','row')
    newTh.innerHTML = 1
    console.log(newTh)
    
    const thName = document.createElement('td')
    thName.innerHTML = inputName
    console.log(thName)


    const ThSurname = document.createElement('td');
    ThSurname.innerHTML = inputSurname
    console.log(ThSurname)


    const thEmail = document.createElement('td')
    thEmail.innerHTML = inputEmail
    console.log(thEmail)

    newTr.appendChild(newTh)
    newTr.appendChild(thName)
    newTr.appendChild(ThSurname)
    newTr.appendChild(thEmail)
    tbody.appendChild(newTr)
}