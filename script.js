(function () { 

        'use strict';
        var convertType = "miles";
		var heading = document.querySelector("h1");
		var intro = document.querySelector("p");
		var answerDiv = document.getElementById("answer");
		var form = document.getElementById("convert");

		document.addEventListener("keydown", function (event) {
			var key = event.code;
			if (key === "KeyK") {
				convertType = "kilometers";
				heading.innerHTML = "Kilometer to Miles converter";
				intro.innerHTML =
					"Type in a number of Kilometers and click the button to convert the distance to Miles ";
			} else if (key === "KeyM") {
				convertType = "miles";
				heading.innerHTML = "Miles to Kilometers  converter";
				intro.innerHTML =
					"Type in a number of Miles and click the button to convert the distance to Kilometers";
			}
		});

		form.addEventListener("submit", function () {
			event.preventDefault();
			var distance = parseFloat(document.getElementById("distance").value);

			if (distance) {
				if ((convertType = "miles")) {
					var converted = (distance * 1.609344).toFixed(3);
					answerDiv.innerHTML = `${distance} miles is equals to ${converted} kilometres`;
				}
				else {
					var converted = (distance * 0.62137112).toFixed(3);
					answerDiv.innerHTML = `${distance} kilometers is equals to ${converted} miles`;
				}
			} else {
				answer.innerHTML = "<h2> Please provide a Number </h2>";
			}
		});
}());