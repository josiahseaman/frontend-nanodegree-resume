/*
This is empty on purpose! Your code to build the resume will go here.
 */

function insert(template, data){
    return template.replace('%data%', data)
}

//Further requirements: https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550/e-1935058561/m-2948908664
var bio = {
    "name": "Josiah Seaman",
    "role": "Full Stack Developer",
    "age": 30,
    "skills": ["Python", "Java", "C++", "CSS", "Javascript", "Algorithms", "Data Visualization", "GMing"],
    "biopic": "https://dl.dropboxusercontent.com/u/31345898/josiah_seaman_profile_head.jpg",
    "contacts": {
        "mobile": "970-381-8860",
        "email": "josiah.seaman@gmail.com",
        "github": "josiahseaman",
        "location": "Colorado Springs, CO",
    }
};
bio.display = function() {
    $('#header').prepend(insert(HTMLheaderName, bio.name));
    $('#header').prepend(insert(HTMLbioPic, bio.biopic));

    $('#name').append(insert(HTMLheaderRole, bio.role));

    var topContacts = $('#topContacts');
    topContacts.append(insert(HTMLemail, bio.contacts.email));
    topContacts.append(insert(HTMLmobile, bio.contacts.mobile));
    topContacts.append(insert(HTMLgithub, bio.contacts.github));
    topContacts.append(insert(HTMLlocation, bio.contacts.location));


    if(bio.hasOwnProperty("skills") && bio.skills.length){
        $('#header').append(HTMLskillsStart);
        for(var i in bio.skills) {
            $('#skills').append(insert(HTMLskills, bio.skills[i]));
        }
    }
};
bio.display();

var work = {"jobs":[
    {
        "name": "Newline",
        "position": "Lead Developer",
        "location": "Colorado Springs, CO",
        "dates": "2013 - present",
        "description": "Software consulting company for diverse clients in Web Applications"
    },
    {
        "name": "Shrinking World Solutions",
        "position": "Senior Developer",
        "location": "Windsor, Colorado",
        "dates": "2014",
        "description": "Critical Oil field pipe scanning quality assurance using multivariate analysis"
    },
    {
        "name": "Digital Globe",
        "position": "Java Quality Assurance",
        "location": "Longmont, CO",
        "dates": "2012",
        "description": "Geospatial Imaging using image processing, stitching, normalization"
    }
]};
work.display = function () {
    for (i in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var $last_entry = $('.work-entry:last');
        $last_entry.append(insert(HTMLworkEmployer, work.jobs[i].name));
        $last_entry.append(insert(HTMLworkTitle, work.jobs[i].position));
        $last_entry.append(insert(HTMLworkDates, work.jobs[i].dates));
        $last_entry.append(insert(HTMLworkLocation, work.jobs[i].location));
        $last_entry.append(insert(HTMLworkDescription, work.jobs[i].description));

    }
};
work.display();

var projects = {"projects":[
    {
        "title": "DNASkittle.com",
        "dates": "2013-2014",
        "description": "Genome Visualization and exploration web application"
    },
    {
        "title": "Pipe Scan",
        "dates": "2015",
        "description": "Data analysis for Hall Effect oil pipe scanners"
    },
    {
        "title": "Animal Disease Spread Model",
        "dates": "2014-2015",
        "description": "USDA Simulation to plan for livestock disease outbreak prevention"
    }
]};
projects.display = function(){
    for (i in projects.projects) {
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(insert(HTMLprojectTitle, projects.projects[i].title));
        $('.project-entry:last').append(insert(HTMLprojectDates, projects.projects[i].dates));
        $('.project-entry:last').append(insert(HTMLprojectDescription, projects.projects[i].description));
        //$('.project-entry:last').append(insert(HTMLprojectImage, projects.projects[i].));
    }
};
projects.display();

var education = {
    "schools": [
        {
            "name": "University of Colorado Anscutz Medical Campus",
            "degree": "PhD Program",
            "major": "Computational Biology",
            "location": "Denver, CO"
        },
        {
            "name": "Colorado State University",
            "degree": "Bachelors of Science",
            "major": "Computer Science",
            "location": "Fort Collins, CO"
        }
    ],
    "onlineCourses": [
        {
            "school": "Udacity",
            "title": "Front End Web Developer Nano-degree"
        }
    ]
};
education.display = function() {
    for (i in education.schools) {
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(insert(HTMLschoolName, education.schools[i].name));
        $('.education-entry:last').append(insert(HTMLschoolDegree, education.schools[i].degree));
        $('.education-entry:last').append(insert(HTMLschoolLocation, education.schools[i].location));
        $('.education-entry:last').append(insert(HTMLschoolMajor, education.schools[i].major));
    }
};
education.display()

$('#map-div').append(googleMap)