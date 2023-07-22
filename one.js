const container = document.querySelector(".container") ;
const error=document.querySelector(".error") ;


function  getDate(){

    const myDate = document.getElementById("input").value    ;

    if(!myDate) return ;
    const mine = new Date(myDate) ; 
    const today=new Date() ;
    const diff=today-mine ;
    const age=diff/(1000*60*60*24*365) ;
    getAge(age)

}

function getAge(age) {
    const year=Math.floor(age) ;
    const restYear=age-year ; 

    const monthDiff = restYear*12 ;
    const month=Math.floor(monthDiff) ;

    const restMonth=monthDiff-month ;
    const day=Math.floor(restMonth*30) ;

    display(year,month,day);

}


function display(y,m,d){
const year=document.getElementById("year") ;
const month=document.getElementById("month") ;
const day=document.getElementById("day") ;

year.innerText=y ;
month.innerText=m ; 
day.innerText=d;


if(y>=0){
    error.display.style="none" ;
}
if(y<0){
    error.display.style="block" ;
}
}



container.addEventListener("input",getDate) ;