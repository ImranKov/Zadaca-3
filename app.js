for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      for (let j = 1; j <= 10; j++) {
        console.log(j * i);
      }
    }
  }


const programskiJezici = ["JavaScript", "Python", "Java", "C#", "C++", "Ruby"];
programskiJezici.forEach(function (jezik) {
  console.log(jezik);
});


const temp = ["1 kasikica soli", "2 kasike ulja", "300g Brasna", "200 ml mlijeka"];
for (let i = 0; i < temp.length; i++) {
    const element = temp[i];
    document.getElementById("sastojci").innerHTML = " " + temp;
}