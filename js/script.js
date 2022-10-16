$(function () {
	$(".c-menu_button").click(function () {
		$(".l-contents__right").addClass("open");
		$(".l-contents__left").addClass("open");
		$(".l-contents").addClass("open");
	});
});

$(function () {
	$(".c-button_close").click(function () {
		$(".l-contents__right").removeClass("open")
		$(".l-contents__left").removeClass("open");
		$(".l-contents").removeClass("open");
	})
})


