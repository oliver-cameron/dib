
    //var rep = (Math.floor(parseFloat(document.getElementById("containmain").style.height)/100)*100)*(Math.floor(parseFloat(document.getElementById("containmain").style.width)/100)*100)
    var aback = "";
    for(var i = 0; i< 1000; i++){
    var m = `Icons/icon${Math.floor(Math.random() * 5)+1}.svg`
    aback = aback + `<img src='${m}'>`
    console.log(`<img src='${m}'>`)
}
    document.getElementById("background").innerHTML = aback;
