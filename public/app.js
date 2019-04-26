console.log( 'public app js' );
const weatherform = document.querySelector('#weatherForm')
const input = document.querySelector('input')
const summary = document.querySelector('#summary')
const temprature = document.querySelector('#temprature')
const raincheck = document.querySelector('#raincheck')

const fetchWeatherReport = (address ) =>{
	fetch( "/weather?address=" + address ).then( ( response ) =>{
		
		response.json( ).then( ( data ) =>{
			if( data.error ){
				console.log( data.error )
			}else{
			console.log( data );
			summary.innerHTML 		= 	'Forecast 			: ' + data.summary;
			temprature.innerHTML 	= 	'Temprature 		: ' + data.Temprature
			raincheck.innerHTML 	= 	'Rain Probability 	: ' + data.RainProbability + '%';


			}
		});
	});
}



weatherform.addEventListener( 'submit' , ( e )=>{
	e.preventDefault( );
	let location = input.value;
	console.log( location );
	fetchWeatherReport( location )
})