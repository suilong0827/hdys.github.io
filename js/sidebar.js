//侧边栏鼠标移入效果
$(document).ready(function() {
	var oside = document.getElementById('sidebar');
	var temp = null;
	oside.onmouseover = function(ev) {
		ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		if(target.tagName.toLowerCase() == 'a') {
			if(temp != null) {
//				temp.style.background= '';
				temp.style.transition= 'all 0.3s';
			}
			temp = target;
//			temp.style.background= '';
				temp.style.transition= 'all 0.3s'
		}
	}
	//滚动固定区块 滚动条位置
	t = $('#sidebar').offset().top;
	mh = $('#cont').height() + 4000;
	fh = $('#sidebar').height();
	$(window).scroll(function(ev) {
		s = $(document).scrollTop();
		if(s > 800) {
			
			$('#sidebar').css('opacity', '1');
			$('#sidebar').css('transition', '1s');
			$('#sidebar').css('top', '20%');
			$('#sidebar').css('position', 'fixed');
			console.log(s+'-');
			console.log(t+'--');
			console.log(fh+'---');
			if(s + fh > mh) {
				console.log(s);
				console.log(fh);
				console.log(mh);
				$('#sidebar').css('top', mh - s - fh + 'px');
			}
		} else {
			$('#sidebar').css('position', '');
			$('#sidebar').css('opacity', '0');
			$('#sidebar').css('transition', '1s');
		}
	})
});