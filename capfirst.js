var upper = require('./upper');
//aaa → Aaa
module.exports = function(str){
	str+='';
	if (!str) return str;
	return upper(str[0]) + str.slice(1);
};