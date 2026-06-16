let countdown;
        let timeLeft = 0;

        function startTimer() {
            clearInterval(countdown);

            timeLeft = parseInt(document.getElementById("secondsInput").value);

            if (timeLeft <= 0) {
                alert("Please enter a valid number of seconds.");
                return;
            }

            document.getElementById("timer").textContent = timeLeft;

            countdown = setInterval(() => {
                timeLeft--;
                document.getElementById("timer").textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    document.getElementById("timer").textContent = "Time's Up!";
                }
            }, 1000);
        }

        function stopTimer() {
            clearInterval(countdown);
        }

        function resetTimer() {
            clearInterval(countdown);
            timeLeft = 0;
            document.getElementById("timer").textContent = "0";
            document.getElementById("secondsInput").value = "";
        }