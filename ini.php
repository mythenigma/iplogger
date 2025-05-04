<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
<title>IpLogger - An IP tracker tool</title>
  <meta name="description" content="Iplogger is a tool that allows users to track the location of anyone who clicks on a specially crafted link. The tool creates a unique link that, when clicked, records the visitor's IP address and other information such as their browser and operating system. This information can then be used to track the visitor's approximate location and other details.">
  <meta property="og:title" content="IpLogger - An IP tracker tool">
  <meta property="og:description" content="Iplogger is a tool that allows users to track the location of anyone who clicks on a specially crafted link. The tool creates a unique link that, when clicked, records the visitor's IP address and other information such as their browser and operating system. This information can then be used to track the visitor's approximate location and other details.">
  <meta property="og:image" content="https://grabify.icu/ok/result.png">
  <meta property="og:url" content="https://iplogger.icu">
  <meta property="og:type" content="website">

    <meta name="generator" content="Hugo 0.84.0">
   

    <link rel="canonical" href="https://iplogger.icu">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://www.maipdf.com/pdf/qrcode.min.js"></script>
    <!-- Bootstrap core CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    
  </head>
  <body>
    
<main>
  <div class="container py-4">
    <header class="pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
       
		<span class="fs-4">IpLogger - An IP tracker tool</span>
      </a>
    </header>

    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">What's IpLogger</h1>
        <p class="col-md-8 fs-4">
		Iplogger is a tool that allows users to track the location of anyone who clicks on a specially crafted link. The tool creates a unique link that, when clicked, records the visitor's IP address and other information such as their browser and operating system. This information can then be used to track the visitor's approximate location and other details.

	
		</p>
		
		<div class="input-group">
			<span class="input-group-text">Type an IP</span>
			<input type="text" id="findanip" class="form-control" aria-label="findanip"> <button id="findanipbutton" class="btn btn-primary btn-lg" type="button">Check this IP</button>
		
		</div>
		
         <div class="alert alert-success text-center">
		  <strong id="ipbackinfo"></strong>
		 </div>
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>what to do with the IP</h2>
          <p>When you have an IP address, the most accurate way to find the location is to use a geolocation service. There are several online geolocation services available that can provide you with the location information of an IP address.</p>
          <button class="btn btn-outline-light" type="button">Try IpLogger Tool Below</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Way to Do it</h2>
          <p>Tracking someone's IP address typically involves using tools or services that can capture the IP address of a device and then using that information to determine the location of the device.

One common method is to use an IP lookup tool or website, which can provide information on the general location of the device based on its IP address. These tools typically use databases that contain information on the locations of various IP addresses.
		  
        </div>
      </div>
    </div>



<hr>



    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Create an Tracking URL</h1>
        <p class="col-md-8 fs-4">
		   <ul id="grainstruct">
					 <li>Enter a URL that you want Iplogger to track</li>
                        <li>Send the Generated link to other people through IM or email</li>
					 <li>Save your tracking code that was generated when IpLogger generated the link</li>
					 
					 <li>Enter the tracking code on the home page and click "Tracking Code" to see all the information captured with IpLogger</li>
					
				 </ul>
		</p>
	
		<div class="input-group">
			<span class="input-group-text">Enter an URL</span>
			<input type="text" id="shorturl" value="https://"  class="form-control" aria-label="With textarea"> <button id="urlbutton" class="btn btn-danger btn-lg" type="button">Make it TRACKABLE</button>
				
		</div>
		
          
     

    <div class="row align-items-md-stretch" id="urlresult">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
         <p id='atype'></p>
            <p id='btypesay'></p>
            <p id='btype'></p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <div id="qrcodeweb" class="btn btn-default btn-xl"></div>
		  <br>QR code for new IpLogger Link
        </div>
      </div>
    </div>














	 </div>
    </div>








    <footer class="pt-3 mt-4 text-muted border-top">
      &copy; 2023
    </footer>
  </div>
