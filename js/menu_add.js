function buildMenu(){

	var contenu = '<div class="row">'+
					'<div class="col-4 pt-4">'+
						'<a id="news_orga"  class="addBtnFoot btn-news btn-open-form btn bg-green inline-block margin-bottom-10">'+ 
		       				'<i class="fa fa-users espace-r-5"></i>'+
		        			'<span>Organisations</span>'+
		    			'</a>'+
		    		'</div>'+
		    		'<div class="col-4 pt-4">'+
						'<a id="news_event" class="addBtnFoot btn-news addBtnAll btn-open-form btn bg-orange margin-bottom-10">'+
        					'<i class="fa fa-calendar espace-r-5"></i>'+
        					'<span>Événement</span>'+
		    			'</a>'+
		    		'</div>'+
		    		'<div class="col-4 pt-4">'+
						'<a id="news_project" class="addBtnFoot btn-news addBtnFoot_orga btn-open-form btn bg-purple inline-block margin-bottom-10">'+
        					'<i class="fa fa-lightbulb-o espace-r-5"></i> '+
        					'<span>Projet</span>'+
		    			'</a>'+
		    		'</div>'+
		    		'<div class="col-4 pt-4">'+
						'<a id="news_classifieds" class="addBtnFoot btn-news addBtnFoot_orga  addBtnFoot_project btn-open-form btn bg-azure margin-bottom-10">'+ 
        					'<i class="fa fa-bullhorn espace-r-5"></i>'+ 
        					'<span>Annonce</span>'+
		    			'</a>'+
		    		'</div>'+
		    		'<div class="col-4 pt-4">'+
						'<a id="news_ressources" class="addBtnFoot btn-news addBtnAll btn-open-form btn bg-vine margin-bottom-10">'+
        					'<i class="fa fa-cubes espace-r-5"></i>'+ 
        					'<span>Ressource</span>'+
		    			'</a>'+
		    		'</div>'+
		    		'<div class="col-4 pt-4">'+
						'<a id="news_poi" class="addBtnFoot addBtnAll btn-news btn-open-form btn bg-green-k margin-bottom-10">'+
        					'<i class="fa fa-map-marker espace-r-5"></i>'+
        						'<span >Point d\'intérêt</span>'+
		    			'</a>'+
		    		'</div>'+
		    		'<div class="col-4 pt-4">'+
						'<a id="news_bookmark" class="addBtnFoot addBtnAll btn-news btn-open-form btn bg-url margin-bottom-10">'+
        					'<i class="fa fa-bookmark espace-r-5"></i>'+
        						'<span >Bookmark</span>'+
		    			'</a>'+
		    		'</div>'+
		    // 		'<div class="col-4 pt-4">'+
						// '<a id="news" class="addBtnFoot addBtnAll btn-news btn-open-form btn bg-news margin-bottom-10">'+
      //   					'<i class="fa fa-newspaper-o espace-r-5" aria-hidden="true"></i>'+
      //   						'<span >News</span>'+
		    // 			'</a>'+
		    // 		'</div>'+
		    		'<div class="col-4 pt-4" id="divRss" style="display:none">'+
						'<a id="news_rss" style class="addBtnFoot addBtnAll btn-news btn-open-form btn bg-warning margin-bottom-10">'+
        					'<i class="fa fa-rss espace-r-5"></i>'+
        						'<span >RSS</span>'+
		    			'</a>'+
		    		'</div>'+
		    		'<br>'+
		    		'<br>'+
		    		'<br>'+
		    		'</div>';
		$("#main-container").html(contenu);

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
								     //Récupère les flux rss
								    chrome.tabs.executeScript(array_of_Tabs[0].id,
			                           	{ file: "/content_scripts/getRss.js" },function(array){

			                           		if(array[0]!=""){
			                           			var rss = array[0];
			                           			$('#divRss').show()
			                           		}
			                           	});
								 });

}

// '<div class="col-4 pt-4">'+
// 						'<a id="news_rss" style="visibility:hidden;"style class="addBtnFoot addBtnAll btn-news btn-open-form btn bg-url margin-bottom-10">'+
//         					'<i class="fa fa-rss espace-r-5"></i>'+
//         						'<span >RSS</span>'+
// 		    			'</a>'+
// 		    		'</div>'+