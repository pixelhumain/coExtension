var mycontact;
var userId;
var tags;
var adress;



//var info = getInfoTab();
function evenement(){

	// DEBUT DES EVENEMENTS POUR LA NAVBAR

	/*****************									************************
		**************		DEBUT DE LA PARTIE AJOUTER	************************
	******************									***********************/

	if(typeof userId == "undefined"){
		getUserId();
	}

	$("#news_orga").click(function(){
		form_add('organization');
		getInfoTabs();					
		evenement();
		// var formValue = $("form").data().key;
	});

	$("#news_event").click(function(){
		form_add('event');
		getInfoTabs();
		evenement();
	});

	$("#news_classifieds").click(function(){
		form_add('classified');
		getInfoTabs();
		evenement();
	});

	$("#news_ressources").click(function(){
		form_add('ressources');
		getInfoTabs();
		evenement();
	});

	$("#news_project").click(function(){
		form_add('project');
		getInfoTabs();
		evenement();
	});


	$("#news_poi").click(function(){
		form_add('poi');
		evenement();

	});

	$("#news_bookmark").click(function(){
		form_add('bookmark');
		getInfoTabs();
		evenement();
	});

	$("#news_rss").click(function(){
		form_add('rss');
		getInfoTabs();
		evenement();
	});

	$("#news").click(function(){
		form_add('news');
	});
	

	/*****************									************************
		**************		FIN DE LA PARTIE AJOUTER	************************
	******************									***********************/



	/*****************									************************
		**************		DEBUT DE LA PARTIE POOI		************************
	******************									***********************/
	$(".sectionBtn").click(function(){
		var key = $(this).data("key");
		//alert(key);
		console.log(key);
		form_add('poi', key);
		console.log(key);
		getInfoTabs();
		evenement();
	});


	/*****************									************************
		**************		FIN DE LA PARTIE POOI		************************
	******************									***********************/


	$("#orga").click(function(){
		
		$(".active").attr('class', 'dropdown-item ');
		$("#orga").attr('class', 'dropdown-item active');
		if(typeof mycontact == "undefined"){
				loadMycontact('organizations');
			}else{
				buildMycontactType('organizations');
				eventMenu();
			} 

	});


	$("#menu_add").click(function(){
		buildMenu();
		evenement();
	});

	$("#projet").click(function(){
		
		$(".active").attr('class', 'dropdown-item');
		$("#projet").attr('class', 'dropdown-item active');
		if(typeof mycontact == "undefined"){
				loadMycontact('projects');
			}else{
				buildMycontactType('projects');
				eventMenu();
			} 
	});


	$("#event").click(function(){
		
		$(".active").attr('class', 'dropdown-item');
		$("#event").attr('class', 'dropdown-item active');
		if(typeof mycontact == "undefined"){
				loadMycontact('events');
			}else{
				buildMycontactType('events');
				eventMenu();
			}
	});


	$("#person").click(function(){
		
		$(".active").attr('class', 'dropdown-item');
		$("#person").attr('class', 'dropdown-item active');
		if(typeof mycontact == "undefined"){
				loadMycontact('people');		
		}else{
			buildMycontactType('people');
			eventMenu();
		}
		
	});


	/*****************													************************
		**************		DEBUT DE LA PARTIE RECHERCHE D'ADRESSE		************************
	******************													***********************/



$.ajax({
  		method: "POST",
  		url: "http://127.0.0.1/ph/co2/opendata/getcountries",
		dataType:"json"
	})
  	.done(function( data ) {
  		var str = "<select>";
		str +="<option value='0'> Choisissez un pays</option>";
  		$.each(data, function(i,v){
  			str +="<option id='str' value="+v.countryCode+">"+v.name+"</option>";
  			$("#country2").click(function(){
  				$("#countryCode").attr("value", $('#country2 option:selected').val());
  				$("#adress").show();
  			});
  			// if ($('#str').change(v.name)) {
  			// 	$("#countryCode").attr("value", $("#str").val());
  			// }
  		});
  		str +="</select>";
  		$("#country2").html(str);

		$("#search").click(function(){
		    var location = $('#street').val();
		    $('#spin').show();
		    console.log("location : ", location);
		    
		    var geocode = 'https://nominatim.openstreetmap.org/search.php?format=json&q=' + location+'&addressdetails=1';

		    var geocode2 = 'http://api-adresse.data.gouv.fr/search/?q='+location;

		    var geocode3 = 'http://127.0.0.1/co2/city/autocompletemultiscope';


		    $.ajax({
		  		method: "POST",
		  		url: 'http://127.0.0.1/co2/city/autocompletemultiscope',
				data: {
				    type: "locality",
					scopeValue: $("#adress").val(),
					geoShape: true,
					formInMap: true,
					countryCode: $('#countryCode').val(),	
				},
				dataType: "json",

				success: function(data){
					$('#spin').hide();
		   		 	console.log("data : ", data);
		   		 	var city = [];
		   		 	// for(var i= 0; i < data.cities.postalCodes; i++){

		   		 	// for(var i= 0; i < data.features.length; i++){
			 		console.log("data.cities.length : ", data.cities);

				 		// $.each(data.features[i],function(i,v){
		   		 	$.each(data.cities, function(i,v){
		   		 		// alert('test');
		   		 		for(var i= 0; i < v.postalCodes.length; i++){
		   		 			// alert(v.postalCodes.length);
			   		 		city.push({
			   		 			'value' : v.postalCodes[i].name+', '+v.postalCodes[i].postalCode,
			   		 			'postalCode' : v.postalCodes[i].postalCode,
			   		 			'country' : v.postalCodes[i].name,
			   		 			'latitude' : v.postalCodes[i].geo.latitude,
			   		 			'longitude' : v.postalCodes[i].geo.latitude,
			   		 			'localityId' : v._id.$id,
			   		 			'level1' : v.level1,
			   		 			'level1Name' : v.level1Name,
			   		 			'level3' : v.level3,
			   		 			'level3Name' : v.level3Name,
			   		 			'level4' : v.level4,
			   		 			'level4Name' : v.level4Name,
			   		 			'id' : v._id.$id,

			   		 		});
				   		 	buildautoComplete(city);
						  	$("#adress").focus();
			   		 		console.log("city : ", city);
			   		 		$("#ConfirmAdress").click(function(){
			   		 			for(var i = 0; i < city.length; i++){
									// console.log("city.length", city.length);
							 		console.log("cityy", city[i].value);
							 		console.log("street.val : ", $("#adress").val());
							 		if ($("#adress").val() == city[i].value) {
							 			// alert(city[i].value);
							 			$("#level1").attr('value', city[i].level1);
						   		 		$("#level1Name").attr('value', city[i].level1Name);
						   		 		$("#level3").attr('value', city[i].level3);
						   		 		$("#level3Name").attr('value', city[i].level3Name);
						   		 		$("#level4").attr('value', city[i].level4);
						   		 		$("#level4Name").attr('value', city[i].level4Name);
						   		 		$('#localityId').attr('value', city[i].id);
							 			$("#adressLocality").attr('value', city[i].country);
										$("#postalCode").attr('value', city[i].postalCode);
										$("#street").show();
										$("#search").hide();
										$("#search2").show();
										$("#ConfirmAdress").hide();
										$("#ConfirmAdress2").show();
										// alert("L'adresse est valide");
									}
								};
							});
			   		 	};
		   			});
		   		},
		  	});
		});


		$( "#adress" ).keypress(function( event ) {
			if ( event.which == 13 ) {
			    // var location = $("#adress").val();
			    var location = $('#street').val();
			    $('#spin').show();
			    console.log("location : ", location);
			    
			    var geocode = 'https://nominatim.openstreetmap.org/search.php?format=json&q=' + location+'&addressdetails=1';

			    var geocode2 = 'http://api-adresse.data.gouv.fr/search/?q='+location;

			    var geocode3 = 'http://127.0.0.1/co2/city/autocompletemultiscope';


			    $.ajax({
			  		method: "POST",
			  		url: 'http://127.0.0.1/co2/city/autocompletemultiscope',
					data: {
					    type: "locality",
						scopeValue: $("#adress").val(),
						geoShape: true,
						formInMap: true,
						countryCode: $('#countryCode').val(),	
					},
					dataType: "json",

					success: function(data){
						$('#spin').hide();
			   		 	console.log("data : ", data);
			   		 	var city = [];
			   		 	// for(var i= 0; i < data.cities.postalCodes; i++){

			   		 	// for(var i= 0; i < data.features.length; i++){
		   		 		console.log("data.cities.length : ", data.cities);

			   		 		// $.each(data.features[i],function(i,v){
			   		 	$.each(data.cities, function(i,v){
			   		 		// alert('test');
			   		 		for(var i= 0; i < v.postalCodes.length; i++){
			   		 			// alert(v.postalCodes.length);
				   		 		city.push({
				   		 			'value' : v.postalCodes[i].name+', '+v.postalCodes[i].postalCode,
				   		 			'postalCode' : v.postalCodes[i].postalCode,
				   		 			'country' : v.postalCodes[i].name,
				   		 			'latitude' : v.postalCodes[i].geo.latitude,
				   		 			'longitude' : v.postalCodes[i].geo.latitude,
				   		 			'localityId' : v._id.$id,
				   		 			'level1' : v.level1,
				   		 			'level1Name' : v.level1Name,
				   		 			'level3' : v.level3,
				   		 			'level3Name' : v.level3Name,
				   		 			'level4' : v.level4,
				   		 			'level4Name' : v.level4Name,
				   		 			'id' : v._id.$id,

				   		 		});
					   		 	buildautoComplete(city);
							  	$("#adress").focus();
				   		 		console.log("city : ", city);
				   		 		$("#ConfirmAdress").click(function(){
				   		 			for(var i = 0; i < city.length; i++){
										// console.log("city.length", city.length);
								 		console.log("cityy", city[i].value);
								 		console.log("street.val : ", $("#adress").val());
								 		if ($("#adress").val() == city[i].value) {
								 			// alert(city[i].value);
								 			$("#level1").attr('value', city[i].level1);
							   		 		$("#level1Name").attr('value', city[i].level1Name);
							   		 		$("#level3").attr('value', city[i].level3);
							   		 		$("#level3Name").attr('value', city[i].level3Name);
							   		 		$("#level4").attr('value', city[i].level4);
							   		 		$("#level4Name").attr('value', city[i].level4Name);
							   		 		$('#localityId').attr('value', city[i].id);
								 			$("#adressLocality").attr('value', city[i].country);
											$("#postalCode").attr('value', city[i].postalCode);
											$("#street").show();
											$("#search").hide();
											$("#search2").show();
											$("#ConfirmAdress").hide();
											$("#ConfirmAdress2").show();
											// alert("L'adresse est valide");
										}
									};
								});
				   		 	};
				   		});
			   		 	
				   		 // };

			      	},
				});
			};
		});
		$("#search2").click(function(){
			var location = $("#street").val();
		    $('#spin2').show();
		    console.log(location);
		    var geocode = 'https://nominatim.openstreetmap.org/search.php?format=json&q=' + location+'&addressdetails=1';
		    var geocode2 = 'http://api-adresse.data.gouv.fr/search/?q='+location;

			    // lon:55.4399386
			    // lat:-21.2645981

		    if ($("#countryCode").val() == "FR"||"RE"||"GP"||"GF"||"MQ"||"YT"||"NC"||"PM") {
			    	// alert($("#countryCode").val());
			    
			    $.getJSON(geocode2, function(data) {
				        // get lat + lon from first match
				        //var latlng = [data[1].lat, data[1].lon];
				        //console.log(latlng);
			        var city = [];
				        // var i = 0;
			        console.log("data.features.length", data.features.length);
			        console.log("data.features", data.features);
			        	
					// for(var i= 0; i < data.features.length; i++){
		    		$.each(data.features,function(i,v){

			    		// console.log("data365 features :", v.properties.name);
				        	// console.log("v.features[i]", data.features.length);
			        	console.log("v[i].properties", v);
			          	city.push({
		      				'value': v.properties.name+", "+v.properties.postcode,
		      				'street' : v.properties.street,
		      				'houseNumber' : v.properties.housenumber,
		      				'latitude' : v.geometry.coordinates[1],
		      				'longitude' : v.geometry.coordinates[0],
		      				// 'country': v.properties.context
		  				});
		  				$('#spin2').hide();
					});
				    console.log("city2 :",city);
					buildautoComplete2(city);
				 	$("#street").focus();
					$("#ConfirmAdress2").click(function(){
						for(var i = 0; i < city.length; i++){
							// console.log("city.length", city.length);
					 		console.log("cityy", city[i].value);
					 		console.log("street.val : ", $("#street").val());
					 		if ($("#street").val() == city[i].value) {
					 			// alert(city[i].value);
					 			$("#streetAdress").attr('value', city[i].street);
								$("#houseNumber").attr('value', city[i].houseNumber);
								$("#latitude").attr('value', city[i].latitude);
								$("#longitude").attr('value', city[i].longitude);
								alert("L'adresse est valide");
								$("#ConfirmAdress2").hide();
					 		}
						};
					});
		    	});
		    }
		    else
		    {
		    	$.getJSON(geocode, function(data) {
			        // get lat + lon from first match
			        //var latlng = [data[1].lat, data[1].lon];
			        //console.log(latlng);
			        var city = [];
			        // var i = 0;
			        console.log("data.features.length", data.length);
			        console.log("data", data);
			        	
					// for(var i= 0; i < data.length; i++){
		    		$.each(data,function(i,v){


			    		// console.log("data365 features :", v.properties.name);
			        	console.log("data[i]", data[i]);
			        	console.log("v[i].address", v.address);
			          	city.push({
		      				'value': v.address.house_number+" "+v.address.road+", "+v.address.postcode,
		      				'street' : v.address.road,
		      				'houseNumber' : v.address.house_number,
		      				'latitude' :v.lat,
		      				'longitude' :v.lon,
		      				// 'country': v.properties.context
		  				});
		  				$('#spin2').hide();
					});
			    	// };
				    console.log("city2 :",city);
					buildautoComplete2(city);
				 	$("#street").focus();
					$("#ConfirmAdress2").click(function(){
						for(var i = 0; i < city.length; i++){
							// console.log("city.length", city.length);
					 		console.log("cityy", city[i].value);
					 		console.log("street.val : ", $("#street").val());
					 		if ($("#street").val() == city[i].value) {
					 			// alert(city[i].value);
					 			$("#streetAdress").attr('value', city[i].street);
								$("#houseNumber").attr('value', city[i].houseNumber);
								$("#latitude").attr('value', city[i].latitude);
								$("#longitude").attr('value', city[i].longitude);
								alert("L'adresse est valide");
								$("#ConfirmAdress2").hide();
					 		}
						};
					});
		    	});
		    }
		});

		$( "#street" ).keypress(function( event ) {
			if ( event.which == 13 ) {
			    var location = $("#street").val();
			    $('#spin2').show();
			    console.log(location);
			    var geocode = 'https://nominatim.openstreetmap.org/search.php?format=json&q=' + location+'&addressdetails=1';
			    var geocode2 = 'http://api-adresse.data.gouv.fr/search/?q='+location;

			    // lon:55.4399386
			    // lat:-21.2645981

			    if ($("#countryCode").val() == "FR"||"RE"||"GP"||"GF"||"MQ"||"YT"||"NC"||"PM") {
			    	// alert($("#countryCode").val());
			    
				    $.getJSON(geocode2, function(data) {
				        // get lat + lon from first match
				        //var latlng = [data[1].lat, data[1].lon];
				        //console.log(latlng);
				        var city = [];
				        // var i = 0;
				        console.log("data.features.length", data.features.length);
				        console.log("data.features", data.features);
				        	
						// for(var i= 0; i < data.features.length; i++){
			    		$.each(data.features,function(i,v){

				    		// console.log("data365 features :", v.properties.name);
					        	// console.log("v.features[i]", data.features.length);
				        	console.log("v[i].properties", v);
				          	city.push({
		          				'value': v.properties.name+", "+v.properties.postcode,
		          				'street' : v.properties.street,
		          				'houseNumber' : v.properties.housenumber,
		          				'latitude' : v.geometry.coordinates[1],
		          				'longitude' : v.geometry.coordinates[0],
		          				// 'country': v.properties.context
		      				});
		      				$('#spin2').hide();
						});
					    console.log("city2 :",city);
						buildautoComplete2(city);
					 	$("#street").focus();
						$("#ConfirmAdress2").click(function(){
							for(var i = 0; i < city.length; i++){
								// console.log("city.length", city.length);
						 		console.log("cityy", city[i].value);
						 		console.log("street.val : ", $("#street").val());
						 		if ($("#street").val() == city[i].value) {
						 			// alert(city[i].value);
						 			$("#streetAdress").attr('value', city[i].street);
									$("#houseNumber").attr('value', city[i].houseNumber);
									$("#latitude").attr('value', city[i].latitude);
									$("#longitude").attr('value', city[i].longitude);
									alert("L'adresse est valide");
									$("#ConfirmAdress2").hide();
						 		}
							};
						});
			    	});
			    }
			    else
			    {
			    	$.getJSON(geocode, function(data) {
				        // get lat + lon from first match
				        //var latlng = [data[1].lat, data[1].lon];
				        //console.log(latlng);
				        var city = [];
				        // var i = 0;
				        console.log("data.features.length", data.length);
				        console.log("data", data);
				        	
						// for(var i= 0; i < data.length; i++){
				    		$.each(data,function(i,v){


					    		// console.log("data365 features :", v.properties.name);
					        	console.log("data[i]", data[i]);
					        	console.log("v[i].address", v.address);
					          	city.push({
			          				'value': v.address.house_number+" "+v.address.road+", "+v.address.postcode,
			          				'street' : v.address.road,
			          				'houseNumber' : v.address.house_number,
			          				'latitude' :v.lat,
			          				'longitude' :v.lon,
			          				// 'country': v.properties.context
			      				});
			      				$('#spin2').hide();
							});
				    	// };
					    console.log("city2 :",city);
						buildautoComplete2(city);
					 	$("#street").focus();
						$("#ConfirmAdress2").click(function(){
							for(var i = 0; i < city.length; i++){
								// console.log("city.length", city.length);
						 		console.log("cityy", city[i].value);
						 		console.log("street.val : ", $("#street").val());
						 		if ($("#street").val() == city[i].value) {
						 			// alert(city[i].value);
						 			$("#streetAdress").attr('value', city[i].street);
									$("#houseNumber").attr('value', city[i].houseNumber);
									$("#latitude").attr('value', city[i].latitude);
									$("#longitude").attr('value', city[i].longitude);
									alert("L'adresse est valide");
									$("#ConfirmAdress2").hide();
						 		}
							};
						});
			    	});
			    }
		   	}
		});
	
});
  
  /*****************													************************
		**************		FIN DE LA PARTIE RECHERCHE D'ADRESSE		************************
	******************													***********************/



/*****************													************************
		**************		PARTIE  EVENT		************************
	******************													***********************/

$(document).ready(function() { 

	$('#startDate, #endDate').datetimepicker({
		timeFormat: 'HH:mm',
		dateFormat: "dd-mm-yy",
		controlType: 'select',
		oneLine: true,
	});
});


var limit = $("#maxlengthshortDescription");
var message = $("#shortDescription");

$(limit).text(0);

$(message).keyup(function(){

var rest = 0 + $(this).val().length ;
$(limit).text(rest);

if(rest>130)
  {
    $(limit).css('color','#F71616');
  }
  else
   {
      $(limit).css('color','#000');
   }

});




/*****************													************************
		**************		DÉBUT DE LA PARTIE NAVBAR		************************
	******************													***********************/
	/*$("#search").click(function(){

		var location = $("#tags").val();
		 geocode = 'https://nominatim.openstreetmap.org/search.php?format=json&q=' + location;

		$.getJSON(geocode, function(data) {
	  		// get lat + lon from first match
	  		var latlng = [data[1].lat, data[1].lon];
	  		//console.log(latlng);
	  		var city = [];
	  		$.each(data,function(i,v){
	  			city.push(v.display_name);
	  		});
	  		console.log(city);
	  		//console.log(ville);

		  // let's stringify it
		  var latlngAsString = latlng.join(',');
		  //console.log(latlngAsString);

		  // the full results JSON
		  //console.log(data);
		  autoComplete(city);

		});
		
	});*/

	// 127.0.0.1/#page.type.citoyens.id.5ae2bf1c624738ff188b4579.view.directory.dir.projects
	// https://communecter.org/#page.view.directory.dir.id.5a7e9e3e40bb4e797640acde

	$("#projet").attr('href', 'https://communecter.org/#page.type.citoyens.id.'+userId+'.view.directory.dir.projects');
    $("#event").attr('href', '127.0.0.1/#page.type.citoyens.id.'+userId+'.view.directory.dir.events');
    $("#person").attr("href", '//127.0.0.1/#page.type.citoyens.id.'+userId+'.view.directory.dir.followers');
    $("#orga").attr("href", '127.0.0.1/#page.type.citoyens.id.'+userId+'.view.directory.dir.organizations');
    $('#poi').attr("href", '127.0.0.1/#page.type.citoyens.id.'+userId+'.view.directory.dir.poi');
    $('#deco').attr("href", 'http://127.0.0.1/ph/co2/person/logout');

	

	$("#notif").click(function(){
		
		$(".active").attr('class', 'dropdown-item');
		$("#notif").attr('class', 'dropdown-item active');

		afficheNotif();

		refreshNotif();
	});

	$("#chat").click(function(){
		url = "https://chat.communecter.org/";
		window.open(url);
	});

	$("#discord").click(function(){
		buildDiscord();
	});

	$("#deco").click(function(){

		$.ajax({
			url : 'http://127.0.0.1/ph/co2/person/logout', // La ressource ciblée
	      	success: function(data){
	      			alert("test");
	      			view_connection();
	      			evenement();
	      			$(".navbar").hide();
			      	chrome.browserAction.setIcon({
											  path : {
											    "48": "icons/login.png"
											  }
											});

	   		 
	      	}
		});
		chrome.runtime.reload();
	});

	// FIN DES EVENEMENTS POUR LA NAVBAR

	// EVENEMENTS POUR LA PARTI NOTIFICATION
	
	$(".notif").click(function(){
		var url = "http://127.0.0.1/ph/co2#";
		url +=  $(this).data().href;
		window.open(url);
	});


	$("#deleteNotif").click(function(){
    	$.ajax({

	      	url : 'http://127.0.0.1/ph/co2/notification/removeall', // La ressource ciblée
	      	success: function(data){
	      		$(".notifications-count").hide();
	      		refreshNotif();

	      		chrome.browserAction.setIcon({
									  path : {
									    "48": "icons/logo-min.png"
									  }
									 });
	      		chrome.runtime.reload();
	      	}
	      });
	});


	$(".refresh").click(function(){
		
		afficheNotif();

		refreshNotif();
	});

	// FIN DES FUNCTIONS POUR LA PARTI NOTIFICATION

	// DEBUT DE LA PARTIE CONNEXION

	$("#connexion").click(function(){
		runLoginValidator();
		verifInfo();
	});

	$( "#password-login" ).keypress(function( event ) {
		if ( event.which == 13 ) {
			runLoginValidator();
			verifInfo();
		}
	});


	$("#save").click(function(){
		$('#formValidate').submit();
	});
}


