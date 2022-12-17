const { Configuration, OpenAIApi } = require('openai');

//const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async(req, res) => {
    const {keyword, size} = req.body
    const imageSize = size === 'small' ? '256x256' : size === 'medium';

    try{
        const response = await openai.createImage({
            prompt,
            n:1,
            size:imageSize
        })

        const imageUrl = response.data.data[0].url;
        res.status(200).json({
            success:true,
            data:imageUrl
        })
    }catch(error){
        console.log(error)
    }
}

module.exports = {generateImage}
/*
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});

console.log(response.data)
*/