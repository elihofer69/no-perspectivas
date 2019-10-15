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

const form = document.querySelector("#loginform");
form.addEventListener('submit', event => {
  event.preventDefault();
  loadPage($("#password").val());
});

$("#password").focus();
