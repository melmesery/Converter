document.getElementById('transform').style.visibility = 'hidden';
document.getElementById("weight").addEventListener("input", function (e) {
  //   document.querySelector(".transform").style.visiability = "visible";
  let kg = e.target.value;
  document.getElementById('transform').style.visibility = 'visible';
  const pounds = (document.getElementById("pound").innerHTML = Number(
    kg * 2.205
  ));
  document.getElementById("ounce").innerHTML = Number(kg * 35.27);
  document.getElementById("gram").innerHTML = Number(kg * 1000);
  console.log(pounds);
});
