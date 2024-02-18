const p_rivit = document.querySelector('#rivit')
const table_jokeri = document.querySelector('table')
const button = document.querySelector('button')

button.addEventListener('click', ()=> {
    const tr = table_jokeri.insertRow()

    for (let i=0;i<7;i++) {
        const td = tr.insertCell()
        const random_number = Math.floor(Math.random() * 10) 
        td.innerHTML = random_number
        td.classList.add('cell')
    }

    p_rivit.textContent = `Valmiita rivejä: ${table_jokeri.rows.length}`
    
})



