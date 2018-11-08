function newsOrga(){
	var contenu =  '<div class="container">'+
			            '<div class="row">'+
			                '<div class="col-lg-12">'+
			                	'<br>'+
			                '</div>'+
			               
			            '</div>'+

				        '<div class="row">'+
				            '<div class="col-lg-12">'+
								'<div class="modal-header text-dark bg-green">'+
							        '<h3 class="modal-title text-center" id="ajax-modal-modal-title"><i class="fa fa-group"></i> Ajouter une nouvelle organisation <br><small class="text-white">en tant que : <span class="text-dark">Roger Alexandre</span></small></h3>'+
							       '</div>'+		
							'</div>'+
						'</div>'+
					'<div class="modal-footer" >'+
						'<div class="row bg-white">'+
							'<div class="col-12">'+
								'<div class="space20"></div>'+
									'<form id="ajaxFormModal" enctype="multipart/form-data" novalidate="novalidate">'+
										'<div class="errorHandler alert alert-danger" style="display: none">'+
											'<i class="fa fa-remove-sign"></i> Merci de corriger les erreurs ci dessous.'+
										'</div>'+
										'<div class="form-group infocustom">'+
											'<p class="text-green text-center">Créez votre page en quelques secondes,<br>puis rajoutez des détails,<br>selon vos besoins ...</p><hr><p class="text-green"></p>'+
										'</div>'+
										'<div class="form-group nametext">'+
											'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="name"><i class="fa fa-chevron-down"></i> Nom de votre organisation *</label> '+
											'<input type="text" class="form-control " name="name" id="name" value="" placeholder="Nom de votre organisation  ...*">'+
										'</div>'+
										'<div class="form-group similarLinkcustom">'+
											'<div id="similarLink">'+
												'<div id="listSameName" style="overflow-y: scroll; height:150px;border: 1px solid black; display:none">'+
												'</div>'+
											'</div>'+
										'</div>'+
										'<div class="form-group typeselect">'+
											'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="type">'+
												'<i class="fa fa-chevron-down"></i> Type dorganisation*'+
											'</label>'+
											'<select class=" " name="type" id="type" style="width: 100%;height:30px;" data-placeholder="Type dorganisation*">'+
												'<option class="text-red" style="font-weight:bold" disabled="" selected="">Type d\'organisation*</option>'+
												'<option value="NGO">Association</option>'+
												'<option value="LocalBusiness">Entreprise</option><option value="Group">Groupe</option>'+
												'<option value="GovernmentOrganization">Service Public</option>'+
											'</select>'+
										'</div>'+
										'<div class="form-group roleselect">'+
											'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="role"><i class="fa fa-chevron-down"></i> Votre rôle*</label>'+
											'<select class=" " name="role" id="role" style="width: 100%;height:30px;" data-placeholder="Quel est votre rôle ?*">'+
												'<option class="text-red" style="font-weight:bold" disabled="" selected="">Quel est votre rôle ?*</option>'+
												'<option value="admin">Administrateur</option><option value="member">Membre</option>'+
												'<option value="creator">Juste un citoyen qui veut faire connaître cette organisation</option>'+
											'</select>'+
										'</div>'+
										'<div class="form-group tagstags">'+
											'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="tags"><i class="fa fa-chevron-down"></i> Ajouter quelques mots clés (tags)</label>'+
											'<div class="select2-container select2-container-multi select2TagsInput" id="s2id_tags" style="width:100%;margin-bottom: 10px;border: 1px solid #ccc;">'+
												'<ul class="select2-choices"> ' +
													'<li class="select2-search-field">  '  +
														//'<label for="s2id_autogen2" class="select2-offscreen"> Ajouter quelques mots clés (tags)</label>  '  +
														'<input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input select2-default" id="s2id_autogen2" placeholder="" style="width: 90%;">'+
													'</li>'+
												'</ul>'+
												'<div class="select2-drop select2-drop-multi select2-display-none">  ' +
													'<ul class="select2-results">' +
													'</ul>'+
												'</div>'+
											'</div>'+
											'<input type="text" class="select2TagsInput" name="tags" id="tags" value="" placeholder="Mots clés" style="width: 100%; margin-bottom: 10px; border: 1px solid rgb(204, 204, 204); display: none;" tabindex="-1">'+
										'</div>'+
										'<div class="form-group locationlocation">'+
											'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="location"><i class="fa fa-chevron-down"></i> location</label><a href="javascript:;" class="w100p  locationBtn btn btn-default letter-red bold"><i class="fa fa-home"></i> Adresse principale</a>' +
											'<input type="hidden" placeholder="Latitude" name="geo[latitude]" id="geo.latitude]" value="">' +
											'<input type="hidden" placeholder="Longitude" name="geo[longitude]" id="geo[longitude]" value="">'+
											'<input type="hidden" placeholder="Insee" name="address[codeInsee]" id="address[codeInsee]" value="">' +
											'<input type="hidden" placeholder="country" name="address[addressCountry]" id="address[addressCountry]" value="">' +
											'<input type="hidden" placeholder="postal Code" name="address[postalCode]" id="address[postalCode]" value="">' +
											'<input type="hidden" placeholder="Locality" name="address[addressLocality]" id="address[addressLocality]" value="">'+
											'<input type="hidden" placeholder="address" name="address[streetAddress]" id="address[streetAddress]" value="">'+
										'</div>'+
										'<div class="form-group imageuploader">'+
											'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="image"><i class="fa fa-chevron-down"></i> Vos images ici :</label>'+
											'<div class=" fine-uploader-manual-trigger" data-type="citoyens" data-id="5aa60e7640bb4ed8667ccf7c"> '+
												'<div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Glisser vos fichiers ici"> '+
													'<div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container qq-hide"> '+
													'<div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar">' +
													'</div>'+
												'</div>' +
											'<div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone="" style="display: none;"> '+
										'</div>'+
										'<div class="qq-upload-button-selector btn btn-primary" style="position: relative; overflow: hidden; direction: ltr; margin-left: 30%;">' +
											'<div>Ajouter une image</div>'+
											'<input qq-button-id="61394abf-a876-41f4-9f42-627b4924ada0" title="file input" multiple="" type="file" name="qqfile" style="position: absolute; right: 0px; top: 0px; font-family: Arial; font-size: 118px; margin: 0px; padding: 0px; cursor: pointer; opacity: 0; height: 100%;">'+
										'</div>'+
										'<button type="button" id="trigger-upload" class="btn btn-danger hide"><i class="icon-upload icon-white"></i> Enregistrer</button>'+
										'<span class="qq-drop-processing-selector qq-drop-processing qq-hide hide"><span>En cours de progression...</span><span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span></span>' +
										'<ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">'+
										'</ul>'+
										'<dialog class="qq-alert-dialog-selector hide">'+
											'<div class="qq-dialog-message-selector">'+
											'</div>'+
											'<div class="qq-dialog-buttons hide">'+
												'<button type="button" class="qq-cancel-button-selector">Close</button>'+
											'</div>'+
										'</dialog>'+
										'<dialog class="qq-confirm-dialog-selector hide">'+
											'<div class="qq-dialog-message-selector"></div>'+
											'<div class="qq-dialog-buttons">'+
												'<button type="button" class="qq-cancel-button-selector">No</button>'+
												'<button type="button" class="qq-ok-button-selector">Yes</button>'+
											'</div>'+
										'</dialog>'+
										'<dialog class="qq-prompt-dialog-selector hide">'+
											'<div class="qq-dialog-message-selector">'+
											'</div><input type="text">'+
											'<div class="qq-dialog-buttons">'+
												'<button type="button" class="qq-cancel-button-selector">Cancel</button>'+
												'<button type="button" class="qq-ok-button-selector">Ok</button>'+
											'</div>'+
										'</dialog>'+
									'</div>'+
									'</div>'+
										'<script type="text/template" id="qq-template-gallery">'+
									'<div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Glisser vos fichiers ici">'+
										'<div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">'+
											'<div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar">'+
											'</div>'+
										'</div>'+
									'<div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>'+
										'<span class="qq-upload-drop-area-text-selector"></span>'+
									'</div>'+
									'<div class="qq-upload-button-selector btn btn-primary">'+
										'<div>Ajouter une image</div>'+
									'</div>'+
										'<button type="button" id="trigger-upload" class="btn btn-danger hide"><i class="icon-upload icon-white"></i> Enregistrer</button> '+
										'<span class="qq-drop-processing-selector qq-drop-processing"><span>En cours de progression...</span>' +
										'<span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span></span>' +
										'<ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">' +
											'<li>'+
												'<span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span>' +
												'<div class="qq-progress-bar-container-selector qq-progress-bar-container">' +
													'<div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar">' +
													'</div>' +
												'</div>' +
												'<span class="qq-upload-spinner-selector qq-upload-spinner"></span>'+
												'<div class="qq-thumbnail-wrapper"><img class="qq-thumbnail-selector" qq-max-size="120" qq-server-scale>'+
												'</div>'+
												'<button type="button" class="qq-upload-cancel-selector qq-upload-cancel">X</button>' +
												'<button type="button" class="qq-upload-retry-selector qq-upload-retry"><span class="qq-btn qq-retry-icon" aria-label="Retry"></span>Retry</button>' +
												'<div class="qq-file-info"> '+
													'<div class="qq-file-name">' +
														'<span class="qq-upload-file-selector qq-upload-file"></span>' +
													'</div> '+
													'<input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text"> '+
														'<span class="qq-upload-size-selector qq-upload-size"></span> '+
														'<button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">' + 
															'<span class="qq-btn qq-delete-icon" aria-label="Delete"></span> '+
														'</button>' +
														'<button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause">' +
															'<span class="qq-btn qq-pause-icon" aria-label="Pause"></span>' +
														'</button>' +
														'<button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue">' +
															'<span class="qq-btn qq-continue-icon" aria-label="Continue"></span>' +
														'</button>'+
												'</div>'+
											'</li>'+
										'</ul>'+
									'<dialog class="qq-alert-dialog-selector hide">'+
										'<div class="qq-dialog-message-selector">'+
										'</div>'+
										'<div class="qq-dialog-buttons hide">' +
											'<button type="button" class="qq-cancel-button-selector">Close</button>'+
										'</div>'+
									'</dialog>'+
									'<dialog class="qq-confirm-dialog-selector hide">'+
										'<div class="qq-dialog-message-selector"></div>' +
										'<div class="qq-dialog-buttons">' +
											'<button type="button" class="qq-cancel-button-selector">No</button>' +
											'<button type="button" class="qq-ok-button-selector">Yes</button>' +
										'</div>'+
									'</dialog>'+
									'<dialog class="qq-prompt-dialog-selector hide">'+
										'<div class="qq-dialog-message-selector">'+
										'</div>'+
										'<input type="text">'+
										'<div class="qq-dialog-buttons">'+
											'<button type="button" class="qq-cancel-button-selector">Cancel</button>' +
											'<button type="button" class="qq-ok-button-selector">Ok</button>'+
										'</div>'+
									'</dialog>'+
								'</div>'+
							'</script>'+
						'</div>'+
						'<div class="form-group emailtext">'+
							'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="email"><i class="fa fa-chevron-down"></i> E-mail principal</label>' +
							'<input type="text" class="form-control " name="email" id="email" value="" placeholder="exemple@mail.com"></div><div class="form-group shortDescriptiontextarea"> '+
							'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="shortDescription"><i class="fa fa-chevron-down"></i> Description courte</label>' +
							'<textarea id="shortDescription" maxlength="140" class="form-control textarea  maxlengthTextarea" name="shortDescription" placeholder="..."></textarea>' +
							'<span><span id="maxlengthshortDescription" name="maxlengthshortDescription">0</span> / 140 caractère(s) </span>' +
						'</div>'+
						'<div class="form-group urltext">'+
							'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="url"><i class="fa fa-chevron-down"></i> URL principale</label> '+
							'<input type="text" class="form-control " name="url" id="url" value="" placeholder="http://www.exemple.org">'+
							'<div class="resultGetUrl resultGetUrl0 col-sm-12">' +
							'</div>'+
						'</div>'+
						'<div class="form-group preferences[publicFields]hidden">'+
							'<input type="hidden" name="preferences[publicFields]" id="preferences[publicFields]" value="">'+
						'</div>'+
						'<div class="form-group preferences[privateFields]hidden">'+
							'<input type="hidden" name="preferences[privateFields]" id="preferences[privateFields]" value="">'+
						'</div>'+
						'<div class="form-group preferences[isOpenData]hidden">'+
							'<input type="hidden" name="preferences[isOpenData]" id="preferences[isOpenData]" value="true">'+
						'</div>'+
						'<div class="form-group preferences[isOpenEdition]hidden">'+
							'<input type="hidden" name="preferences[isOpenEdition]" id="preferences[isOpenEdition]" value="true">'+
						'</div>'+
						'<input type="hidden" name="key" id="key" value="undefined">'+
						'<input type="hidden" name="collection" id="collection" value="undefined">'+
						'<input type="hidden" name="id" id="id" value="5ac9b99f40bb4e280217448a">'+
						'<div class="form-actions"><hr class="col-md-12">'+
							'<button id="btn-submit-form" class="btn btn-default text-bold pull-right letter-green">Valider <i class="fa fa-arrow-circle-right"></i></button> '+
								'<a href="javascript:dyFObj.closeForm(); " class="mainDynFormCloseBtn btn btn-default pull-right text-red" style="margin-right:10px;"><i class="fa fa-times "></i> Annuler</a>' +
						'</div>'+
					'</form> '+
					'</div>'+
				'</div>'+
				//'<button type="button" data-dismiss="modal" class="btn btn-default">Fermer</button>'+
				'</div>'+
			'</div>'+
		'</div>';

	$("#main-container").html(contenu);
}

