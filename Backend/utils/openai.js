

const getOpenAIAPIResponse = async (message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: message }]
        })
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json();

    // ✅ Check for API-level errors (invalid key, quota, etc.)
    if(data.error) {
        throw new Error(`OpenAI API error: ${data.error.message}`);
    }

    return data.choices[0].message.content;
}

export default getOpenAIAPIResponse;