$(function(){
	// 点击上面选项卡
	var $up_ul = $(".select ul");
	$up_ul.on("click", "li", function() {
		//文字变红色
		$(this).addClass("red").siblings().removeClass("red");
		// 获取点击按钮的index
		var index = $(this).index();
		// 对应内容显示,兄弟元素隐藏
		$(this).parents(".select").siblings(".content").find(".select_good").eq(index).addClass("show").siblings().removeClass(
			"show");
	});
	// 点击下面选项卡
	var $down_ul = $(".content .header ul");
	$down_ul.on("click", "li", function() {
		//文字变红色
		$(this).addClass("red").siblings().removeClass("red");
		// 获取点击按钮的index
		var index = $(this).index();
		// 对应内容显示,兄弟元素隐藏
		$(this).parents(".header").siblings(".good-list").children(".select_good").eq(index).addClass("show").siblings().removeClass(
			"show");
	});
});

