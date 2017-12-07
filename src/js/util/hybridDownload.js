export default function ( toDownloadUrl, localFileName ) {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent( toDownloadUrl );
  
  downloadFile(dataStr, localFileName)  
}

function downloadFile(toDownloadUrl, localFileName) {
  return window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory + 'Download/', function(fileEntry) {
    var filepath = fileEntry.toURL() + localFileName;
    var fileTransfer = new FileTransfer();
    // log('FilePath ' + filepath);
    fileTransfer.download(toDownloadUrl, filepath,
      function(fileEntry) {
        navigator && navigator.notification.alert(
          
            `Download complete: ${filepath}`, // message
            function () {},        // callback
            ''           // title
            // 'Done'                  // buttonName
        );
      },
      function(error) {
        navigator && navigator.notification.alert(
            "ErrorDownload: " + JSON.stringify(error) // message
            // function () {},        // callback
            // 'Download info',            // title
            // 'Done'                  // buttonName
        );
      },
      true, {}
    );
  });
}