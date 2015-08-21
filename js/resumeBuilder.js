/*
This is empty on purpose! Your code to build the resume will go here.
 */

function personalize(template, data){
    return template.replace(/%data%/g, data)
}

//Further requirements: https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550/e-1935058561/m-2948908664
var bio = {
    "name": "Josiah Seaman",
    "role": "Full Stack Developer",
    "age": 30,
    "skills": ["Software Development", "Project Management", "Python, Java, C++, CSS, Javascript", "Algorithms", "Data Visualization", "GMing"],
    "biopic": "images/josiah_seaman_profile_head.jpg",
    "contacts": {
        "mobile": "970-381-8860",
        "email": "josiah.seaman@gmail.com",
        "github": "josiahseaman",
        "location": "Colorado Springs, CO"
    }
};
bio.display = function() {
    $('#header').prepend(personalize(HTMLheaderName, bio.name));
    $('#header').prepend(personalize(HTMLbioPic, bio.biopic));

    $('#name').append(personalize(HTMLheaderRole, bio.role));

    var topContacts = $('#topContacts');
    topContacts.append(personalize(HTMLemail, bio.contacts.email));
    topContacts.append(personalize(HTMLmobile, bio.contacts.mobile));
    topContacts.append(personalize(HTMLgithub, bio.contacts.github));
    topContacts.append(personalize(HTMLlocation, bio.contacts.location));
    var content = $('#topContacts').children().clone();
    $('#footerContacts').append(content);


    if(bio.hasOwnProperty("skills") && bio.skills.length){
        $('#header').append(HTMLskillsStart);
        for(var i in bio.skills) {
            $('#skills').append(personalize(HTMLskills, bio.skills[i]));
        }
    }
};

var work = {"jobs":[
    {
        "employer": "Newline",
        "title": "Lead Developer",
        "location": "Colorado Springs, CO",
        "dates": "2013 - present",
        "description": "Software consulting company for diverse clients in Web Applications"
    },
    {
        "employer": "Shrinking World Solutions",
        "title": "Senior Developer",
        "location": "Windsor, Colorado",
        "dates": "2014",
        "description": "Critical Oil field pipe scanning quality assurance using multivariate analysis"
    },
    {
        "employer": "Digital Globe",
        "title": "Java Quality Assurance",
        "location": "Longmont, CO",
        "dates": "2012",
        "description": "Geospatial Imaging using image processing, stitching, normalization"
    }
]};
work.display = function () {
    for (var i in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var $last_entry = $('.work-entry:last');
        $last_entry.append(personalize(HTMLworkEmployer, work.jobs[i].employer));
        $last_entry.append(personalize(HTMLworkTitle, work.jobs[i].title));
        $last_entry.append(personalize(HTMLworkDates, work.jobs[i].dates));
        $last_entry.append(personalize(HTMLworkLocation, work.jobs[i].location));
        $last_entry.append(personalize(HTMLworkDescription, work.jobs[i].description));

    }
};

var projects = {"projects":[
    {
        "title": "DNASkittle.com",
        "dates": "2013-2014",
        "description": "Genome Visualization and exploration web application",
        "images": ['images/DNASkittle_small.png']
    },
    {
        "title": "Pipe Scan",
        "dates": "2015",
        "description": "Data analysis for Hall Effect oil pipe scanners",
        "images": []
    },
    {
        "title": "Autoponics",
        "dates": "2013-2014",
        "description": "Circuit, case, and software design for Everyday Automation Aquaponics system",
        "images": ['images/Autoponics_hardware_small.png', 'images/autoponics_circuit_small.png', 'images/food_in_a_box_small.jpg']
    },
    {
        "title": "Animal Disease Spread Model",
        "dates": "2013-2015",
        "description": "USDA Simulation to plan for livestock disease outbreak prevention",
        "images": ['images/adsm.jpg', 'images/adsm_pop_small.png']
    }
]};
projects.display = function(){
    for (var i in projects.projects) {
        $('#projects').append(HTMLprojectStart);
        var lastEntry = $('.project-entry:last');
        lastEntry.append(personalize(HTMLprojectTitle, projects.projects[i].title));
        lastEntry.append(personalize(HTMLprojectDates, projects.projects[i].dates));
        lastEntry.append(personalize(HTMLprojectDescription, projects.projects[i].description));
        for(var x in projects.projects[i].images){
            lastEntry.append(personalize(HTMLprojectImage, projects.projects[i].images[x]));
        }
    }
};

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
    for (var i in education.schools) {
        $('#education').append(HTMLschoolStart);
        var lastEntry = $('.education-entry:last');
        lastEntry.append(personalize(HTMLschoolName, education.schools[i].name));
        lastEntry.append(personalize(HTMLschoolDegree, education.schools[i].degree));
        lastEntry.append(personalize(HTMLschoolLocation, education.schools[i].location));
        lastEntry.append(personalize(HTMLschoolMajor, education.schools[i].major));
    }
};

function build(){

    bio.display();
    work.display();
    projects.display();
    education.display();

    $('#map-div').append(googleMap)
}
build();
