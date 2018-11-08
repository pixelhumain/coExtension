// execute the script now so it can listen to the messages sent by the code below
//browser.tabs.executeScript(null, { file: "/content_scripts/communecter.js" });

var url ="";
var title="";
var nbNotif = 0;
var userId = "";
var notif ="";
var description = "";

$(document).ready(function(){

	// Vérifie si l'utilisateur est connecter
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

									var addclass =""
									console.dir(data["notif"]);
									$.each(data["notif"],function(i,v){
									
										addclass = "";
										
										$.each(v.notify['id'], function(index,value){

											if(index == userId && value.isUnseen == true){
												addclass = "isUnseen";
												nbNotif++;

											}
										});

										//alert(v.notify.id[userId].isUnseen);

										/*$("#main-container").append('<a class="notif" href="https://www.communecter.org/#page.type.organizations.id.'+ v.target.id+'" data-href="https://www.communecter.org/#page.type.organizations.id.'+ v.target.id+'">'+v.verb+'</a><br/>');
										evenement();*/
										notif += '<li>'+
													'<a class="notif '+addclass+'" href="'+ v.notify.url+'" data-id="'+ v.notify.id+'">'+'<i class="fa '+v.notify.icon+' mr-2"></i>'+
														v.notify.displayName+'</br>'+
														v.timeAgo+
													'</a>'+
												'</li>';


									});
								}
								
								if(nbNotif>0){
									$(".active").attr('class', 'dropdown-item ');
									$("#notif").attr('class', 'dropdown-item  active');
									$(".navbar").show();
									$("#notif").append('<span class="notifications-count topbar-badge badge animated bounceIn badge-transparent badge-success">'+nbNotif+'</span>');
									afficheNotif();
									$(".notifList").html(notif);
								}
								else{
									console.log("TEST RADIO : send data");

									 $.ajax({ 
									 	//async:false,
							            type: "GET",
							            //url : 'http://127.0.0.1/ph/co2/person/logged/',
							            url: "http://34.253.15.201:8000/radio-pixel-humain.ogg",
							            dataType: "jsonp",
							            success: function(data) {
							                	console.log("radio signal found ! you can listen to RADIO-PIXEL-HUMAIN in line right now !");
							                	ready = true;

							                	chrome.browserAction.setIcon({
												  path : {
												    "48": "icons/radio.png"
												  }
												 });
							                	buildDiscord();

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
									$(".navbar").show();
									//buildDiscord();
									buildMenu();
									$("#main-container").show();
								}
								
								evenement();
							}

					});
			   
			}
			else{
				view_connection();
				evenement();
			}

		}
    });

});
