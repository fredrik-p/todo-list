/**
 * My Awesomest TODO List.
 *
 */

let todos = [
	{ // 0
		description: "Have class meeting",
		completed: false,
	},
	{ // 1
		description: "Eat lunch",
		completed: false,
	},
	{ // 2
		description: "Code",
		completed: true,
	},
	{ // 3
		description: "Sleep",
		completed: true,
	},
	{ // 4
		description: "Repeat",
		completed: false,
	},
];

// sort by name
todos.sort(function (a, b) {
	var nameA = a.description.toUpperCase(); // ignore upper and lowercase
	var nameB = b.description.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) {
		return -1;
	}
	if (nameA > nameB) {
		return 1;
	}

	// names must be equal
	return 0;
});

let todosEl = document.querySelector('#todos');
let completedEl = document.querySelector('#completed');

const renderTodoList = function () {
	todosEl.innerHTML = "";
	completedEl.innerHTML = "";

	todos.forEach(function (todo) {
		let todoEl = document.createElement('li');
		let completeEl = document.createElement('li');
		todoEl.innerText = todo.description;

		// check if todo is completed, if so add class 'completed'
		if (todo.completed) {
			completeEl.innerText = todo.description;
			completeEl.classList.add('completed');
			completedEl.append(completeEl);
		} else {
			todoEl.innerText = todo.description;
			todosEl.append(todoEl);
		}

	});
};

todos.sort();
renderTodoList();

// Add click handler for updating completed status
todosEl.addEventListener('click', function (e) {
	if (e.target.tagName === "LI") {
		// update completed status for this todo item
		todos.forEach(function (todo) {
			if (todo.description === e.target.innerText) {
				if (todo.completed) {
					todo.completed = false;
				} else {
					todo.completed = true;
				}
				// shorthand of above if-statement
				// todo.completed = !todo.completed;

				// render the updated todo list to DOM
				renderTodoList();
			}
		});
	}
});

// Add click handler for updating completed status
completedEl.addEventListener('click', function (e) {
	if (e.target.tagName === "LI") {
		// update completed status for this todo item
		todos.forEach(function (todo) {
			if (todo.description === e.target.innerText) {
				if (todo.completed) {
					todo.completed = false;
				} else {
					todo.completed = true;
				}
				// shorthand of above if-statement
				// todo.completed = !todo.completed;

				// render the updated todo list to DOM
				renderTodoList();
			}
		});
	}
});

// Add click handler for creating a new TODO
let createNewTodoButton = document.querySelector("#createNewTodo");
createNewTodoButton.addEventListener('click', function () {
	let text = prompt("What do you want to add to the TODO list?", "Do Rainman Dance");

	let newTodo = {
		description: text,
		completed: false
	}

	todos.push(newTodo);

	// sort by name
	todos.sort(function (a, b) {
		var nameA = a.description.toUpperCase(); // ignore upper and lowercase
		var nameB = b.description.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}

		// names must be equal
		return 0;
	});

	// render the updated todo list to DOM
	renderTodoList();
});


