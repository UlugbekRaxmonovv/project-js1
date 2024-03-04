


var cars =[

];
function chiq(){
    qator= `    
    <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Age</th>
        <th>Rasm</th>
        </tr>
        `
        cars.forEach(function (car,i){
            qator+=`
            <tr>
                <th>${car[0]}</th>
                <th>${car[1]}</th>
                <th>${car[2]}</th>
                <th><img src="https://assets-global.website-files.com/62e95dddfb380a0e61193e7d/65437b9c7dc93816ab57bd39_Blog%20Post%20(12)-p-800.png" alt=""></th>
                </tr>
                `
        })
        document.getElementById('table').innerHTML = qator
}
chiq()
function gooo(){
    var name = document.getElementById('none').value;
    var Price =document.getElementById('narxi').value;
    var address =document.getElementById('joy').value;
    var car =[name, Price,address,];
    cars.push   (car)
    tozalash()
    chiq()
}
function tozalash(){

    var name = document.getElementById('none').value =''
    var Price =document.getElementById('narxi').value =''
    var address =document.getElementById('joy').value =''
}

function btn(){
    var name = document.getElementById('none').value;
    var Price =document.getElementById('narxi').value;
    var address =document.getElementById('joy').value;
    var car =[name, Price,address,];
    cars.pop(car)
    tozalash()
    chiq()
}
function tozalash(){

    var name = document.getElementById('none').value =''
    var Price =document.getElementById('narxi').value =''
    var address =document.getElementById('joy').value =''
}




function toggleForm() {
    var formDiv = document.querySelector('.hammasi');
    if (formDiv.style.display === 'none') {
        formDiv.style.display = 'block';
    } else {
        formDiv.style.display = 'none';
    }
}