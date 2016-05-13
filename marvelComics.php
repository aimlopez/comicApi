<?php
require_once('includes/header.php');
?>
    
 <section id="main-content"> 

<h1 id="comic_title">Marvel Comics</h1>


	<p class="main-text">Here can you see your favorite Marvel comics !!</p>

<!--<div class="group-form">
<label for='search'>Search: </label>
<input id='search' name='search'>

</div> -->

    <div id="results"></div>
    <div id="results-info"></div>


</section>
    <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js"></script>
    <script src="js/app.js"></script>
    <script type="text/javascript">
    	getInfoMarvel();
    	</script>

</body>
</html>