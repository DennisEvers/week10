//This is the constants created to make it easier to pull the entered data from the text boxes and drop down menus that i created

const nameB = document.getElementById("nameBox")
const classS = document.getElementById("classSelect")
const role = document.getElementById("roleSelect")
const style = document.getElementById("playStyle")
const tableBody = document.getElementById("teamTable")

// this is the function created to place the row on the table utilizing the data put in by the user.
function addToTable(event) {
    event.preventDefault()
// this is to make sure that everytime you add a new character to the table the page does not refresh
    const newRow = document.createElement("tr")
    // this creates the new row const that will be pushed into the table when it is created
    newRow.innerHTML =
       ` <td>${nameB.value}</td>
         <td>${classS.value}</td>
         <td>${role.value}</td>
         <td>${style.value}</td>
         <td><button class="btn btn-danger">Remove Player</button>
          `
// this is the innerHTML that is placed inside the row using template literals in order to put in 5 table data entries 
// 4 of them using the user inputed data pulled by the template literals and then creating a button that will 
//delete the row that was created and only the row that was created for that particular character
    newRow.querySelector("button").addEventListener("click", function() {
        newRow.remove()
    })
//this actually places the newrow into the HTML pushing it in.
    tableBody.appendChild(newRow)

    // this just resets the two text boxes back to being blank to be more user friendly
    nameBox.value = " "
    playStyle.value = " "


    
    

}