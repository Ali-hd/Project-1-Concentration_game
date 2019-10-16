
(function () {
    $("#reset").hide();
    let Cards = [
        {
            id : 1,
            img : "images/ant_man.JPG"
        },
        {
            id : 2,
            img : "images/black_panther.JPG"
        },
        {
            id : 3,
            img : "images/captain_marvel.JPG"
        },
        {
            id : 4,
            img : "images/doctor_strange.JPG"
        },
        {
            id : 5,
            img : "images/falcon.JPG"
        },
        // {
        //     id : 6,
        //     img : "../images/gamora.jpg"
        // },
        {
            id : 7,
            img : "images/hawkeye.JPG"
        },
        {
            id : 8,
            img : "images/hulk.JPG"
        },
        {
            id : 9,
            img : "images/iron_man.JPG"
        },
        // {
        //     id : 10,
        //     img : "../images/nick_fury.jpg"
        // },
        {
            id : 11,
            img : "images/spider_man.JPG"
        },
        {
            id : 12,
            img : "images/thor.JPG"
        },
        {
            id : 13,
            img : "images/vision.JPG"
        },
        {
            id : 14,
            img : "images/captain_america.JPG"
        },
        {
            id : 1,
            img : "images/ant_man.JPG"
        },
        {
            id : 2,
            img : "images/black_panther.JPG"
        },
        {
            id : 3,
            img : "images/captain_marvel.JPG"
        },
        {
            id : 4,
            img : "images/doctor_strange.JPG"
        },
        {
            id : 5,
            img : "images/falcon.JPG"
        },
        // {
        //     id : 6,
        //     img : "../images/gamora.jpg"
        // },
        {
            id : 7,
            img : "images/hawkeye.JPG"
        },
        {
            id : 8,
            img : "images/hulk.JPG"
        },
        {
            id : 9,
            img : "images/iron_man.JPG"
        },
        // {
        //     id : 10,
        //     img : "../images/nick_fury.jpg"
        // },
        {
            id : 11,
            img : "images/spider_man.JPG"
        },
        {
            id : 12,
            img : "images/thor.JPG"
        },
        {
            id : 13,
            img : "images/vision.JPG"
        },
        {
            id : 14,
            img : "images/captain_america.JPG"
        },
    ]

    let shuffCards = [];
    while(Cards.length > shuffCards.length){ // making a new array with shuffled cards
        let num = Math.floor(Math.random() * Cards.length)
    
        if(shuffCards.indexOf(Cards[num]) == -1){ // only inserting non repeated things
            shuffCards.push(Cards[num])
        }
    }

    let board = document.getElementById("card")
    let timer = document.getElementById("Time")
    let score = document.getElementById("Score")
    let flip = document.getElementById("Score2")
    let count = 0;
    let cardId = [];
    let check = 0;
    let done = false;
    let save1, save2;
    let flips = 0;

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
                flips+=1;
                console.log("count  = 1")
                if(childClass == cardId){ //same cards have same class name
                    // alert("you found a match")
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

                    }, 300);
                    
                }
                flip.innerHTML = "You have flipped "+flips+ " times"
                // console.log("count is " +count)
            }

            if(count == 0){ //count is 0 if 2 cards have been flipped 
                count = 0
            }else{ count = 1}//count is 1 if only 1 card is flipped
            cardId = childClass
            // count=1;
            if(check == 12){
                console.log("You finished the game")
                done = true
                Time_passed()
                    }
                }
            
         });

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
                score.innerHTML = "Your score is " + score_final + " in "+flips+" flips."
                $("#reset").show();
            }
            
        }
        $( "#reset" ).click(function() {
            location.reload();
          });
    
       // },1000);
})();

