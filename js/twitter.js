function ImportTweets(){ 
	$.getJSON( 'http://search.twitter.com/search.json?callback=?&rpp=10&q=%23WP8', function(data) { 
		var regex = new RegExp("(http://)([\w.-_/%]*)", "gim"); 
		var regex1 = new RegExp("(#)([a-z0-9_]*)", "gim"); 
		var regex2 = new RegExp("(@)([a-z0-9_]*)", "gim"); 
		var json = $("#tweets").get(0); json.innerHTML = ""; 
		$.each(data, function(i, tweets){ 
			if (tweets.length != undefined){ 
				if (tweets[0] != undefined){ 
					if (tweets[0].created_at != undefined){ 
						for(var i = 0; i < tweets.length; i++){ 
							json.innerHTML = json.innerHTML + ("<div class='tweet'><a href='http://twitter.com/#!/"+tweets[i].from_user+"'><img style='float: left' src='"+tweets[i].profile_image_url+"'/></a>"+tweets[i].text.replace(regex, "<a href='$1$2'>$2</a>").replace(regex1, "#<a href='http://twitter.com/#!/search?q=%23$2'>$2</a>").replace(regex2, "@<a href='http://twitter.com/#!/$2'>$2</a>")+"</div>"); 
						} 
					} 
				} 
			} 
		}); 
		setTimeout("ImportTweets()",60000); 
	}); 
} 