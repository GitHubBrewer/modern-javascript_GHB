// 1. starting with grabbing the form by grabbing the add class 
const addForm = document.querySelector('.add');
// 4. now we need to grab the ul to inject our template string into
const list = document.querySelector('.todos');

// for the search we need to grab the search class and the input field
const search = document.querySelector('.search input');

// 3. now we create a function to do something with the value we grab in the addForm
// we do it outside the eventlistener to allow us to reuse it for other future functionality
const generateTemplate = todo => {

    // we could inject the element using document.createElement https://www.w3schools.com/jsref/met_document_createelement.asp
    // but with more complex elements it can be easier to use a template string
    // here I just grab an existing li and edit the span to insert our new todo
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    // now we can append it to the end of the ul, but this will add even if the field is blank
    list.innerHTML += html;
};

// 2. now we create an event listener on the submit action
// since the search is not a child of the add form, we don't have to worry about the submit action of search bubbling up to it
// we will need to address the search's default action of resetting the page later though
addForm.addEventListener('submit', e => {

    // preventing the page reset on submit
    e.preventDefault();

    // trim the value to avoid extraneous spaces
    // assigning the value of the event to be additive
    const todo = addForm.add.value.trim();

    // before we add the todo, we want to ensure it isn't blank
        // my idea was simple, but there was a simpler way
        // if (todo != '')
    if (todo.length){
        // using the function I created above to insert the new item
        generateTemplate(todo);    
        // but we also want to clear the form after the submit
        addForm.reset();
    }
});

// delete todos
// we don't want to add an eventListener to the trash icon since we would need to add it to each icon
// we would also need a way to add it to any new items added to the list
// instead we can just attach it to the list and rely on event bubbling to triger it
list.addEventListener('click', e => {
    // we need to filter for only clicks on the trash icon so we target the delete class
    // an alternate condition is (e.target.classList.contains('delete'))
    if (e.target.className.includes('delete')){
    e.target.parentElement.remove();
    }
});

// filter todos
// we'll build the function outside the eventListener so we can use it for other needs down the road
const filterTodos = (term) => {
    // if we grab the list.children we'll have an HTML collection and we can't use most methods on an HTML collection
    // to fix this we'll convert the HTML collection to an array
    Array.from(list.children)
        // now we can chain some array methods on the array we created
        // first we will filter to find the items that don't contain the search term
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        // then we will add a class called filtered and then use css to set display to none
        .forEach((todo) => todo.classList.add('filtered'));
    // the above works fine until we start to backspace and need to remove the filtered class as needed
    // we copy the code above and and flip the filter and remove the class
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};


// keyup event
// we'll attach the keyup event listener to the search input
search.addEventListener('keyup', () => {
    // we start by grabbing the input field with search
    // then specify the value attribute, then trim any whitespace around it, then convert to lower case so our search is not case-sensitive
    const term = search.value.trim().toLowerCase();
    // we'll call this function that we created above
    filterTodos(term);
});