/*
 * CurrentWeather Messages
 *
 * This contains all the text for the CurrentWeather component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  about: {
    id: 'goodappleweather.components.CurrentWeather.about',
    defaultMessage: `
      This is a responsive single page application which displays current weather and 5 day forecast for a provided city.  It is a UI solution created with HTML5, CSS3, and ES6 that demonstrates an exceptional and desirable user experience.
  `},
  architecture: {
    id: 'goodappleweather.components.CurrentWeather.architecture',
    defaultMessage: `
      Integration with the OpenWeatherMap forecast API was necessary to retrieve a 5 day weather forecast.  
      The application was developed using the React JavaScript boilerplate starter kit.  It was developed with supporting JavaScript technologies, frameworks, package management, starter kit, build manager, and libraries that demonstrate best practices by the React ecosystem developer community.
  `},
  start: {
    id: 'goodappleweather.components.CurrentWeather.start',
    defaultMessage: `
      Please enter a city in the search box above to begin.
  `},
});
