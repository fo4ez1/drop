var supportMsg = document.getElementById("msg");

      if ("speechSynthesis" in window) {
      } else {
        supportMsg.innerHTML =
          'Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="https://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.';
        supportMsg.classList.add("not-supported");
      }

      // Get the 'speak' button
      var button = document.getElementById("speak");

      // Get the text input element.

      var speechMsgInput = document.getElementById("word");

      function loadVoices() {
        // Fetch the available voices.
        var voices = speechSynthesis.getVoices();

        // Loop through each of the voices.
        voices.forEach(function (voice, i) {
          // Create a new option element.
          var option = document.createElement("option");

          // Set the options value and text.
          option.value = voice.name;
          option.innerHTML = voice.name;

          // Add the option to the voice selector.
          voiceSelect.appendChild(option);
        });
      }

      // Execute loadVoices.
      loadVoices();

      // Chrome loads voices asynchronously.
      window.speechSynthesis.onvoiceschanged = function (e) {
        loadVoices();
      };

      // Create a new utterance for the specified text and add it to
      // the queue.
      function speak(text) {
        // Create a new instance of SpeechSynthesisUtterance.
        var msg = new SpeechSynthesisUtterance();

        // Set the text.
        msg.text = text;

        // Set the attributes.
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 1;

        // If a voice has been selected, find the voice and set the
        // utterance instance's voice attribute.
        var selectedVoice = "Google UK English Female";
        let voices = speechSynthesis.getVoices();
        for (var i = 0; i < voices.length; i++) {
          if (voices[i].name === selectedVoice) {
            msg.voice = voices[i];
            break;
          }
        }

        // Queue this utterance.
        window.speechSynthesis.speak(msg);
      }

      // Set up an event listener for when the 'speak' button is clicked.
      button.addEventListener("click", function (e) {
        speak(speechMsgInput.innerText);
      });