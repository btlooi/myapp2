

function get_profile_photo(req)
{
	try
	  {
	  	var photo = "";
	    if(req.user.provider)
	    {
	        if(req.user.provider === 'twitter')
	        {
	       		photo = req.user.photos[0].value;
	       	}
	        else if(req.user.provider === 'google')
	        {
	       		photo = req.user._json.picture;
	       	}
	        else if (req.user.provider === 'facebook')	
	        {
   	  	    	var username = req.user.username;
	       		photo = "http://graph.facebook.com/{username}/picture".replace(/{username}/g,username);
	       	}
	    }   	
	  }
	catch(err)
	  {
	  }
	  return photo;
}

/*
 * GET home page.
 */
exports.index = function(req, res){

    if (!req.isAuthenticated()) 
	    res.redirect('/');

	try
	  {
	  	var photo = "https://profiles.google.com/s2/photos/profile/looibt";
	    console.log(req);

	    if(req.user.provider)
	    {
	        if(req.user.provider === 'twitter')
	        {
	       		photo = req.user.photos[0].value;
	       	}
	        else if(req.user.provider === 'google')
	        {
	       		photo = req.user._json.picture;
	       	}
	        else if (req.user.provider === 'facebook')	
	        {
   	  	    	var username = req.user.username;
	       		photo = "http://graph.facebook.com/{username}/picture".replace(/{username}/g,username);
	       	}
	    }   	
	    var name = req.user.identifier + " " + req.user.displayName + " " + req.user.emails[0].value;
	  }
	catch(err)
	  {
	  }
	  res.render('index', { title: 'Express ' + name , username : username , photo : photo });
};

exports.login  = function(req, res){
  res.render('login', { title: 'Express'});
};


exports.home = function(req, res){

    if (!req.isAuthenticated()) 
	    res.redirect('/');

	try
	  {
	    console.log(req);
	    var name = req.user.identifier + " " + req.user.displayName + " " + req.user.emails[0].value;
	  }
	catch(err)
	  {
	  }
	  res.render('home', { title: 'Express ' + name , photo : get_profile_photo(req)} );
};

exports.login  = function(req, res){
  res.render('login', { title: 'Express' });
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
