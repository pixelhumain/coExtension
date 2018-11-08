var links = document.getElementsByTagName("link"); 
               
				var type = 'application/rss+xml';
                // nombre de tag "META" trouvé 
                var llinks = links.length; 
                // stock la liste des mots contenu dans le "content" du "META" 
                var listLinks = new Array(); 
                // Parcours la liste 
                for (var i = 0; i<llinks; i++){ 
                    // si l'attribut keywords est renseigné, alors on traite l'info 
                    if ( links[i].getAttribute("type") == type){ 
                        var href = links[i].getAttribute("href"); 
                        //for ( var j=0; j<content.length; j++){ 
                            listLinks.push(href); 
                        //} 
                    } 
                }
var foo= listLinks;foo;