const form = document.getElementById('form');
const reset = document.getElementById('reset');
const spinner = document.getElementById('spinner');
const loading = document.getElementById('loading');
const qrcode = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {

    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;    

    console.log(url, size);

    showSpinner();

    // spinner appears only for 0.5s and after dissappears
    // qrcode function executes after 0.5s
    setTimeout(() => { 
        hideSpinner();
        generateQRCode(url, size);
    }, 500 
    ); 

}

// Generate QR code
const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
      text: url,
      width: size,
      height: size,
    });
  };

// Clear QR code and save button
const clearUI = () => {
    qrcode.innerHTML = ''; // clears the qr code url, so nothing appears anymore
    loading.style.display = "none";
  };

// functions spinner both appear & dissappear
const showSpinner = () => {
    spinner.style.display = "block";
    loading.style.display = "block";
} 

const hideSpinner = () => {
    spinner.style.display = "none";
    loading.style.display = "none";
} 

// spinner doesnt appear at the beginning
hideSpinner();

// on reset, spinner dissapears
const resetResults = (e) => {
    clearUI();
}

reset.addEventListener('click', resetResults);
form.addEventListener('submit', onGenerateSubmit);


// my main reference -> https://www.youtube.com/watch?v=qNiUlml9MDk