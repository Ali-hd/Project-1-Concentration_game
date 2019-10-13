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
    let count = 0;
    let cardId = [];
    let check = 0;

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
                    check+=1;
                }
                else{
                        console.log("not match")//if they dont have the same class name then its not a match
                        $("." + cardId).hide();
                        $(child).hide();
                        count = 0;
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
                    }
                }
         });
         
       // },1000);

        
        
        // if(check == 28){console.log("You found all matches")}
    // function generate(){
    //     for (let i = 0; i>= Cards.length; i++) {
           
    //         let girdItem = document.createElement("div")
    //         let imgGridItem = document.createElement("img")

    //         imgGridItem.setAttribute("src", Cards[i].img)

    //         girdItem.classList.add("grid_item")

    //         girdItem.appendChild(imgGridItem)

    //         board.appendChild(girdItem)

    //         console.log("hey")    
    //     }
    // }

})();