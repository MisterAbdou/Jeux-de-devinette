'use strict';
let score=0;
let highscore=0;
let between=document.querySelector('.between');
let IntervalNumber=document.querySelector('.intervalle');
let btn=document.querySelector('.checkt');
let avis=document.querySelector('.avis');
let overal=document.querySelector('.couverture');
let btnSubmit=document.querySelector('.valid');
 //partie connection
  let masquer=function(){
    document.querySelector('.avis').style.display="none";
    document.querySelector('.couverture').style.display="none";
  }
  let demasquer=function(){
   document.querySelector('.avis').style.display="";
   document.querySelector('.couverture').style.display="";
  }
 btnSubmit.addEventListener('click',function(){
      let nbGiven=Number(document.querySelector('.intervalle').value);
      if( nbGiven){
           score=nbGiven;
          document.querySelector('.between').textContent=`(Compris Entre 1 et ${nbGiven})`;
           masquer();
      }
 });

// partie concernant le jeu
  
/*
document.querySelector('.checkt').addEventListener('click',function(){
      document.querySelector('.message').textContent="La partie est terminée 🙅‍♂️😎"; 
});
*/



  let RandNumber=Math.trunc(Math.random()*score)+1;//on recupere la variable aleatoire 
    document.querySelector('.checkt').addEventListener('click',function(){ 
     const guess=Number(document.querySelector('.guess').value);
     if(!guess){
        document.querySelector('.message').textContent="⛔  vous n'avez pas donné un nombre 🤷‍♂️";
    }else{ 
         
         if( guess===RandNumber){
            if(highscore <document.querySelector('.score').textContent){
                highscore=document.querySelector('.score').textContent;
             }
             document.querySelector('.message').textContent="✔ Félicitation 🎉.Vous avez gagné🤩";
             document.querySelector('.number').textContent=guess;
             document.querySelector('.highscore').textContent=highscore;
             document.querySelector('body').style.backgroundColor="green";
             document.querySelector('body').style.color="white";
        }else{
             if (guess > RandNumber){
                 document.querySelector('.message').textContent=" Trop Grand 🙄";
                 document.querySelector('.score').textContent--;
             }else{
                 document.querySelector('.message').textContent=" Trop Petit  😢"; 
                 document.querySelector('.score').textContent--;           
            }               
         }
         
      if( Number(document.querySelector('.score').textContent)===0){
          document.querySelector('.message').textContent="Vous avez perdu😭😪"; 
          document.querySelector('.score').textContent=0;
          document.querySelector('.number').textContent=RandNumber;
          document.querySelector('body').style.backgroundColor="red";
          document.querySelector('body').style.color="white";
        }
     }
});
let lancer=function(){
       RandNumber=Math.trunc(Math.random()*score)+1;
       document.querySelector('.message').textContent="Commencez à deviner...";
       document.querySelector('.score').textContent=5;
       document.querySelector('.guess').value=" ";
       document.querySelector('.number').textContent="?";
       document.querySelector('body').style.backgroundColor="blue";
       document.querySelector('body').style.color="white";
}
// les deux boutons 
 document.querySelector('.again').addEventListener('click',lancer);
 document.querySelector('.quit').addEventListener('click',function(){
          lancer();
          demasquer();
 });