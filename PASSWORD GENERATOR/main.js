const passwordLen = document.getElementById('passwordLen');
const password = document.getElementById('password');
const submit = document.getElementById('submit');


let kesempatan = 0;
function generate() {
    kesempatan++;
    if(kesempatan > 1) {
        alert('password telah digenerate, refresh halaman untuk generate ulang');
        kesempatan = 0;
        window.location.reload();
        return;
    }
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '123456789';
    const simbol = ';:><.,/}{][+=-_)(*&^%$#@!~';
    const panjang = Number(passwordLen.value);
    const all = alphabet + upperAlphabet + number + simbol;
    
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        hasil += all[Math.floor(Math.random() * all.length)];
    }
    
    setTimeout(() => {
        window.alert('password has been generated');
        password.value = hasil;
    }, 1000);
}

submit.addEventListener("click", generate);