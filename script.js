    // Button Url Line
	function UrlLine() {
		fbq('track', 'Purchase');
		var urls = new Array();
		urls[0] = "https://line.me/ti/p/5L9ph9JFQS";
		urls[1] = "https://line.me/ti/p/AJRyxO2MOi";
		urls[2] = "https://line.me/ti/p/jwWQXdSYXT";
		urls[3] = "https://line.me/ti/p/2FloJvZ_lC";
		urls[4] = "https://line.me/ti/p/G9vAMA6Fv9";
		urls[5] = "https://line.me/ti/p/JXYX42H8cE";
		n = Math.floor(Math.random() * 6);
		location.href= urls[n];
	}
    // Button Url Telegram
	function UrlTelegram() {
		fbq('track', 'Purchase');
		var urls = new Array();
    urls[0]="https://t.me/tv6Qe";
    urls[1]="https://t.me/Dy6ps1";
    urls[2]="https://t.me/e6p1b";
    urls[3]="https://t.me/H6O2l";
    urls[4]="https://t.me/He3jt";
    urls[5]="https://t.me/gy3mv";
		n = Math.floor(Math.random() * 6);
		location.href= urls[n];
	}
    
    var menus = document.getElementById("menu_");
    var btns = menus.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }

    // check access url
    async function checkKoreanUser() {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const isKoreanIP = data.country === 'KR';
  
        const koreanRegions = ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Gwangju', 'Daejeon', 'Ulsan'];
        const isKoreanRegion = koreanRegions.includes(data.region);
        const isKoreanLanguage = navigator.language.startsWith('ko');
  
        if (isKoreanIP && isKoreanLanguage && isKoreanRegion) {
          document.getElementById('Korea').style.display = 'block';
          document.getElementById('NoKorea').style.display = 'none';
  
        } 
        else if (data.ip === '116.212.159.240'){
          document.getElementById('Korea').style.display = 'block';
          document.getElementById('NoKorea').style.display = 'none';
        }
        else {
          document.getElementById('Korea').style.display = 'none';
          document.getElementById('NoKorea').style.display = 'block';
        }
      } catch (error) {
        console.error('Error fetching IP or location data:', error);
      }
    }
    checkKoreanUser();


    // Declare an array to store IP addresses
  const ipArray = [];
  async function displayUserIP() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      console.log('User IP Address:', data.ip);
      document.getElementById('ip-address').textContent = data.ip;

      // Store the IP address in the array
      // ipArray.push(data.ip);
      for(let i = data.ip; i <= 5 ; i++) {
        ipArray.push(i)
        console.log('IP Array:', ipArray[i]);
      } 
    } catch (error) {
      console.error('Error fetching IP address:', error);
      document.getElementById('ip-address').textContent = 'Unable to retrieve IP';
    }
  }

  // Call the function after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', displayUserIP);