/**
 * How I understand the use of bind() is that in this case it creates a new
 * console.log() function with the first argument as namespace.
 */

module.exports = function(namespace) {
    return console.log.bind(null, namespace);
    }