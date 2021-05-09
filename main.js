//5da20094
//http://www.omdbapi.com/?i=tt3896198&apikey=5da20094


function update(){
  search =document.querySelector('.form-control').value;
  httpRequest= new XMLHttpRequest();
  url='https://www.omdbapi.com/?i=tt3896198&apikey=5da20094&t='+search+'/';
  httpRequest.open("GET",url);
   
  console.log(httpRequest);
  httpRequest.send();

   //parameter names
   var parameters={
     director:"Director: ",
     runtime:"Runtime: ",
     starring:"Starring: ",
     plot:"Plot: ",
     imdb:"Imdb: ",
     genre:"Genre: ",
     writer:"Writer: ",
     production:"Production: "
   };

   //console.log(parameters.runtime);
  
  httpRequest.onreadystatechange= function(){
    if(this.readyState==4 && this.status==200){
      user_data=JSON.parse(this.responseText);
      console.log(user_data);
      document.getElementById("output").innerHTML=user_data.Title+(" (")+user_data.Year+(")");
      //document.querySelector('.year').innerHTML=user_data.Year;

      document.querySelector('.rating').innerHTML=user_data.Rated+(" | ");
      document.querySelector('.timing').innerHTML=parameters.runtime+user_data.Runtime+(" | ");
      document.querySelector('.genre').innerHTML=parameters.genre+user_data.Genre;
           
      document.querySelector('.container-2-box2').style.fontFamily="Times New Roman, Times, serif";
      document.querySelector('.container-2-box2 div').style.padding="10px";

      document.querySelector('.poster').src=user_data.Poster;

      document.querySelector('.director').innerHTML=parameters.director+user_data.Director;
      document.querySelector('.starring').innerHTML=parameters.starring+user_data.Actors;
      
      document.querySelector('.description').innerHTML=parameters.plot+user_data.Plot;
      document.querySelector('.writer').innerHTML=parameters.writer+user_data.Writer;
      document.querySelector('.imdb').innerHTML=parameters.imdb+user_data.imdbRating;

      document.querySelector('.production').innerHTML=parameters.production+user_data.Production;
      //document.querySelector('.container-2-box2');

      movieInfo();   //making  the container-2-box2 visible fr displaying the results

       //displaying star rating

      var star= user_data.imdbRating;
      //alert(star);


      const TotalStars = 10;
 
for(const rating in star){  
   
  const starPercentage = (star / TotalStars) * 100 ;
  
  document.querySelector('.stars-inner').style.width=`${starPercentage}%`;
}
   
    }
      }

}


function movieInfo() {
  let para = document.querySelector('.container-2-box2');
  para.style.visibility='visible';
}
 
