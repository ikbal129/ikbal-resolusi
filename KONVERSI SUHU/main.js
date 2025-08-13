const myNum = document.getElementById('myNum');
const myCelcius = document.getElementById('myCelcius');
const myFahn = document.getElementById('myFahn');
const myButton = document.getElementById('myButton');
const myOutput = document.getElementById('myOutput');

function convert() {
    let hasil;
    let num = Number(myNum.value);
    if (myCelcius.checked) {
        if(myNum.value != '') {
            hasil = (num * 9/5) + 32;
            myOutput.textContent = `${hasil.toFixed(2)}°F`;
        } else {
            window.alert('harap isi angka untuk di konversi');
            return;
        }
    } else if (myFahn.checked) {
        if(myNum.value != '') {
            hasil = (num - 32) * 5/9;
            myOutput.textContent = `${hasil.toFixed(2)}°C`;
        } else {
            window.alert('harap isi angka untuk di konversi');
            return;
        }
    } else {
        window.alert("pilih salah satu konversasi");
        return;
    }
}

myButton.addEventListener("click", convert);