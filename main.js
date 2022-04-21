var lengthstudents = 0;
var name_of_the_students = [];
function submit(){
    var display_student_array = [];
    for (var i = 1; i<5; i++){
        var name_of_student = document.getElementById("name_of_the_student_"+i).value;
        console.log(name_of_student);
        name_of_the_students.push(name_of_student);
    }
    console.log(name_of_the_students);
    lengthstudents = name_of_the_students.length;
    console.log(lengthstudents);
    for (var j = 0; j<lengthstudents; j++){
        display_student_array.push("<h4>NAME - "+name_of_the_students[j]+"</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sort(){
    name_of_the_students.sort();
    console.log(name_of_the_students);
    var display_student_array_sorted = [];
    for (var f = 0; f<lengthstudents; f++){
        display_student_array_sorted.push("<h4>NAME - "+name_of_the_students[f]+"</h4>");
        console.log(display_student_array_sorted);
    } 
    var remove_commas_sorted = display_student_array_sorted.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas_sorted;
}
function update(){
    document.getElementById("display_name_without_commas").innerHTML = "<h4>"+name_of_the_students+"</h4>";
}