const WeatherReport = ( err , { currently : data , hourly }  ) => {

	response =  { 	summary 		: hourly.summary , 
					Temprature 		: data.temperature , 
					RainProbability : data.precipProbability,
					
			}

	return response
}

module.exports = WeatherReport