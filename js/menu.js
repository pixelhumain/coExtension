
var userId = "";
var nbNotif = 0;
function menu(){


	$(document).ready(function(){

		$.ajax({

	      	//url : 'https://www.communecter.org/co2/person/logged/', // La ressource ciblée
	      	url : 'http://127.0.0.1/ph/co2/person/logged/',
	      	success: function(data){
				if(data['userId'] != null){
						userId = data['userId'];
					}
					alert(nbNotif);
				}
			});
		
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
							
							
						}
							
					}
				},
				error: function(){
					console.log('erreur de la requête notif survenue');
	         	}
			});
	});
}