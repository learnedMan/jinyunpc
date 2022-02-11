import router from './router'
import Vue from 'vue'
Vue.prototype.todetails = (newsItem) =>{
    if(newsItem?.link?.type=='outer_link'){
		let url = newsItem.link.content;
		if (url.indexOf("http") == -1) { 
			url = "http://" + url; 
		} 
        window.open(url);
    }else{
        router.push({ name: 'Details', params: {id:newsItem.id} });
    }
}

/**
 * 实时时间转换指令，大于一个月则返回具体的年月日
 * @param { string } timeStamp - 时间 格式：年-月-日 时:分:秒 或 时间戳
 * @returns { string }
 */
 function getFormatTime(timeStamp){
	var dateTime = new Date(timeStamp*1000);
	var no1new = dateTime.valueOf();
	var year = dateTime.getFullYear();
	var month = dateTime.getMonth() + 1;
	var day = dateTime.getDate();
	var hour = dateTime.getHours();
	var minute = dateTime.getMinutes();
	var second = dateTime.getSeconds();
	var now = new Date();
	var now_new = now.valueOf();
	var milliseconds = 0;
	var timeSpanStr;
	milliseconds = now_new - no1new;
	if (milliseconds < 1000 * 60 * 3) {
		timeSpanStr = '刚刚';
	}else if (1000 * 60 * 3 <= milliseconds && milliseconds < 1000 * 60 * 60) {
		timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
	}else if (1000 * 60 * 60 * 1 <= milliseconds && milliseconds < 1000 * 60 * 60 * 24 && day==now.getDate()) {
		timeSpanStr = hour + ':' + minute;
	}else if (day!=now.getDate() && year == now.getFullYear()) {
		timeSpanStr = month + '-' + day
	}else {
		timeSpanStr = year + '-' + month + '-' + day
	}
	return timeSpanStr;
	}

Vue.directive('time', {
	bind: function(el, binding){
		el.innerHTML = getFormatTime(binding.value);
		//每隔一分钟更新一次
		el.__timeout__ = setInterval(function(){
			el.innerHTML = getFormatTime(binding.value);
		}, 60000);
	},
	unbind: function(el){
		clearInterval(el.__timeout__);
		delete el.__timeout__;
	}
});

