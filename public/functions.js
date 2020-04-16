function fetchdata(done) {
    $.get('/todos', function (data) {
        done(data)
    })
}

function fetchdatasortdesc(done) {
    $.get('/todos/sort/datedesc', function (data) {
        done(data)
    })
}
function fetchdatasortasc(done) {
    $.get('/todos/sort/dateasc', function (data) {
        done(data)
    })
}
function fetchdatasortpriority(done) {
    $.get('/todos/sort/priority', function (data) {
        done(data)
    })
}
function fetchdatasortstatus(done) {
    $.get('/todos/sort/status', function (data) {
        done(data)
    })
}
function fetchdata(done) {
    $.get('/todos', function (data) {
        done(data)
    })
}




function createcard(prod) {
    return $(`
        <div class="card shadow p-1 mb-1 bg-white" id="taskcard${prod.id}"  data-toggle="collapse" href='#collapse${prod.id}'>
        <div class="card-body" >
                <img src="https://img.icons8.com/ios/24/000000/circled.png" />
                <span style="margin-left: 15px;font-size: 20px;">${prod.title}</span>
                <p id="firsttask">${prod.description}</p>
                <div ><hr></div>

                <span>
                   
                    <span class="badge badge-pill badge-danger" id="bag${prod.id}">${getstatus(prod)}</span>
                    <span class="alertwar">
                        Due Data : <b>${setdate(prod)}</b>
                    </span>
                    <span class="alertinfo">
                        Priority :<b>${getpriority(prod)}</b>
                    </span>


                    <span id='editbtnid${prod.id}' onClick="reply_clck(this.id)">
                    <span id="editbtnid" class="editbtn" onclick="document.getElementById('id02').style.display='block'">
                        <i class='fas fa-edit pointer' style='font-size:17px;color:black'>
                            <span style="font-weight: 90;font-family: Arial, Helvetica, sans-serif;font-size: 12px;">
                                Edit</span></i>
                    </span>
                    </span>

                </span>

                
            </a>
        </div>
        <div id='collapse${prod.id}' onClick="reply_click(this.id)" class="collapse" data-parent="#accordion">

        <hr>
            
            <div class="card-body">
                <button class="mdc-button mdc-button--raised" style="background-color:rgb(255, 179, 15);"
                onclick="document.getElementById('id03').style.display='block'">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">Note</span>
                    <i class="material-icons mdc-button__icon" aria-hidden="true">add</i>
                   
                  </button>
            </div>
            <div id='notelist${prod.id}'>
            
            </div>

            
        </<hr>
    </div>
   
        `)
}

function getTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // even 32 is acceptable
    x = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`;
    return x
}

function setdate(datta) {
    if (datta.duedate == "") {
        return getTomorrow()
    }
    else {
        return datta.duedate
    }
}
function createnotes(dta) {
    return $(`
    <p id="notes">${dta}</p>
    `)
}

function getstatus(prod) {
    return ((prod.status == 0) ? 'Incomplete' : 'Complete')
}

function getpriority(prod) {
    if (prod.priority == 1) {
        return "High"
    }
    else if (prod.priority == 2) {
        return "Medium"
    }
    else {
        return "Low"
    }
}




function createnewcard(title, desc, date, priority, done) {
    $.post('/todos', {
        title: title,
        description: desc,
        duedate: date,
        priority: priority
    }, function (data) {
        done(data)
    })
}






function createnewnote(note, ID, done) {
    $.post('/todos/' + ID + '/notes/', {
        note: note,
        todoId: parseInt(ID)
    }, function (data) {
        done(data)
    })
}



function updatetask(date, priority, status, id, done) {
    $.post('/todos/' + id, {
        duedate: date,
        priority: priority,
        status: status
    }, function (data) {
        done(data)
    })
}

//<p id="notes">$().each${prod.notes}</p>
//<p id="notes">${prod.notes}</p>