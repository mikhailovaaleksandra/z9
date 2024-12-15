let end= new Date(2025,0,1);
function timer(){
    let str="";
    let now=new Date();
    let days=Math.floor((end-now)/(1000*60*60*24));
    let hours=Math.round((end-now)/(1000*60*60)%24);
    let min=Math.round((end-now)/(1000*60)%60);
    let sec=Math.round((end-now)/(1000)%60);
    str=`${days} дн.,`;
    str+=`${hours} час.,`;
    str+=`${min} мин., ${sec} сек.`;
    document.querySelector(".timer").innerHTML=str;
}
setInterval("timer()",1000);