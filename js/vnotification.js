function afficheNotif(){
	
	if($(".notifications-count")){
		var contenu = '<div class="notifications pt-4">'+
						'<a href="javascript:;"  class="btn-notification-action pull-left btn-reload-notif refresh">'+
							'<i class="fa fa-refresh"></i>'+
						'</a>'+
						'<div class="pageslide-title pull-left">'+
						'<i class="fa fa-angle-down"></i> <i class="fa fa-bell"></i> <span class="hidden-xs">Notifications</span> '+
						'</div> '+
						'<a href="javascript:;" id="deleteNotif"  class="btn-notification-delete btn btn-danger pull-right" style="font-size:12px;">'+
						'Tous <i class="fa fa-trash"></i>'+
						'</a>	'+
						'<a href="javascript:;" class="btn-notification-action pull-right" style="font-size:12px;">'+
						'Tout marquer comme lu <i class="fa fa-check-square-o"></i>'+
						'</a>'+
					
						'<ul class="pageslide-list notifList col-12 mt-5">'+
						'</ul>'+
				
						'</div>';

		$("#main-container").empty();
		$("#main-container").append(contenu);
		$("#main-container").show();

	}
}