// IPLogger Main JavaScript
// Contains all main functionality for the IPLogger website (excluding translations and mobile-specific code)

// Declare qrcode2 globally
var qrcode2;

// Initialize qrcode2 for QR code generation
document.addEventListener('DOMContentLoaded', function() {
  var qrcodeEl = document.getElementById('qrcodeweb');
  if (qrcodeEl) {
    qrcode2 = new QRCode(qrcodeEl, {
      width: 170,
      height: 170,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
  
  // Add fade-in classes to main sections and cards
  const sections = document.querySelectorAll('section.py-5, .tracker-form, .feature-card');
  sections.forEach(section => {
    section.classList.add('fade-in-up');
  });
  
  const emailCards = document.querySelectorAll('#email .card');
  emailCards.forEach(card => {
    card.classList.add('fade-in-up');
  });
});

// --- IP Checker logic ---
function isValidIP(ip) {
  const ipv4Pattern = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
  const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,7}:$|^([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}$|^([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}$|^([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}$|^([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}$|^[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})$|^:((:[0-9a-fA-F]{1,4}){1,7}|:)$|^fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}$|^::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])$|^([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])$/;
  
  if (ipv4Pattern.test(ip)) {
    const parts = ip.split('.');
    return parts.every(part => {
      const num = parseInt(part, 10);
      return num >= 0 && num <= 255;
    });
  }
  
  if (ipv6Pattern.test(ip)) {
    return true;
  }
  
  return false;
}

function checkIpAddress() {
  try {
    const ipAddress = document.getElementById('findanip').value.trim();
    const resultDiv = document.getElementById('ip-result');
    
    if (!ipAddress) {
      resultDiv.innerHTML = '<div class="alert alert-warning">Please enter an IP address.</div>';
      return;
    }
    
    if (!isValidIP(ipAddress)) {
      resultDiv.innerHTML = '<div class="alert alert-danger">Invalid IP address format. Please enter a valid IPv4 or IPv6 address.</div>';
      return;
    }
    
    resultDiv.innerHTML = '<div class="text-center mt-3"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div><p class="mt-2">Looking up IP information...</p></div>';
    
    fetch(`https://ipinfo.io/${ipAddress}/json`)
      .then(response => response.json())
      .then(data => {
        // Format the result
        let html = '<div class="card mt-3 shadow-sm fade-in">';
        html += '<div class="card-header bg-primary text-white"><h5 class="mb-0">IP Information: ' + ipAddress + '</h5></div>';
        html += '<div class="card-body">';
        html += '<table class="table table-striped mb-0">';
        
        if (data.bogon) {
          html += '<tr><td colspan="2" class="text-center"><div class="alert alert-info">This is a private/local IP address.</div></td></tr>';
        }
        
        if (data.ip) html += '<tr><th>IP Address</th><td>' + data.ip + '</td></tr>';
        if (data.hostname) html += '<tr><th>Hostname</th><td>' + data.hostname + '</td></tr>';
        if (data.city && data.region) html += '<tr><th>Location</th><td>' + data.city + ', ' + data.region + '</td></tr>';
        if (data.country) html += '<tr><th>Country</th><td>' + data.country + '</td></tr>';
        if (data.loc) {
          const [lat, lon] = data.loc.split(',');
          html += '<tr><th>Coordinates</th><td>Lat: ' + lat + ', Lon: ' + lon + '</td></tr>';
          html += '<tr><th>Map</th><td><a href="https://www.google.com/maps?q=' + data.loc + '" target="_blank" class="btn btn-sm btn-outline-primary">View on Google Maps</a></td></tr>';
        }
        if (data.org) html += '<tr><th>Organization</th><td>' + data.org + '</td></tr>';
        if (data.postal) html += '<tr><th>Postal Code</th><td>' + data.postal + '</td></tr>';
        if (data.timezone) html += '<tr><th>Timezone</th><td>' + data.timezone + '</td></tr>';
        
        html += '</table>';
        html += '</div></div>';
        
        resultDiv.innerHTML = html;
      })
      .catch(error => {
        resultDiv.innerHTML = '<div class="alert alert-danger">Error looking up IP information. Please try again.</div>';
        console.error('Error:', error);
      });
  } catch (error) {
    return;
  }
}

// Initialize IP checker button event listener
document.addEventListener('DOMContentLoaded', function() {
  var ipbutton = document.getElementById('findanipbutton');
  if (ipbutton) {
    ipbutton.addEventListener('click', function(event) {
      checkIpAddress();
    });
  }
});

// URL Tracker functionality
function checkURL(url) {
  if (url.indexOf("http") !== 0) {
    return "http://" + url;
  }
  return url;
}

function createTrackingLink() {
  const shorturl = document.getElementById('shorturl').value.trim();
  const resultArea = document.getElementById('urlresult');
  const loadingIndicator = document.getElementById('loadingdot');
  
  if (!shorturl) {
    resultArea.innerHTML = '<div class="alert alert-warning">Please enter a URL to track.</div>';
    return;
  }
  
  resultArea.style.display = 'none';
  loadingIndicator.style.display = 'block';
  
  const fixedUrl = checkURL(shorturl);
  
  // This would normally be an API call to create a tracking link
  // For demo purposes, we're using a setTimeout to simulate a network request
  setTimeout(function() {
    loadingIndicator.style.display = 'none';
    resultArea.style.display = 'block';
    
    // Generate a random tracking code
    const trackingCode = 'IPL' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const trackingUrl = 'https://iplogger.org/' + trackingCode;
    
    // Display the result
    resultArea.innerHTML = `
      <div class="card shadow-sm mb-4 fade-in">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">Your Tracking Link is Ready!</h5>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label fw-bold">Original URL:</label>
            <div class="input-group">
              <input type="text" class="form-control" value="${fixedUrl}" readonly>
              <button class="btn btn-outline-secondary" type="button" onclick="copyToClipboard('${fixedUrl}')">
                <i class="fas fa-copy"></i>
              </button>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Tracking Link:</label>
            <div class="input-group">
              <input type="text" class="form-control" value="${trackingUrl}" readonly>
              <button class="btn btn-outline-secondary" type="button" onclick="copyToClipboard('${trackingUrl}')">
                <i class="fas fa-copy"></i>
              </button>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Tracking Code:</label>
            <span class="ms-2">${trackingCode}</span>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mb-3">
              <div class="d-grid">
                <a href="#" class="btn btn-primary" onclick="showTrackingDetails('${trackingCode}')">
                  <i class="fas fa-chart-line me-2"></i>View Analytics
                </a>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="d-grid">
                <a href="${trackingUrl}" target="_blank" class="btn btn-outline-primary">
                  <i class="fas fa-external-link-alt me-2"></i>Test Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <div id="qrcodeweb" class="mx-auto mb-2"></div>
        <p class="small text-muted">QR Code for your tracking link</p>
      </div>
    `;
    
    // Generate QR code
    if (qrcode2) {
      qrcode2.clear();
      qrcode2.makeCode(trackingUrl);
    }
  }, 1500);
}

// Helper function to copy text to clipboard
function copyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  
  // Show toast notification
  const toast = document.createElement('div');
  toast.className = 'position-fixed bottom-0 end-0 p-3';
  toast.style.zIndex = '11';
  toast.innerHTML = `
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <i class="fas fa-check-circle text-success me-2"></i>
        <strong class="me-auto">Success</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" onclick="this.parentElement.parentElement.parentElement.remove()"></button>
      </div>
      <div class="toast-body">
        Copied to clipboard!
      </div>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Function to simulate showing tracking details
function showTrackingDetails(code) {
  alert('This would show analytics for tracking code: ' + code + '\n\nThis feature is not implemented in this demo.');
}

// Initialize URL tracker button event listener
document.addEventListener('DOMContentLoaded', function() {
  var urlbutton = document.getElementById('urlbutton');
  if (urlbutton) {
    urlbutton.addEventListener('click', function(event) {
      event.preventDefault();
      createTrackingLink();
    });
  }
  
  // Add Enter key support for input fields
  const shorturl = document.getElementById('shorturl');
  if (shorturl) {
    shorturl.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        createTrackingLink();
      }
    });
  }
  
  const findanip = document.getElementById('findanip');
  if (findanip) {
    findanip.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        checkIpAddress();
      }
    });
  }
});

// Email tracker functionality
function processTrackerEmail() {
  // This would normally be an API call to create an email tracking pixel
  // For demo purposes, we're simulating the response
  const res = "OK:et" + Math.random().toString(36).substring(2, 8) + ":et" + Math.random().toString(36).substring(2, 10);
  continuewithcode2(res);
}

// Handle email tracker response
async function continuewithcode2(res) {
  if (res.includes("Reachable")) {
    alert('Please Enter a Valid URL');
    return;
  }
  
  const resParts = res.split(":");  document.getElementById("tpng").src = "https://grabb.site/wx/" + resParts[1] + ".png";
  document.getElementById("aer").innerHTML = "Email Tracker: <br>" + "<a href=https://grabb.site/wx/" + resParts[1] + ".png target=\"_blank\">https://grabb.site/wx/" + resParts[1] + ".png</a>";
  document.getElementById("bsay").innerHTML = "Tracking Code: " + resParts[2];
  document.getElementById("ber").innerHTML = "Tracking Link: <br>" + "<a href=https://grabify.icu/" + resParts[2] + " target=\"_blank\">https://grabify.icu/" + resParts[2] + "</a>";
}

// Validate URL format
function isValidURL(url) {
  const urlRegex = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  return urlRegex.test(url);
}

// Process URL submission
async function new2025() {
  let urlvalue = document.getElementById("shorturl").value;
  let filterstrings = ['porn', 'redtube', '81ea'];
  let regex = new RegExp(filterstrings.join("|"), "i");  
  if (regex.test(urlvalue)) {
    alert('Content not allowed'); 
    return 0;
  }
  document.getElementById("shorturl").value = 'https://';
  document.getElementById("loadingdot").style.display = 'block';
  if (isValidURL(urlvalue)) {
    try {
      const data = new FormData();
      data.append('i', urlvalue);
      const response = await fetch("https://grabify.icu/qrcode.php", {
        method: "POST",
        body: data
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const res = await response.text();
      if (res) {
        continuewithcode(res.trim());
      } else {
        throw new Error('Empty response from server');
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById("loadingdot").style.display = 'none';
      alert('Error connecting to server. Please try again.');
    }
  } else {
    document.getElementById("loadingdot").style.display = 'none';
    alert('Please enter a valid URL');
  }
}

// Process URL tracking result
function continuewithcode(res) {
  document.getElementById("urlresult").style.opacity = "0.99"; 
  if (res.includes("Reachable")) {
    alert('Please enter a valid URL');
    document.getElementById("loadingdot").style.display = 'none';
    return;
  }
  try {
    const parts = res.split(":");
    if (parts.length < 3) {
      throw new Error('Invalid response format');
    }
    var qd = "https://grabb.site/" + parts[1];
    if (qrcode2) {
      qrcode2.makeCode(qd);
    }
    document.getElementById("atype").innerHTML = "New Tracking Link: <br>" + 
      "<a href='https://grabb.site/" + parts[1] + "' target=\"_blank\" class=\"text-white\">https://grabb.site/" + parts[1] + "</a>";
    document.getElementById("btypesay").innerHTML = "Tracking Code: " + parts[2];
    document.getElementById("btype").innerHTML = "Results Page: <br>" + 
      "<a href='https://grabify.icu/" + parts[2] + "' target=\"_blank\" class=\"text-white\">https://grabify.icu/" + parts[2] + "</a>";
  } catch (error) {
    console.error('Error processing response:', error);
    alert('Error processing server response. Please try again.');
  }
  document.getElementById("loadingdot").style.display = 'none';
}

// Email tracker generator
async function makeCodeweb2() {
  document.getElementById("bsay").innerHTML="<h5>grabify.icu is Generating the tracking link......</h5>";
  if(document.getElementById('myRange2').value==100){
    var ranger20 = document.getElementById("myRange2");
    ranger20.value=20;
    document.getElementById("rangeValue2").innerHTML="Drag Progress Bar to the End";
  }else{
    alert('Please Drag Progress bar to the End');
    return;
  }
  const data = new FormData();
  data.append('i', 'mm');
  const response = await fetch("https://grabify.icu/qrcode.php", {
    method: "POST",
    body: data
  });
  try {
    const res = await response.text().then(text => text.trim());
    continuewithcode2(res);
  }catch (error) {
    return;
  }
}
