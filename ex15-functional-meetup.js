function loadUsers(userIds, load, done) {
  var users = [];
  var count = 0;
  for (var i = 0; i < userIds.length; i++) {
    load(userIds[i], function(user) {
        if(user) {
            users[i] = user;
            count += 1;
        }
        if(count === userIds.length) {
            return done(users);
        }
    });
  }



}

module.exports = loadUsers