let counter = 0;
const updateCount = () => {
    counter = document.getElementById("list").getElementsByTagName("li").length;
    document.getElementById("count").innerHTML = counter;
}

const addTask = () => {
    let item = document.getElementById("task").value;       //This line saves the value from the box into a variable
    if (item) {                                             //This ensures the value is not empty 
        let li = document.createElement("li");              //Create a new list item
        li.innerHTML = item;                                //Assign the value to the list item
        document.getElementById("list").appendChild(li)     //Appending the variable li to our unordered list
        document.getElementById("task").value = "";         //Setting the input box back to empty
        updateCount();                                      //Run our update function to get the correct number of tasks
        li.addEventListener("click", () => {
            li.parentNode.removeChild(li);
            updateCount();
        })
    }

}

document.getElementById('submitted').addEventListener("click", addTask);


updateCount();