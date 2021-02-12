const search = document.getElementById('search');
const submit = document.getElementById('submit');
const mealElement = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealElement = document.getElementById('single-meal');


function searchMeal(e){
  e.preventDefault();
  single_mealElement.innerHTML="";
  
  const term = search.value;
  if(term.trim()){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    .then((res) => res.json())
    .then((data) => {
      
      // resultHeading.innerHTML = `<h2>Search Result for ${term}`;
      if(data.meals === null){
        resultHeading.innerHTML = `<h2>There are no result for ${term}`;
      }
      else{
         mealElement.innerHTML = data.meals
         .map(
           (meal) =>`
           <div class="meal">
           <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
           <div class="meal-info" data-mealID ="${meal.idMeal}">
              <h3>${meal.strMeal}</h3>
           </div>
           </div>
           `)
         .join("");
      }
    });
     
  }
  else{alert("Please insert a value in Search")
}
}
submit.addEventListener('submit', searchMeal);


// function getElementById(mealID) {
//   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
//   .then(res => res.json())
//   .then((data) => {
//     console.log(data);
//   });
// }

// mealElement.addEventListener("click", (e) => {
//   const mealInfo = e.find((item) => { 
//     if(item.classList) {
//       return item.classList.contains("meal-info");
//     } else {
//       return false;
//     }
//   });
//   if(mealInfo) {
//     const mealID = mealInfo.getAttribute("data-mealid");
//     getMealById(mealID);
//   }
// });
