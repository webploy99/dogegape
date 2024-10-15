    function url() {
        fbq('track', 'Purchase');
        location.href="https://line.me/ti/p/~g19688";
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