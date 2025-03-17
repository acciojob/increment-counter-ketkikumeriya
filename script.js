//your JS code here. If required.
        let count = 0;
        const counterElement = document.getElementById("counter");
        const button = document.getElementById("incrementBtn");

        button.addEventListener("click", function() {
            alert(count);
            count++;
            counterElement.textContent = count;
        });

