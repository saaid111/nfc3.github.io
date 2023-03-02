async function readTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        await ndef.scan();
        ndef.onreading = event => {
          const decoder = new TextDecoder();
          for (const record of event.message.records) {
            consoleLog("Record type:  " + record.recordType);
            consoleLog("MIME type:    " + record.mediaType);
            consoleLog("=== data ===\n" + decoder.decode(record.data));
          }
        }
      } catch(error) {
        consoleLog(error);
      }
    } else {
      consoleLog("Web NFC is not supported.");

      let timeoutId;

      function consoleLog(data) {
      const logElement = document.getElementById('log');
      logElement.innerHTML += data + '\n';

      if (data === "Web NFC is not supported.") {
    timeoutId = setTimeout(() => {
      logElement.innerHTML = "";
    }, 2000); // 5000ms = 5 seconds
    } else {
    clearTimeout(timeoutId);
  }
}

    }
  }

  
  function consoleLog(data) {
    var logElement = document.getElementById('log');
    logElement.innerHTML += data + '\n ';
  }