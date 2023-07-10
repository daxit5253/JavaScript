Display();
// 1. Insert Data to Localstorage
document.getElementById("mybtn").addEventListener("click", function () {
  let name = document.myform.uname.value;
  let age = document.myform.age.value;
  let salary = document.myform.salary.value;
  let gender = document.myform.gender.value;
  let hid = document.myform.hid.value;

  let CandidateDetail = {};
  let canData = {
    name: name,
    age: age,
    salary: salary,
    gender: gender,
  };

  let info = JSON.parse(localStorage.getItem("UserInfo"));
  if (info != null) {
    if (hid != "") {
      for (i = 0; i < info.CandidateInfo.length; i++) {
        if (hid == i) {
          info.CandidateInfo[i].name = name;
          info.CandidateInfo[i].age = age;
          info.CandidateInfo[i].salary = salary;
          info.CandidateInfo[i].gender = gender;
        }
      }
      localStorage.setItem("UserInfo", JSON.stringify(info));
    } else {
      info.CandidateInfo.push(canData);
      localStorage.setItem("UserInfo", JSON.stringify(info));
    }
  } else {
    CandidateDetail.CandidateInfo = [canData];
    localStorage.setItem("UserInfo", JSON.stringify(CandidateDetail));
  }

  document.myform.reset();

  Display();
});

function Display() {
  let dd = "<tr>";
  dd += "<th>Name</th>";
  dd += "<th>Age</th>";
  dd += "<th>Salary</th>";
  dd += "<th>Gender</th>";
  dd += "<th colspan='2'>Action</th>";
  dd += "</tr>";

  let info = JSON.parse(localStorage.getItem("UserInfo"));
  if (info != null) {
    for (i = 0; i < info.CandidateInfo.length; i++) {
      dd += "<tr>";
      dd += "<td>" + info.CandidateInfo[i].name + "</td>";
      dd += "<td>" + info.CandidateInfo[i].age + "</td>";
      dd += "<td>" + info.CandidateInfo[i].salary + "</td>";
      dd += "<td>" + info.CandidateInfo[i].gender + "</td>";
      dd +=
        "<td><input type='button' id='edit' onclick='editData(" +
        i +
        ")' value='Edit'></td>";
      dd +=
        "<td><input type='button' id='delet' onclick='deletData(" +
        i +
        ")' value='Delet'></td>";
      dd += "</tr>";
    }

    document.getElementById("TableData").innerHTML = dd;
  }
}

function deletData(id) {
  let info = JSON.parse(localStorage.getItem("UserInfo"));
  if (info != null) {
    console.log(info);
    info.CandidateInfo.splice(id, 1);
    localStorage.setItem("UserInfo", JSON.stringify(info));
    Display();
  }
}

function editData(id) {
  let info = JSON.parse(localStorage.getItem("UserInfo"));
  if (info != null) {
    for (i = 0; i < info.CandidateInfo.length; i++) {
      if (id == i) {
        document.myform.uname.value = info.CandidateInfo[i].name;
        document.myform.age.value = info.CandidateInfo[i].age;
        document.myform.salary.value = info.CandidateInfo[i].salary;
        document.myform.gender.value = info.CandidateInfo[i].gender;

        document.myform.hid.value = i;
      }
    }
  }
}
