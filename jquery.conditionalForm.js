jQuery.fn.conditionalForm = function(options){
	var form = this;
	
	var defaultOptions = {
		conditional : '.conditional',
	};
	
	var options = $.extend(defaultOptions, options);
	
	//Show/Hide Conditional questions when its parent is answered Yes/No
	form.find('input').change(function(){
		if($(this).siblings('.conditional')){
			if($(this).val() == 'Yes'){
				$(this).siblings(options.conditional).each(function(){
					$(this).show();
				});
			} else{
				$(this).siblings(options.conditional).each(function(){
					$(this).find('input:checkbox, input:radio').each(function(){ $(this).attr('checked', false); });
					$(this).find('input:text, textarea').each(function(){ $(this).val(""); });
					
					$(this).find(options.conditional).each(function(){ 
						$(this).hide();
						$(this).find('input:checkbox, input:radio, select').each(function(){ 
							$(this).attr('checked', false); 

						});
						$(this).find('input:text, textarea').each(function(){ $(this).val(""); });
					});
					
					$(this).hide();
				});
	
			}
		}
		
	});

}