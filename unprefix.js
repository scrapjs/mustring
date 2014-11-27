// onEvt → envt
module.exports = function(str, pf){
	return (str.slice(0,pf.length) === pf) ? require('./lower')(str.slice(pf.length)) : str;
}