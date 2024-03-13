//var rep = (Math.floor(parseFloat(document.getElementById("containmain").style.height)/100)*100)*(Math.floor(parseFloat(document.getElementById("containmain").style.width)/100)*100)
if (location.pathname.split("/").slice(-1)[0] == "index.html") {
  var aback = "";
  for (var i = 0; i < 1000; i++) {
    var m = `Icons/icon${Math.floor(Math.random() * 5) + 1}.svg`;
    aback = aback + `<img src='${m}'>`;
    //console.log(`<img src='${m}'>`)
  }

document.getElementById("background").innerHTML = aback;
}

location.pathname.split("/").slice(-1)[0];
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
if (location.pathname.split("/").slice(-1)[0] == "product.html") {
  const vitmin = [
    "Calcium",
    "Chloride",
    "Chromium",
    "Cobalt",
    "Copper",
    "Fluoride",
    "Iodine",
    "Iron",
    "Maganese",
    "Magnesium",
    "Molybdenum",
    "Nickel",
    "Phosphorus",
    "Potassium",
    "Selenium",
    "Silicon",
    "Sodium",
    "Sulphur",
    "Vanadium",
    "Vitamin A",
    "Vitamin B 1",
    "Vitamin B 2",
    "Vitamin B 3",
    "Vitamin B 5",
    "Vitamin B 6",
    "Vitamin B 7",
    "Vitamin B 9",
    "Vitamin B 12",
    "Vitamin C",
    "Vitamin D",
    "Vitamin E",
    "Vitamin K",
    "Zinc",
  ];
  var vitmin2 = "";
  for (var i = 0; i < vitmin.length; i++) {
    vitmin2 =
      vitmin2 +
      `
    <div class="vitmin-container">
        <img width="100px" src="Icons/Icon_${vitmin[i]}.svg">
        <p>${vitmin[i]}</p>
    </div>`;
  }
  document.getElementById("vitmin-grid").innerHTML = vitmin2;

}

        // start video at frame 0
        var frameNumber = 0,
        
        // lower numbers = faster playback
        playbackConst = 800, 

        // select video element         
        vid = document.getElementById('v0'); 
        


    // Use requestAnimationFrame for smooth playback
    function scrollPlay(){  
    var frameNumber  = document.getElementById("containmain").scrollY/playbackConst;
    vid.currentTime  = frameNumber;
    window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);