function add(n1, n2){
    return n1+n2
}


const sub = function(n1,n2){
    return n1 - n2
} 
  

const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  };
    
  console.log( add(1,2) )     // What will this print?
  console.log( add )          // What will it print and what does add represent?
  console.log( add(1,2,3) ) ; // What will it print
  console.log( add(1) );	  // What will it print 	
  console.log( cb(3,3,add) ); // What will it print
  console.log( cb(4,3,sub) ); // What will it print
  console.log(cb(3,3,add)); // What will it print (and what was the problem)
  console.log(cb(3,"hh",add));// What will it print
  