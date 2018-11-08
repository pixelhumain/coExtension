var metas = document.getElementsByTagName("meta"); 
               
				var name = 'keywords';
                // nombre de tag "META" trouvé 
                var lMetas = metas.length; 
                // stock la liste des mots contenu dans le "content" du "META" 
                var listMeta = new Array(); 
                // Parcours la liste 
                for (var i = 0; i<lMetas; i++){ 
                    // si l'attribut keywords est renseigné, alors on traite l'info 
                    if ( metas[i].getAttribute("name") == name){ 
                        listMeta = metas[i].getAttribute("content").split(","); 
                        // for ( var j=0; j<content.length; j++){ 
                        //     listMeta.push(content[j]); 
                        // }

                    } 
                }
var foo= listMeta;foo;