/* Eto po yung validate() na galing dun sa button ng Login.*/

function validate()
	{
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;

		if (username == "username" && password == "password")
		{
			alert("Login successful."); //tapos magreredirect sa homepage.html
			window.location = "homepage.html";

			return false;
		}
		else if (username == "" && password == "")
		{
			alert("Please enter your username and password."); 

			return false;
		}

		else
		{
			alert("Login failed. Please try again.");
		}
	}