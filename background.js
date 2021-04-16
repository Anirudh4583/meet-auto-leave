console.log('background script working of algm');
let obj = {};
var t = null;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'checkClicked') {
    obj = request.object;
    console.log(obj);
    if (t != null) {
      clearTimeout(t);
      t = null;
    }
    timefunction();
  }

  if (request.message == 'timesClicked') {
    console.log('button clicked, terminating!');
    clearTimeout(t);
    t = null;
  }
});

function timefunction() {
  const d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  hours = hours < 10 ? '0' + hours : hours; // make in format 01-09
  minutes = minutes < 10 ? '0' + minutes : minutes; // make in format 01-09
  let time = hours + ':' + minutes;
  console.log('time : ' + time);
  if (time == obj.value) {
    console.log('Ending meet');
    try {
      window.document.querySelector('').click();
    } catch {
      console.log('ERROR');
    }
  } else {
    t = setTimeout(timefunction, 60000);
  }
}
