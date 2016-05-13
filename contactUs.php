<?php
require_once('includes/header.php');

?>

        <section id="content_cu">
            <div class="inne_info">
                <h3>Contact Us</h3>
                <p id="request">Hi, My name is Aimara López and I'm a Web developer student.</p> 
                    <p>I love programming, test new things and <em>Comics</em>. In this evaluation, I tried to combined all these things to make something fun.
                    You can click on the map marker to see which is tha base in a developer world.
                    This is a very first test. It could be much more better. I'm working on it.

                    </p>
                </p>
            </div>
            <div id="map-wrapper">
            <div id='map-google'>
                
            </div>
            </div>

            <div class="inne-ad">
                <h3>MedieInstitutet</h3>
                <p>Tegeluddsvägen 31, 115 41.</p>
                <p>Stockholm, Sweden</p>
            </div>


   </section>

    

   

    <footer>
      

    </footer>
    </div>

    <script type="text/javascript">
        function initMap() {
            if(!navigator.geolocation){
                alert ('your browser dont\'n support geolocation');
                return false;
            }
            

             var myMap= new google.maps.Map(document.getElementById('map-google'), {
                zoom: 13,
                center: {lat:59.34766010000001, lng:18.107848900000022},
               
             });
         
             var schoolMarker = new google.maps.Marker({
                position: {lat:59.34766010000001, lng:18.107848900000022},
                map: myMap,
                Title: "Web developer program / MedieInstitutet"
             });

             var schoolComment = "<h1>MedieInstitutet Students</h1>" +
                                 "<p> Here we have to use our skills and<br/>" +
                                 " creativity to develop modern and useful<br />" +
                                 " websites attractive to potencial clients."

             var schoolWindow = new google.maps.InfoWindow({
                content: schoolComment
             });  

             google.maps.event.addListener(schoolMarker, "click", function(){
                schoolWindow.open(myMap, schoolMarker );

             });                    

        } // end initMap


    </script>
   <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZf5XC3CRbSNoAnKFG_nHfnOY0jLa4ci0&callback=initMap"></script> 
</body>

</html>