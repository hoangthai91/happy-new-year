window.MSSliderEvent = function (type){
	this.type = type;
};

MSSliderEvent.CHANGE_START      	= 'changeStart';
MSSliderEvent.CHANGE_END       		= 'changeEnd';
MSSliderEvent.WAITING		      	= 'waiting';
MSSliderEvent.AUTOPLAY_CHANGE   	= 'autoplayChange';
MSSliderEvent.VIDEO_PLAY		   	= 'videoPlay';
MSSliderEvent.VIDEO_CLOSE		   	= 'videoClose';
MSSliderEvent.INIT					= 'init';
MSSliderEvent.RESIZE				= 'resize';
MSSliderEvent.RESERVED_SPACE_CHANGE = 'rsc'; // internal use
