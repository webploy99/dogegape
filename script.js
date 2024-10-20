    // Button Url Line
	function UrlLine() {
		fbq('track', 'Purchase');
		var urls = new Array();
		urls[0] = "https://line.me/ti/p/G9vAMA6Fv9";
   urls[1] = "https://line.me/ti/p/AJRyxO2MOi";
   urls[2] = "https://line.me/ti/p/jwWQXdSYXT";
		n = Math.floor(Math.random() * 3);
		location.href= urls[n];
	}
    // Button Url Telegram
	function UrlTelegram() {
		fbq('track', 'Purchase');
		var urls = new Array();
    urls[0] = "https://t.me/Dy6ps1";
    urls[1] = "https://t.me/Muj9r";
    urls[2] = "https://t.me/a1bhk";
		n = Math.floor(Math.random() * 3);
		location.href= urls[n];
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

  const images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg",
];

let currentIndex = 0;
const slideshowImage = document.getElementById("slideshow-image");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    slideshowImage.src = images[currentIndex];
}

// Change image every 3 seconds (3000 ms)
setInterval(changeImage, 1500);