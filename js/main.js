let twitter = {
	init: ()=> {
		twitter.request("GET","http://www.ruben-guzman.com/twitter-api/get_tweets.php");
	},
	console: (evt)=> {
		if (window.XMLHttpRequest) {
		  // code for modern browsers
		  xhttp = new XMLHttpRequest();
		} else {
		  // code for old IE browsers
		  xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhttp.onreadystatechange = function(evt) {
			if (this.readyState == 4 && this.status == 200) {
				let jsonTwitter = JSON.parse(this.responseText);
				console.log(jsonTwitter);
			}
		}
		xhttp.open("GET","http://www.ruben-guzman.com/twitter-api/get_tweets.php", true);
		xhttp.send();
	},
	request: (method, api)=> {

		if (window.XMLHttpRequest) {
		  // code for modern browsers
		  xhttp = new XMLHttpRequest();
		} else {
		  // code for old IE browsers
		  xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhttp.onreadystatechange = function(evt) {
			if (this.readyState == 4 && this.status == 200) {
				let jsonTwitter = JSON.parse(this.responseText);
				for(let data of jsonTwitter){
					if(data){
						let liElement = document.createElement('li'),
							spanElement = document.createElement('span'),
							content = document.createTextNode(data.text);

							liElement.setAttribute('class','ui-state-default');
							liElement.appendChild(content);

							document.getElementById('sortable').appendChild(liElement);
					}
				}
			}
		}
		xhttp.open(method, api, true);
		xhttp.send();
	}
};
twitter.init();
