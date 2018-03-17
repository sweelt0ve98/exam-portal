//luu data tam vao day khi chua co db
var subject = [
    "Sj1",
    "Sj2",
    "Sj3"
];

var sjCode = [
    "INT1234",
    "ELT4321",
    "POL0987"
];

var sjDiscription = [
    "Những hiểu biết cơ bản về phần cứng và hệ thống máy tính hiện đại.",
    "Cơ bản về phương thức hoạt động, giao tiêp liên tiến trình và quản lý tài nguyên.",
    "Triết học là cơ sở của vạn vật"
]

var sjAccept = [
    [
        "trg1",
        "trg2",
        "trg3"
    ],
    [
        "tr1",
        "tr2",
        "tr3"
    ],
    [
        "t1",
        "t2",
        "t3"
    ],
    [
        "trg1",
        "trg2",
        "trg3",
        "trg4"
    ]
]

var sjProvider = [
    "Khoa CNTT",
    "Khoa ĐTVT",
    "Khoa Triết"
]
// ghi du ca 4 array o tren


// khong dung dc nodejs tren client side

var path = window.location.pathname;
var page = path.split("/").pop();



window.onload = function(){
    switch(page){
        case "courses.html":
        //bat dau render list of subject
            var numOfCourse = subject.length;
            var index = 1;
            var courseList = " ";
            console.log("here");
            for(;i<=numOfCourse;i++){
                courseList += 
                "<div class=\"col-lg-4 mb-4\">"+
                "<div class=\"card h-100\">"+
                    "<h4 class=\"card-header\">"+subject[i-1]+"</h4>"+
                    "<div class=\"card-body\">"+
                        "<p class=\"card-text\">"+sjDiscription[i-1]+"</p>"+
                    "</div>"+
                    "<div class=\"card-footer\">"+
                        "<a href=\"courselist/"+i+"/coursePage.html\" class=\"btn btn-primary\">View Course</a>"+
                    "</div>"+
                "</div>"+
            "</div>"
            ;
            }
            document.getElementById("list-of-subject").innerHTML = s;
            break;
        case "coursePage.html":

            break;
        case "examPage.html":

            break;
    }
}



        