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
    "city": "Colorado Springs",
    "age": 30,
    "skills": ["CS", "Javascript", "Python", "GMing"],
    "contacts": {
        "mobile": "970-381-8860",
        "email": "josiah.seaman@gmail.com",
        "github": "josiahseaman"
    }
};
if(bio.hasOwnProperty("skills") && bio.skills.length){
    $('#header').append(HTMLskillsStart);
    for(var i in bio.skills) {
        $('#skills').append(insert(HTMLskills, bio.skills[i]));
    }
}

//$('#header').append(insert(HTMLheaderName, bio.name));
//$('#header').append(insert(HTMLheaderRole, bio.role));


var work = [
    {
        "name": "Newline",
        "position": "Lead Developer",
        "city": "Colorado Springs",
        "dates": "2013 - present",
        "description": "Software consulting company for diverse clients in Web Applications"
    },
    {
        "name": "Shrinking World Solutions",
        "position": "Senior Developer",
        "city": "Windsor, CO",
        "dates": "2014",
        "description": "Critical Oil field pipe scanning quality assurance using multivariate analysis"
    },
    {
        "name": "Digital Globe",
        "position": "Java Quality Assurance",
        "city": "Longmont, CO",
        "dates": "2012",
        "description": "Geospatial Imaging using image processing, stitching, normalization"
    }
];
function display_work() {
    if (work.length) {
        $('#workExperience').append(HTMLworkStart)
        for (i in work) {
            $('.work-entry:last').append(insert(HTMLworkEmployer, work[i].name));
            $('.work-entry:last').append(insert(HTMLworkTitle, work[i].position));
            $('.work-entry:last').append(insert(HTMLworkDates, work[i].dates));
            $('.work-entry:last').append(insert(HTMLworkLocation, work[i].city));
            $('.work-entry:last').append(insert(HTMLworkDescription, work[i].description));

        }
    }
}
display_work();

var projects = [
    {
        "title": "DNASkittle.com",
        "dates": "2013-2014",
        "description": "Genome Visualization and exploration web application",
    },
    {
        "title": "Pipe Scan",
        "dates": "2015",
        "description": "Data analysis for Hall Effect oil pipe scanners",
    },
    {
        "title": "Animal Disease Spread Model",
        "dates": "2014-2015",
        "description": "USDA Simulation to plan for livestock disease outbreak prevention",
    }
];

var education = {
    "schools": [
        {
            "name": "University of Colorado Anscutz Medical Campus",
            "level": "PhD Program",
            "degree": "Computational Biology",
            "city": "Denver, CO"
        },
        {
            "name": "Colorado State University",
            "level": "Bachelors of Science",
            "degree": "Computer Science",
            "city": "Fort Collins, CO"
        }
    ],
    "Online Courses": [
        {
            "name": "Udacity",
            "degree": "Front End Web Developer Nano-degree"
        }
    ]
};
//$('#education').append(HTMLschoolStart);
//$('#education').append(insert(HTMLschoolName, education.name));