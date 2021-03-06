function getData() {
   today()
   getWeatherIcon()
   getTemperature()
   api.resources.observeData(function (newData) {
      document.getElementById('battery').innerHTML = newData.battery.percentage;
      if (newData.battery.percentage > 20) {
         document.getElementById('battery_circle').style.backgroundColor = 'rgba(48, 199, 89, 0.30)'
      }
      if (newData.battery.percentage < 21) {
         document.getElementById('battery_circle').style.backgroundColor = 'rgba(255, 59, 58, 0.30)'
      }
   })
}
function openApp(bundleID) {
   api.apps.launchApplication(bundleID);
}

function today() {
   // Get date
   var now = new Date();
   var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
   let day = days[now.getDay()];
   let today = now.getDay();
   document.getElementById('day').innerHTML = day;
   document.getElementById('day_number').innerHTML = today;
}

// Weather
function getWeatherIcon() {
   api.weather.observeData(function (newData) {
      document.getElementById('weather_icon_img').src = `xui://resource/default/weather/${newData.now.condition.code}.svg`;
    });
}

function getTemperature() {
   api.weather.observeData(function (newData) {
      document.getElementById('temperature').innerHTML = String(newData.now.temperature.current) + '°'
   })
}



// Music
// function Music() {
//    api.media.observeData(function (newData) {
//       if (newData.isStopped) {
//          document.getElementById('music_icon_img').src = "xui://resource/default/media/play.svg"
//       }
//       if (newData.isPlaying) {
//          document.getElementById('music_icon_img').src = "xui://resource/default/media/pause.svg"
//       } else {
//          document.getElementById('music_icon_img').src = "xui://resource/default/media/play.svg"
//       }
//    })
// }
// function toggleMusic() {
//    api.media.togglePlayPause();
// }

// // Things
// function getUndoneThings() {
//    var thingsApp = api.apps.applicationForIdentifier("com.culturedcode.ThingsiPhone");
//    var undoneTasks = thingsApp.badge;
//    document.getElementById('things').innerHTML = undoneTasks;
// }
