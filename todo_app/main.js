const todo_content = document.getElementById("todo-list")
const add_event_button = document.getElementById("submit-form")
                                 .addEventListener("submit", () => { add_event() })

let id_num = 0


function add_event() {
    id_num += 1
    const new_input_value = document.getElementById("add-event-text").value

    todo_content.insertAdjacentHTML(
        "afterbegin",
        `<li id='${id_num}'> ${new_input_value} <input type="button" id="${id_num}" value="Delete Event" onclick="delete_event('${id_num}')"></li>`
    )
}


function delete_event(element_id) {
    document.getElementById(element_id).remove()
}
