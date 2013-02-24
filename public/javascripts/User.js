

function UserModel(username,password)
{
	var lusername = username;
	var lpassword  = password;
}

UserModel.prototype.validPassword = function(password)
{
	if(password === "pwd")
  	  return true;
    else
	    return false;	
}


var users = [
    { id: 1, username: 'bob', password: 'secret', email: 'bob@example.com' }
  , { id: 2, username: 'joe', password: 'birthday', email: 'joe@example.com' }
];


exports.findOne = function(req, callback){
	console.log(req);
	console.log(callback);

	callback(null,new UserModel());
};

exports.findById = function (id, fn) {
  var idx = id - 1;
  if (users[idx]) {
    fn(null, users[idx]);
  } else {
    fn(new Error('User ' + id + ' does not exist'));
  }
}

exports.findByUsername = function(username, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.email === username) {
      return fn(null, user);
    }
  }
  return fn(null, null);
}

