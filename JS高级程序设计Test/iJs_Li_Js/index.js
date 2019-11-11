(function() {
	var paths = [
			'iJs_Li_Js/jquery/dialog.js',
			'iJs_Li_Js/jquery/jquery-1.10.2.min.js',
			'iJs_Li_Js/jquery/jquery-1.10.4 ui-min.js',
			'iJs_Li_Js/jquery/jquery.cookie.js',
			'iJs_Li_Js/jquery/jquery.i18n.properties.js',
			'iJs_Li_Js/jquery/myAlert.js',
			'iJs_Li_Js/LinqJs/linq.js',
			'iJs_Li_Js/vue/vue.js',
			'iJs_Li_Js/common.js'
		],
		baseUrl = '';
	for(var i = 0, pi; pi = paths[i++];) {
		var path = "<script type=text/javascript" + " src='" + pi + "'>" + "<" + "/script>";
		document.write(path);
	}
})();