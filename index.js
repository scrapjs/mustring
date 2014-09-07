module.exports = {
	camel:camel,
	dashed:dashed,
	upper:upper,
	lower:lower,
	capfirst:capfirst,
	unprefixize:unprefixize
};

//camel-case → CamelCase
function camel(str){
	return str && str.replace(/-[a-z]/g, function(match, position){
		return upper(match[1])
	})
}

//CamelCase → camel-case
function dashed(str){
	return str && str.replace(/[A-Z]/g, function(match, position){
		return (position ? '-' : '') + lower(match)
	})
}

//uppercaser
function upper(str){
	return str.toUpperCase();
}

//lowercasify
function lower(str){
	return str.toLowerCase();
}

//aaa → Aaa
function capfirst(str){
	str+='';
	if (!str) return str;
	return upper(str[0]) + str.slice(1);
}

// onEvt → envt
function unprefixize(str, pf){
	return (str.slice(0,pf.length) === pf) ? lower(str.slice(pf.length)) : str;
}