let number;

const generate_number=()=>{
    let num=Math.random();
    let n2=Math.trunc( num*10);
    let n3=(n2%6)+1;
    number=n3;
    console.log(number);
};

const generate_btn_onclick=()=>{
    document.querySelector('#section1').style.display='none';
    document.querySelector('#section2').style.display='none';
    document.querySelector('#section3').style.display='block';

    setTimeout(()=>{
        generate_number();

        let value=document.querySelector('#field').value='';

        document.querySelector('#section1').style.display='none';
        document.querySelector('#section2').style.display='block';
        document.querySelector('#section3').style.display='none';
    },3000)
};
//check number
const check_number=()=>{
    let value=document.querySelector('#field').value;
    if(value==number)
    {
        alert("Congragulation, You won the game");
    }
    else{
        alert("Sorry, Try again");
    }
    generate_btn_onclick();
}