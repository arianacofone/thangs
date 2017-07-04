console.log('index.js is connected!')

// Javascript Date Selection
var d = new Date();
var month = d.getMonth();
var day = d.getDate();
var year = d.getFullYear();
var output = `${month}/${day}/${year}`;

var url = "https://thangs-8f0d8.firebaseio.com/tasks.json";
let list = $("#list").sortable();

function getRequest() {
  $.get(url, function(data, status){
      let array = $.map(data, function(value, index) {
        return [value];
      });

      $.each(array, function(i) {

        var div = $('<div>');
        div.attr('class', 'todo');
        div.appendTo(list);

        var name = array[i].name;
        var task = array[i].task;
        var points = array[i].points;

        var input = $('<input />', { type: 'checkbox'});
        input.appendTo(div);

        var taskLabel = $('<label/>')
        taskLabel.text(`Task: ${task}`)
          .appendTo(div);

        var pointLabel = $('<label/>')
        pointLabel.text(`Points:${points}`)
          .appendTo(div);


        if(name === 'Joey') {
          taskLabel.css('color', 'blue');
        } else if(name === 'Ariana') {
          taskLabel.css('color', 'red');
        } else {
          taskLabel.css('color', 'green');
        }

      });
  });
}

getRequest();

$("#form").submit(function(event){
  event.preventDefault();

  let task = $("#task")[0].value;
  let points = $("#points")[0].value;
  let teamMember = $("#teamMember").find(":selected").text();

  let info = {
    name: teamMember,
    date: output,
    task: task,
    points: points,
    completed: false,
    archived: false
  }

  $.ajax({
    accept: "application/json",
     method: 'POST',
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     data: JSON.stringify(info),
     url: url
  })
  .then(() => {

    var name = info.name;
    var task = info.task;
    var price = info.points;

    var div = $('<div>');
    div.attr('class', 'todo');
    div.appendTo(list);

    var input = $('<input />', { type: 'checkbox'});
    input.appendTo(div);

    var taskLabel = $('<label/>')
    taskLabel.text(`Task: ${task}`)
      .appendTo(div);

    var pointLabel = $('<label/>')
    pointLabel.text(`Points:${points}`)
      .appendTo(div);


    if(name === 'Joey') {
      taskLabel.css('color', 'blue');
    } else if(name === 'Ariana') {
      taskLabel.css('color', 'red');
    } else {
      taskLabel.css('color', 'green');
    }

  });

});

$("#person1").click(function() {
  $.get(url, function(data, status){
      let array = $.map(data, function(value, index) {
        return [value];
      });

      list.text(``);

      $.each(array, function(i) {
        var name = array[i].name;
        var task = array[i].task;
        var points = array[i].points;

        if(array[i].name === 'Ariana') {

          var div = $('<div>');
          div.attr('class', 'todo');
          div.appendTo(list);

          var input = $('<input />', { type: 'checkbox'});
          input.appendTo(div);

          var taskLabel = $('<label/>')
          taskLabel.text(`Task: ${task}`)
            taskLabel.css('color', 'red')
            .appendTo(div);

          var pointLabel = $('<label/>')
          pointLabel.text(`Points:${points}`)
            .appendTo(div);
        } else {
          console.log('no dice');
        };
      });
    });
});

$("#person2").click(function() {
  $.get(url, function(data, status){
      let array = $.map(data, function(value, index) {
        return [value];
      });

      list.text(``);

      $.each(array, function(i) {
        var name = array[i].name;
        var task = array[i].task;
        var points = array[i].points;

        if(array[i].name === 'Joey') {

          var div = $('<div>');
          div.attr('class', 'todo');
          div.appendTo(list);

          var input = $('<input />', { type: 'checkbox'});
          input.appendTo(div);

          var taskLabel = $('<label/>')
          taskLabel.text(`Task: ${task}`)
            taskLabel.css('color', 'blue')
            .appendTo(div);

          var pointLabel = $('<label/>')
          pointLabel.text(`Points:${points}`)
            .appendTo(div);
        } else {
          console.log('no dice');
        };
      });
    });
});

$("#melon").click(function() {
  list.text(``);
  getRequest();
});
