function exercici1(){
   document.writeln("Lola Martínez")
   document.writeln("1r Batxillerat")
   document.writeln("Científic")
   document.writeln("2025")
   document.writeln("Carrera universitària de medicina")
}
function exercici2(){
   let nom = "Lola Martínez"
   document.writeln(nom)
   let curs = "1r Batxillerat"
   document.writeln(curs)
   let bachi = "Científic"
   document.writeln(científic)
   let any = "2025"
   document.writeln(2025)
   let estudis = "medicina"
   document.writeln("Carrera universitària de medicina")
}
function exercici3(){
   let nom = "Lola"
   let cognom = "Martínez Apellániz"
   let edat = "16"
   let peli = "A través de mi ventana"
   let any = "2022"
   document.writeln("Hola em dic "+nom+" i el meu cognom és "+cognom+", tenc "+edat+" i la meva pel·lícula preferida és "+peli+" del "+any)
}

function exercici4(){
   let notes = 5+6+8+2+7
   let mitjana = notes/5
   document.writeln("La suma de les notes es "+notes+ " i la seva mitjana es: "+mitjana)
}
function exercici5(){
    
   let a,b,c;
   a = 2
   b = 4
   c = 1
   let bNeg = -b
   let quadrat = Math.pow(b,2)
   let arrel = Math.sqrt(quadrat-(4*a*c));
   let num1 = bNeg+arrel
   let num2 = bNeg-arrel
   let den = 2*a;
   let valor1 = num1/den
   let valor2 = num2/den

   document.writeln("Les solucions són: "+valor1+ " i "+valor2)
}
function exercici6(){
  let actor = prompt("Quin és el teu actor preferit?")
  let nom = prompt("Quin és el teu nom?")
  document.writeln("EL meu nom és "+nom+" i el meu actor preferit és "+actor)
}
function exercici7(){
   let num1 = parseFloat(prompt("intruduce número"))
   let num2 = parseFloat(prompt("intruduce número"))
   let num3 = parseFloat(prompt("intruduce número"))
   let num4 = parseFloat(prompt("intruduce número"))
   let num5 = parseFloat(prompt("intruduce número"))
   let notes = num1+num2+num3+num4+num5
   let mitjana = notes/5
   document.writeln("La mitjana aritmètica és de: "+mitjana)
}
function exercici8(){
     let a,b,c;
   a =  parseFloat(prompt("intruduce número"))
   b =  parseFloat(prompt("intruduce número"))
   c =  parseFloat(prompt("intruduce número"))
   let bNeg = -b
   let quadrat = Math.pow(b,2)
   let arrel = Math.sqrt(quadrat-(4*a*c));
   let num1 = bNeg+arrel
   let num2 = bNeg-arrel
   let den = 2*a;
   let valor1 = num1/den
   let valor2 = num2/den

      document.writeln("Les solucions són: "+valor1+ " i "+valor2)
}

function exercici9(){
    let numero = prompt("Quin és el primer nombre?")
    let numero2 = prompt("Quin es el segon nombre?")
    if(numero > numero2){
        alert("Hola, el meu nom és Lola i el primer nombre és major o igual que el segon")
    }else if (numero < numero2){
        alert("Hola, el meu primer llinatge és Martínez i el primer nombre és menor que el segon")
}
}


