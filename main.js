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
   };

   /*let director="Director: ";

   let runtime="Runtime: ";
   let starring="Starring: ";
   let plot="Plot: ";
   let imdb="Imdb: ";
   let genre="Genre: ";
   let writer="Writer: ";
   */

  

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
			//document.querySelector('.rotten').innerHTML=parameters.rotten+user_data.RottenTomatoes;
			//document.querySelector('.').innerHTML=parameters.
			document.querySelector('.votes').innerHTML=user_data.imdbVotes;
			//document.querySelector('.container-2-box2');

			movieInfo();
	}
  }
}

function movieInfo() {
	let para = document.querySelector('.container-2-box2');
	para.style.visibility='visible';
}
 
/*let Containerr = document.querySelector('.weatherContainer');
	let weatherContainerHeight= Containerr.clientHeight;
	let weatherContainerWidth= Containerr.clientWidth;
	Containerr.style.left= `calc(50% - ${weatherContainerWidth/2}px)`;
	Containerr.style.top= `calc(50% - ${weatherContainerHeight/2}px)`;
	Containerr.style.visibility='visible';
*/
/*
function show_results(){


				 city=document.getElementById("city").value;
				httpRequest= new XMLHttpRequest(); 
				url='https://api.weatherbit.io/v2.0/current?&city='+city+'&key=b8d750eeef324d22b675f6a64ea981c8';
				//this is a built-in constructor function in your browser, so you don’t need to add any special library or package.
				httpRequest.open("GET", url);				
				// the function makes two areguments- http method used and url to which you want to send that request
				httpRequest.send();
				httpRequest.onreadystatechange = function(){
					if(this.readyState == 4 && this.status ==200) {
						user_data= JSON.parse(this.responseText);//first thing to do is convert the response into json format
						document.getElementById("wind").innerHTML=user_data.data[0].wind_spd;
						//now we have to update paragrapgh text
					}
				}
		}		
	*/


/*//Search results page
app.get('/results', (req,res)=>{
    var searchElement = 'https://www.omdbapi.com/?s='+req.query.movie+'&apikey=5da20094';
    var movieDetails = [];
    var results;
    rp(searchElement)
    .then((body)=>{
        results = JSON.parse(body);  
        if(results['Response']=='True'){
            for(let i=0; i< results['Search'].length; i++){
                rp('https://www.omdbapi.com/?i='+results['Search'][i]['imdbID']+'&apikey=5da20094')
                .then(data => {
                    movieDetails.push(JSON.parse(data));
                    if(movieDetails.length === results['Search'].length){
                        res.render('movieResults',{results: results, keyword: req.query.movie, movieDetails: movieDetails});
                    }
                }) 
            }
        }
        else{
            res.render('movieResults',{results: results, keyword: req.query.movie, movieDetails: movieDetails});
        }        
    })
    .catch((err)=>{
        try{
            var displayError = JSON.parse(err['error']);
            console.log(displayError['Error']);
            res.render('movieResults',{results: {'Response': 'False', 'Error': displayError['Error']}, keyword: req.query.movie});
        }
        catch{
            console.log('Something went wrong');
        }
    });

});


app.listen(process.env.PORT,process.env.IP,()=>{
    console.log('Listening on Port 3000')
});
*/