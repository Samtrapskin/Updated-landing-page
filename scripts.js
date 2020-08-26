
function readyNow() {

    var gifs=['css/images/bob.gif','css/images/stanley.gif','css/images/truffle.gif','css/images/hotdawg.gif', 'css/images/marty.gif','css/images/marty.gif'];
    $('<img src="gifs/' + gifs[Math.floor(Math.random() * gifs.length)] + '">').appendTo('#banner-load');
    // image[0] = "css/images/bob.gif";
    // image[1] = "css/images/stanley.gif";
    // image[2] = "css/images/truffle.gif";
    // image[3] = "css/images/hotdawg.gif";
    // var size = image.length
    // var x = Math.floor(size*Math.random())
    
    // $('#randomImages').attr('src',image[x]);

 
    //   <!--We append on this div-->
    //   <div id="banner-load"></div>
      
    //   <!--Don't forget Jquery-->
    //   <script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js'></script>
      
    //   <!--New images on load -->
    //   <script>
    //   //Add your images, we'll set the path in the next step
    //       var images = ['banner-1.jpg', 'banner-2.jpg', 'banner-3.jpg', 'banner-4.jpg];
          
    //   //Build the img, then do a bit of maths to randomize load and append to a div. Add a touch off css to fade them badboys in all sexy like.
    //       $('<img class="fade-in" src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');
    //   </script>





    // function display_random_gif() 
    // {
    //      var theGifs = [{
    //         src: "https://imgur.com/tbCVbz6",
    //         width: "240",
    //         height: "160"
    //     }, {
    //         src: "https://imgur.com/nOKZcfd",
    //         width: "320",
    //         height: "195"
    //     }, {
    //         src: "https://imgur.com/cZy8on2",
    //         width: "500",
    //         height: "343"
    //     }];
        
    //     var gifArray = [];
    //     for (var i = 0, j = theGifs.length; i < j; i++) {
    //         gifArray[i] = new Image();
    //         gifArray[i].src = theGifs[i].src;
    //         gifArray[i].width = theGifs[i].width;
    //         gifArray[i].height = theGifs[i].height;
    //     }
       
    // // create random image number
    //   function getRandomInt(min,max) 
    //     {
    //       //  return Math.floor(Math.random() * (max - min + 1)) + min;
        
    // imn = Math.floor(Math.random() * (max - min + 1)) + min;
    //     return gifArray[imn];
    //     }  
    
    // // 0 is first image,   preBuffer.length - 1) is  last image
      
    // var newImage = getRandomInt(0, gifArray.length - 1);
     
    // // remove the previous images
    // var images = document.getElementsByTagName('img');
    // var l = images.length;
    // for (var p = 0; p < l; p++) {
    //     images[0].parentNode.removeChild(images[0]);
    // }
    // // display the image  
    // document.body.appendChild(newImage);
    // }
}