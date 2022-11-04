//Selecionar elementos 
let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');
let title = document.getElementsByTagName('h1');
let button = document.getElementById('start');





//generate a random number 
button.onclick = function(){
let randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1* 6)+1
    console.log(randomNumber1);
    
let randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2* 6)+1
console.log(randomNumber2);

if(randomNumber1> randomNumber2){
    title[0].innerHTML = "Player 1 won!"
    } else if(randomNumber1 < randomNumber2){
        title[0].innerHTML = "Player 2 won!"
        }else if(randomNumber1 == randomNumber2){
        title[0].innerHTML = "Play Again!"
            }


let randomImage1 = function(){
    if(randomNumber1 === 1){
        image1.setAttribute('src', 'images/dice1.png')
        }else if (randomNumber1 === 2){
            image1.setAttribute('src', '/docs/images/dice2.png') 
            }else if (randomNumber1 === 3){
                image1.setAttribute('src', '/docs/images/dice3.png') 
                }else if (randomNumber1 === 4){
                    image1.setAttribute('src', '/docs/images/dice4.png') 
                    }else if (randomNumber1 === 5){
                        image1.setAttribute('src', '/docs/images/dice5.png') 
                    }         
}

let randomImage2 = function(){
    if(randomNumber2 === 1){
        image2.setAttribute('src', 'images/dice1.png')
        }else if (randomNumber2 === 2){
            image2.setAttribute('src', './images/dice2.png') 
            }else if (randomNumber2 === 3){
                image2.setAttribute('src', './images/dice3.png') 
                }else if (randomNumber2 === 4){
                    image2.setAttribute('src', './images/dice4.png') 
                    }else if (randomNumber2 === 5){
                        image2.setAttribute('src', './images/dice5.png') 
                    }         
}




randomImage1();
randomImage2();


}