//function pour recharger les notifications
function refreshNotif(){

	var userId = "";
	$.ajax({
      	url : 'http://127.0.0.1/ph/co2/person/logged/', // La ressource ciblée
      	success: function(data){
			if(data['userId'] != null){
				userId = data['userId'] ;

				// Vérifie si l'utilisateur a des notifications
				 $.ajax({
					url : 'http://127.0.0.1/ph/co2/notification/getnotifications/type/citoyens/id', // La ressource ciblée
					success: function(data){
						if(data["notif"].length != 0){
							$.each(data["notif"],function(i,v){

								notif =	'<li>'+
										'<a class="notif" href="'+ v.notify.url+'" data-href="'+ v.notify.url+'">'+'<i class="fa '+v.notify.icon+' mr-2"></i>'+
											v.notify.displayName+
										'</br>'+v.timeAgo+
										'</a>'+
									'</li>';
							
							});
							$(".notifList").html(notif);
							evenement();
						}else{
							afficheNotif();
							$(".notifList").html('<li class="col-12"><i class="fa fa-ban"></i> Vous n’avez pas de notifications pour le moment</li>');
						}
					}
				});
			}
		}
    });
}

	// function pour la connexion à communecter
	function runLoginValidator() {

		var params = {
			"email" : $("#email-login").val(),
           "pwd" : $("#password-login").val(),
           "remember" : $("#formLogin #remember").prop("checked") 
        };
	    

    	$.ajax({
    	  type: "POST",
    	  url: "http://127.0.0.1/ph/co2/person/authenticate",
    	  data: params,
    	  success: function(data){ 
    		if(data.result == false){
    		  	
    		  	/*if($("#remember").prop("checked")){
    		  		var pwdEncrypt = encryptPwd($("#password-login").val());
	    		  	var emailEncrypt = encryptPwd($("#email-login").val());
	    		  	$.cookie("lyame", emailEncrypt, { expires: 180, path : "/" });
	    		  	$.cookie("drowsp", pwdEncrypt, { expires: 180, path : "/" });
	    		  	$.cookie("remember", $("#remember").prop("checked"), { expires: 180, path : "/" });
	    		  	
	    		}*/
	    		$(".emailAndPassNotMatchResult").show();

	    	}else{

	    		$("#main-container").html();
	    		$(".navbar").show();
	    		buildMenu();
	    		chrome.browserAction.setIcon({
									  path : {
									    "48": "icons/co.png"
									  }
									 });

	   			chrome.runtime.reload();
	   			 
	    	}
	    	
	      },
	      error: function(){
	      	
	      }
	    });
	}


	//function pour charger tout les liens à l'utilisateur 
	function loadMycontact(type){

		$.ajax({

			url : 'http://127.0.0.1/ph/api/person/mycontact',
			data: {},
			datatype: 'jsonp',
			success: function(data){


				mycontact =  data;
				buildMycontactType(type);
				eventMenu();
			},
			error: function(){
				console.log('erreur');
			}
		});

	}

