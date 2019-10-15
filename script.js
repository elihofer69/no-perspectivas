"use strict";

const loadPage = (pwd) => {
	let hash = Sha1.hash(pwd);
	let url = hash + "/index.html";

	$.ajax({
		url: url,
		dataType: "html",
		success: (data) => {
			window.location = url;
		},
		error: (xhr, ajaxOptions, thrownError) => {
			parent.location.hash = hash;
			$("#password").attr("placeholder","wrong password");
			$("#password").val("");
		}
	});
}


$("#loginbutton").on("click", function() {
	loadPage($("#password").val());
});

$("#password").keypress(function(e) {
	if (e.which == 13) {
		loadPage($("#password").val());
	}
});

$("#password").focus();