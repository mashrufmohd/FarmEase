import React from 'react';
import { Cloud, Droplets, Sun, Wind } from 'lucide-react';

// Dummy weather data
const weatherData = {
  current: {
    temperature: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    rainfall: 0,
  },
  forecast: [
    { day: 'Tomorrow', high: 26, low: 18, condition: 'Sunny' },
    { day: 'Wednesday', high: 25, low: 17, condition: 'Cloudy' },
    { day: 'Thursday', high: 23, low: 16, condition: 'Rain' },
    { day: 'Friday', high: 22, low: 15, condition: 'Rain' },
    { day: 'Saturday', high: 24, low: 16, condition: 'Partly Cloudy' },
  ],
};

function Weather() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Weather Forecast</h1>
        <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleString()}</p>
      </div>

      {/* Current Weather */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Current Conditions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <Sun className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Temperature</p>
              <p className="text-xl font-bold">{weatherData.current.temperature}°C</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Cloud className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Condition</p>
              <p className="text-xl font-bold">{weatherData.current.condition}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Droplets className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="text-xl font-bold">{weatherData.current.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Wind className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Wind Speed</p>
              <p className="text-xl font-bold">{weatherData.current.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">5-Day Forecast</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="p-4 border rounded-lg text-center">
              <p className="font-medium">{day.day}</p>
              <div className="my-2">
                <Cloud className="h-8 w-8 mx-auto text-blue-500" />
              </div>
              <p className="text-sm text-gray-500">{day.condition}</p>
              <div className="mt-2">
                <span className="text-red-500">{day.high}°</span>
                <span className="mx-1">/</span>
                <span className="text-blue-500">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Farm Planning Tips */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Farm Planning Tips</h2>
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900">Irrigation Planning</h3>
            <p className="text-sm text-blue-800">Light rain expected on Thursday and Friday. Consider adjusting irrigation schedules.</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-medium text-yellow-900">Spraying Conditions</h3>
            <p className="text-sm text-yellow-800">Tomorrow morning will have ideal conditions for pesticide application with low wind speeds.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-900">Harvesting Outlook</h3>
            <p className="text-sm text-green-800">Clear weather expected for the weekend, suitable for harvesting operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;