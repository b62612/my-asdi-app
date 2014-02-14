/*
Ejiroghene B. Efevberha
Deliverable 1
Add Player App
ASDI 1402
*/
$(document).ready(function(){ 



			
			function getCheckboxActive(){
					if($("#urgent").checked){
						urgencyValue = $("#urgent").val();
					}else{
						urgencyValue = "No";
					}		
			}

		$( ".submit" ).on('click', function(key) {
 		localStorage.key(0);

  					
		var id = Math.floor(Math.random()*10000000001);	
					
									
			
			getCheckboxActive();
			urgencyValue;					
					var item 			= {};
						item.Age_Grades	= ["Age Category:", $("#agegrade").val()];
						item.First_Name	= ["First Name:", $("#firstname").val()];
						item.Last_Name	= ["Last Name:", $("#lastname").val()]; 
						item.Email		= ["Agent Email:", $("#email").val()];  
						item.Phone		= ["Agent Phone:", $("#phone").val()];
						item.Position 	= ["Field Position:", $("#position").val()];
						item.Free_Agent = ["Free Agent?:", urgencyValue];
						item.Rating 	= ["Player Rating:", $("#rating").val()];
						item.Date 		= ["Observation Date:", $("#date").val()];
										
			localStorage.setItem(id, JSON.stringify(item));	
			alert("Player Saved!");



  		});


		$( "#results-af" ).on('click', function(key) {
			


		});


});

