$(".switch").find("input[type=checkbox]").on("change",function() {
    var status = $(this).prop('checked');

    alert(status);
});