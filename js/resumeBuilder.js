/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    "name": "Josiah Seaman",
    "role": "Developer",
    "city": "Colorado Springs",
    "age": 32,
    "skills": ["CS", "Javascript", "Python", "GMing"]
};

$('#header').append(HTMLheaderName.replace('%data%', bio.name));
$('#header').append(HTMLheaderRole.replace('%data%', bio.role));
$('#header').append(HTMLskillsStart);
for(var i in bio.skills){
    $('#header').append(HTMLskills.replace('%data%', bio.skills[i]));
}

var work = {
    "name": "Newline",
    "position": "Lead Developer",
    "city": "Colorado Springs"
};
$('#workExperience').append(work["position"]);

var education = {
    "name": "University of Colorado Anscutz Medical Campus",
    "level": "PhD Program",
    "degree": "Computational Biology"
};
$('#education').append(HTMLschoolStart);
$('#education').append(HTMLschoolName.replace('%data%', education.name));