eventMenu
	// function pour la construction html des pages 
	function buildMycontactType(type){
		
		var bg ="";
		if(type == "people"){
			bg = "bg-yellow";
		}else if(type == "projects"){
			bg = "bg-purple";
		}else if(type == "events"){
			bg = "bg-orange";
		}else if(type == "organizations"){
			bg = "bg-green";
		}
		var contenu = '<div class="list-group no-padding"><ul id="floopType-'+type+'">';
		$.each(mycontact[type], function(i,v){
			contenu += 	'<li><a class="btn btn-default btn-scroll-type btn-select-contact lbh elipsis '+type+'" href="http://127.0.0.1/ph/co2" data-id="' + v._id['$id'] +  '">'+ 
								'<div class="btn-chk-contact">'+
								'<img src="/assets/images/thumb/default_'+type+'.png" class="thumb-send-to '+bg+'" height="35" width="35">'+
								'<span class="info-contact"><span class="name-contact text-dark text-bold">'+v.name+'</span><br><span class="cp-contact text-light pull-left" idcontact="5aa8b48923b57f3f148b456f"> </span><span class="city-contact text-light pull-left" idcontact="5aa8b48923b57f3f148b456f"></span></span>'+
								'</div>'+
							'</a>'+
							'<button class="btn btn-xs btn-default btn-open-chat pull-right"><i class="fa fa-comments"></i></button>'+
						'</li>';
			
		});
		contenu += '</ul></div>';
		$('#main-container').html(contenu);
	}


	// function pour l'ouverture des onglets
	function eventMenu(){
		$(".people").click(function(){
			url ='http://127.0.0.1/ph/co2#page.type.citoyens.id.';
			url +=  $(this).data().id;
			window.open(url);
		});	

		$(".organizations").click(function(){
			url ='http://127.0.0.1/ph/co2#page.type.organizations.id.';
			url +=  $(this).data().id;
			window.open(url);
		});	

		$(".projects").click(function(){
			url ='http://127.0.0.1/ph/co2#page.type.projects.id.';
			url +=  $(this).data().id;
			window.open(url);
		});	

		$(".events").click(function(){
			url ='http://127.0.0.1/ph/co2#page.type.events.id.';
			url +=  $(this).data().id;
			window.open(url);
		});	
	}


