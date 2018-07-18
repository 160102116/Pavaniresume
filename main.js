function getfile(file,callback)
{
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function()
  {
  if(xhr.readyState === 4 && xhr.status == "200")
  {
    callback(xhr.responseText);
  }
};
xhr.send(null);
}
getfile("data.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.CareerObjective);
})

var child = document.querySelector(".childone");

function details(det) {
  var img = document.createElement("img");
  img.src = det.image;
  child.appendChild(img);

  var name = document.createElement("h1");
  name.textContent = det.name;
  child.appendChild(name);

  var phoneno = document.createElement("h3");
  phoneno.textContent = det.phoneno;
  child.appendChild(phoneno);

  var email = document.createElement("a");
  email.href = "mailto:kdurgapavani2310@gmail.com";
  email.textContent = det.email;
  child.appendChild(email);

  var add = document.createElement("h3");
  add.textContent = "Address";
  child.appendChild(add);

  var line = document.createElement("hr");
  child.appendChild(line);

  var Address = document.createElement("p");
  Address.textContent = det.Address;
  child.appendChild(Address);
}

var child1 = document.querySelector(".childtwo");

function career(careerinfo) {

  var info1 = document.createElement("h3");
  info1.textContent = "Career Objective";
  child1.appendChild(info1);

  var line1 = document.createElement("hr");
  child1.appendChild(line1);

  var info = document.createElement("p");
  info.textContent = careerinfo.info;
  child1.appendChild(info);
}
