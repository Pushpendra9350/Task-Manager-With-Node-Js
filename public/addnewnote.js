var ID
function reply_click(clicked_id) {
    var idstr = clicked_id
    ID = idstr[(idstr.length) - 1]
}
$(function () {
    let note = $('#newnote')
    $('#addnewnote').click(function () {
        createnewnote(
            note.val(),
            ID,
            function (addednewnote) {
                window.alert("New Note added to database")
            }
        )
    })
})

