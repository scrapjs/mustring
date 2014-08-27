var S = module.exports = {
	//camel-case → CamelCase
	camel: function (str){
		return str && str.replace(/-[a-z]/g, function(match, position){
			return S.upper(match[1])
		})
	},

	//CamelCase → camel-case
	dashed: function (str){
		return str && str.replace(/[A-Z]/g, function(match, position){
			return (position ? '-' : '') + S.lower(match)
		})
	},

	//uppercaser
	upper: function (str){
		return str.toUpperCase();
	},

	//lowercasify
	lower: function (str){
		return str.toLowerCase();
	},

	//aaa → Aaa
	capfirst: function (str){
		str+='';
		if (!str) return str;
		return S.upper(str[0]) + str.slice(1);
	},

	// onEvt → envt
	unprefixize: function (str, pf){
		return (str.slice(0,pf.length) === pf) ? S.lower(str.slice(pf.length)) : str;
	}
};