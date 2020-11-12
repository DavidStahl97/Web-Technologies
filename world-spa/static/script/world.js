console.log("hello")

document.getElementById('go-button').addEventListener('click', () => {
    let number = document.getElementById('num').value;
    fetch(`/api/country/${number}`)
    .then(r => r.json())
    .then(r => {
        document.getElementById('content').innerHTML = `
            <h1>${r.name}</h1>
            <table>
                <tr><td>Continent</td><td>${r.continent}</td></tr>
            </table>
        `;
    })
})