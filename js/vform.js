function form_add(ajout,poi=null){
	
	var bg = "";
	var h3 = "";
	var icon = "";

	// Condition pour l'affichage de chaque form

	if(ajout == "organization"){
	
		bg = 'bg-green';
		h3 = 'Ajouter une nouvelle organisation';
		icon = '<i class="fa fa-group"></i>';
		
		var form =
		'<form data-key="organization" id="formValidate" method="POST" action="">'+
			'<div class="container-fluid" id="orgaz">'+
			    '<div class="row pt-2 pb-3">'+
			    	'<div class="col-12">'+
						'<label class="text-bold">Nom de l\'organisation : </label><br>'+
						'<input type="text" id="nom" style="width: 100%; border-radius: 5px;" name="nom">'+
					'</div>'+
				    '<div class="col-12 pt-2">'+
					'<label class="text-bold">Type d\'organisation : </label><br>'+
				        '<select class="" name="type" id="type" style="width: 100%;height:30px;" data-placeholder="Type d\'organisation*">'+
				            '<option class="text-red" style="font-weight:bold" disabled="" selected="">Type d\'organisation*</option>'  +
				            '<option value="NGO">Association</option><option value="LocalBusiness">Entreprise</option> ' +
				            '<option value="Group">Groupe</option><option value="GovernmentOrganization">Service Public</option> ' +
				        '</select>'+
				    '</div>'+
		       		'<div class="col-12 pt-3">'+
		       			'<label class="text-bold">Votre rôle : </label><br>'+
				         '<select class="" name="role" id="role" style="width: 80%;height:30px;" data-placeholder="Quel est votre rôle ?*"> '+
				           '<option class="text-red" style="font-weight:bold" disabled="" selected="">Quel est votre rôle ?*</option><option value="admin">Administrateur</option>'+
				           '<option value="member">Membre</option>' +
				           '<option value="creator">Juste un citoyen qui veut faire connaître cette organisation</option>'+
				         '</select>'+
			        '</div>'+
				    '<div class="col-12 p-2">'+
				    '<br>'+
				      '<label for="description" class="text-bold">DESCRIPTION</label>'+
				    '</div>'+
				    '<div class="col-12 p-2">'+
				      '<textarea type="text" id="description" name="description" style="width: 100%; border-radius: 5px;"></textarea>'+
				    '</div>'+
				    '</div>'+
			  	'</div>'+
	      		'<div class="form-group row pt-1">'+
	        		'<div class="col-12">'+
	          	'</div>'+
	      	 	'<div class="col-12 p-2">'+
	      	 		'<label class="text-bold">Tags : </label><br>'+
	          		'<select class="js-example-data-array" name="tags[]" multiple="multiple" style="width: 500px;">'+
	          		'</select>'+
	        	'</div>'+
		     	'</div>'+
		      	'<div class="row">'+
			        '<div class="col-12">'+
			        	'<input type="hidden" id="postcode">'+
			        	'<input type="hidden" id="city">'+
			        	'<input type="hidden" id="country">'+
						'<div class="ui-widget">'+
			    			'<label for="tags" class="text-bold">Adresse : </label><br>'+
							'<input id="adress" name="adress" style ="width: 75%; border-radius: 5px;"">'+
							'<a class="btn btn-success ml-3" id="search">Search</a>'+
			   			'</div>'+
			        '</div>'+
				    '<div class="col-12 text-left"><br>'+
				        '<a class="btn btn-primary color-white" id="ConfirmAdress">Confirmer l\'adresse</a>'+
				    '</div>'+
				    '<br>'+
				    '<div class="col-12 text-left pb-2" id="rss"><br>'+
				    '</div>'+
				    '<br>'+
				    '<div class="col-12">'+
						'<label class="text-bold">email : </label><br>'+
						'<input type="text" id="mail" name="mail" style="width: 100%; border-radius: 5px;" placeholder="example@mail.com">'+
					'</div>'+
					'<div class="col-12">'+
						'<label class="text-bold">URL principale : </label><br>'+
						'<input type="text" id="url-tab" name="checkUrl" style="width: 100%; border-radius: 5px;" placeholder="www.example.com">'+
					'</div>'+
				    '<div class="col-12 text-center pb-2"><br>'+
				    '<a class="btn btn-danger color-white" id="save">Save to   <img src="../icons/logo-min.png" height="25px"></a>'+
			  		'</div>'+
			  		'<br>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</form>';

		buidInputTags();



	}else if(ajout == 'event'){
	
		bg = 'bg-orange';
		h3 = ' Ajouter un nouvel événement ';
		icon = '<i class="fa fa-calendar"></i>';

		var form =	'<form data-key="event" id="formValidate">'+
						'<div class="container-fluid">'+
							'<div class="row pt-1 pb-1">'+
								'<div class="col-12">'+
									'<label class="text-bold">Nom de l\'évènement : </label><br>'+
									'<input type="text" id="nom" style="width: 100%;" name="nom">'+
								'</div>'+
								'<div class="col-12" style="width: 100%;">'+	
									'<label class="text-bold">Qui organise cette évènement : </label><br>'+
								'</div>'+
								'<div class="col-12" id="selectParent" style="width: 100%;">'+	
									'<label class="text-bold">Qui organise cette évènement : </label><br>'+
								'</div>'+
								'<div class="col-12" style="width: 100%;">'+
									'<label class="text-bold">Fait parti d\'un événement ? </label><br>'+
								'</div>'+
								'<div class="col-12" style="width: 100%" id="selectParent2">'+
								'</div>'+
								'<div class="col-12" style="width: 100%">'+
									'<label class="text-bold">Type d\'événement ? </label><br>'+
								'</div>'+
								'<div class="col-12" style="width: 100%">'+
									'<select class=" " name="eventType" id="eventType" style="width: 100%;height:30px;" data-placeholder="Choisir*">'+
										'<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisir*</option>'+
										'<option value="competition">Compétition</option>'+
										'<option value="concert">Concert</option>'+
										'<option value="conference">Conférence</option>'+
										'<option value="contest">Concours</option>'+
										'<option value="course">Formation</option>'+
										'<option value="crowdfunding">Financement Participatif</option>'+
										'<option value="debate">Débat</option>'+
										'<option value="exhibition">Exposition</option>'+
										'<option value="festival">Festival</option>'+
										'<option value="film">Projection</option>'+
										'<option value="getTogether">Rencontre</option>'+
										'<option value="market">Marché</option>'+
										'<option value="meeting">Réunion</option>'+
										'<option value="others">Autres</option>'+
										'<option value="stand">Stand</option>'+
										'<option value="workshop">Atelier</option>'+
									'</select>'+
								'</div><br>'+
								'<div class="col-12" style="width: 100%">'+
									'<label class="text-bold">Toute la journée ? </label><br>'+
									'<div class="col-4S">'+
							            '<input type="radio" class="checkRadio" name="y/n" id="radio1" value="true"> Oui '+
							            '<input type="radio" class="checkRadio" name="y/n" id="radio2" value="false"> Non'+
							        '</div>'+
							    '</div><br>'+
							    '<div class="col-12" style="width: 100%">'+
							    	'<label class="text-bold">Date de début</label><br>'+
								    '<input type="text" class="form-control dateTimeInput " name="startDate" id="startDate" value="" placeholder="Date de début*">'+
								'</div>'+
								'<div class="col-12" style="width: 100%;">'+
								    '<label class="text-bold">Date de fin </label><br>'+
								    '<input type="text" class="form-control dateTimeInput " name="endDate" id="endDate" value="" placeholder="Date de fin*">'+
								'</div>'+
								'<div class="col-12" style="width: 100%;">'+
									'<label class="text-bold">Description courte</label><br>'+
						        	'<textarea id="shortDescription" name="description" maxlength="140" class="form-control textarea  maxlengthTextarea" name="shortDescription" placeholder="..."></textarea>'+
						        	'<span><span id="maxlengthshortDescription" name="maxlengthshortDescription"></span> / 140 caractère(s) </span>'+
							    '</div>'+
							    '<br>'+
								    '<div class="col-12 p-2">'+
						      	 		'<label class="text-bold">Tags : </label><br>'+
						          		'<select class="js-example-data-array" name="tags[]" multiple="multiple" style="width: 500px;">'+
						          		'</select>'+
							        '</div>'+
							        '<div class="row">'+
								        '<div class="col-12">'+
								        	'<input type="hidden" id="postcode">'+
								        	'<input type="hidden" id="city">'+
								        	'<input type="hidden" id="country">'+
											'<div class="ui-widget">'+
					                			'<label for="tags" class="text-bold">Adresse : </label><br>'+
					                			'<input id="adress" name="adress" style ="width: 75%"">'+
					                			'<a class="btn btn-success ml-3" id="search">Search</a>'+
					               			'</div>'+
					               			'<br>'+
								        '</div>'+
								         '<div class="col-12 text-left"><br>'+
								            '<a class="btn btn-primary color-white" id="ConfirmAdress">Confirmer l\'adresse</a>'+
								          '</div>'+
									'<div class="col-12 text-center pb-2"><br>'+
								        '<a class="btn btn-danger color-white" id="save">Save to   <img src="../icons/logo-min.png" height="25px"></a>'+
								    '</div>'+
							'</div>'+
						'</div>'+
					'</form>';

	buildSelectParent();
	buidInputTags();


	}else if (ajout == 'project'){
		
		bg = 'bg-purple';
		h3 = 'Ajouter un nouveau projet';
		icon = '<i class="fa fa-lightbulb-o mr-3"></i>';

		var form = 
				'<form data-key="project" id="formValidate">'+
					'<div class="container-fluid">'+
						'<div class="row pt-1 pb-1">'+
							'<div class="col-12">'+
								'<label class="text-bold">Nom du projet : </label><br>'+
								'<input type="text" id="nom" style="width: 100%;" name="nom">'+
							'</div>'+
							'<div class="col-12" style="width: 100%;">'+
								'<label class="text-bold">Description courte</label><br>'+
					        	'<textarea id="shortDescription" name="description" maxlength="140" class="form-control textarea  maxlengthTextarea" name="shortDescription" placeholder="..."></textarea>'+
					        	'<span><span id="maxlengthshortDescription" name="maxlengthshortDescription">0</span> / 140 caractère(s) </span>'+
						    '</div>'+
						    '<br>'+
							    '<div class="col-12 p-2">'+
					      	 		'<label class="text-bold">Tags : </label><br>'+
					          		'<select class="js-example-data-array" name="tags[]" multiple="multiple" style="width: 500px;">'+
					          		'</select>'+
						        '</div>'+
						        '<div class="row">'+
							        '<div class="col-12">'+
							        	'<input type="hidden" id="postcode">'+
							        	'<input type="hidden" id="city">'+
							        	'<input type="hidden" id="country">'+
										'<div class="ui-widget">'+
				                			'<label for="tags" class="text-bold">Adresse : </label><br>'+
				                			'<input id="adress" name="adress" style ="width: 75%"">'+
				                			'<a class="btn btn-success ml-3" id="search">Search</a>'+
				               			'</div>'+
				               			'<br>'+
							        '</div>'+
							        '<div class="col-12 text-left"><br>'+
							            '<a class="btn btn-primary color-white" id="ConfirmAdress">Confirmer l\'adresse</a>'+
							        '</div>'+
							    '</div>'+
								'<div class="col-12 text-center pb-2"><br>'+
							        '<a class="btn btn-danger color-white" id="save">Save to   <img src="../icons/logo-min.png" height="25px"></a>'+
							    '</div>'+
						'</div>'+
					'</div>'+
				'</form>';

			buidInputTags(); 


	}else if (ajout == 'classified'){

		bg = 'bg-azure';
		h3 = 'Publier une annonce';
		icon = '<i class="fa fa-bullhorn"></i>';

		var form =
	    		'<form data-key="classified" id="formValidate">'+
					'<div class="col-6  p-1">'+
						'<select class="" name="type" id="type" style="width: 100%;height:30px;" data-placeholder="Type d\'annonce">'+
					     	'<option class="text-red" style="font-weight:bold" disabled="" selected="">De quel type d\'annonce s\'agit-il ?</option>'  +
					     	'<option value="forsale">A vendre</option>'+
					     	'<option value="forrent">A louer</option> ' +
					     	'<option value="job">Emplois</option>'+
					    	'<option value="donation">A donner</option> ' +
					 	'</select>'+
					'</div>'+
		          	'<div class="col-6  p-1" id="sub0" style="display:none">'+
			     		'<select class="" id="subZ" name="type" style="width: 100%;height:30px;" data-placeholder="Choisissez une catégorie">'+
				  			'<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une catégorie.</option>'+
							'<option value="Comptabilité">Achats/Comptabilité</option>'+
							'<option value="Arts-Crafts">Art/Artisanat</option>' +
							'<option value="Bank-Insurance">Banque/Assurance</option>'+
							'<option value="Building-Public_works">Batiment/Travaux publique</option>'+
							'<option value="Trade-Sales">Commerce/Vente</option>'+
							'<option value="Communication-Multimedia">Communication/Multimédia</option>'+
							'<option value="Consultant-Market_research">Conseil/Étude</option>'+
							'<option value="Natural_spaces">Espaces Naturels</option>' +
							'<option value="Agriculture">Agriculture</option>'+
							'<option value="Fishing">Pêche</option>'+
							'<option value="Animals_care">Soin aux Animaux</option>'+
							'<option value="Hotel_business">Hôtellerie</option>'+
							'<option value="Catering">Restauration/option>'+
							'<option value="Tourism">Tourisme</option>' +
							'<option value="Animation">Animation</option>'+
							'<option value="Property">Immobilier</option>'+
							'<option value="Industry">Idustrie</option>'+
							'<option value="IT-Telecommunication">Informatique/Télécommunication</option>'+
							'<option value="Installation-Maintenance">Installation/Maintenance</option>'+
							'<option value="Marketing-Strategy">Marketing/Stratégie</option>'+
							'<option value="Human_Ressources">Ressources Humaines</option>'+
							'<option value="Health">Santé</option>' +
							'<option value="Secretariat-Assistantship">Secrétariat/Assistanat</option>'+
							'<option value="Home_services">Service à la personne</option>'+
							'<option value="Public_services">Service à la collectivité</option>'+
							'<option value="Spectacle">Spectacle</option>'+
							'<option value="Sport">Sport/option>'+
							'<option value="Transport-Logistic">Transport/logistique</option>' +
						'</select>'+
			     	'</div>'+
			      		'<div class="form-group row pt-1">'+
			        		'<div class="col-12">'+
			          	'</div>'+
			       		'<div class="col-12 pt-1">'+
				          '<select class="" name="role" id="role" style="width: 80%;height:30px;" data-placeholder="Choisissez une catégorie."> '+
				            '<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une catégorie.</option>'+
				            '<option id="tech" value="Technology">Technologie</option>'+
				            '<option id="home" value="Home">Maison</option>' +
				            '<option id="proper" value="Property">Immobilier</option>'+
				            '<option id="leis" value="Leisure">Loisirs</option>'+
				            '<option id="vehi" value="Vehicles">Véhicules</option>'+
				            '<option id="fash" value="Fashion">Mode</option>'+
				          '</select>'+
				        '</div>'+
			     	'</div>'+
			     	'<div id="subConstant">'+
				     	'<div class="subDiv col-6  p-1" id="sub1" style="display:none">'+
				     		'<select class="" id="subU" name="type" style="width: 100%;height:30px;" data-placeholder="Choisissez une sous catégorie">'+
					  			'<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une sous catégorie.</option>'+
								'<option value="TV / Video">TV/Vidéo</option>'+
								'<option value="IT">Informatique</option>' +
								'<option value="Touchpads">Tablette</option>'+
								'<option value="Telephony">Téléphonie</option>'+
								'<option value="Camera">Appareil Photo</option>'+
								'<option value="Audio device">Appareil Audio</option>'+
							'</select>'+
				     	'</div>'+
				     	'<div class="subDiv col-6  p-1" id="sub2" style="display:none">'+
				     		'<select class="" id="subD" name="type" style="width: 100%;height:30px;" data-placeholder="Choisissez une sous catégorie">'+
					  			'<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une sous catégorie.</option>'+
								'<option value="House">Maison</option>'+
								'<option value="Flat">Appartement</option>' +
								'<option value="Parking">Parking</option>'+
								'<option value="Ground">Terrain</option>'+
								'<option value="Office">Bureau</option>'+
							'</select>'+
				     	'</div>'+
				     	'<div class="subDiv col-6  p-1" id="sub3" style="display:none">'+
				     		'<select class="" id="subT" name="type" style="width: 100%;height:30px;" data-placeholder="Choisissez une sous catégorie">'+
					  			'<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une sous catégorie.</option>'+
								'<option value="Household appliances">Électroménager</option>'+
								'<option value="Baby equipment">Équipement Bébé</option>' +
								'<option value="Animals">Animaux</option>'+
								'<option value="Various">Divers</option>'+
								'<option value="Furniture">Mobilier</option>'+
							'</select>'+
				     	'</div>'+
				     	'<div class="subDiv col-6  p-1" id="sub4" style="display:none">'+
				     		'<select class="" id="subQ" name="type" style="width: 100%;height:30px;" data-placeholder="Choisissez une sous catégorie">'+
					  			'<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une sous catégorie.</option>'+
								'<option value="Sports">Sports</option>'+
								'<option value="Musical instrument">Instrument de Musique</option>' +
								'<option value="Sound system">Sonorisation</option>'+
								'<option value="CD / DVD">CD/DVD</option>'+
								'<option value="Toy">Jouet</option>'+
								'<option value="Games">Jeux de socièté</option>'+
								'<option value="Books / Comics">Livres/BD</option>'+
								'<option value="Collections">Collections</option>'+
								'<option value="DIY">Bricolage</option>'+
								'<option value="Gardening">Jardinage</option>'+
								'<option value="Art / Deco">Art/Décos</option>'+
								'<option value="Model making">Modélisme</option>'+
								'<option value="Childcare">Puériculture</option>'+
								'<option value="Animals">Animaux</option>'+
								'<option value="Various">Divers</option>'+
							'</select>'+
				     	'</div>'+
				     	'<div class="subDiv col-6  p-1" id="sub5" style="display:none">'+
				     		'<select class="" id="subC" name="type" style="width: 100%;height:30px;" data-placeholder="Choisissez une sous catégorie">'+
					  			'<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une sous catégorie.</option>'+
								'<option value="Car">Voiture</option>'+
								'<option value="SUV">4X4</option>' +
								'<option value="Utility">Utilitaire</option>'+
								'<option value="Moto">Moto</option>'+
								'<option value="Scooter">Scooter</option>'+
								'<option value="Boat">Bateau</option>'+
								'<option value="Small car">Voiturette</option>'+
								'<option value="Bike">Vélos</option>'+
								'<option value="Car equipment">Équipement Véhicule</option>'+
								'<option value="2-wheeled equipment">Équipement 2 Roue</option>'+
								'<option value="Boat equipment">Équipement Bateau</option>'+
								'<option value="Bike equipment">Équipement Vélo</option>'+
							'</select>'+
				     	'</div>'+
				     	'<div class="subDiv col-6  p-1" id="sub6" style="display:none">'+
				     		'<select class="" id="subS" name="type" style="width: 100%;height:30px;" data-placeholder="Choisissez une sous catégorie">'+
					  			'<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une sous catégorie.</option>'+
								'<option value="Clothes">Vétements</option>'+
								'<option value="Shoes">Chaussures</option>' +
								'<option value="Accessories">Accessoires</option>'+
								'<option value="Watches">Montres</option>'+
								'<option value="Jewels">Bijoux</option>'+
							'</select>'+
				     	'</div>'+
				     	'</div>'+
				     	'<div class="form-group nametext" style="display: block;">'+
				     		'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="name">'+
				     			'<i class="fa fa-chevron-down"></i> Titre de votre annonce *'+
				     		'</label>'+
				     		'<input type="text" class="form-control " name="nom" id="name" value="" placeholder="Titre de votre annonce  ...*">'+
				     	'<div class="form-group descriptiontextarea" style="display: block;">'+
				     		'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="description">'+
				     			'<i class="fa fa-chevron-down"></i> Description'+
				     		'</label>'+
				     		'<textarea id="description" name="description" maxlength="" class="form-control textarea " placeholder="..."></textarea>'+
				     	'</div>'+
				     	'<div class="form-group pricetext" style="display: block;">'+
				     		'<label class="price" class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="price">'+
				     			'<i class="fa fa-chevron-down"></i> Prix'+
				     		'</label>'+
				     		'<input type="number" class="form-control " name="price" id="price" value="" placeholder="Prix ...">'+
				     		'<div class="sub col-6  p-1" id="sub6">'+
				     		'<select class="price" name="devise" id="devise" style="width: 100%;height:30px;" data-placeholder="Indiquez la monnaie utilisée">'+
				     			'<option class="text-red" style="font-weight:bold" disabled="" selected="">Indiquez la monnaie utilisée'+
				     			'</option>'+
				     			'<option value="€">€'+
				     			'</option>'+
				     			'<option value="Ğ1">Ğ1'+
				     			'</option>'+
				     			'<option value="£">£'+
				     			'</option>'+
				     			'<option value="$">$'+
				     			'</option>'+
				     			'<option value="CFP">CFP'+
				     			'</option>'+
				     			'<option value="FC">FC'+
				     			'</option>'+
				     		'</select>'+
				     	'</div>'+
				     	'<br>'+
				     	'<div class="form-group contactInfotext" style="display: block;">'+
				     		'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="contactInfo">'+
				     			'<i class="fa fa-chevron-down"></i> Coordonnées'+
				     		'</label>'+
				     		'<input type="text" class="form-control " name="contactInfo" id="contactInfo" value="" placeholder="n° tel, adresse e-mail ...">'+
				     	'</div>'+
			     		'<div class="col-12 text-left pb-2" id="rss">'+
				        '</div>'+
				        '<div class="col-12 p-2">'+
			      	 		'<label class="text-bold">Tags : </label><br>'+
			          		'<select class="js-example-data-array" name="tags[]" multiple="multiple" style="width: 500px;">'+
			          		'</select>'+
			        	'</div>'+
				        '<div class="row">'+
					        '<div class="col-12">'+
					        	'<input type="hidden" id="postcode">'+
					        	'<input type="hidden" id="city">'+
					        	'<input type="hidden" id="country">'+
								'<div class="ui-widget">'+
		                			'<label for="tags" class="text-bold">Adresse : </label><br>'+
		                			'<input id="adress" name="adress" style ="width: 75%"">'+
		                			'<a class="btn btn-success ml-3" id="search">Search</a>'+
		               			'</div>'+
					        '</div>'+
					        '<div class="col-12 text-left"><br>'+
					            '<a class="btn btn-primary color-white" id="ConfirmAdress">Confirmer l\'adresse</a>'+
					        '</div>'+
					    '</div>'+
				        '<div class="col-12 text-center pb-2"><br>'+
				          '<a class="btn btn-danger color-white" id="save">Save to   <img src="../icons/logo-min.png" height="25px"></a>'+
				        '</div>'+
				        '<br>'+
				      '</div>'+
			     	'</div>'
			    '</div>'
		    '</div>'+
		'</div>'+
	'</form>';
		buidInputTags(); 

	}else if (ajout == 'ressources'){

		bg = 'bg-vine';
		h3 = 'Ajouter une nouvelle ressource';
		icon = '<i class="fa fa-cubes"></i>';

		var form =
	    		'<form data-key="ressources" id="formValidate">'+
					'<div class="col-6  p-1">'+
					   '<select class="" name="type" id="type" style="width: 100%;height:30px;" data-placeholder="Type de ressource">'+
					         '<option class="text-red" style="font-weight:bold" disabled="" selected="">De quel type de ressource s\'agit-il ?</option>'  +
					         '<option value="Need">Besoin</option>'+
					         '<option value="Offer">Offre</option> ' +
					    '</select>'+
					'</div>'+
			      		'<div class="form-group row pt-1">'+
			        		'<div class="col-12">'+
			          	'</div>'+
			       		'<div class="col-12 pt-1">'+
				          '<select class="" name="role" id="role" style="width: 80%;height:30px;" data-placeholder="Choisissez une catégorie."> '+
				            '<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une catégorie.</option>'+
				            '<option value="service">Service</option>'+
				            '<option value="competence">Compétence</option>' +
				            '<option value="material">Matériel</option>'+
				            '</select>'+
				        '</div>'+
				        '<div class="col-12 pt-1" id="sub7" style="display:none">'+
				          '<select class="" name="role" id="subSe" style="width: 80%;height:30px;" data-placeholder="Choisissez une catégorie."> '+
				            '<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une sous catégorie.</option>'+
				            '<option value="charity">Charité</option>'+
				            '<option value="education">Éducation</option>' +
				            '<option value="househelp">Aide a Domicile</option>'+
				            '<option value="washing">Entretien, Ménage</option>'+
				            '<option value="gardening">Jardinage</option>' +
				            '<option value="generalmaintenance">Maintenance</option>'+
				            '<option value="animalcare">Soin des animaux</option>'+
				            '<option value="ederlycare">Aide Aux Personnes Agées</option>' +
				            '<option value="disabledcare">Aide Aux Personnes Handicapées</option>'+
				            '<option value="hostinghelp">Aide à L\'hébergement</option>'+
				            '<option value="farming">Agriculture</option>'+
				            '</select>'+
				        '</div>'+
				        '<div class="col-12 pt-1" id="sub8" style="display:none">'+
				          '<select class="" name="role" id="subH" style="width: 80%;height:30px;" data-placeholder="Choisissez une catégorie."> '+
				            '<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une sous catégorie.</option>'+
				            '<option value="artistic">Artistique</option>'+
				            '<option value="laws">Légal</option>' +
				            '<option value="itdevlopment">Informatique</option>'+
				            '<option value="handcraft">Artisanat</option>'+
				            '<option value="animalcare">Soin des Animaux</option>' +
				            '<option value="agriculture">Agriculture</option>'+
				            '<option value="restauration">Restauration</option>'+
				            '<option value="building">Construction</option>' +
				            '</select>'+
				        '</div>'+
				        '<div class="col-12 pt-1" id="sub9" style="display:none">'+
				          '<select class="" name="role" id="subN" style="width: 80%;height:30px;" data-placeholder="Choisissez une catégorie."> '+
				            '<option class="text-red" style="font-weight:bold" disabled="" selected="">Choisissez une sous catégorie.</option>'+
				            '<option value="electronic">Electronique</option>'+
				            '<option value="furniture">Mobilier</option>' +
				            '<option value="primaryressources">Ressource Primaire</option>'+
				            '<option value="buildingtools">Outil de Construction</option>'+
				            '<option value="gardeningtools">Outil de Jardin</option>' +
				            '<option value="medicalstuff">Médical</option>'+
				            '</select>'+
				        '</div>'+
			     	'</div>'+
			     	'<div class="form-group nametext" style="display: block;">'+
			     		'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="name">'+
			     			'<i class="fa fa-chevron-down"></i> Nom de votre ressource *'+
			     		'</label>'+
			     		'<input type="text" class="form-control " name="nom" id="name" value="" placeholder="Titre de votre annonce  ...*">'+
			     	'<div class="form-group descriptiontextarea" style="display: block;">'+
			     		'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="description">'+
			     			'<i class="fa fa-chevron-down"></i> Description'+
			     		'</label>'+
			     		'<textarea id="description" name="description" maxlength="" class="form-control textarea " placeholder="..."></textarea>'+
			     	'</div>'+
				        '<div class="col-12 p-2">'+
			      	 		'<label class="text-bold">Tags : </label><br>'+
			          		'<select class="js-example-data-array" name="tags[]" multiple="multiple" style="width: 500px;">'+
			          		'</select>'+
			        	'</div>'+
				        '<div class="col-12 text-left pb-2" id="rss"><br>'+
				        '</div>'+
				        '<div class="row">'+
					        '<div class="col-12">'+
					        	'<input type="hidden" id="postcode">'+
					        	'<input type="hidden" id="city">'+
					        	'<input type="hidden" id="country">'+
								'<div class="ui-widget">'+
		                			'<label for="tags" class="text-bold">Adresse : </label><br>'+
		                			'<input id="adress" name="adress" style ="width: 75%">'+
		                			'<a class="btn btn-success ml-3" id="search">Search</a>'+
		               			'</div>'+
		               			'<br>'+
					        '</div>'+
					        '<div class="col-12 text-left"><br>'+
					            '<a class="btn btn-primary color-white" id="ConfirmAdress">Confirmer l\'adresse</a>'+
					        '</div>'+
					    '</div>'+
				        '<div class="col-12 text-center pb-2"><br>'+
				          '<a class="btn btn-danger color-white" id="save">Save to   <img src="../icons/logo-min.png" height="25px"></a>'+
				        '</div>'+
				        '<br>'+
				      '</div>'+
			     	'</div>'
			    '</div>'
			    '</div>'+
		'</div>'+
	'</form>';
		buidInputTags(); 

	}else if (ajout == 'poi'){
		
		bg = 'bg-green-k';
		h3 =  'CRÉER UN POINT D\'INTÉRÊT' ;

		if(poi==null) {
			var key = $(this).data("key");
			var form = 
					'<div class="row bg-white">'+
						'<div class="col-12">'+
							'<div class="space20"></div><form id="ajaxFormModal" enctype="multipart/form-data" novalidate="novalidate">'+
								'<div class="errorHandler alert alert-danger" style="display : none">'+
									'<i class="fa fa-remove-sign"></i> Merci de corriger les erreurs ci dessous.</div>'+
										'<div class="form-group breadcrumbcustom">'+
										'</div>'+
										'<div class="form-group sectionBtntagList row">'+
											'<label class="col-12 text-left control-label no-padding" for="sectionBtn">'+
												'<i class="fa fa-chevron-down"></i> undefined ? '+
											'</label>'+
										'<div class="col-4 p-2 sectionBtnC link text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn linkBtn " id = "url" data-tag="Lien, Url" data-key="link">'+
												'<i class="fa fa-link"></i> <br>Lien, Url'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC tool text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn toolBtn " id="outil" data-tag="Outil" data-key="tool" href="javascript:;">'+
												'<i class="fa fa-wrench"></i> <br>Outil'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC machine text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn machineBtn " id="machine" data-tag="Machine" data-key="machine" href="javascript:;">'+
												'<i class="fa fa-cogs"></i> <br>Machine'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC software text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn softwareBtn "id="logiciel" data-tag="Logiciel" data-key="software" href="javascript:;">'+
												'<i class="fa fa-code"></i> <br>Logiciel'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC rh text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn rhBtn " data-tag="Ressource humaine" data-key="rh" href="javascript:;">'+
												'<i class="fa fa-users"></i> <br>Ressource humaine'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC financialRessource text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn financialRessourceBtn " data-tag="Ressource financière" data-key="financialRessource" href="javascript:;">'+
												'<i class="fa fa-money"></i> <br>Ressource financière'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC documentation text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn documentationBtn " data-tag="Fiche blanche" data-key="documentation" href="javascript:;">'+
												'<i class="fa fa-file-text-o"></i> <br>Fiche blanche'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC geoJson text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn geoJsonBtn " data-tag="Geojson / UMap" data-key="geoJson" href="javascript:;">'+
												'<i class="fa fa-map"></i> <br>Geojson / UMap'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC compostPickup text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn compostPickupBtn " data-tag="Récolte de compost" data-key="compostPickup" href="javascript:;">'+
												'<i class="fa fa-inbox"></i> <br>Récolte de compost'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC video text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn videoBtn " data-tag="Vidéo" data-key="video" href="javascript:;">'+
												'<i class="fa fa-video-camera"></i> <br>Vidéo'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC recoveryCenter text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn recoveryCenterBtn " data-tag="Ressourcerie" data-key="recoveryCenter" href="javascript:;">'+
												'<i class="fa fa-recycle"></i> <br>Ressourcerie'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC trash text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn trashBtn " data-tag="Poubelle" data-key="trash" href="javascript:;">'+
												'<i class="fa fa-trash"></i> <br>Poubelle'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC history text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn historyBtn " data-tag="Histoire" data-key="history" href="javascript:;">'+
												'<i class="fa fa-clock-o"></i> <br>Histoire'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC something2See text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn something2SeeBtn " data-tag="À voir" data-key="something2See" href="javascript:;">'+
												'<i class="fa fa-eye"></i> <br>À voir'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC funPlace text-center">' +
											'<a class="btn tagListEl btn-select-type-anc sectionBtn funPlaceBtn " data-tag="Lieu sympa" data-key="funPlace" href="javascript:;">'+
												'<i class="fa fa-smile-o"></i> <br>Lieu sympa'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC place text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn placeBtn " data-tag="Place publique" data-key="place" href="javascript:;">'+
												'<i class="fa fa-map-marker"></i> <br>Place publique'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC artPiece text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn artPieceBtn " data-tag="Oeuvres" data-key="artPiece" href="javascript:;">'+
												'<i class="fa fa-paint-brush"></i> <br>Oeuvres'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC streetArt text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn streetArtBtn " data-tag="Art de rue" data-key="streetArt" href="javascript:;">'+
												'<i class="fa fa-paint-brush"></i> <br>Art de rue'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC openScene text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn openSceneBtn " data-tag="Scène ouverte" data-key="openScene" href="javascript:;">'+
												'<i class="fa fa-bullhorn"></i> <br>Scène ouverte'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC stand text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn standBtn " data-tag="Stand" data-key="stand" href="javascript:;">'+
												'<i class="fa fa-map-marker"></i> <br>Stand'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC parking text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn parkingBtn " data-tag="Parking" data-key="parking" href="javascript:;">'+
												'<i class="fa fa-car"></i> <br>Parking'+
											'</a>'+
										'</div>'+
										'<div class="col-4 p-2 sectionBtnC other text-center">'+
											'<a class="btn tagListEl btn-select-type-anc sectionBtn otherBtn " data-tag="Autre" data-key="other" href="javascript:;">'+
												'<i class="fa fa-map-marker"></i> <br>Autre'+
											'</a>'+
										'</div>'+
									'</div>';
			
		} else {
			var form = 
					'<form data-key= "'+poi+'" id="formValidate">'+
						'<div class="col-12 text-center p-2" id="varform">';
							if (poi == 'link') {
								form += '<i class="fa fa-link"></i> <br>Lien, Url'
							}
							else if (poi == 'tool') {
								form += '<i class="fa fa-wrench"></i> <br>Outil'
							}
							else if (poi == 'machine') {
								form += '<i class="fa fa-cogs"></i> <br>Machine'
							}
							else if (poi == 'software') {
								form += '<i class="fa fa-code"></i> <br>Logiciel'
							}
							else if (poi == 'rh') {
								form += '<i class="fa fa-users"></i> <br>Ressource humaine'
							}
							else if (poi == 'financialRessource') {
								form += '<i class="fa fa-money"></i> <br>Ressource financière'
							}
							else if (poi == 'documentation') {
								form += '<i class="fa fa-file-text-o"></i> <br>Fiche blanche'
							}
							else if (poi == 'geoJson') {
								form += '<i class="fa fa-map"></i> <br>Geojson / UMap'
							}
							else if (poi == 'compostPickup') {
								form += '<i class="fa fa-inbox"></i> <br>Récolte de compost'
							}
							else if (poi == 'video') {
								form += '<i class="fa fa-video-camera"></i> <br>Vidéo'
							}
							else if (poi == 'recoveryCenter') {
								form += '<i class="fa fa-recycle"></i> <br>Ressourcerie'
							}
							else if (poi == 'trash') {
								form += '<i class="fa fa-trash"></i> <br>Poubelle'
							}
							else if (poi == 'history') {
								form += '<i class="fa fa-clock-o"></i> <br>Histoire'
							}
							else if (poi == 'something2See') {
								form += '<i class="fa fa-eye"></i> <br>A voir'
							}
							else if (poi == 'funPlace') {
								form += '<i class="fa fa-smile-o"></i> <br>Lieu sympa'
							}
							else if (poi == 'place') {
								form += '<i class="fa fa-map-marker"></i> <br>Place publique'
							}
							else if (poi == 'artPiece') {
								form += '<i class="fa fa-paint-brush"></i> <br>Oeuvres'
							}
							else if (poi == 'streetArt') {
								form += '<i class="fa fa-paint-brush"></i> <br>Art de rue'
							}
							else if (poi == 'openScene') {
								form += '<i class="fa fa-bullhorn"></i> <br>Scène ouverte'
							}
							else if (poi == 'stand') {
								form += '<i class="fa fa-map-marker"></i> <br>Stand'
							}
							else if (poi == 'parking') {
								form += '<i class="fa fa-car"></i> <br>Parking'
							}
							else if (poi == 'other') {
								form += '<i class="fa fa-map-marker"></i> <br>Autre'
							}
						form += '</div>'+
						'<div class="row pt-4 pb-3">'+
							'<div class="col-12">'+
								'<label class="text-bold">Nom du POI : </label><br>'+
								'<input type="text" id="nom" style="width: 100%; border-radius: 5px;" name="nom">'+
							'</div>'+
						    	'<div class="col-12">'+
								'<label class="text-bold">URL principale : </label><br>'+
								'<input type="text" id="url-tab" name="checkUrl" style="width: 100%; border-radius: 5px;" placeholder="www.example.com">'+
							'</div>'+
						      	'<div class="col-12 p-2">'+
						       		' <label for="title-tab" class="text-bold ">TITRE</label> '+
						      	'</div>'+
						      	'<div class="col-12 p-2">'+
						       		' <input type="text" id="title-tab" name="titre" style="width: 100%; border-radius: 5px;">'+
						      	'</div>'+
						      	'<div class="col-12 p-2">'+
						        	'<label for="description" class="text-bold">DESCRIPTION</label>'+
						      	'</div>'+
						      
						      	'<div class="col-12 p-2">'+
						        	'<textarea type="text" id="description" name="description" style="width: 100%; border-radius: 5px;"></textarea>'+
						      	'</div>'+
						      '</div>'+
						     '</div>'+
						      '<div class="row">'+
					      		'<div class="form-group pt-1">'+
					        		'<div class="col-12">'+
					          	'</div>'+
					      	 	'<div class="col-12 p-2">'+
					      	 		'<label class="text-bold">Tags : </label><br>'+
					          		'<select class="js-example-data-array" name="tags[]" multiple="multiple" style="width: 500px;">'+
					          		'</select>'+
					        	'</div>'+
					        	'<div class="col-12 text-left pb-2" id="rss"><br>'+
					         	'</div>'+
					         	'<div class="row">'+
							        '<div class="col-12">'+
							        	'<input type="hidden" id="postcode">'+
							        	'<input type="hidden" id="city">'+
							        	'<input type="hidden" id="country">'+
										'<div class="ui-widget">'+
				                			'<label for="tags" class="text-bold">Adresse : </label><br>'+
				                			'<input id="adress" name="adress" style ="width: 75%">'+
				                			'<a class="btn btn-success ml-3" id="search">Search</a>'+
				               			'</div>'+
				               			'<br>'+
							        '</div>'+
							        '<div class="col-12 text-left"><br>'+
							            '<a class="btn btn-primary color-white" id="ConfirmAdress">Confirmer l\'adresse</a>'+
							        '</div>'+
							    '</div>'+
						      	'<div class="col-12 pt-4 text-center">'+
					            '<a class="btn btn-danger color-white" id="save">Save to   <img src="../icons/logo-min.png" height="25px"></a>'+
					          	'</div>'+	
							'</div>'+
						'</div>'+
					'</div>'+
			'</form>';

			     buidInputTags();

		}	 


	} else if(ajout == 'bookmark') {
		
		bg = 'bg-url';
		h3 = ' Ajouter un bookmark ';
		icon = '<i class="fa fa-bookmark"></i>';

		var form = 
				'<form class="col-12" data-key="bookmark" id="formValidate">'+
					'<div class="row pt-4 pb-3">'+
				    	'<div class="col-12">'+
						'<label class="text-bold">URL principale : </label><br>'+
						'<input type="text" id="url-tab" name="checkUrl" style="width: 100%; border-radius: 5px;" placeholder="www.example.com">'+
					'</div>'+
				      	'<div class="col-12 p-2">'+
				       		' <label for="title-tab" class="text-bold ">TITRE</label> '+
				      	'</div>'+
				      	'<div class="col-12 p-2">'+
				       		' <input type="text" id="title-tab" name="titre" style="width: 100%; border-radius: 5px;">'+
				      	'</div>'+
				      	'<div class="col-12 p-2">'+
				        	'<label for="description" class="text-bold">DESCRIPTION</label>'+
				      	'</div>'+
				      	'<div class="col-12 p-2">'+
				        	'<textarea type="text" id="description" name="description" style="width: 100%; border-radius: 5px;"></textarea>'+
				      	'</div>'+
				      '</div>'+
				     '</div>'+
				      '<div class="row">'+
			      		'<div class="form-group pt-1">'+
			        		'<div class="col-12">'+
			          	'</div>'+
			      	 	'<div class="col-12 p-2">'+
			      	 		'<label class="text-bold">Tags : </label><br>'+
			          		'<select class="js-example-data-array" name="tags[]" multiple="multiple" style="width: 500px;">'+
			          		'</select>'+
			        	'</div>'+
			        	'<div class="col-12 text-left pb-2" id="rss"><br>'+
			         	'</div>'+
			         	'<div class="row">'+
					        '<div class="col-12">'+
					        	'<input type="hidden" id="postcode">'+
					        	'<input type="hidden" id="city">'+
					        	'<input type="hidden" id="country">'+
								'<div class="ui-widget">'+
		                			'<label for="tags" class="text-bold">Adresse : </label><br>'+
		                			'<input id="adress" name="adress" style ="width: 75%">'+
		                			'<a class="btn btn-success ml-3" id="search">Search</a>'+
		               			'</div>'+
		               			'<br>'+
					        '</div>'+
					        '<div class="col-12 text-left"><br>'+
					            '<a class="btn btn-primary color-white" id="ConfirmAdress">Confirmer l\'adresse</a>'+
					        '</div>'+
					    '</div>'+
				      	'<div class="col-12 pt-4 text-center">'+
			            '<a class="btn btn-danger color-white" id="save">Save to   <img src="../icons/logo-min.png" height="25px"></a>'+
			          	'</div>'+	
					'</div>'+
				'</div>'+
			'</div>'+
		'</form>';	
		buidInputTags();

		}else if (ajout == 'rss') {
		
		bg = 'bg-url';
		h3 = ' Ajouter un flux RSS ';
		icon = '<i class="fa fa-rss"></i>';

		var form = 
				'<form class="col-12" data-key="rss" id="formValidate">'+
					'<div class="row pt-4 pb-3">'+
				    	'<div class="col-12 p-2">'+
				       		' <label for="url" class="text-bold">URL</label>'+
					     '</div>'+
					     '<div class="col-12 p-2">'+
					       ' <select id ="urlRss" style="width: 100%; border-radius: 5px;">'+
					       '</select>'+
					     '</div>'+
					      '<div class="col-12 p-2">'+
					       ' <label for="title-tab" class="text-bold ">TITRE</label> '+
					      '</div>'+
					      '<div class="col-12 p-2">'+
					       ' <input type="text" id="title-tab" name="titre" style="width: 100%; border-radius: 5px;">'+
					      '</div>'+
					      '<div class="col-12 p-2">'+
					        '<label for="description" class="text-bold">DESCRIPTION</label>'+
					      '</div>'+
					      '<div class="col-12 p-2">'+
					        '<textarea type="text" id="description" name="description" style="width: 100%; border-radius: 5px;"></textarea>'+
					      '</div>'+
				      '</div>'+
				     '</div>'+
				      '<div class="row">'+
			      		'<div class="form-group pt-1">'+
			        		'<div class="col-12">'+
			          	'</div>'+
			      	 	'<div class="col-12 p-2">'+
			      	 		'<label class="text-bold">Tags : </label><br>'+
			          		'<select class="js-example-data-array" name="tags[]" multiple="multiple" style="width: 500px;">'+
			          		'</select>'+
			        	'</div>'+
			        	'<div class="col-12 text-left pb-2" id="rss"><br>'+
			         	'</div>'+
			         	'<div class="row">'+
					        '<div class="col-12">'+
					        	'<input type="hidden" id="postcode">'+
					        	'<input type="hidden" id="city">'+
					        	'<input type="hidden" id="country">'+
								'<div class="ui-widget">'+
		                			'<label for="tags" class="text-bold">Adresse : </label><br>'+
		                			'<input id="adress" name="adress" style ="width: 75%"">'+
		                			'<a class="btn btn-success ml-3" id="search">Search</a>'+
		               			'</div>'+
		               			'<br>'+
					        '</div>'+
					        '<div class="col-12 text-left"><br>'+
					            '<a class="btn btn-primary color-white" id="ConfirmAdress">Confirmer l\'adresse</a>'+
					        '</div>'+
					    '</div>'+
				      	'<div class="col-12 pt-4 text-center">'+
			            '<a class="btn btn-danger color-white" id="save">Save to   <img src="../icons/logo-min.png" height="25px"></a>'+
			          '</div>'+	
					'</div>'+
				'</div>'+
			'</div>'+
		'</form>';
		buidInputTags();
		
			
	// }else if (ajout = 'news'){
	// 	/*text: test de news
	// 	scope: restricted
	// 	tags[]: Alimentation
	// 	parentId: 5aa8a0e823b57f47118b456b
	// 	parentType: citoyens
	// 	type: news*/

	// 	bg = 'bg-news';
	// 	h3 = ' Ajouter une news ';
	// 	icon = '<i class="fa fa-bookmark"></i>';

	// 	var form = '<iframe src="http://34.253.15.201:8000/radio-pixel-humain.ogg"></iframe>''<div id="form-news" class="col-sm-12 no-padding">'+
        
 //       				 '<input type="hidden" id="parentId" name="parentId" value="">'+
 //        			 '<input type="hidden" id="parentType" name="parentType" value="citoyens">' +  
 //       				 '<input type="hidden" id="typeNews" name="type" value="news"> '+
 //        			 '<input type="text" id="falseInput" onclick="javascript:showFormBlock(true);" class="col-xs-12 col-md-12" placeholder="Exprimez-vous ..." style="padding: 15px; display: none;">'+

 //        			'<div class="extract_url" style="">'+
 //         				'<div class="padding-10 bg-white">'+
 //            				'<img class="loading_indicator" src="/ph/assets/b352e42a/images/news/ajax-loader.gif">'+
 //            				'<div class="mentions-input-box"><div class="mentions"><div></div></div><textarea id="get_url" placeholder="Exprimez-vous ..." class="get_url_input form-control textarea mention" style="border: none; background: transparent !important; overflow: hidden; height: 20px;" name="getUrl" spellcheck="false" data-mentions-input="true"></textarea><div style="position: absolute; display: none; word-wrap: break-word; white-space: pre-wrap; border-color: rgb(85, 85, 85); border-style: none; border-width: 0px; font-weight: 400; width: 100%; font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 20px; font-size: 14px; padding: 0px;">&nbsp;</div><div class="mentions-autocomplete-list" style="display: none;">'+
 //            				'</div>'+
 //            				'<div style="position: absolute; display: none; word-wrap: break-word; white-space: pre-wrap; border-color: rgb(85, 85, 85); border-style: none; border-width: 0px; font-weight: 400; width: 100%; font-family: Lato, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; line-height: 20px; font-size: 14px; padding: 0px;">'+
 //            				'</div>'+
 //            			'</div>'+
 //           			' <ul class="dropdown-menu" id="dropdown_search" style="">'+
 //            		'</ul>'+
 //            		'<div id="results" class="bg-white results col-sm-12 padding-10">' +
 //            		'</div>'+
 //          		'</div>'+
 //        	'</div>'+
 //       		 '<div class="form-group tagstags col-md-12 col-sm-12 col-xs-12 no-padding" style="display: block;">' +
 //            	'<div class="select2-container select2-container-multi" id="s2id_tags" style="width:100%;">'+
 //            		'<ul class="select2-choices"> '+
 //            			 '<li class="select2-search-field">' +
 //            			   '<label for="s2id_autogen5243" class="select2-offscreen"></label>' +
 //            			      '<input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input select2-default" id="s2id_autogen5243" placeholder="" style="width: 669px;">'+
 //            			 '</li>'+
 //        			'</ul>'+
 //        			'<div class="select2-drop select2-drop-multi select2-display-none select2-drop-active"> ' + 
 //        				'<ul class="select2-results">'+  
 //        				'</ul>'+
 //        			'</div>'+
 //        		'</div>'+
 //        		'<input id="tags" type="" data-type="select2" name="tags" placeholder="#Tags" value="" style="width: 100%; display: none;" tabindex="-1">'+
 //        	'</div>'+
 //        '<div id="scopeListContainerForm" class="form-group col-md-12 col-sm-12 col-xs-12 no-padding margin-bottom-10">'+
 //        '</div>'+
 //        '<div class="form-actions col-md-12 col-sm-12 col-xs-12 no-padding" style="display: block;">'+

 //         '<div class="col-md-12 col-sm-12 col-xs-12 no-padding">'+
 //            '<hr class="submit">'+ 
 //            '<button id="btn-submit-form" onclick="saveNews();" class="btn btn-success pull-right">'+
 //              'Publier <i class="fa fa-arrow-circle-right"></i>'+
 //            '</button>'+
 //            '<input type="hidden" name="scope" value="restricted"> '+
 //        	'</div>'+
 //        '</div>'+
 //      '</div>';
  }

	var contenu = '<div class="container-fluid">'+
					'<div class="row">'+
				            '<div class="col-lg-12 mt-2">'+
								'<div class="modal-header text-light text-center '+bg+'" style="border-radius: 100px;">'+
							        '<h3 class="modal-title" id="ajax-modal-modal-title">'+icon+h3+'<br></h3>'+
							    '</div>'+
						'</div>';
	

	
	// Pour le formulaire					
				
	contenu +=form;

	$("#main-container").html(contenu);
	$("#main-container").show();

	$("#role").change(function() {
		if ($(this).val()=='Technology'){
			$('#sub1').show();
			//$('.subDiv').active=$(this).val();
			// alert($(this).val())
		}else{
			$('#sub1').hide()
		}if ($(this).val()=='Property'){
			$('#sub2').show();
			// alert($(this).val())
			// $('.sub').active.val()
		}else{
			$('#sub2').hide()
		}if ($(this).val()=='Home'){
			$('#sub3').show();
			// $('.sub').active.val()
		}else{
			$('#sub3').hide()
		}if ($(this).val()=='Leisure'){
			$('#sub4').show();
			// $('.sub').active.val()
		}else{
			$('#sub4').hide()
		}if ($(this).val()=='Vehicles'){
			$('#sub5').show();
			// $('.sub').active.val()
		}else{
			$('#sub5').hide()
		}if ($(this).val()=='Fashion'){
			$('#sub6').show();
			// $('.sub').active.val()
		}else{
			$('#sub6').hide()
		}if ($(this).val()=='service'){
			$('#sub7').show();
		}else{
			$('#sub7').hide()
		}if ($(this).val()=='competence'){
			$('#sub8').show();
		}else{
			$('#sub8').hide()
		}if ($(this).val()=='material'){
			$('#sub9').show();
		}else{
			$('#sub9').hide()
		}
	});
	$('#type').change(function(){
		if ($(this).val() == 'job'){
			// alert('test');
			$('#sub0').show();
			$('#role').hide();
			$('#subConstant').hide();
		}else{
			$('#sub0').hide();
			$('#role').show();
			$('#subConstant').show();
		}
		if ($(this).val() == 'donation'){
			$('.price').hide();
			$('#price').hide();
		}else{
			$('.price').show();
			$('#price').show();
		}
	});
	$("#price").keyup(function() {
	     var input = $(this).val();
	     var regex = new RegExp("^[0-9|,|.]+$");
	     if (regex.test(input)) {
	          console.log(input);
	     } else {
	        $(this).val(input.substr(0, input.length-100));
	     }
	});


		var key = $("form").data().key;

		// Ajout de notre méthode
		jQuery.validator.setDefaults({
		  debug: true,
		  success: "valid"
		});

		$('#formValidate').validate({

			rules: {
			    nom: {
			    	minlength : 3,
				    required: true,
			    },
			    checkUrl: {
			    	required: true,
			    	url: true,
			    },
			    description: {
			    	required: true,
			    },
			    adress: {
			    	required : true,
			    },
			    contactInfo: {
			    	required: true,
			    },
			    titre: {
			    	required: true,
			    },
			    mail: {
			    	required: true,
      				email: true,
			    },
			    startDate: {
			    	required : true,
			    },
			    endDate: {
			    	required : true,
			    }
			},
			invalidHandler : function(form, validator) {//display error alert on form submit
				$(this).parent().addClass("error");
				alert('Vériefiez les champs')
			},
	        submitHandler: function (form) {

				alert('testValidate');
				
				if(key == 'organization')
				{

					var params = {
						"name"							: $("#nom").val(),
						"type" 							: $("#type").val(),
			            "collection" 					: 'organizations',
			            "email"							: $('#mail').val(),
			            "url"  							: $( "#url-tab" ).val(),
			            "role" 							: $( "#role" ).val(),
			            "shortDescription"				: $("#description").val(),
			            "preferences[isOpenData]"		: true,
						"preferences[isOpenEdition]"	: true,
						"tags[]"						: $(".js-example-data-array").val(),
						"adress{streetAaddress}"		: data.adress.road
			        };

			        console.log(params);
				}else if (key == 'project'){
					var params = {
						"name"							: $("#nom").val(),
			            "key" 							: key,
			            "collection" 					: 'projects',
			            "shortDescription"				: $("#description").val(),
			            "preferences[isOpenData]"		: true,
						"preferences[isOpenEdition]"	: true,
						"tags[]"						: $(".js-example-data-array").val(),
						"parentId"						: userId,
			            "parentType"					: "citoyens"
			        };

			        console.log(params);

				}else if (key == 'event'){

					
					var params = {
						"name"							: $("#nom").val(),
						"organizerId"					: $('#organizerId').val(),
						"organizerType"					: $('#organizerType').val(),
						"type"							: $('#eventType').val(),
						"startDate"						: moment($('#startDate').val(), 'DD/MM/YYYY HH:mm').format(),
						"endDate"						: moment($('#endDate').val(), 'DD/MM/YYYY HH:mm').format(),
						"allDay"						: $("input:checked").val(),
			            "key" 							: key,
			            "collection" 					: 'events',
			            "shortDescription"				: $("#shortDescription").val(),
			            "preferences[isOpenData]"		: true,
						"preferences[isOpenEdition]"	: true,
						"tags[]"						: $(".js-example-data-array").val(),
			        };

			        console.log(params);
				}else if(key == 'classified'){
					
						// else{

					var params = {
			            "section" 			: $('#type').val(),
			            "type" 				: $('#role').val() || $('#subZ').val(),
			            "subtype"  			: $('#subU').val() || $('#subD').val() || $('#subT').val() || $('#subQ').val() || $('#subC').val() || $('#subS').val(),
						"name"				: $( "#name" ).val(),
			            "description"		: $("#description").val(),
			            "price"				: $('#price').val(),
			            "devise"			: $('#devise').val(),
			            "contactInfo"		: $('#contactInfo').val(),
			            "tags[]"			: $(".js-example-data-array").val(),
			            "parentId"			: userId,
			            "parentType"		: "citoyens",
			            "key"				: key,
			            "collection"		: "classified"

			            // }
			        };


			        console.log(params);
				}else if(key == 'ressources'){
					
						// else{

					var params = {
			            "section" 			: $('#type').val(),
			            "type" 				: $('#role').val(),
			            "subtype"  			: $('#subSe').val() || $('#subH').val() || $('#subN').val(),
						"name"				: $( "#name" ).val(),
			            "description"		: $("#description").val(),
			            "tags[]"			: $(".js-example-data-array").val(),
			            "parentId"			: userId,
			            "parentType"		: "citoyens",
			            "key"				: key,
			            "collection"		: "ressources"

			            // }
			        };


			        console.log(params);
				}else if(key == 'bookmark'){
					
						// else{

					var params = {
						"name"				: $("#title-tab").val(),
			            "key" 				: key,
			            "collection" 		: 'bookmarks',
			            "url"  				: $( "#url-tab" ).attr('href'),
			            "description"		: $("#description").val(),
			            "tags[]"			: $(".js-example-data-array").val(),
			            "parentId"			: userId,
			            "parentType"		: "citoyens"
			            // }
			        };


			        console.log(params);
				
					
				}else if(key == 'rss'){


					var params = {
						"name"				: $("#title-tab").val(),
			            "key" 				: key,
			            "collection" 		: 'bookmarks',
			            "url"  				: $( "#urlRss" ).val(),
			            "description"		: $("#description").val(),
			            "tags[]"			: $(".js-example-data-array").val(),
			            "parentId"			: userId,
			            "parentType"		: "citoyens",
			            "typeElement"		: "rss"
			         // };
			    };


			        console.log(params);
					 	// };

				}else{
					

					var params = {
						'name'			: $("#title-tab").val(),
						'description'	: $("#description").val(),
						'urls[]'		: $( "#url-tab" ).attr('href'),
			            "tags[]"		: $(".js-example-data-array").val(),
						'key'			: 'poi',
						'collection'	: 'poi'
			        };
			       	if (key == 'tool') {
						params ['type']='tool';
					}
			        else if (key == 'machine') {
						params ['type']='machine';
					}
					else if (key == 'software') {
						params ['type']='software';
					}
					else if (key == 'link') {
						params ['type']='link';
					}
					else if (key == 'rh') {
						params ['type']='rh';
					}
					else if (key == 'financialRessource') {
						params ['type']='financialRessource';
					}
					else if (key == 'documentation') {
						params ['type']='documentation';
					}
					else if (key == 'geoJson') {
						params ['type']='geoJson';
					}
					else if (key == 'compostPickup') {
						params ['type']='compostPickup';
					}
					else if (key == 'video') {
						params ['type']='video';
					}
					else if (key == 'recoveryCenter') {
						params ['type']='recoveryCenter';
					}
					else if (key == 'trash') {
						params ['type']='trash';
					}
					else if (key == 'history') {
						params ['type']='history';
					}
					else if (key == 'something2See') {
						params ['type']='something2See';
					}
					else if (key == 'funPlace') {
						params ['type']='funPlace';
					}
					else if (key == 'place') {
						params ['type']='place';
					}
					else if (key == 'artPiece') {
						params ['type']='artPiece';
					}
					else if (key == 'streetArt') {
						params ['type']='streetArt';
					}
					else if (key == 'openScene') {
						params ['type']='openScene';
					}
					else if (key == 'stand') {
						params ['type']='stand';
					}
					else if (key == 'parking') {
						params ['type']='parking';
					}
					else if (key == 'other') {
						params ['type']='other';
					}


			        console.log(params);

				
			 	}
						$.ajax({
							type: "POST",
					      	url : 'http://127.0.0.1/ph/co2/element/save',
					      	data: params,
					      	dataType: 'json',

				    	  	success: function(data){
				    	  		console.log('ajoute réussi');
				    	  		alert('enregistrement effectuer');
				    	  		buildMenu();
				    	  	},
				    	  	error: function(){
				    	  		alert('erreurAjax');
				    	  	} 
				      });
					},
			});
	}



