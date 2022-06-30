let countShot = 0;
let bulletPosition = random(1, 6);
let btnShot = document.querySelector("#shot");
let currentPlayer = 1;
let baraban = document.querySelector("#baraban");

btnShot.onclick = start;

//Первый клик по кнопке "начать"
function start(){
    btnShot.className="off";
    let bullet = document.querySelector("#bullet");
        bullet.style.display = "block";
   
    let revolver = document.querySelector("#revolver");
        revolver.style.display = "block";
    

   
    btnShot.onclick= "";
    let rotate= 0;
    let timer = setInterval(function() {
        rotate = rotate + 10;
        baraban.style.transform ="rotate(" + rotate +"deg)";
        if(rotate>300){
            bullet.style.display = "none";
        }
        
        if(rotate==720){
            clearInterval(timer);
            btnShot.innerText = "Сделать выстрел"
            btnShot.onclick = shot;

            btnShot.className = " "; 
        }
          }, 50)
      
};
//Рандомайзер чисел
function random(min, max){
     return Math.floor( Math.random()*(max-min)+min);
}

let rotateBaraban = 0;
function shot () {
    countShot = countShot + 1;
   if(bulletPosition == countShot){
    let blood = document.createElement("div");//Добавление крови на проигравшего игрока
    blood.id = "blood";
 
    let player = document.querySelector("#player" + currentPlayer);
        player.appendChild(blood);
        console.log(player);
    endGame();
   } else{
        //Поворот револьвера при промахе
        if (currentPlayer == 1){
        rotationRight();
        currentPlayer = 2;
         } else{
        rotationLeft();
        currentPlayer = 1;
    }
   
    let rotate = rotateBaraban; //Вращение барабана при выстреле
    let timer = setInterval (function(){
        rotate = rotate + 10;
        baraban.style.transform = "rotate(" + rotate + "deg)";
        if (rotate == rotateBaraban + 60){
            clearInterval(timer);
            rotateBaraban = rotate;
        }
    },10)
    
   }
}
//Повороты револьвера при выстреле
 function rotationRight (){
    let revolver = document.querySelector("#revolver");
    revolver.style.background = 'url("images/revolver-right.png") no-repeat'
 }
 function rotationLeft (){
    let revolver = document.querySelector("#revolver");
    revolver.style.background = 'url("images/revolver-left.png") no-repeat'
 }
 //Завершение игры
 function endGame(){
    alert("Game over")
    btnShot.innerText = "Рестарт";
    btnShot.onclick = restart;
    
 }
//Возобновление игры
 function restart(){
    location.reload();
 }

