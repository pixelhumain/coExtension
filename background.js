var userId = "";
var nbNotif = 0;
var ready = true;


$(document).ready(function(){
	
	verifInfo();
	//test();
	chrome.tabs.onSelectionChanged.addListener(verifRss);

	function verifRss(){
		var gettingActiveTab = chrome.tabs.query(
			{ 
				active: true, // Select active tabs
				lastFocusedWindow: true// In the current window
			},
		function(array_of_Tabs) {
			chrome.tabs.executeScript(array_of_Tabs[0].id,{file: "/content_scripts/getRss.js" },function(array){
				console.log("array[0]",array[0], array[0].length );

				if(array[0].length > 0){
					chrome.browserAction.setIcon({
						path : {
							"48": "icons/icons8-rss-48.png"
						}
					});
				}else{
					verifInfo();
				}
			});
		});
	}

	window.setInterval(verifInfo,300000);

	function verifInfo(){




	//Récupèree l'id de l'utilisateur
		$.ajax({

	      	//url : 'https://www.communecter.org/co2/person/logged/', // La ressource ciblée
	      	url : 'http://127.0.0.1/ph/co2/person/logged/',
	      	success: function(data){
				if(data['userId'] != null){
						userId = data['userId'];

						chrome.browserAction.setIcon({
						  path : {
						    "48": "icons/co.png"
						  }
						 });
				}
				else
				{
					chrome.browserAction.setIcon({
					  path : {
					    "48": "icons/login.png"
					  }
					 });
				}
			}
		});


		// Récupère le nombre de notifications
		$.ajax({
			//url : 'https://www.communecter.org/co2/notification/getnotifications/type/citoyens/id', // La ressource ciblée
			url : 'http://127.0.0.1/ph/co2/notification/getnotifications/type/citoyens/id',
			success: function(data){
				
				if(data["notif"]){
					/*$("#main-container").empty();*/
					

					$.each(data["notif"],function(i,v){
						
						
						//alert(v.notify.id[userId].isUnseen);

						/*$("#main-container").append('<a class="notif" href="https://www.communecter.org/#page.type.organizations.id.'+ v.target.id+'" data-href="https://www.communecter.org/#page.type.organizations.id.'+ v.target.id+'">'+v.verb+'</a><br/>');
						evenement();*/

						$.each(v.notify['id'], function(index,value){

							if(index == userId && value.isUnseen == true){
								nbNotif++;

							}
						});

					});

					if(nbNotif>0){
						
						chrome.browserAction.setIcon({
						  path : {
						    "48": "icons/notification.png"
						  }
						});
						var msg = 'vous avez ' +  nbNotif + ' notifications non lu';
						
						var opt = {
									type: "basic",
									title: "Notifications",
									message: msg,
									iconUrl: "../icons/co.png"
								}
						chrome.notifications.create(opt);
					}
						
				}
			},
			error: function(){
				console.log('erreur de la requête notif survenue');
         	}
		});

		


	////////////////////////////////////////////////////////////////////////////////////////////

		// PARTIE POUR VERIFIER SI LA RADIO EST EN LIGNE
		console.log("TEST RADIO : send data");

		 $.ajax({
            type: "GET",
            url: "http://34.253.15.201:8000/radio-pixel-humain.ogg",
            dataType: "jsonp",
            success:
                function(data) {
                	console.log("radio signal found ! you can listen to RADIO-PIXEL-HUMAIN in line right now !");
                	ready = true;

                	chrome.browserAction.setIcon({
					  path : {
					    "48": "icons/radio.png"
					  }
					 });

                },
            statusCode:{
                404: function(){
                     console.log("TEST RADIO : 404");
                     ready = false;
                }
            },
            error:function(xhr, status, error){
                console.log("TEST RADIO : ERROR", status, error);
                ready = false;
            },
        });

		nbNotif = 0;
	}
})
