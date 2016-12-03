function addTodo(el,text) {
	html = "<div class='f2 gray tc pointer ph4'> <span class='todos'>" + text + " </span><i class='pr2 f5 em em-heavy_multiplication_x close'></i> </div>"
	el.append(html);
}

function completedTodo(el) {
	el.toggleClass('strike');
}

function deleteTodo(el) {
	el.remove();
}

$(document).ready(function() {
	var submit = $("form[name='todo-form']");

	submit.on("submit",function(e) {
		e.preventDefault();
		value = $("input[name='todo-item']");
		if(value.val() !== "") {
				addTodo($("#app"),value.val());
				value.val("");
			}
	});

	$("#app").on('click','.todos',function() {
		completedTodo($(this));
	});

	$("#app").on('click','.close',function() {
		deleteTodo($(this).parent());
	});

});