function newsEvent(){
	var contenu = '<div class="col-lg-12 pt-4">'+
					'<div class="modal-header text-dark bg-purple">'+
				        '<h3 class="modal-title text-center" id="ajax-modal-modal-title"><i class="fa fa-lightbulb-o"></i> Ajouter un nouveau projet <br><small class="text-white">en tant que : <span class="text-dark">Roger Alexandre</span></small></h3>'+
				    '</div>'+
						'<div class="row bg-white">'+
							'<div class="col-12">'+
								'<div class="space20">'+
								'</div>'+
								'<form id="ajaxFormModal" enctype="multipart/form-data" novalidate="novalidate">'+
									'<div class="errorHandler alert alert-danger" style="display: none"><i class="fa fa-remove-sign"></i> Merci de corriger les erreurs ci dessous.'+
									'</div>'+
									'<div class="form-group infocustom text-center pt-3">'+
										'<p class="">Faire connaître vos projets n\'a jamais été aussi simple !<br>Créez votre page en quelques secondes,<br>et complétez les informations plus tard, selon vos besoins</p>'+
										'<hr>'+
										'<p>'+
										'</p>'+
									'</div>'+
									'<div class="form-group nametext">'+
										'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="name"><i class="fa fa-chevron-down"></i> Nom de votre projet *</label> '+
										'<input type="text" class="form-control " name="name" id="name" value="" placeholder="Nom de votre projet  ...*">'+
									'</div>'+
									'<div class="form-group parentTypehidden">'+
										'<input type="hidden" name="parentType" id="parentType" value="citoyens">'+
									'</div>'+
									'<div class="form-group parentIdhidden">'+
										'<input type="hidden" name="parentId" id="parentId" value="5aa60e7640bb4ed8667ccf7c">'+
									'</div>'+
									'<div class="form-group imageuploader">'+
										'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="image"><i class="fa fa-chevron-down"></i> Vos images ici :</label>'+
									'<div class=" fine-uploader-manual-trigger" data-type="citoyens" data-id="5aa60e7640bb4ed8667ccf7c">'+
										'<div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Glisser vos fichiers ici">'+
											'<div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container qq-hide">'+
												'<div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar">'+
											'</div>'+
										'</div>'+
										'<div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone="" style="display: none;">'+
										'</div>'+
										'<div class="qq-upload-button-selector btn btn-primary" style="position: relative; overflow: hidden; direction: ltr; margin-left: 30%;">'+
											'<div>Ajouter une image</div>'+
											'<input qq-button-id="50d12e72-68d9-4076-b692-9d7c5fdf9e90" title="file input" multiple="" type="file" name="qqfile" style="position: absolute; right: 0px; top: 0px; font-family: Arial; font-size: 118px; margin: 0px; padding: 0px; cursor: pointer; opacity: 0; height: 100%;"></div>'+
											'<button type="button" id="trigger-upload" class="btn btn-danger hide"><i class="icon-upload icon-white"></i> Enregistrer</button>'+
											'<span class="qq-drop-processing-selector qq-drop-processing qq-hide hide"><span>En cours de progression...</span>'+
												'<span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span>'+
											'</span>'+
											'<ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">'+
											'</ul>'+
											'<dialog class="qq-alert-dialog-selector hide">'+
												'<div class="qq-dialog-message-selector hide">'+
												'</div>'+
												'<div class="qq-dialog-buttons">'+
													'<button type="button" class="qq-cancel-button-selector">Close</button>'+
												'</div>'+
											'</dialog>'+
											'<dialog class="qq-confirm-dialog-selector hide">'+
												'<div class="qq-dialog-message-selector hide"></div>'+
											'<div class="qq-dialog-buttons">'+
												'<button type="button" class="qq-cancel-button-selector">No</button>'+
												'<button type="button" class="qq-ok-button-selector">Yes</button>'+
											'</div>'+
											'</dialog>'+
											'<dialog class="qq-prompt-dialog-selector hide">'+
												'<div class="qq-dialog-message-selector">'+
												'</div>'+
												'<input type="text">'+
												'<div class="qq-dialog-buttons">'+
													'<button type="button" class="qq-cancel-button-selector">Cancel</button>'+
													'<button type="button" class="qq-ok-button-selector">Ok</button>'+
												'</div>'+
											'</dialog>'+
											'</div>'+
										'</div>'+
									'<script type="text/template" id="qq-template-gallery">'+
									'<div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Glisser vos fichiers ici">'+
										'<div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">'+
											'<div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar">'+
											'</div>'+
										'</div>'+
										'<div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>'+
											'<span class="qq-upload-drop-area-text-selector"></span>'+
										'</div>'+
										'<div class="qq-upload-button-selector btn btn-primary">'+
											'<div>Ajouter une image</div>'+
										'</div>'+
										'<button type="button" id="trigger-upload" class="btn btn-danger hide"><i class="icon-upload icon-white"></i> Enregistrer</button>'+
										'<span class="qq-drop-processing-selector qq-drop-processing"><span>En cours de progression...</span><span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span></span>' +
										'<ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">'+
											'<li>'+
												'<span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span> '+
												'<div class="qq-progress-bar-container-selector qq-progress-bar-container">'+
													'<div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar">'+
													'</div>'+
												'</div>'+
												'<span class="qq-upload-spinner-selector qq-upload-spinner"></span>'+
												'<div class="qq-thumbnail-wrapper">'+
													'<img class="qq-thumbnail-selector" qq-max-size="120" qq-server-scale>'+
												'</div>'+
												'<button type="button" class="qq-upload-cancel-selector qq-upload-cancel">X</button>'+
												'<button type="button" class="qq-upload-retry-selector qq-upload-retry">'+
													'<span class="qq-btn qq-retry-icon" aria-label="Retry"></span>Retry'+
												'</button>'+
												'<div class="qq-file-info">'+
													'<div class="qq-file-name">'+
														'<span class="qq-upload-file-selector qq-upload-file"></span>'+
													'</div>'+
													'<input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text"><span class="qq-upload-size-selector qq-upload-size"></span>'+
													'<button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">' +
														'<span class="qq-btn qq-delete-icon" aria-label="Delete"></span>' +
													'</button>'+
													'<button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause">' +
														'<span class="qq-btn qq-pause-icon" aria-label="Pause"></span>'+
													'</button>'+
													'<button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue">'+
														'<span class="qq-btn qq-continue-icon" aria-label="Continue"></span>'+
													'</button>'+
													'</div>'+
												'</li>'+
											'</ul>'+
											'<dialog class="qq-alert-dialog-selector">'+
												'<div class="qq-dialog-message-selector">'+
												'</div>'+
												'<div class="qq-dialog-buttons">'+
													'<button type="button" class="qq-cancel-button-selector">Close</button>'+
												'</div>'+
											'</dialog>'+
											'<dialog class="qq-confirm-dialog-selector">'+
												'<div class="qq-dialog-message-selector">'+
												'</div>'+
											'<div class="qq-dialog-buttons">'+
												'<button type="button" class="qq-cancel-button-selector">No</button>'+
												'<button type="button" class="qq-ok-button-selector">Yes</button>'+
											'</div>'+
											'</dialog>'+
											'<dialog class="qq-prompt-dialog-selector">'+
												'<div class="qq-dialog-message-selector">'+
												'</div>'+
												'<input type="text">'+
												'<div class="qq-dialog-buttons">'+
													'<button type="button" class="qq-cancel-button-selector">Cancel</button>'+
													'<button type="button" class="qq-ok-button-selector">Ok</button>'+
												'</div>'+
											'</dialog>'+
										'</div>'+
									'</script>'+
								'</div>'+
								'<div class="form-group locationlocation">'+
									'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="location"><i class="fa fa-chevron-down"></i> location</label>'+
									'<a href="javascript:;" class="w100p  locationBtn btn btn-default letter-red bold"><i class="fa fa-home"></i> Adresse principale</a>'+
									'<input type="hidden" placeholder="Latitude" name="geo[latitude]" id="geo.latitude]" value=""> '+
									'<input type="hidden" placeholder="Longitude" name="geo[longitude]" id="geo[longitude]" value="">'+
									'<input type="hidden" placeholder="Insee" name="address[codeInsee]" id="address[codeInsee]" value=""> '+
									'<input type="hidden" placeholder="country" name="address[addressCountry]" id="address[addressCountry]" value="">'+
									'<input type="hidden" placeholder="postal Code" name="address[postalCode]" id="address[postalCode]" value="">' +
									'<input type="hidden" placeholder="Locality" name="address[addressLocality]" id="address[addressLocality]" value="">'+
									'<input type="hidden" placeholder="address" name="address[streetAddress]" id="address[streetAddress]" value=""> '+
								'</div>' +
								'<div class="form-group tagstags">'+
									'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="tags"><i class="fa fa-chevron-down"></i> Ajouter quelques mots clés (tags)</label>'+
									'<div class="select2-container select2-container-multi select2TagsInput" id="s2id_tags" style="width:100%;margin-bottom: 10px;border: 1px solid #ccc;">'+
										'<ul class="select2-choices">'+
											'<li class="select2-search-field">' +
												'<label for="s2id_autogen5" class="select2-offscreen hide"> Ajouter quelques mots clés (tags)</label>'+    
												'<input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input select2-default" id="s2id_autogen5" placeholder="" style="width: 122%;">'+  
											'</li>'+
										'</ul>'+
										'<div class="select2-drop select2-drop-multi select2-display-none"> ' +
										'<ul class="select2-results"> '+ 
										'</ul>'+
									'</div>'+
								'</div>'+
								'<input type="text" class="select2TagsInput" name="tags" id="tags" value="" placeholder="Mots clés" style="width: 100%; margin-bottom: 10px; border: 1px solid rgb(204, 204, 204); display: none;" tabindex="-1">'+
							'</div>'+
							'<div class="form-group shortDescriptiontextarea">'+
								'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="shortDescription"><i class="fa fa-chevron-down"></i> Description courte</label>'+
								'<textarea id="shortDescription" maxlength="140" class="form-control textarea  maxlengthTextarea" name="shortDescription" placeholder="..."></textarea>'+
								'<span><span id="maxlengthshortDescription" name="maxlengthshortDescription">0</span> / 140 caractère(s) </span>' +
							'</div>'+
							'<div class="form-group formshowerscustom">'+
								'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="formshowers"><i class="fa fa-chevron-down"></i> En détails</label>'+
								'<a class="btn btn-default  text-dark w100p" href="javascript:;" onclick="$(&quot;.descriptionwysiwyg,.urltext&quot;).slideToggle();activateSummernote(&quot;#ajaxFormModal #description&quot;);"><i class="fa fa-plus"></i> options (desc, urls)</a>'+
							'</div>'+
							'<div class="form-group urltext" style="display: none;">'+
								'<label class="col-md-12 col-sm-12 col-xs-12 text-left control-label no-padding" for="url"><i class="fa fa-chevron-down"></i> URL principale</label>'+
								'<input type="text" class="form-control " name="url" id="url" value="" placeholder="http://www.exemple.org">'+
								'<div class="resultGetUrl resultGetUrl0 col-sm-12">'+
								'</div>'+
							'</div>'+
							'<div class="form-group preferences[publicFields]hidden">'+
								'<input type="hidden" name="preferences[publicFields]" id="preferences[publicFields]" value="">'+
							'</div>'+
							'<div class="form-group preferences[privateFields]hidden">'+
								'<input type="hidden" name="preferences[privateFields]" id="preferences[privateFields]" value="">'+
							'</div>'+
							'<div class="form-group preferences[isOpenData]hidden">'+
								'<input type="hidden" name="preferences[isOpenData]" id="preferences[isOpenData]" value="true">'+
							'</div>'+
							'<div class="form-group preferences[isOpenEdition]hidden">'+
								'<input type="hidden" name="preferences[isOpenEdition]" id="preferences[isOpenEdition]" value="true">'+
							'</div>'+
							'<input type="hidden" name="key" id="key" value="undefined">'+
							'<input type="hidden" name="collection" id="collection" value="undefined">'+
							'<input type="hidden" name="id" id="id" value="5ac9d75140bb4e2607174487">'+
							'<div class="form-actions"><hr class="col-md-12">'+
								'<button id="btn-submit-form" class="btn btn-default text-bold pull-right letter-green">Valider <i class="fa fa-arrow-circle-right"></i></button>'  +
								'<a href="javascript:dyFObj.closeForm(); " class="mainDynFormCloseBtn btn btn-default pull-right text-red" style="margin-right:10px;"><i class="fa fa-times "></i> Annuler</a>' +
							'</div>'+
						'</form>'+
						'<br></br>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>';
	$("#main-container").html(contenu);
}