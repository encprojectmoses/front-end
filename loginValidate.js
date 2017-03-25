/* Eto po yung validate() na galing dun sa button ng Login.*/

function validate(e)
	{
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;

		if (e.keyCode == 13)
		{
			if (username == "username" && password == "password")
			{
				window.location = "homepage.html"; // Redirecting to homepage.html

				return false;
			}
			else if (username == "" && password == "")
			{
				document.getElementById('alertValidation').innerHTML = "Please enter your" + "<br>" +"username and password.";

				return false;
			}

			else
			{
				document.getElementById('alertValidation').innerHTML = "<font color='red'>" + "Login failed! Please try again.";
			}
		}
	}

function onClick(e) //for button of "Login"
	{
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;

				if (username == "username" && password == "password")
				{
					window.location = "homepage.html"; // Redirecting to homepage.html

					return false;
				}
				else if (username == "" && password == "")
				{
					document.getElementById('alertValidation').innerHTML = "Please enter your" + "<br>" +"username and password.";

					return false;
				}

				else
				{
					document.getElementById('alertValidation').innerHTML = "<font color='red'>" + "Login failed! Please try again.";
				}
	}