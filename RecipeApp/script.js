//-------MODAL-----------------------------------------------------------------------------------

const modalTrigger = document.querySelector(".fa-search"),
  modal = document.querySelector(".modal"),
  modalimg = document.querySelector('.modalimg'),
  modalText = document.querySelector('.modalText'),
  modalCloseBtn = document.querySelector("[data-close]");




function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});
//---------------------------------------------------------------------------------



getRandomMeal()


const mealsContainer = document.querySelector('.mealsContainer');
const randomMealContainer = document.querySelector('.randomRecipeContainer');
const inputField = document.querySelector('.searchBox');
const serachBtn = document.querySelector('.fa-search');

function Meal(meal,src, description) {
    this.meal = meal
    this.src = src
    this.description = description
}

let meals;
!localStorage.meals ? meals = [] : meals = JSON.parse(localStorage.getItem('meals'))

const updateLocal = () => {
    localStorage.setItem('meals', JSON.stringify(meals))
}


async function getRandomMeal() {

    const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    )

    const resData = await response.json();
    const randomMeal = resData.meals[0]
    
    addMeal(randomMeal, true)
}



serachBtn.addEventListener('click', async ()=> {
   let value = inputField.value

   let data = await getMealsBySearch(value);

    if(value.length == 0) {
        inputField.setAttribute('placeholder', 'Ooops, seems you didn`t fill the field;)') 
    } else

    if(data !== null) {
        data.forEach(meal => {
            meals.push(new Meal(meal.strMeal,meal.strMealThumb, meal.strInstructions))
            updateLocal()
            fillFav()
            getInfo()
            inputField.value = ''
            inputField.setAttribute('placeholder', 'Search')
        }) 
    } 
    if(data === null) {
       inputField.value = ''
        inputField.setAttribute('placeholder', 'Ooops, try another meal;)')
    }
    
   
})



async function getMealsBySearch(name) {
    const meals = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name
    )

   const respData = await meals.json()
   const mealBySearch = respData.meals 

   return mealBySearch
}



function addMeal(mealData, random = false) {
    

    randomMealContainer.innerHTML = ` <div class="randomRecipe">
       ${random ? `<p>Random Recipe</p>` : ''} 
    </div>
    <div class="randomRecipe_image">
            <img onclick="getRandomMeal()" class="randomMealImage" src="${mealData.strMealThumb}" alt="Loading">
        </div>
        <div class="randomRecipe_name">
            <p class="randomMealName">${mealData.strMeal}</p>
                <span class="favorite" >
                    <i class="fa fa-heart"></i>
                </span>
    </div>`

    const favBtn = document.querySelector('.fa-heart')

    favBtn.addEventListener('click', (e)=>{
        e.target.style.color = 'rgb(7, 118, 254)'
        
        meals.push(new Meal(mealData.strMeal,mealData.strMealThumb, mealData.strInstructions))
        updateLocal()
        fillFav()
        getInfo()
    })
}

fillFav()
getInfo()

function fillFav() {
    mealsContainer.innerHTML = ""

    if(meals.length > 0) {
        meals.forEach((meal,index) => {
            document.querySelector('.favoriteMeal').style.display = "block"
            mealsContainer.innerHTML += addFavoriteOnPage(meal,index)
        })
    } else {
        document.querySelector('.favoriteMeal').style.display = "none"
    }
}

function addFavoriteOnPage(mealData, index) {

return `<div class="mealsItem">
        <div class="mealsItem_image">
            <img class="favIcons" src="${mealData.src}" alt="${mealData.src}" id=${index}>
            <i id=${index} class="fa fa-trash" onclick="deleteFav(${index})"></i> 
            </div>
        <div class="mealsItem_name">
            <p>${mealData.meal}</p>
        </div>
    </div>
`
}

function getInfo() {
    const favItems = document.querySelectorAll('.favIcons')

    favItems.forEach((item,index) => {
        item.addEventListener('click', () => {
            showContent(index)
            openModal()
        })
    })

    function showContent(index) {
        for(let i = 0; i < meals.length; i++) {
           if(i == index) {
               modalimg.src = meals[i].src
               modalText.innerHTML = meals[i].description
           }

        }
        
    }
    
}   

function deleteFav(index) {
    meals.splice(index,1);
    updateLocal()
    fillFav()
    getInfo()
}




