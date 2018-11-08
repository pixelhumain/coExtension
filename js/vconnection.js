function view_connection(){
	var contenu = '<div class="col-md-4 col-md-offset-4 text-left pt-2">'+
                	'<label><i class="fa fa-envelope"></i> E-mail</label><br>'+
                	'<input class="form-control" name="email" id="email-login" type="text" placeholder="Un e-mail"><br>'+
                	'<label><i class="fa fa-key"></i> Mot de passe</label><br>'+
                	'<input class="form-control" name="password" id="password-login" type="password" placeholder="Un mot de passe"><br>'+
					'<label for="remember" class="checkbox-inline">'+
                    '<input type="checkbox" id="remember" name="remember" checked="checked">'+
                    'Se souvenir de moi                </label><br>'+
                	'<small><i class="fa fa-lock"></i> mot de passe enregistré de façon sécurisée dans vos cookies.</small>'+
                	'<br>'+
					'<button class="btn btn-success pull-right loginBtn mb-1" id="connexion" type="submit"><i class="fa fa-sign-in"></i> Connexion</button></div>'+
                    '<div class="alert alert-danger emailAndPassNotMatchResult mt-5" style="display: none;">'+
                        '<i class="fa fa-remove-sign"></i>Email ou Mot de Passe ne correspondent pas, rééssayez.</div>';
	$("#main-container").empty();
	$("#main-container").append(contenu);
	$("#main-container").show();
}