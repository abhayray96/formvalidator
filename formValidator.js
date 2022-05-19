console.log('hello coustomer');

let names=document.getElementById('name');
let email=document.getElementById('email');
let phonenumber=document.getElementById('phonenumber');
let destination=document.getElementById('destination');

let nm=em=ph=false;
// console.log(names,email,phonenumber,destination);
names.addEventListener('blur',()=>{
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let text=names.value;
    if(regex.test(text))
    {
        names.classList.remove('is-invalid');
        nm=true;
    }
    else
    {
        console.log('not valid');
        names.classList.add('is-invalid');
        nm=false;
    }
})

email.addEventListener('blur',()=>{
    let regex=/^([0-9a-z])@([a-z])\.([a-z])$/;
    let text=email.value;
    if(regex.test(text))
    {
        em=true;
        email.classList.remove('is-invalid');
    }
    else
    {
        console.log('not valid');
        email.classList.add('is-invalid');
        em=false;
    }
})

phonenumber.addEventListener('blur',()=>{
    let regex=/^[0-9]{10}$/;
    let text=phonenumber.value;
    if(regex.test(text))
    {
        ph=true;
        phonenumber.classList.remove('is-invalid');
    }
    else
    {
        ph=false;
        console.log('not valid');
        phonenumber.classList.add('is-invalid');
    }

})