function getUserId(){
    	$.ajax({
	      	url : 'http://127.0.0.1/ph/co2/person/logged/', // La ressource ciblée
	      	success: function(data){
				if(data['userId'] != null){
					userId = data['userId'] ;
				}
			},
			error : function(){
				console.log("erreur de login");
			}
		});
}

function getInfoTabs(){
	var gettingActiveTab = chrome.tabs.query({
								    active: true,               // Select active tabs
								    lastFocusedWindow: true     // In the current window
								}, function(array_of_Tabs) {
								    // Since there can only be one active tab in one active window, 
								    //  the array has only one element
								    
								    var tab = array_of_Tabs[0];
								    

								    //Récupère l'url
								    var url = tab.url;
								    
								    //Récupère le titre
								    var title = tab.title;


								    //Récupère la partie selectionner pour la description
								    chrome.tabs.executeScript(array_of_Tabs[0].id,
			                           	{ file: "/content_scripts/select.js" },function(array){
			                           		var description = array[0];
			                           		
			                           		if(description != ""){
										    	$("#description").html(description);
										    }else{
										    	$("#description").attr("placeholder", "Sélectionner la description");
										    }
			                         });

								    //Récupère les keywords pour la construction des tags
								    chrome.tabs.executeScript(array_of_Tabs[0].id,
			                           	{ file: "/content_scripts/getKeywords.js" },function(array){

			                           		$(".js-example-data-array").select2({
  												data: Object.values(array[0])
											});
											$(".js-example-data-array").val(Object.values(array[0]));
			                         
			                         });

								    //Récupère les flux rss
								    chrome.tabs.executeScript(array_of_Tabs[0].id,
			                           	{ file: "/content_scripts/getRss.js" },function(array){

			                           		if(array[0]!=""){
			                           			var rss = array[0];
			                           			var contenu2 ='';
			                           			for(var i= 0; i < rss.length; i++){

			                           			contenu2 += '<option>'+rss[i]+'</option>';
			                           			
			                           		}
			                           			$("#urlRss").html(contenu2);
     			
			                           		}

			                           		console.log('rss',rss);

			                           	});
								   	$( "#url-tab" ).attr( "href",url);
								    $( "#url-tab" ).attr("value",url);
								    $("#title-tab").attr("value",title);
								    
								 });

}



function autoComplete(city){

	console.log("autocomplete city",city);
	  $( "#tags" ).autocomplete({
  		source: city
		 });
}

function buildautoComplete(city,) {

   //$( ".adress" ).autocomplete( "option", "classes.ui-autocomplete", "highlight" );
   //alert('test');
  $("#adress").autocomplete({ 
    source: city,
    select : function(event, ui){ // lors de la sélection d'une proposition
    	// $("#postcode").attr("value", city.postcode);
    	// $("#city").attr("value", city);
    	// $("#country").attr("value", country);
    },
    minLength: 0
    }).on("focus", function () {
    $(this).autocomplete("search", '');
    });

  };

  function buildautoComplete2(city,) {
	  $("#street").autocomplete({ 
	    source: city,
	    select : function(event, ui){ // lors de la sélection d'une proposition
	    	// $("#postcode").attr("value", city.postcode);
	    	// $("#city").attr("value", city);
	    	// $("#country").attr("value", country);
	    },
	    minLength: 0
	    }).on("focus", function () {
	    $(this).autocomplete("search", '');
    	});
	};


