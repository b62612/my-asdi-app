/*Ejiroghene B. Efevberha
Deliverable 1
Add Player App
ASDI 1402*/

$(main).on('pageinit', function(){ 



			
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
  		
  			$('#results_af').on('click', function(){

  				$.getJSON( "/my-asdi-app/javascript/libraries/json/JSONdata.json", function(data) {
  				 successCallback(data); 
               
			
			}); 

		
				function successCallback(data){
					

			 var displayStr = '';
                for(var i in data) {
                    displayStr += '<li data-icon=' + '"info"'  +' class="namelists ui-li-static ui-body-inherit ui-first-child">';
                    displayStr += '<a href=' + '"#ln' + data[i].lastname + '">';
                    displayStr += '<h3>' + data[i].lastname + ' ' + data[i].firstname + '</h3>';
                    displayStr += '<p style="font-weight:bold">' + "Current Club:" + '</p>';
                    displayStr += '<p>' + data[i].club + '</p>';
                    displayStr += '<p>' + data[i].date + '</p>';
                    displayStr += '</a>'
                    displayStr += '</li>';
                }

               

                $('#jdisplay ul').append(displayStr);
            };


	});
			
				$(this).on('click', '.namelists', function(){

				$.ajax({
  				type: "GET",
  				dataType: "xml",
  				url: "/my-asdi-app/BIOdata.xml",
  				success: parseXml 
				});

  				function parseXml(xml){
  					var fetch = $(xml).children().html();
  					
  						var displayBio = '';
  							displayBio += '<li>';
							displayBio += fetch;
							displayBio += '</li>';
  						$('#results_af').after(displayBio);
  						$('#jdisplay').remove();
  					
					
  			    	
  			



 			
			};



});

});




