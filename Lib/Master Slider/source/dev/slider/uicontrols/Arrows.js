;(function($){
	
	"use strict";
	
	var MSArrows = function(options){
		BaseControl.call(this);
		$.extend(this.options , options);
	};
	
	MSArrows.extend(BaseControl);
	
	var p = MSArrows.prototype;
	var _super = BaseControl.prototype;
	
	/* -------------------------------- */
	
	p.setup = function(){
		var that = this;
		
		this.$next = $('<div></div>')
					.addClass(this.options.prefix + 'nav-next')
					//.appendTo(this.cont)
					.bind('click' , function(){
						if(!that.slider.options.loop && that.slider.api.index() === that.slider.api.count() - 1)
							that.slider.view.controller.bounce(10);
						else
							that.slider.api.next();
					});
				
		
		this.$prev = $('<div></div>')
					.addClass(this.options.prefix + 'nav-prev')
					//.appendTo(this.cont)
					.bind('click' , function(){
						if(!that.slider.options.loop && that.slider.api.index() === 0)
							that.slider.view.controller.bounce(-10);
						else
							that.slider.api.previous();
					});
		
		_super.setup.call(this);

		this.cont.append(this.$next);
		this.cont.append(this.$prev);
	};
	
	p.hide = function(fast){
		if(fast){
			this.$prev.css('opacity' , 0).css('display', 'none');
			this.$next.css('opacity' , 0).css('display', 'none');
			return;
		}
	
		CTween.fadeOut(this.$prev , 400 , false);
		CTween.fadeOut(this.$next , 400 , false);
		
		this.$prev.addClass('ms-ctrl-hide');
		this.$next.addClass('ms-ctrl-hide');
	};
	
	p.visible = function(){
		if(this.detached) return;
		CTween.fadeIn(this.$prev , 400 );
		CTween.fadeIn(this.$next , 400 );
		this.$prev.removeClass('ms-ctrl-hide').css('display', '');
		this.$next.removeClass('ms-ctrl-hide').css('display', '');
	};
	
	p.destroy = function(){
		_super.destroy();
		this.$next.remove();
		this.$prev.remove();
	};
	
	window.MSArrows = MSArrows;
	MSSlideController.registerControl('arrows' , MSArrows);
})(jQuery);
