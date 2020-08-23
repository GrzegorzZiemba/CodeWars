var solution = function(firstArray, secondArray) {
  
    const lee = firstArray.length;
    let newTab = []
    for (let i = 0; i<lee; i++){
      firstArray[i]==secondArray[i]?newTab.push(0):newTab.push(Math.pow(Math.abs(firstArray[i]-secondArray[i]),2));
      
    }
    const sum = newTab.reduce(function(a, b){
          return a + b;
      }, 0);
    
    return sum/newTab.length
  }