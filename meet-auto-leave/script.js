backgroundstate();

function backgroundstate() {
  let bgWork = localStorage.getItem('bgWork');

  // if the script is working in the backgroung
  if (bgWork === 1) {
    // show plan icon and hide plane slash icon
    document.querySelector('.fa-plane-slash').style.visibility = 'hidden';
    document.querySelector('.fa-plane').style.visibility = 'visible';
    // disable input field
    document.querySelector('.inputVal').disabled = true;
  } else if (bgWork === 0) {
    // show plan icon and hide plane slash icon
    document.querySelector('.fa-plane-slash').style.visibility = 'visible';
    document.querySelector('.fa-plane').style.visibility = 'hidden';
    // disable input field
    document.querySelector('.inputVal').value = '';
  }
}

document.querySelector('.fa-check').addEventListener('click', () => {
  let obj = {
    value: document.querySelector('.inputVal').value,
  };

  if (obj.value != '') {
    if (obj.value < 0) {
      document.querySelector('.inputvalue').style.border = '2px solid red';
      setTimeout(() => {
        document.querySelector('.inputvalue').style.border = '1px solid black';
      }, 2500);
    } else {
      localStorage.setItem('bgWork', 1);
      document.querySelector('.inputVal').disabled = true;
      // localStorage.setItem('value', obj.value);
      // localStorage.setItem('area', obj.select);
      document.querySelector('.fa-plane-slash').style.visibility = 'hidden';
      document.querySelector('.fa-plane').style.visibility = 'visible';
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
          message: 'checkClicked',
          object: obj,
        });
      });
    }
  } else {
    console.log('enter value');
    document.querySelector('.inputVal').style.border = '2px solid red';
    setTimeout(() => {
      document.querySelector('.inputVal').style.border = '1px solid black';
    }, 2000);
  }
});

document.querySelector('.fa-times').addEventListener('click', () => {
  document.querySelector('.inputVal').disabled = false;
  document.querySelector('.inputVal').value = '';
  localStorage.setItem('bgWork', 0);
  document.querySelector('.fa-plane-slash').style.visibility = 'visible';
  document.querySelector('.fa-plane').style.visibility = 'hidden';
  chrome.tabs.query({ currentWindow: true, actise: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: 'timesClicked' });
  });
});
