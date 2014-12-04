var lower = require('./lower');
// onEvt → envt
module.exports = function(str, pf){
	return (str.slice(0,pf.length) === pf) ? lower(str.slice(pf.length)) : str;
}