//luu data tam vao day khi chua co db
var subject = [
    "Kiến trúc máy tính",
    "Mạng không dây",
    "Những nguyên lý cơ bản của chủ nghĩa Mác - Lênin"
];

var sjCode = [
    "INT2205",
    "ELT3303",
    "POL1001"
];

var sjDiscription = [
    "Những hiểu biết cơ bản về phần cứng và hệ thống máy tính hiện đại.",
    "Cơ bản về phương thức truyền thông số qua các hệ thống viễn thông như LAN, GSM, WIFI,...",
    "Triết học là cơ sở của vạn vật"
];

var sjTimeDiscription = [
    [
        //mon 1
        [
            "Kỳ 1 - 2018",
            "Bài kiểm tra lấy điểm giữa kỳ 1 năm 2018<br>Đã chuẩn hóa."
        ],
        [
            "Kỳ 2 - 2017",
            "Bài kiểm tra đầu ra kỳ 2 năm 2017."
        ],
        [
            "Kỳ 1 - 2018",
            "Kỳ đầu tiên thử nghiệm"
        ]
    ],
    [
        //mon 2
        [
            "Kỳ 2 - 2018",
            "Bài kiểm tra lấy điểm cải thiện cho kỳ 1 năm 2018"
        ],
        [
            "Kỳ 1 - 2018",
            "Bài thi đầu vào năm 2017."
        ]
    ],
    [
        //mon 3
        [
            "Kỳ 2 - 2017",
            "Thí sinh lấy văn bản tại <a href=\"http://dangcongsan.vn/tu-lieu-van-kien/tu-lieu-ve-dang/lich-su-dang/books-110620153463956/index-4106201534538562.html\">Lịch sử đảng 01</a> để làm bài."
        ],
        [
            "Kỳ 2 - 2017",
            "Bài thi kết thúc chương 9."
        ],
        [
            "Kỳ 1 - 2018",
            "Thí sinh được dùng tài liêu, nhưng phải chú thích rõ ràng."
        ]
    ]
    
];

var sjAccept = [
    [
        "Đại học Công Nghệ",
        "Đại học Khoa Học Tự Nhiên",
        "Đại học Bách Khoa"
    ],
    [
        "Đại học FPT",
        "Đại học Bưu chính Viễn thông",
        "Học viện mật mã"
    ],
    [
        "Đại học Sư phạm",
        "Học viện Báo chí",
        "Học viện Hành chính",
        "Đại học Khoa học Xã hội và Nhân văn"
    ]
];

var sjProvider = [
    //ten noi cc
    //link don vi
    //email lien lac
    //shortname
    [
        "Khoa Công nghệ thông tin - UET-VNU",
        "http://fit.uet.vnu.edu.vn",
        "clotech@vnu.edu.vn",
        "Khoa CNTT"
    ],
    [
        "Khoa Điện từ viễn thông - UET-VNU",
        "http://fet.uet.vnu.edu.vn/",
        "dtvt.vp@vnu.edu.vn",
        "Khoa ĐTVT"
        
    ],
    [
        "Khoa Triết học - ĐHSPHN",
        "http://triethoc.hnue.edu.vn/",
        "k.triethoc@hnue.edu.vn",
        "Khoa Triết"
    ]
];
// ghi du ca 4 array o tren


// khong dung dc nodejs tren client side

var path = window.location.pathname;
var page = path.split("/").pop();

//console.log(page);

window.onload = function () {
    //console.log("here");
    switch (page) {
    case "courses.html":
    //bat dau render list of subject
        var numOfCourse = subject.length, i, j, k, courseList = " ", listSchool, listtime, listdiscription, provi, link;

        for (i = 1; i <= numOfCourse; i += 1) {
            courseList += "<div class=\"col-lg-4 mb-4\">" +
                "<div class=\"card h-100\">" +
                "<h4 class=\"card-header\">" + subject[i - 1] + "</h4>" +
                "<div class=\"card-body\">" +
                    "<p class=\"card-text\">" + sjDiscription[i - 1] + "</p>" +
                "</div>" +
                "<div class=\"card-footer\">" +
                    "<a href=\"courselist/" + i + "/coursePage.html\" class=\"btn btn-primary\">View Course</a>" +
                "</div>" +
                "</div>" +
                "</div>";
        }
        document.getElementById("list-of-subject").innerHTML = courseList;
        break;
    case "coursePage.html":
        i = path.split("/")[6];
        //console.log(i);
        document.getElementsByTagName("title")[0].innerHTML = sjCode[i - 1];
        document.getElementById("subject").innerHTML = subject[i - 1];
        document.getElementById("sjC").innerHTML = "Mã học phần: " + sjCode[i - 1];
        
        j = 0;
        k = 1;
        
        
        
        
        //k tuong duong voi j nhung o dang so
        document.getElementById("ava").innerHTML = '<img src="../../../images/courselist/' + i + '/ava.jpg" alt="" class="img-rounded img-responsive" width="145">';
        
           // console.log(provi);
        document.getElementById("provider").innerHTML = 'Phát hành bởi: ' + sjProvider[i - 1][0] + '<br>' + sjProvider[i - 1][2];
        link = document.getElementById("link");
        link.href = sjProvider[i - 1][1];
        link.innerHTML = sjProvider[i - 1][3];
        listSchool  = " ";
        listtime = " ";
        listdiscription = " ";
        //console.log(sjAccept[i - 1][j]);
        while (sjAccept[i - 1][j] !== undefined) {
            //console.log(sjAccept[i - 1][j]);
            listSchool += "<li>" + sjAccept[i - 1][j] + "</li>";
            //console.log(listSchool);
            j += 1;
            k += 1;
        }
        j = 0;
        k = 1;
        while (sjTimeDiscription[i - 1][j] !== undefined) {
            if (j === 0) {
                listtime += '<li class="nav-item"><a href="" class="active nav-link" data-toggle="pill" data-target="#' + k + '">' + sjTimeDiscription[i - 1][j][0] + '</a></li>';
                listdiscription += '<div class="tab-pane fade show active" id="' + k + '" role="tabpanel" ><p class="">' + sjTimeDiscription[i - 1][j][1] + '</p><div style="text-align: right;"><a class="btn btn-primary" href="examPage.html" target="_blank">Vào thi </a></div></div>';
            } else {
                listtime += '<li class="nav-item"><a class="nav-link" href="" data-toggle="pill" data-target="#' + k + '">' + sjTimeDiscription[i - 1][j][0] + '</a></li>';
                listdiscription += '<div class="tab-pane fade" id="' + k + '" role="tabpanel"><p class="">' + sjTimeDiscription[i - 1][j][1] + '</p><div style="text-align: right;">Bài thi đã kết thúc</div></div>';
            }
            
            j += 1;
            k += 1;
            //console.log(listtime);
        }
        
        document.getElementById("schoolId").innerHTML = listSchool;
        
        //while (sjTimeDiscription[i - 1][j]) {}
        document.getElementById("listTime").innerHTML = listtime;
        document.getElementById("listDiscription").innerHTML = listdiscription;
        break;
    case "examPage.html":
        
        break;
    }
};



        