/* global Module */

/* Magic Mirror
 * Module: MMM-iFrame-GSlides
 *
 * By Jason Hartgraves https://jharttech.com
 */

Module.register("MMM-iFrame-GSlides",{
	// Default module config.
	defaults: {
			height:"full",
			width:"full",
			url: "http://magicmirror.builders/",
			RefreshInterval: 5 * 60 * 1000,
			scrolling: "no"
	},

    start: function () {
		var self = this;
		updateDom = self.updateDom(1000)
		this.timedRefresh(this.config.RefreshInterval);
	},

	resume: function() {
   		console.log("Resuming");
   		return this.getDom();
	},
	timedRefresh: function(timeoutPeriod){
		setTimeout(() => {
			location.reload(true); // Refresh the page
		  }, timeoutPeriod);
	},



	getDom: function() {
		try {
			var container = document.createElement("DIV");
			container.style = `
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				inset: 0;
				margin: 0;
				padding: 0;
				width: 100vw;
				height: 100vh;
				overflow: hidden;
				box-sizing: border-box;`;
	
			var iframe = document.createElement("iframe");
			iframe.src = "https://docs.google.com/presentation/d/e/2PACX-1vS3BC8S1G0z7qAgIAVXEPpXgwQTBQypBEigX6Qb1WmPiHIW2UZBdfqJNNajVwFt1aJP2GnavgrCcuOM/embed?start=true&loop=true&delayms=5000&rm=minimal";
			iframe.style = `
				width: 100vw;
				height: 100vh;
				border: none;
				margin: 0;
				padding: 0;
				box-sizing: border-box;`;
			iframe.allowFullscreen = true;
	
			container.appendChild(iframe);
			return container;
		} catch (error) {
			console.error("Error embedding Google Slides:", error);
			var errorDiv = document.createElement("DIV");
			errorDiv.innerHTML = "Failed to load the Google Slides presentation.";
			return errorDiv;
		}
	},
	/*

	getDom: function() {
		var iframe = document.createElement("IFRAME");

		<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS3BC8S1G0z7qAgIAVXEPpXgwQTBQypBEigX6Qb1WmPiHIW2UZBdfqJNNajVwFt1aJP2GnavgrCcuOM/embed?start=true&loop=true&delayms=3000" frameborder="0" width="1440" height="839" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

		reload = this.config.RefreshInterval
		refeshPage = this.timedRefresh(reload);
		iframe.style = "border:0"
		var repeat = true;
		while(repeat) {
			DynHeight = this.config.height;
			DynWidth = this.config.width;
		if (DynHeight == "full"){
			checkHeight = screen.height;
		}else{
			checkHeight = this.config.height;
		}
		if (DynWidth == "full"){
			checkWidth = screen.width;
		}else{
			checkWidth = this.config.width;
		}
			repeat = false;
		}
		iframe.width = checkWidth;
		iframe.height = checkHeight;
		iframe.allowfullscreen = "true";
		iframe.mozallowfullscreen = "true";
		iframe.webkitallowfullscreen = "true";
                iframe.scrolling = this.config.scrolling;
		iframe.src = this.config.url;
		return iframe;
	},*/



});
