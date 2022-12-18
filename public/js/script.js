
function generateImage(e){
    e.preventDefault();
    
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';

    let prompt = document.querySelector('#prompt').value;
    let size = document.querySelector('#size').value;

    if(prompt === ''){
        alert("Please add a description");
        return;
    }
    console.log(prompt, size);

    generateImageRequest(prompt, size);
}

document.querySelector('#image-form').addEventListener('submit', generateImage);


async function generateImageRequest(prompt, size){
    try {
        showSpinner();

        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                prompt,
                size
            })
        });

        if (!response.ok) {
            hideSpinner();
            throw new Error('That image could note be generated!');
        }

        const data = await response.json();
        console.log(data);

        const imageUrl = data.data;
        // View image
        document.querySelector('#image').src = imageUrl;

        hideSpinner();
    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }
}

// spinner management
function showSpinner(){
    document.querySelector('.spinner').classList.add('show');
}

function hideSpinner(){
    document.querySelector('.spinner').classList.remove('show');
}


