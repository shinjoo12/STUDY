let target = document.querySelector("#dynamic");
let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript",
    "Learn to Python","Learn to Ruby"];
   
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    
    let selectStringArr = selectString.split("");
    console.log(selectString);
    console.log(selectStringArr);

    function dynamic(randomArr){
        console.log(randomArr);
        if(randomArr.length > 0){
            target.textContent += randomArr.shift();
            setTimeout(function(){
                dynamic(randomArr);
            },80);
        }else{
            setTimeout(resetTyping,3000);
        }
    }

    dynamic(selectStringArr);
function blink(){
    target.classList.toggle("active");
}
// 0.5초마다 실행//
setInterval(blink,500); 
