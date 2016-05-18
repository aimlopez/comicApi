//(function ($) {
 //   'use strict'

    var apiKey = '1b7b1dda127cc304e7dacb7ace0decf4';
    var privateKey = '3948f3d211b700a8d98455034a2d974c7a3edc8b';
    var ts = new Date().getTime();
    var hash = CryptoJS.MD5 (ts + privateKey + apiKey).toString();
    

  function getInfoMarvel() {
    

   //första end-point comics list

    // var url = "http://gateway.marvel.com/v1/public/comics"; 
     var url = "http://gateway.marvel.com/v1/public/comics";
    
    $.getJSON(url, {
        //  dateRange: '2013-01-01%2C2016-12-31',
          ts: ts,
          apikey: apiKey,
          hash: hash,
          limit: 50
        
          // StartYear: '2010',
            
    })
    .done(function(response) {

      console.log(response.data);
      
     var credits = response.attributionText;

        var IMAGE_NOT_AVAIL = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
        
        var photoHTML='';
        if(response.code === 200) {


          console.log('num of comics '+response.data.results.length);
          for(var i in response.data.results) {

            var comic = response.data.results[i];
            
            var img = comic.thumbnail.path +  "/portrait_uncanny" + "." + comic.thumbnail.extension;
            //console.log(img);
              if(comic.thumbnail && comic.thumbnail.path != IMAGE_NOT_AVAIL && comic.description != null) {

                   if(comic.dates[0].date >= '2000' || comic.dates[0].date <= '2010'){
                  console.log(comic.dates[0].date);




                    photoHTML+= '<div class="images">';
                    photoHTML += '<a href="'+comic.urls[0].url +'"><img class="main-img" src="'+ img +'"></a>';
                    photoHTML+= '<h3 class="comic-title">' + comic.title + '</h3>';
                    photoHTML += '<p class="descript">'+ comic.description + '</p></div>'

                 }

              
             }       
        } //end for loop
                    $('#results').append(photoHTML);
                    $('#results-info').append(credits); 

        } 
 
    });       


  } 
  



  
//getInfoMarvel();
//getInfoMarvelCH();
//}(jQuery));

function getInfoMarvelCH(){
  
    var url = "http://gateway.marvel.com/v1/public/characters";
    
    $.getJSON(url, {
        //  dateRange: '2013-01-01%2C2016-12-31',
          ts: ts,
          apikey: apiKey,
          hash: hash,
          // StartYear: '2010',
            
    }, function(response) {
      // sort of a long dump you will need to sort through
     // console.log(response.data.results);
     // for (var i in response.data.results) {
      console.log(response.data);
      var credits = response.attributionText;

        var IMAGE_NOT_AVAIL = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
        
        var photoHTML='';
        if(response.code === 200) {

          
          console.log('num of comics '+response.data.results.length);
          for(var i in response.data.results) {

            var comic = response.data.results[i];
            
            var img = comic.thumbnail.path +  "/portrait_uncanny" + "." + comic.thumbnail.extension;
            //console.log(img);
              if(comic.thumbnail && comic.thumbnail.path != IMAGE_NOT_AVAIL) {

                    photoHTML+= '<div class="imagesCh">';
                    photoHTML += '<a href="'+ comic.urls[1].url + '"><img class="main-img" src="'+ img +'"></a>';
                    photoHTML+= '<h3 class="comic-title">' + comic.name + '</h3></div>';
                    //photoHTML += '<p class="descript">'+ comic.description + '</p>'
                   

                

              }
          }
                $('#results-ch').append(photoHTML);
                $('#results-info').append(credits); 

        } 


        }); //end json

 $("#submit").on('click', function() {
  var inputName = $('#search-ch').val();
  getCharacterSearch(inputName);
  });

}

function getCharacterSearch(inputName){


var url = "http://gateway.marvel.com:80/v1/public/characters";
          
                
                $.getJSON(url, {
        //  dateRange: '2013-01-01%2C2016-12-31',
        //   name: name,
          name: inputName,
          ts: ts,
          apikey: apiKey,
          hash: hash,
          

            
    }, function(response) {
      // sort of a long dump you will need to sort through
     // console.log(response.data.results);
     // for (var i in response.data.results) {
      var photoHTML='';
      var credits = response.attributionText;
      console.log(response.data);
      $('h4').text(response.attributionText);

        var IMAGE_NOT_AVAIL = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
        
        if(response.code === 200) {

          
          console.log('num of comics '+response.data.results.length);
              var comic = response.data.results[0];
              var imgCh = comic.thumbnail.path +  "/portrait_uncanny" + "." + comic.thumbnail.extension;
              var nameCh = comic.name;
              var charaterID = comic.id;
              var descriptionCh = comic.description;
          
          if(comic.thumbnail && comic.thumbnail.path != IMAGE_NOT_AVAIL) {

            $('#results-ch').hide();
             $('#results-ch_info').show();
             $('#results-ch_name').text(nameCh);
             $('.character_img').attr('src', imgCh);
             $('#results-ch_descript').text(descriptionCh);
             $('#results-info').append(credits);


                  }
}

 }); 
              }