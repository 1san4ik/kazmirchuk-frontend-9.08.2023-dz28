const table = document.createElement('table')

function trTd() {
  let z = 1
  for (let i = 1; i <= 10; i++) {
    const tr = document.createElement('tr')
    for (let j = 1; j <= 10; j++) {
      const td = document.createElement('td')
      td.innerText = z
      tr.appendChild(td)
      z++
    }
    table.appendChild(tr)
  }
  return table
}

document.body.appendChild(trTd())
