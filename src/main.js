document.addEventListener('keydown', function (e) {
  let eventKey = e.key.toUpperCase()
  if ("AWSEDFTGYHUJ".includes(eventKey)) {
    let audio = new Audio(`../media/${eventKey}.mp3`)
    audio.play();
    console.log('The \'' + eventKey + '\' key was pressed');
  } else {
    console.warn('The wrong key is pressed');
  }
});

