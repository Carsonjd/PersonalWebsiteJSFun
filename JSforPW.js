$(document).ready(function() {
  var h1 = $("h1");
  h1.animate({
    left: '500'
  }, {
    duration: 3000,
    queue: false
  });
  h1.animate({
    fontSize: '135px'
  }, {
    duration: 3000,
    queue: false
  });
  // console.log($('html')children.length);


var headshot = $("#headshot");
var p2Image = $("<img>")
p2Image.attr('src', "https://2.bp.blogspot.com/-sZToUtjOv4w/Vpzd5wpSR3I/AAAAAAAAAOU/KyidB1v4CoY/s640/DSC00696.jpg");
p2Image.attr('width', '200');
p2Image.attr('align', 'center');
p2Image.addClass('imageShadow');
headshot.append(p2Image);
p2Image.animate({
  width: '500'
}, 3000);


var imgUrlArray = ['https://2.bp.blogspot.com/-nwD5SlLqpjw/Vpzf9CxllbI/AAAAAAAAAQ8/LMTgN9hbXsc/s640/IMG_8208.jpg', 'https://4.bp.blogspot.com/-V0flhHz24x8/Vpzf4mL7wVI/AAAAAAAAAQ0/g-wmWO2pxu0/s640/IMG_8215.jpg', 'https://3.bp.blogspot.com/-r1gOylygujk/VpzfnK5a3EI/AAAAAAAAAPM/JuhST-sbmzE/s640/IMG_1333.jpg', 'https://2.bp.blogspot.com/-Getf-TctuUU/VpzfpUOgILI/AAAAAAAAAPw/G5BTKDAnA5w/s640/IMG_1393.jpg', 'https://4.bp.blogspot.com/-rCDZA3kfqv8/Vpzfn0ujAsI/AAAAAAAAAPQ/0Q2rLQtk2KU/s640/IMG_5268.jpg', 'https://3.bp.blogspot.com/-T5C0wdrdiBQ/VpzfoqBeuKI/AAAAAAAAAPg/eG73dKQqGFg/s640/IMG_7328.jpg', 'https://1.bp.blogspot.com/-NrbgS1b52X0/VpzfpSZ-LQI/AAAAAAAAAPs/MDzEKQIPzyc/s640/IMG_7585.jpg', 'https://2.bp.blogspot.com/-N6cTqXCfb1w/Vpzfphn6QSI/AAAAAAAAAP0/DrikSIoVRbY/s640/IMG_7676.jpg', 'https://1.bp.blogspot.com/-ZfPBVhdDGOw/Vpzf26Y-v7I/AAAAAAAAAQs/XzDJReFAOgU/s640/IMG_8005.jpg', 'https://1.bp.blogspot.com/-XmC4Hx2UrZA/VpzgFtwZirI/AAAAAAAAARY/LUZKo4qMMNI/s640/IMG_8296.jpg'];

var gifArray = ["https://giphy.com/embed/adUv6OrYxCH4Y"
,
  "https://giphy.com/embed/JIX9t2j0ZTN9S"
  ,
  "https://media.giphy.com/media/3ov9jZjJCIvt11F2iQ/giphy.gif"
  ,
  "https://giphy.com/embed/HCK7W8Qb52ifS"
  ,
  "https://giphy.com/embed/s51emEm5LhO3S"
];



// function imageDisplay() {
//   var randoIndex = Math.ceil(Math.random()*imgUrlArray.length-1);
//     var body = $('body');
//       body.style.backgroundImage.url = imgUrlArray[randoIndex];
//       body.fadeIn(1000);
//       body.delay(2000);
//       body.fadeOut(1000);
// }
// setInterval(function(){imageDisplay()}, 4000);

function imageDisplay() {
  var randoIndex = Math.ceil(Math.random()*imgUrlArray.length-1);
    var p3 = $('p3');
    p3.empty();
    var imgTag = $('<img>');
      imgTag.attr('src', imgUrlArray[randoIndex]);
      imgTag.addClass('imageShadow');
      p3.append(imgTag);
      // p3.animate({
      //   right: '10px'
      // },
      //   3000, false
      // );

      // p2Image.animate({
      //   width: '500'
      // }, 3000);


      p3.animate({
        bottom: '10px'
      }, {
        duration: 2000,
        queue: false
      });
      p3.fadeIn(1000);
      p3.delay(2000);
      p3.fadeOut(1000);
}

setInterval(function(){imageDisplay()}, 4000);

var i = 0;
function gifChange(){
  var iframe = $('iframe');
  iframe.attr('src', gifArray[i]);
  i++;
  console.log("am i working?");
};

// var button = $('.gifButton');
// button.onclick = function(){gifChange()};

// var button = $('button');
// button.addEventListener('click', function(e) {
//       gifChange();
//     });



});
