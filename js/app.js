(function ($) {
    'use strict'

    var apiKey = '1b7b1dda127cc304e7dacb7ace0decf4';
    var privateKey = '3948f3d211b700a8d98455034a2d974c7a3edc8b';
    var ts = new Date().getTime();
    var hash = CryptoJS.MD5 (ts + privateKey + apiKey).toString();
    console.log (hash);
     console.log (apiKey);

  function getInfoMarvel() {
    

   //första end-point comics list
     var url = "http://gateway.marvel.com/v1/public/comics";
    
    $.getJSON(url, {
            ts: ts,
            apikey: apiKey,
            hash: hash,
          // StartYear: '2010',
            
    })
    .done(function(response) {
      // sort of a long dump you will need to sort through
     // console.log(response.data.results);
     // for (var i in response.data.results) {
      console.log(response.data);
      $('h4').text(response.attributionText);

        var IMAGE_NOT_AVAIL = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
        
        var photoHTML='';
        if(response.code === 200) {

          
          //console.log('num of comics '+response.data.results.length);
         for(var i=0;i<response.data.results.length;i++) {

          var comic = response.data.results[i];
          var img = comic.thumbnail.path +  "/portrait_uncanny" + "." + comic.thumbnail.extension;
          console.log(img);
               if(comic.thumbnail && comic.thumbnail.path != IMAGE_NOT_AVAIL) {

               // console.log(comic);
                // $.each(response.data.results[i],function( i, val ){

                 photoHTML+= '<span class="images">';
                // photoHTML+= '<a href=""><p class="comic-title">' + comic.title+ '</p>';
                  photoHTML += '<img src="'+ img +'"></a></span>'
                   
                    $('#results').append(photoHTML);
                 //})//end each

          /*  if(comic.thumbnail && comic.thumbnail.path != IMAGE_NOT_AVAIL) {
              var image = {};
              $.each(image.title) = comic.title;*/

              
//for(var x=0; x<comic.dates.length;x++) {
//if(comic.dates[x].type === 'onsaleDate') {
//image.date = new Date(comic.dates[x].date);
//}
//}
//image.url = comic.thumbnail.path + "." + comic.thumbnail.extension;
//images.push(image);
//}
}
}
 /* var tblRow = "<tr>" + "<td>" + comic.title + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata tbody");

           $('h6').text(response.attributionText);*/
    
   }
 
 });       


}
getInfoMarvel();
}(jQuery));