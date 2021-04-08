const deleteBtn = document.querySelectorAll(".del")
const todoItem = document.querySelectorAll(".todoItem span")
const todoComplete = document.querySelectorAll(".todoItem span.completed")

Array.from(deleteBtn).forEach((elem) => {
    elem.addEventListener("click", deleteToDo)
})

Array.from(todoItem).forEach((elem) => {
    elem.addEventListener("click", markComplete)
})

Array.from(todoComplete).forEach((elem) => {
    elem.addEventListener("click", undo)
})


async function deleteToDo () {
    const todoText = this.parentNode.childNodes[1].innerText
    try {
        const response = await fetch("deleteTodo", {
            method: "delete",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "rainbowUnicorn": todoText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err) {
        console.log(err)
    }
}

async function markComplete () {
    const todoText = this.parentNode.childNodes[1].innerText
    try {
        const response = await fetch("markComplete", {
            method: "put",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "rainbowUnicorn": todoText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err) {
        console.log(err)
    }
}

async function undo () {
    const todoText = this.parentNode.childNodes[1].innerText
    try {
        const response = await fetch("undo", {
            method: "put",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "rainbowUnicorn": todoText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err) {
        console.log(err)
    }
}