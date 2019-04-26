const WeatherReport = ( err , { currently : data }  ) => {

	response =  { summary : data.summary , 
					Temprature : data.temperature , 
				RainProbability : data.precipProbability
			}

	return response
}

module.exports = WeatherReport