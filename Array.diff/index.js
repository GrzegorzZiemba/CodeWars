function arrayDiff(a, b) {
    console.log(a)
    console.log(b)

    if(a.length === 0){
 
    }
    else{ 
        b.forEach(number=>{      
                a = a.filter(thatNumber => {
                
                    return thatNumber!=number                
                })     
      })
    }
    return a;
    }
  