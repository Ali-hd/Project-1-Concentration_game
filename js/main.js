// let marvelMemory = (function(){


   
// })
 
// marvelMemory.generate();


(function () {
    
    let Cards = [
        {
            id : 1,
            img : "../images/ant_man.jpg"
        },
        {
            id : 2,
            img : "../images/black_panther.jpg"
        },
        {
            id : 3,
            img : "../images/captain_marvel.jpg"
        },
        {
            id : 4,
            img : "../images/doctor_strange.jpg"
        },
        {
            id : 5,
            img : "../images/falcon.jpg"
        },
        {
            id : 6,
            img : "../images/gamora.jpg"
        },
        {
            id : 7,
            img : "../images/hawkeye.jpg"
        },
        {
            id : 8,
            img : "../images/hulk.jpg"
        },
        {
            id : 9,
            img : "../images/iron_man.jpg"
        },
        {
            id : 10,
            img : "../images/nick_fury.jpg"
        },
        {
            id : 11,
            img : "../images/spider_man.jpg"
        },
        {
            id : 12,
            img : "../images/thor.jpg"
        },
        {
            id : 13,
            img : "../images/vision.jpg"
        },
        {
            id : 14,
            img : "../images/captain_america.jpg"
        },
        {
            id : 1,
            img : "../images/ant_man.jpg"
        },
        {
            id : 2,
            img : "../images/black_panther.jpg"
        },
        {
            id : 3,
            img : "../images/captain_marvel.jpg"
        },
        {
            id : 4,
            img : "../images/doctor_strange.jpg"
        },
        {
            id : 5,
            img : "../images/falcon.jpg"
        },
        {
            id : 6,
            img : "../images/gamora.jpg"
        },
        {
            id : 7,
            img : "../images/hawkeye.jpg"
        },
        {
            id : 8,
            img : "../images/hulk.jpg"
        },
        {
            id : 9,
            img : "../images/iron_man.jpg"
        },
        {
            id : 10,
            img : "../images/nick_fury.jpg"
        },
        {
            id : 11,
            img : "../images/spider_man.jpg"
        },
        {
            id : 12,
            img : "../images/thor.jpg"
        },
        {
            id : 13,
            img : "../images/vision.jpg"
        },
        {
            id : 14,
            img : "../images/captain_america.jpg"
        },
    ]

    let shuffCards = [];
    while(Cards.length > shuffCards.length){ // making a new array with shuffled cards
        let num = Math.floor(Math.random() * Cards.length)
    
        if(shuffCards.indexOf(Cards[num]) == -1){ // only inserting non repeated things
            shuffCards.push(Cards[num])
        }
    }

    // let con = document.querySelector(".card")
    let board = document.getElementById("card")
    let timer = document.getElementById("Time")
    let score = document.getElementById("Score")
    let count = 0;
    let cardId = [];
    let check = 0;
    let done = false;
    let save1, save2;

    // $("#Time").text("Hello");

    for (let i = 0; i < shuffCards.length; i++) {//creating divs for all the cards and passing the card image

        let genDiv = document.createElement("div")
        genDiv.setAttribute("class", "card_div")
        let generate = document.createElement("img");
        generate.setAttribute("class", shuffCards[i].id)
        generate.src = shuffCards[i].img

        board.appendChild(genDiv)
        genDiv.appendChild(generate) 
    }

    for (let i =0; i < shuffCards.length ; i++){ //hide all cards
        $("." + i).hide();
    }

    console.log("count is "+ count)
    // $(".1").hide();
   // setTimeout(function(){
    Time_passed();
        $(".card_div").click(function() {//click on any card
            
            let child = $(this).children()
            if($(child).is(":visible") == true){//check if the card is already visible or not

            }else{  
                count += 1 //count the cards that have been opened
            
            let childClass = (child).attr("class") //we get the class name of the clicked card 
            
            $(child).show() // we show the card
            
            console.log("count1 is " +count)
            if(count==2){
                console.log("count  = 1")
                if(childClass == cardId){ //same cards have same class name
                    alert("you found a match")
                    count = 0;
                    // check+=1;
                    update();
                }
                else{
                    // set timeout for cards to stay open
                    save1 = cardId;
                    save2 = child
                    setTimeout(function(){
                        console.log("not match")//if they dont have the same class name then its not a match
                        $("." + save1).hide();
                        $(save2).hide();
                        count = 0;

                    }, 500);
                }
                
                // console.log("count is " +count)
            }

            if(count == 0){ //count is 0 if 2 cards have been flipped 
                count = 0
            }else{ count = 1}//count is 1 if only 1 card is flipped
            // let myClass = $(this).attr("class")
            // alert(childClass)
            cardId = childClass
            // count=1;
            if(check == 14){
                console.log("You finished the game")
                done = true
                Time_passed()
                    }
                }
            
         });
        //  return check
        function update(){
            console.log("updating")
            if(check == 14){
                console.log("You finished theeeeeeeee game")
            }else{
                check+=1
            }
        }
        
        function Time_passed(){
            let seconds = 0;
            if(done == false){
                Timer_id = setInterval(function(){// 1 sec count up timer
                    seconds++;
                    timer.innerHTML = "Timer: " + seconds;
                    capture();
                },1000);
                function capture(){//to save the seconds because clearing timout loses seconds value
                    MemSec = seconds;
                }
            }else if(done==true){ //if true all cards have been flipped
                clearInterval(Timer_id)
                timer.innerHTML = "You finised in " + MemSec + " Seconds";
                score_res = 100000/MemSec;
                score_final = Math.floor(score_res)
                score.innerHTML = "Your score is " + score_final
            }
            
        }
       // },1000);


})();

