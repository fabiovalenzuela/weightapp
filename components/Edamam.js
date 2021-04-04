export async function sendApiRequest(UPC) {
    let APP_ID = "d6a2d254";
    let API_KEY = "893c02ccf6f4bb530970aa7d0b4a39fa";
    await fetch('https://api.edamam.com/api/food-database/v2/parser?upc=' + UPC + '&app_id=' + APP_ID + '&app_key='+ API_KEY).then(response => {
        return response.json();
    }).then((data) => {
        const calories = data.hints[0].food.nutrients.ENERC_KCAL;
        alert('Calories: ' + calories);
    })
}
