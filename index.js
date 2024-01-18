function createChart() {
    let x = document.getElementById('equis').value;
    let y = document.getElementById('ye').value;

    let time = document.getElementById('time').value;

    var body = document.getElementsByTagName('body')[0];
    var table = document.createElement('table');
    var tblBody = document.createElement('tbody');

    for (let i = 0; i < x; i++) {
        var hilera = document.createElement('tr');

        for (let j = 0; j < y; j++) {
            var celda = document.createElement('td');
            var txt = document.createTextNode("x");

            celda.appendChild(txt)
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }
    table.appendChild(tblBody);
    body.appendChild(table);

    table.setAttribute('border', 2);

    //////////////

    let c = document.getElementById('create').value;
    const coord_x = Math.floor(Math.random() * c)
    const coord_y = Math.floor(Math.random() * c)

    const coords =[]
    coords.push(coord_x, coord_y);
    console.log(coords)

}