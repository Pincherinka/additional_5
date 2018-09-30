module.exports = 
function check(str, bracketsConfig) {
  
  if (str.length % 2 != 0){ //check if odd number of brackets
    return false;

  } else if(str.length == 0) { //check empty input
      return false;

    } else {
        let ranks = []; //array of comming  brackets indexes to store
        for (let i = 0, lenStr = str.length; i < lenStr; i++ ) { // loop by str
          for (let k = 0, lenConf = bracketsConfig.length; k < lenConf; k++ ) {   // get index of the array in the bracketsConfig
              
              if (str[i] == bracketsConfig[k][0]){  //check opening bracket
              ranks.push(k); // store found index
              
              let beforeLastRank = ranks[ranks.length-2]; 

              //check if 2 last added are equals and remove if so       
              if (bracketsConfig[k][0] == bracketsConfig[k][1] && beforeLastRank == k && ranks.length > 1){
                ranks.pop();
                ranks.pop();                
              };
              break;
              break;              

            } else if (ranks.length != 0 && str[i] == bracketsConfig[k][1]) { //check closing bracket

                let lastRank = ranks.slice(-1);                
                if (k == lastRank) {  //remove closing bracket index if correct               
                  ranks.pop();                  
                  break;      
                  break;                  
                }
            }           
          }
        } if (ranks.length == 0) return true;
            else return false;
    }
}

