const edificios = [13, 2, 8, 7, 9,1, 13, 19, 23]
let vision = true
let numEdificios=1
for(i=0;i<(edificios.length-1);i++){ 
  vision=true
  for(a=i+1;a<edificios.length;a++){    
    if(edificios[i]>edificios[a]){      
      vision=vision && true      
    }else{     
      vision=vision && false     
    }    
  }
  if (vision){
      //console.log(`Edificio ${edificios[i]}: Tiene vista al mar`)
    numEdificios++
    } else{
      //console.log(`Edificio ${edificios[i]}: No tiene vista al mar`)
    }  
}
//console.log(`Edificio ${edificios[edificios.length-1]}: Tiene vista al mar`)
console.log(`Numero de edificios con vista al mar: ${numEdificios}`)
