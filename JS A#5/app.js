let isRunning = false;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let interval;

    function startStop() {
      if (isRunning) {
        clearInterval(interval);
        document.querySelector("button").textContent = "Start";
      } else {
        interval = setInterval(updateTime, 1000);
        document.querySelector("button").textContent = "Stop";
      }
      isRunning = !isRunning;
    }

    function reset() {
      clearInterval(interval);
      isRunning = false;
      seconds = 0;
      minutes = 0;
      hours = 0;
      document.querySelector(".stopwatch").textContent = "0:00:00";
      document.querySelector("button").textContent = "Start";
    }

    function updateTime() {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }

      const timeString =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;

      document.querySelector(".stopwatch").textContent = timeString;
    }