let addbtn = document.querySelector(".add")
let tasks = document.querySelector(".tasks")
let taskcount = document.querySelectorAll(".task").length;
taskcounter();
document.querySelector("form input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addbtn.click();

    }
});
addbtn.onclick = function () {
    let taskvalue = document.querySelector(".createtask input").value;
    if (taskvalue) {
        tasks.innerHTML += `
    <div class="task">
                       
                        <label for="" class = "label"></label>
                        <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
    `
        document.querySelector(".task").parentNode.lastElementChild.querySelector("label").innerText = taskvalue;


        let deletebtn = document.querySelectorAll(".delete");
        console.log(deletebtn);
        deletebtn.forEach((btn) => {
            btn.onclick = function () {

                btn.parentNode.remove();
                taskcounter()
            }

        })
        taskcounter()
        document.querySelector("form").reset();
    }

}


function taskcounter(taskcount) {
    taskcount = document.querySelectorAll(".task").length;
    document.querySelector(".taskspan").innerText = taskcount
}

