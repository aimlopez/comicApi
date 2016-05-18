<?php
require_once('includes/header.php');
?>
    
 <section id="main-content"> 

	<h1 id="comic_title">MARVEL CHARACTERS</h1>


	<p class="main-text">Here can you see your favorite Marvel characters !!</p>


	<div class="form-group"> 
		<label for="search-ch"> Search:</label>
		<input type="text" name="search-ch" id= "search-ch" />
    	<button type='button' name='submit' id='submit' value='submit'>Submit</button>
	</div>

    <div id="results-ch"></div>

    <div id="results-ch_info">
    	<h1 id="results-ch_name"></h1>
    	<img class="character_img" />
    	<p id="results-ch_descript"></p>
    </div>

    <div id="results-info-ch"></div>


</section>
    <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js"></script>
    <script src="js/app.js"></script>
    <script type="text/javascript">
    	getInfoMarvelCH();
    	</script>


</body>
</html>