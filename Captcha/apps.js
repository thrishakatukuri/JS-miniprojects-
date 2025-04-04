let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let age = "";
    for( let i=0; i< 5; i++){
        let randomIndex = Math.floor(Math.random() * char.length);
        age += char[randomIndex];
   document.getElementById("captcha").textContent = age;

    }
    let count =0;
document.getElementById('btn').addEventListener('click', (e) => {
let age = "";
    for( let i=0; i< 5; i++){
        let randomIndex = Math.floor(Math.random() * char.length);
        age += char[randomIndex];
   document.getElementById("captcha").textContent = age;

   count++;

   if(count>=15){ //{(count=1)===(5counts) coz, in count 1, 5times it calls the char indexes}.
    let btn = document.getElementById('btn')
    btn.disabled = true;
    btn.innerText = "disabled";
   }

    }
});