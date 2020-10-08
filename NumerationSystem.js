$(function(){
	var hex=$('.input-hex');
	var dec=$('.input-dec');

	var btnleft=$('.translate-hex2dec');
	var btnright=$('.translate-dec2hex');

	var rgb1=$('.rgb1');
	var rgb2=$('.rgb2');

	var preview1=$('.preview1').parent();
	var preview2=$('.preview2').parent();
	
	var rule=/^\((\d+),(\d+),(\d+),?(1|0)?(\.\d+)?\)$/;//rgb判断规则

	function dec2rgb(x) {
		return hex2rgb(parseInt(x,10).toString(16));
	};

	function hex2rgb(x) {
		if (x.length==6) {
			return '('+parseInt(x.substring(0,2),16)+
					','+parseInt(x.substring(2,4),16)+
					','+parseInt(x.substring(4,6),16)+
					')';
		}else if (x.length==8) {
			return '('+parseInt(x.substring(2,4),16)+
					','+parseInt(x.substring(4,6),16)+
					','+parseInt(x.substring(6,8),16)+
					','+Math.round((parseInt(x.substring(0,2),16)+1)/2.56)/100+
					')';
		}else if (x.length<6) {
			return "RGB格式错误";
		}else if (x.length==7) {
			return "RGBA格式错误";
		}else {
			return "格式错误";
		}
	};

	function judge(matchstr,object) {
		if (hex.val().length==6) {
			var rulematch1=matchstr.match(rule);
			var colorave=(parseInt(rulematch1[1])+parseInt(rulematch1[2])+parseInt(rulematch1[3]))/3;
			if (colorave>127) {
				object.css('color','#000');
			}else if (colorave<=127) {
				object.css('color','#fff');
			}
		}
		if (hex.val().length==8) {
			var rulematch1=matchstr.match(rule);
			var colorave=(parseInt(rulematch1[1])+parseInt(rulematch1[2])+parseInt(rulematch1[3]))/3;
			if (colorave>127) {
				object.css('color','#000');
			}else if (colorave<=127) {
				object.css('color','#fff');
			}
			if (parseInt(hex.val().substring(0,2),16)<127) {
				object.css('color','#000');
			}
		}
	}
	btnleft.click(function(){
		var hex2dec=parseInt(hex.val(),16).toString(10);
		dec.val(hex2dec);

		var colorRGB1=hex2rgb(hex.val());
		rgb1.html(colorRGB1);
		rgb1.parent().css('background','rgb'+colorRGB1);

		judge(colorRGB1,rgb1);
	});

	btnright.click(function(){
		var dec2hex=parseInt(dec.val(),10).toString(16);
		hex.val(dec2hex);

		var colorRGB2=dec2rgb(dec.val());
		rgb2.html(colorRGB2);
		rgb2.parent().css('background','rgb'+colorRGB2);

		judge(colorRGB2,rgb2);
	});

	preview1.click(function(){
		var hex2dec=parseInt(hex.val(),16).toString(10);

		var colorRGB1=hex2rgb(hex.val());
		rgb1.html(colorRGB1);
		rgb1.parent().css('background','rgb'+colorRGB1);
		judge(colorRGB1,rgb1);
	});

	preview2.click(function(){
		var dec2hex=parseInt(dec.val(),10).toString(16);

		var colorRGB2=dec2rgb(dec.val());
		rgb2.html(colorRGB2);
		rgb2.parent().css('background','rgb'+colorRGB2);
		judge(colorRGB2,rgb2);
	});
});
$(function(){
	$('.opacitybtn').click(function(){
		$(".opacity").slideToggle(200);
	})
})