const request = require( 'request' )

const forecast = ( lattitude , lognitude , callback ) => {
	const url = "https://api.darksky.net/forecast/c1a32bf4c82bc8242be68a55069fa4e9/" + lattitude + ',' +lognitude +'?units=si&lang=en'
	request( { url  , json : true } , ( error , { body } )=>{
		if( error ){
			callback( 'Unable to connect to the forecast services' , undefined );
		}else{
			callback( undefined , body );
		}
	});
}

module.exports = forecast