function buidInputTags(){

	$(document).ready(function() {
    			
				 $.ajax({
					type: "POST",
			      	url : 'http://127.0.0.1/ph/api/lists/tags',
			      	dataType: 'json',

		    	  	success: function(data){
		    	  		$(".js-example-data-array").select2({
  							data: Object.values(data)
						});
		    	  	},
		    	  	error: function(){
		    	  		console.log('erreur');
		    	  	} 
		      	});

			});


}

function buildSelectParent(){
	$.ajax({

			url : 'http://127.0.0.1/ph/api/person/mycontact',
			data: {},
			datatype: 'jsonp',
			success: function(data){

				//console.log(data['organizations']);
				
				var contenu ='<select class="" name="organizerId" id="organizerId" style="width: 100%;" data-placeholder="Qui organise ?*">'+
								'<option class="text-red size-select" style="font-weight:bold" disabled="" selected="">Qui organise ?*</option>'+
								'<option class="size-select0" value="'+userId+'">moi</option>'+
								'<option class="size-select" value="dontKnow">Je ne sais pas</option>'+
								'<optgroup class="size-select" id="optO" value="organizations" label="organisations">';

				$.each(data['organizations'], function(i,v){
					contenu += '<option class="size-select2" value="' + v._id['$id']+'" data-type="organization">'+v.name+'</option>';
				});

				contenu += '</optgroup><optgroup id="optP" class="size-select" value="projects" label="projets">';

				

				$.each(data['projects'], function(i,v){
					contenu += '<option class="size-select3" value="' + v._id['$id']+'" data-type="projects">'+v.name+'</option>';

				});


				contenu += '</optgroup></select>'+
							'<div class="form-group organizerTypehidden">'+
									'<input type="hidden" name="organizerType" id="organizerType" value="" >'+
							'</div>';

				var contenu2 = '<select class="" name="type" id="type" style="width: 100%;">'+
							     	'<option class="text-red" style="font-weight: bold" disabled="" selected="">Fait parti d\'un événement ?</option>'  +
							     	'<option>Pas de parent</option>'+
							     	'<optgroup class="size-select4" label="Événements">';

				$.each(data['events'], function(i,v){
					contenu2 += '<option class="size-select4" value="'+v._id['$id']+'" data-type="events">'+v.name+'</option>';
				}),

				contenu2 += '</optgroup></select>';


				$("#selectParent").html(contenu);
				$("#selectParent2").html(contenu2);

				$('#organizerId').change(function(){
					if ($(".size-select2").is(':selected')) {
						$('#organizerType').val("organizations");
					}else if ($('.size-select3').is(':selected')) {
						$('#organizerType').val("projects");
					}else if ($(".size-select0").is(':selected')) {
						$('#organizerType').val("citoyens");
					}else if ($(".size-select").is(':selected')) {
						$('#organizerType').val("dontKnow");
					}		
				});
			},
			error : function(){
				console.log("erreur de récupération");
			}
		})
}




