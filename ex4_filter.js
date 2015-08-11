function getShortMessages(messages) {
      return messages.filter(function(message_obj) {
        return message_obj.message.length < 50;
      }).map(function(message_obj) {
        return message_obj.message
      });
    }

module.exports = getShortMessages