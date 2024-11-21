/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "metric",

	modules: [
		/*
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 40.776676,
				lon: -73.971321
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 40.776676,
				lon: -73.971321
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},*/
		{
			module: "MMM-iFrame-GSlides",
			position: "bottom_bar",	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: "https://docs.google.com/presentation/d/e/2PACX-1vS3BC8S1G0z7qAgIAVXEPpXgwQTBQypBEigX6Qb1WmPiHIW2UZBdfqJNNajVwFt1aJP2GnavgrCcuOM/pub?start=true&loop=true&delayms=5000",  // enter the embed url to your Google Slides.
					RefreshInterval: 10 * 60 * 1000, // Refreshes Page every 5 minutes.
					width: "full", // Optional. Default: "full". The "full" value will look at screen size and match for full screen."
					height: "full" //Optional. Default: "full"  The "full" value will look at screen size and match for full screen."
			}
		},
		{
			module: "weather",
			position: "bottom_right", // Place weather in the bottom-right corner
			config: {
			  weatherProvider: "openmeteo", // Keep using OpenMeteo as the provider
			  type: "current", // Display current weather
			  lat: 36.174465, // Latitude for location
			  lon: -86.767960, // Longitude for location
			  tempUnits: "imperial", // Use "imperial" for Fahrenheit (default is "metric" for Celsius)
			  roundTemp: true,
			  degreeLabel: true, // Show temperature unit (°C/°F)
			  appendLocationNameToHeader: false,
			  updateInterval: 10 * 60 * 1000, // Update every 10 minutes
			  animationSpeed: 1000, // Transition speed
			  onlyTemp: true,
			}
		},
		{
			module: "clock",
			position: "bottom_left", // Position the clock in the top-left corner
			config: {
			  displayType: "digital", // Use a digital clock
			  displaySeconds: false, // Hide seconds to keep the layout clean
			  showDate: true, // Display the current date below the time
			  dateFormat: "MMM DD, YYYY", // Format: Day of week, Month Day
			  clockBold: false, // Make the clock bold for better readability
			  showTime: true, // Ensure the time is displayed
			}
		  }

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }