import React from 'react';
import { Cloud, Droplets, Sun, Wind, Thermometer, CloudRain, CloudSun } from 'lucide-react'; // Added more icons
import { Link } from 'react-router-dom'; // Import Link

// Dummy weather data (no changes)
const weatherData = {
  current: {
    temperature: 24,
    condition: 'Partly Cloudy',
    conditionIcon: CloudSun, // Assign icon
    humidity: 65,
    windSpeed: 12,
    rainfall: 0,
  },
  forecast: [
    { day: 'Tomorrow', high: 26, low: 18, condition: 'Sunny', icon: Sun },
    { day: 'Wednesday', high: 25, low: 17, condition: 'Cloudy', icon: Cloud },
    { day: 'Thursday', high: 23, low: 16, condition: 'Rain', icon: CloudRain },
    { day: 'Friday', high: 22, low: 15, condition: 'Rain', icon: CloudRain },
    { day: 'Saturday', high: 24, low: 16, condition: 'Partly Cloudy', icon: CloudSun },
  ],
};

function Weather() {
  const CurrentIcon = weatherData.current.conditionIcon;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0 flex items-center">
           <Cloud className="h-6 w-6 mr-2 text-blue-500" />
           Weather Forecast
        </h1>
        <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleString()}</p>
      </div>

      {/* Current Weather */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Current Conditions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Thermometer className="h-8 w-8 text-red-500 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Temperature</p>
              <p className="text-xl font-bold text-gray-800">{weatherData.current.temperature}°C</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <CurrentIcon className="h-8 w-8 text-blue-500 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Condition</p>
              <p className="text-xl font-bold text-gray-800">{weatherData.current.condition}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Droplets className="h-8 w-8 text-cyan-500 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="text-xl font-bold text-gray-800">{weatherData.current.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Wind className="h-8 w-8 text-gray-500 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Wind Speed</p>
              <p className="text-xl font-bold text-gray-800">{weatherData.current.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">5-Day Forecast</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {weatherData.forecast.map((day, index) => {
            const ForecastIcon = day.icon;
            return (
              <div key={index} className="p-4 border border-gray-200 rounded-lg text-center bg-gray-50 hover:shadow-sm transition-shadow">
                <p className="font-medium text-gray-800">{day.day}</p>
                <div className="my-3">
                  <ForecastIcon className="h-10 w-10 mx-auto text-blue-500" />
                </div>
                <p className="text-sm text-gray-600 mb-2">{day.condition}</p>
                <div className="text-sm">
                  <span className="font-semibold text-red-600">{day.high}°</span>
                  <span className="mx-1 text-gray-400">/</span>
                  <span className="font-semibold text-blue-600">{day.low}°</span>
                </div>
              </div>
            );
          })}
        </div>
         {/* Link to Alerts for Weather related issues */}
         <div className="mt-4 text-right">
             <Link to="/alerts?filter=weather" className="text-sm text-green-600 hover:text-green-800">View Weather Alerts →</Link>
         </div>
      </div>

      {/* Farm Planning Tips */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Weather-Based Recommendations</h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-medium text-blue-900 mb-1">Irrigation Planning</h3>
            <p className="text-sm text-blue-800">Significant rain expected Thursday/Friday. Hold off on non-essential irrigation for most fields until Saturday.</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="font-medium text-yellow-900 mb-1">Field Operations</h3>
            <p className="text-sm text-yellow-800">Tomorrow offers a good window for spraying (low wind). Avoid field traffic during expected rain later this week to prevent soil compaction.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-medium text-green-900 mb-1">Crop Protection</h3>
            <p className="text-sm text-green-800">Increased humidity and rain raise the risk of fungal diseases. Monitor susceptible crops closely, especially Soybeans in East Field.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;