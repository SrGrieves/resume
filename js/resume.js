$(document).ready(function() {
    setupEmailButton();
})

function setupEmailButton() {
    var e1 = "m"
    var e2 = String.fromCharCode(64);
    var e3 = "markcarrie";
    var e4 = "r.info";
    var e = e1 + e2 + e3 + e4;
    $(".email-address-link").text(e);
    $(".email-address-link").prop("href","mailto:"+e);
    $("a.email-link").click(function() {
        $('#email-modal').modal()

    })
}