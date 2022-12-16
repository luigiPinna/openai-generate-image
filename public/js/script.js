document.getElementById('image-form').onsubmit = generateImage

function generateImage(e){
    e.preventDefault()
    let keyword = document.querySelector('#promt').value
    let size = document.querySelector('#size').value

    if(prompt === ""){
        alert("Please add a description")
        return
    }

    generateImageRequest(keyword, size)
}

async function generateImageRequest(keyword, size){
    try {
        const response = await fetch('/openai/generate-image', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                keyword,
                size
            })
        })
    } catch (error) {
        console.log(error)
    }
}