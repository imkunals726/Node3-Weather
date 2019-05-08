const express = require( 'express' )
const app	  = express( )
const port 	  = process.env.PORT || 8000


const path 	  = require( 'path' )
const ejs 	  = require( 'ejs' )
const forecast = require( './utils/forecast' )
const geocode = require( './utils/geocode')
const WeatherReport = require( './utils/printWeather')

console.log( __dirname );
console.log( __filename );

//Defines path for express
const public_dir_path = path.join( __dirname , '../public' )
const templates_path = path.join( __dirname , '../template' )
const views_path = path.join( __dirname , '../views' )

//setup ejs location and static directory to serve
app.set( 'views' , [ views_path , templates_path] )
ejs.register
app.use( express.static(  public_dir_path )  )

app.set( 'view engine' , 'ejs' )

app.get( '/' , ( req , res ) =>{
	res.render( 'index' , { title : 'Index Dynamic' , name : 'Kunal Sawant'} );
	console.log('rendering index page' );
});

app.get( '/about' , ( req , res ) =>{
	res.render( 'about' , { creator : 'Kunal Sawant'} );
});

app.get('/help' , ( req , res ) =>{
	res.render( 'help' )
})

/*app.get( '/about' , ( req , res ) =>{
	
	res.send( '<h1>This is an about page..</h1>')
	//res.render( 'about.html' );
})*/

app.get( '/weather' , ( req , res ) =>{
	if( !req.query.address ){
		return res.send( 'Adresss must be provided' );
	}

	geocode( req.query.address , ( { body } ) =>{

		const { features } =  body
		const lattitude = features[ 0 ].center[ 0 ] ,
			  longitude = features[ 0 ].center[ 1 ]

		forecast( longitude , lattitude , ( err , data  ) =>{
			//console.log( data );
			JsonData = WeatherReport( err , data )
			res.send( JsonData );
		} )

	});

})

app.get( '/products' ,( req ,res ) =>{
	console.log( req.query );
})

app.get( '/help/*' , ( req , res ) =>{
	res.render( '404' , { 'message' : 'NO help available for this route'})
})

app.get( '*' , ( req , res ) =>{
	res.render( '404' , { 'message' : 'Page Not found' })
});

app.listen( port , (  ) => {
	console.log( 'Server is started' );
});