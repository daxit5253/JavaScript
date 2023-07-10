// Step 1 Insert Data Display In Localstorage.
Display ();
document.getElementById("dbtn").addEventListener("click", function(){

    let name = document.dform.dname.value;
    let age = document.dform.age.value;
    let salary = document.dform.salary.value;
    let exp = document.dform.exp.value;
    let h_id = document.dform.hidden_id.value;
    let gender = document.dform.gender.value;
    
    let eduarray = [];
    let edu0 = document.getElementsByName("c1");
    for (let i= 0; i< edu0.length; i++) {
        if(edu0[i].checked == true){
            eduarray.push(edu0[i].value);
        }
    }
    let CandidateDetail = {};
    let canData = {
        name:name,
        age:age,
        salary:salary,
        exp:exp,
        gender:gender,
        edu:eduarray,
    }

        // Step 5 Data Push & Edit/Update.

        let info= JSON.parse(localStorage.getItem("UserInfo"));
            if(info != null){
                if(h_id != ''){
                    for(i=0;i<info.CandidateInfo.length;i++){
                        if(h_id == i){
                            info.CandidateInfo[i].name = name;
                            info.CandidateInfo[i].age = age;
                            info.CandidateInfo[i].salary = salary;
                            info.CandidateInfo[i].exp = exp;
                            info.CandidateInfo[i].gender = gender;
                            info.CandidateInfo[i].edu = eduarray;
                        }
                    }
                    localStorage.setItem("UserInfo", JSON.stringify(info));
                }else{
                    info.CandidateInfo.push(canData);
                    localStorage.setItem("UserInfo", JSON.stringify(info));
                }
            }else{
                CandidateDetail.CandidateInfo = [canData];
                localStorage.setItem("UserInfo",JSON.stringify(CandidateDetail));
            }

    document.dform.reset();
    document.dform.hidden_id.value = '';
    Display ();
});

// Step 2 Insert Data Display In Table.

function Display() {

    let cd = "<tr>";
        cd += "<th>Name</th>";
        cd += "<th>Age</th>";
        cd += "<th>Salary</th>";
        cd += "<th>Experience</th>";
        cd += "<th>Gender</th>";
        cd += "<th>Education</th>";
        cd += "<th colspan='2'>Action</th>";
        cd += "</tr>";

    let info = JSON.parse(localStorage.getItem("UserInfo"));
        if(info != null){
            for(i=0; i<info.CandidateInfo.length; i++){
                cd += "<tr>"
                cd += "<td>"+info.CandidateInfo[i].name+"</td>"
                cd += "<td>"+info.CandidateInfo[i].age+"</td>"
                cd += "<td>"+info.CandidateInfo[i].salary+"</td>"
                cd += "<td>"+info.CandidateInfo[i].exp+"</td>"
                cd += "<td>"+info.CandidateInfo[i].gender+"</td>"
                cd += "<td>"+info.CandidateInfo[i].edu+"</td>"
                cd += "<td><input type='button' id='edit' onclick='editData("+i+")' value='Edit'></td>"
                cd += "<td><input type='button' id='delData' onclick='delData("+i+")' value='Delet'></td>"
                cd += "</td>"
            }
        document.getElementById('TableData').innerHTML = cd ;
        }
}

// Step 3 Delet Data.

function delData(id){
    let info = JSON.parse(localStorage.getItem("UserInfo"));
        if(info != null){
            console.log(info);
            info.CandidateInfo.splice(id,1);
            localStorage.setItem('UserInfo',JSON.stringify(info));
            Display();
        }
}

// Step 4 Edit Data.

function editData(id){
    let info = JSON.parse(localStorage.getItem("UserInfo"));
        if(info != null){
            for(i=0; i<info.CandidateInfo.length; i++){
                if(id == i){
                    document.dform.dname.value = info.CandidateInfo[i].name;
                    document.dform.age.value = info.CandidateInfo[i].age;
                    document.dform.salary.value = info.CandidateInfo[i].salary;
                    document.dform.exp.value = info.CandidateInfo[i].exp;
                    document.dform.gender.value = info.CandidateInfo[i].gender;

                    let abc = info.CandidateInfo[i].edu;
                    let edu1 = document.getElementsByName("c1");
                        for(let j=0; j<edu1.length; j++){
                            if(abc.includes(edu1[j].value)){
                                edu1[j].checked= true;
                            }
                        }
                    document.dform.hidden_id.value = i;
                }
            }
        }
}