</main>


    
  </body>
</html>
<script>

 document.getElementById("urlresult").style.opacity="0.01";
 
 
function isValidURL(url) {
  const urlRegex = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  return urlRegex.test(url);
}



function checkUrl(url) {
  return fetch(url)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return 1; // URL is reachable
      } else {
        return 2; // URL is not reachable
      }
    })
    .catch(error => {
	
      return 3; // URL is not reachable
    });
}
async function isUrlReachable(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    //console.error(error);
    return false;
  }
}

// Example usage

function isValidIP(ip) {
  // Regular expression to match an IP address
  const ipPattern = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;

  // Check if the string matches the IP address pattern
  if (!ipPattern.test(ip)) {
    return false;
  }

  // Split the IP address into its components
  const ipComponents = ip.split('.');

  // Check each component of the IP address
  for (let i = 0; i < ipComponents.length; i++) {
    const component = parseInt(ipComponents[i], 10);
    if (component < 0 || component > 255) {
      return false;
    }
  }

  // If all checks pass, the IP address is valid
  return true;
}

// Example usage
//console.log(isValidIP('192.168.1.1')); // true
//console.log(isValidIP('256.256.256.256')); // false
//console.log(isValidIP('2001:0db8:85a3:0000:0000:8a2e:0370:7334')); // false
 var urlbutton = document.getElementById('urlbutton');
 
 urlbutton.addEventListener('click', function(event) {
   let urlvalue = document.getElementById("shorturl").value;
    document.getElementById("shorturl").value='https://';
   


   if(isValidURL(urlvalue)){
			fetch('https://grabifyicu.com/qrcode.php?i='+urlvalue)
			.then(response => response.text())
			.then(data => {
               //  document.getElementById('ipbackinfo').innerHTML=urlvalue+':<br>'+data;
			   //document.getElementById("urlresult").style.display="inline";
			   document.getElementById("urlresult").style.opacity="0.99";
		     let res = data.split(":");
			 document.getElementById("atype").innerHTML="<br>Origin: "+urlvalue+"<br>New IpLogger Link: <br>"+"<a href=https://grabifyicu.com/"+res[1]+" target=\"_blank\">https://grabifyicu.com/"+res[1]+"</a>";
             document.getElementById("btypesay").innerHTML="Tracking Code: "+res[2];
             document.getElementById("btype").innerHTML="Tracking Link: <br>"+"<a href=https://grabify.icu/"+res[2]+" target=\"_blank\">https://grabify.icu/"+res[2]+"</a>";  
			  
			    let qd ="https://grabifyicu.com/"+res[1];
				var qrcode2 = new QRCode(document.getElementById("qrcodeweb"), {
					width : 170,
					height : 170,
					colorDark : "#000000",
					colorLight : "#ffffff",
					correctLevel : QRCode.CorrectLevel.H
				});
	            qrcode2.makeCode(qd);
			  
			  })
			  .catch(error => {
				console.error('Error fetching data:', error);
			  });
		  }else{
		    alert('Not An URL');
			return;
		  }
 
  });
 
 
          var ipbutton = document.getElementById('findanipbutton');
        ipbutton.addEventListener('click', function(event) {
		   
		  
		    let i = document.getElementById("findanip").value;
			document.getElementById("findanip").value='';
		if(isValidIP(i)){
			fetch('https://grabifyicu.com/c.php?i='+i)
			.then(response => response.text())
			.then(data => {
              document.getElementById('ipbackinfo').innerHTML=i+':<br>'+data;
		    //alert(data);
			  })
			  .catch(error => {
				console.error('Error fetching data:', error);
			  });
		  }else{
		    alert('Not An IP');
			return;
		  }
			
			  
			  
		  });
		  
		  
		  
async function fetchData(ipaddress) {
  try {
    const response = await fetch('https://grabifyicu.com/c.php?i='+ipaddress);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
		  
</script>