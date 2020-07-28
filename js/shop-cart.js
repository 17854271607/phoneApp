$(function() {
	//添加或减少数量
	var $input = $(".details .ipt");
	// 添加
	$input.on("click", ".add", function() {
		var num = parseFloat($(this).siblings(".input").val());
		if (num < 5) {
			num += 1;
			$(this).siblings(".input").val(num);
		} else {
			num == 5;
		}
	});
	// 减少
	$input.on("click", ".reduce", function() {
		var num = parseFloat($(this).siblings(".input").val());
		if (num <= 1) {
			//donothing
		} else {
			num -= 1;
			$(this).siblings(".input").val(num);
		}
	});
});
