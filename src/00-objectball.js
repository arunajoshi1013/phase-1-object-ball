function gameObject(){
  const gameData={ 
 home:{ 
        teamName:"Brooklyn Nets",
        colors:["Black","White"],
        players:{
                "Alan Anderson": {
                   number:0,
                   shoe:16,
                  points:22,
                  rebounds:12,
                  assists:12,
                  steals:3,
                  blocks:1,
                  slamDunks:1
                },
             "Reggie Evans": {
                   number:30,
                   shoe:14,
                   points:12,
                  rebounds:12,
                  assists:12,
                  steals:12,
                  blocks:12,
                  slamDunks:7
                },
               "Reggie Evans": {
                   number:30,
                   shoe:14,
                  points:12,
                  rebounds:12,
                  assists:12,
                  steals:12,
                  blocks:12,
                  slamDunks:7
                }, 	
                 "Brook Lopez": {
                   number:11,
                   shoe:117,
                   points:22,
                  rebounds:12,
                  assists:12,
                  steals:3,
                  blocks:1,
                  slamDunks:1
                },
                "Mason Plumlee": {
                   number:1,
                   shoe:19,
                  points:26,
                  rebounds:12,
                  assists:6,
                  steals:3,
                  blocks:8,
                  slamDunks:5
                },
     }
 },

 away:{
        teamName:"Charlotte Hornets",
        colors:["Turquoise","Purple"],
        players:{
           "Jeff Adrien": {
                   number:4,
                   shoe:10,
                  points:18,
                  rebounds:1,
                  assists:1,
                  steals:2,
                  blocks:7,
                  slamDunks:2
                },
           "Bismak Biyombo": {
                   number:0,
                   shoe:16,
                  points:12,
                  rebounds:4,
                  assists:7,
                  steals:7,
                  blocks:15,
                  slamDunks:10,
                },

          "DeSagna Diop	": {
                   number:2,
                   shoe:14,
                  points:24,
                  rebounds:12,
                  assists:12,
                  steals:4,
                  blocks:5,
                  slamDunks:5,
               },
        } ,          
  }

 }   

}
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
   
    let teamObj = game[gameKey];
    for(let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.players;
      for (let key in data) {
       
      }
    }

    function gameObject(){
    const gameData={
      
    }
    }
  }
return gameData
}

 function numPointsScored(playerName){
   const homePlayers=gameObject().home.players
    const awayPlayers=gameObject().away.players  
   for(let player in homePlayers){
    return player
   }
 }

function shoeSize(){
     return
   } 
function teamColors(){
     return
   } 
function teamNames(){
     return
   }
function playerNumbers(){
     return
   }
function playerStats(){
     return
   }
