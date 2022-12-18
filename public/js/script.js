document.getElementById('image-form').onsubmit = generateImage

function generateImage(e){
    e.preventDefault();
    let prompt = document.querySelector('.prompt')
    let size = document.querySelector('#size').value

    if(prompt === ''){
        alert("Please add a description")
        return;
    }

    generateImageRequest(prompt, size);
}

async function generateImageRequest(prompt, size){
    try {
        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                prompt,
                size
            })
        })
    } catch (error) {
        console.log(error);
    }
}

