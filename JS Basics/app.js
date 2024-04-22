const url = "https://catfact.ninja/fact";
async function getFacts(){
    try {
        let resp = await axios.get(url);
        console.log(resp.data.fact);
    } catch(err) {
        console.log(err);
    }
}

getFacts();