function highestRank(arr){
   let highestRepeated = 1;
   let times = 0;
   let higest;
   for (let i=0; i<arr.length; i++)
   {
           for (var j=i; j<arr.length; j++)
           {
                   if (arr[i] == arr[j])
                    times++;
                   if (highestRepeated<times)
                   {
                     highestRepeated=times; 
                     higest = arr[i];
                   }
           }
           times=0;
   }
   return higest;
   }