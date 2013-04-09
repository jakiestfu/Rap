var Rap = Rap || (function(){
	
	var 
	
	Events = {
		listen: function(){
			document.getElementsByTagName('textarea')[0].addEventListener('focus', function(){
				document.getElementById('rap-house').classList.add('focused');
			});
		}
	},
	
	initialize = function(){
		
		Events.listen();
		
	},
	Public = {
		init: initialize
	};
	
	
	return Public;
	
})();
