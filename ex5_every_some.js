function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(user) {
            return goodUsers.indexOf(user) !== -1;
        })
      };
    }

module.exports = checkUsersValid
