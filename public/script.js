function updatedata() {
    let tasklist = $("#cards")
    fetchdata(function (alldata) {
        tasklist.empty()
        for (task of alldata) {
            tasklist.append(createcard(task))
            if (task.status == 1) {
                $("#bag" + task.id).toggleClass('badge badge-pill badge-danger badge badge-pill badge-success')
                //$("#line"+task.id).toggleClass('linecolor bgcolor')
            }
            let notelist = $('#notelist' + task.id)
            notelist.empty()
            var l = task.notes.length
            for (var i = 0; i < l; i++) {
                notelist.append(createnotes(task.notes[i].note))
            }
        }
    })

}



var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal3 = document.getElementById('id03');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    else if (event.target == modal2) {
        modal2.style.display = "none";
    }
    else if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

updatedata()

function updatesortbydatedesc() {
    let tasklist = $("#cards")
    fetchdatasortdesc(function (alldata) {
        tasklist.empty()
        for (task of alldata) {
            tasklist.append(createcard(task))
            if (task.status == 1) {
                $("#bag" + task.id).toggleClass('badge badge-pill badge-danger badge badge-pill badge-success')
                //$("#line"+task.id).toggleClass('linecolor bgcolor')
            }
            let notelist = $('#notelist' + task.id)
            notelist.empty()
            var l = task.notes.length
            for (var i = 0; i < l; i++) {
                notelist.append(createnotes(task.notes[i].note))
            }
        }
    })

}

function updatesortbydateasc() {
    let tasklist = $("#cards")
    fetchdatasortasc(function (alldata) {
        tasklist.empty()
        for (task of alldata) {
            tasklist.append(createcard(task))
            if (task.status == 1) {
                $("#bag" + task.id).toggleClass('badge badge-pill badge-danger badge badge-pill badge-success')
                //$("#line"+task.id).toggleClass('linecolor bgcolor')
            }
            let notelist = $('#notelist' + task.id)
            notelist.empty()
            var l = task.notes.length
            for (var i = 0; i < l; i++) {
                notelist.append(createnotes(task.notes[i].note))
            }
        }
    })

}


function updatesortbypriority() {
    let tasklist = $("#cards")
    fetchdatasortpriority(function (alldata) {
        tasklist.empty()
        for (task of alldata) {
            tasklist.append(createcard(task))
            if (task.status == 1) {
                $("#bag" + task.id).toggleClass('badge badge-pill badge-danger badge badge-pill badge-success')
                //$("#line"+task.id).toggleClass('linecolor bgcolor')
            }
            let notelist = $('#notelist' + task.id)
            notelist.empty()
            var l = task.notes.length
            for (var i = 0; i < l; i++) {
                notelist.append(createnotes(task.notes[i].note))
            }
        }
    })

}



function updatesortbystatus() {
    let tasklist = $("#cards")
    fetchdatasortstatus(function (alldata) {
        tasklist.empty()
        for (task of alldata) {
            tasklist.append(createcard(task))
            if (task.status == 1) {
                $("#bag" + task.id).toggleClass('badge badge-pill badge-danger badge badge-pill badge-success')
                //$("#line"+task.id).toggleClass('linecolor bgcolor')
            }
            let notelist = $('#notelist' + task.id)
            notelist.empty()
            var l = task.notes.length
            for (var i = 0; i < l; i++) {
                notelist.append(createnotes(task.notes[i].note))
            }
        }
    })

}