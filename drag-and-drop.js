function allowDrop(event) {
            event.preventDefault();
        }

        function drag(event) {
            let sourse = event.target;
            event.dataTransfer.setData("text", sourse.innerText);
        }

        function drop(event) {
            event.preventDefault();
            let data = event.dataTransfer.getData("text");
            //  event.target.appendChild(document.getElementById(data));
            let drop = event.target;
            drop.innerText += " "+data;
        }

        let checkButton = document.getElementById("check");
        checkButton.addEventListener("click", check);

        function check(event) {
            let word = document.getElementById("word");
            let str = word.innerText;
            let phrase = "cat and dog";
            if (phrase == str) {
                alert("Правильно");
            button.getElementById("speak").style.visibility =("visibility")
            } else {
                alert("Не правильно");
            }
        }