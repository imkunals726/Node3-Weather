const request = require( 'request' )

const geocode = ( address , callback  ) => {
	const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent( address ) +".json?access_token=pk.eyJ1Ijoia3VuYWxzNzI2IiwiYSI6ImNqdXNxcWJ6bTAwMmIzeXQwNnp3ZWYwcXcifQ.qdJBzT4pNhML-ADIfEOUOQ&limit=1"
	request( { url  , json : true } , ( error , response ) =>{
		if( error ){
			console.log( error );
		}else{
			callback( response );
		}
	});
}

module.exports = geocode