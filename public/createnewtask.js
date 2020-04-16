$(function () {
    let title = $('#newtitle')
    let desc = $('#newdesc')
    let date = $('#newdate')
    let priority = $('#newpriority')
    $('#createnewtask').click(function () {
        createnewcard(
            title.val(),
            desc.val(),
            date.val(),
            priority.val(),
            function (addednewcard) {
                window.alert("New task added to database")
            }
        )
    })
})




// var ID
// function reply_click(clicked_id)
// {
//     var idstr = clicked_id
//     ID = idstr[(idstr.length)-1]
// }
// $(function(){
//     let note = $('#newnote')
//        $('#addnewnote').click(function(){
//         createnewnote(
//             note.val(),
//             ID,
//             function(addednewnote){
//                 window.alert("New Note added to database")
//             }
//         )
//        })
//     })




// var IDD
// function reply_clck(clicked_id)
// {
//     var idstrr = clicked_id
//     IDD = idstrr[(idstrr.length)-1]
//     console.log(IDD)
// }
// $(function(){
//     let date = $('#editnewdate')
//     let priority = $('#editnewpriority')
//     let status = $('#editnewstatus').is(":checked")
//         $('#editask').click(function(){
//         updatetask(
//             date.val(),
//             priority.val(),
//             status,
//             IDD,
//             function(addednewnote){
//                 window.alert("Editiong to db is done")
//             }
//         )
//         })
//     })

