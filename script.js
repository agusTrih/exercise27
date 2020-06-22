let endpoint = `https://restcountries.eu/rest/v2/all`;
let options = {
    method: "GET",
};
// // async
async function getUsersData() {
    try {
        let response = await fetch(endpoint, options);
        let results = await response.json();
        console.log(results.length);
        results.forEach((result) => {
            console.log(result.name);
        });
    } catch (error) {
        console.log(error);
    }
}

getUsersData();
