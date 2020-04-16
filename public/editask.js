var IDD
function reply_clck(clicked_id) {
    var idstr = clicked_id
    IDD = idstr[(idstr.length) - 1]
}
$(function () {
    let date = $('#editnewdate')
    let priority = $('#editnewpriority')
    var status
    $('#editask').click(function () {
        updatetask(
            date.val(),
            priority.val(),
            status = (($('#editnewstatus').is(":checked")) ? 1 : 0),
            IDD,
            function (addednewnote) {
                window.alert("Editiong to db is done")
            }
        )
    })
})

