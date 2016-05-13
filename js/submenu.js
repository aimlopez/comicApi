$(document).ready(function () {
            console.log("click");

			$(".outer").click(function () {
                console.log("click");
                showMe();

				$(this).children(".menu-icon-wrapper").toggleClass('active');

			});



		});
        
		function showMe(){
    
		var displayValue = document.getElementById('main-menu').style.display;
		if(displayValue == "none"){
			document.getElementById("main-menu").style.display = "block";
		}else{
		document.getElementById("main-menu").style.display = "none";
		}
		}

