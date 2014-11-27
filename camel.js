//camel-case → CamelCase
module.exports = function(str){
	return str && str.replace(/-[a-z]/g, function(match, position){
		return require('./upper')(match[1])
	})
}