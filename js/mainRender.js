/*    let mainLogo = await fetch(imgURL, {
    method: 'POST',
    // body:
        // JSON.stringify('../img/food-band/margarita.jpg'),
    headers: {
        "Content-Type":
            "application/json"
    }

})
*/

let aPizzaPlus = document.createElement("a")
let aTanuki = document.createElement("a")
let aFoodBand = document.createElement("a")
let aSticks = document.createElement("a")
let aGooses = document.createElement("a")
let aPizzaBurger = document.createElement("a")

let buttonAuth = document.createElement("button")
let buttonAuthOption = document.createElement("span")
let buttonAuthText = document.createElement("span")

let buttonOut = document.createElement("button")
let buttonOutOption = document.createElement("span")
let buttonOutText = document.createElement("span")

let buttonCart = document.createElement("button")
let buttonCartOption = document.createElement("span")
let buttonCartText = document.createElement("span")

let searchInput = document.createElement("input")
aPizzaPlus.addEventListener("click", function(event) {
    localStorage.setItem("pageNum", 0)
    window.location.href = "restaurant.html"
})
aTanuki.addEventListener("click", function(event) {
    localStorage.setItem("pageNum", 1)
    window.location.href = "restaurant.html"
})
aFoodBand.addEventListener("click", function(event) {
    localStorage.setItem("pageNum", 2)
    window.location.href = "restaurant.html"
})
aSticks.addEventListener("click", function(event) {
    localStorage.setItem("pageNum", 3)
    window.location.href = "restaurant.html"
})
aGooses.addEventListener("click", function(event) {
    localStorage.setItem("pageNum", 4)
    window.location.href = "restaurant.html"
})
aPizzaBurger.addEventListener("click", function(event) {
    localStorage.setItem("pageNum", 5)
    window.location.href = "restaurant.html"
})

let Accounts = []
let accounts = await fetch('../db/accounts.json')

Accounts = await accounts.json();


let errorAppend = false

let loginField = document.querySelector(".loginfield")
let passwordField = document.querySelector("#password")
addEventListener("click", function(event) {
    if (event.target == buttonAuth || event.target == buttonAuthOption || event.target == buttonAuthText) {
        console.log("123"); 
        document.querySelector("#loginModal").style.display = "block"
    }
    if (event.target == document.querySelector("#close")) {
        document.querySelector("#loginModal").style.display = ""
    } 

    if (event.target == buttonCart || event.target == buttonCartOption || event.target == buttonCartText) {
        document.querySelector("#cart").style.display = "block"
        let error = document.querySelector("#errorCart")
        if (localStorage.getItem("cart") == null || localStorage.getItem("cart").length == 0) {
            if (error == null) {
            let cartP = document.createElement("p")
            cartP.className = "food-name"
            cartP.id = "errorCart"
            cartP.innerHTML = "Товаров нет"
            document.querySelector("#body").append(cartP)
            }
        }
    }
    if (event.target == document.querySelector("#cancel")) {
        document.querySelector("#cart").style.display = ""
    } 

    document.querySelector("#submit").addEventListener("click", (e) => {
        e.preventDefault()
    })
    if (event.target == document.querySelector("#submit")) {
        function accountCheck() {
            console.log(loginField.value);
            console.log(passwordField.value);
            for (let i = 0; i < Accounts.length; i++) {
                if (loginField.value == Accounts[i].login) {      
                    if (passwordField.value == Accounts[i].password) {
                        return true;
                    }
                    else {
                        return false
                    }
                }
            }
            return false
        }
        if (loginField.value.length == 0 || passwordField.value.length == 0 || accountCheck() == false) {
            if (errorAppend == false) {
            let error = document.createElement("p")
            error.innerHTML = "Данные не верны"
            error.style.color = "red"
            document.querySelector("#window").append(error)
            errorAppend = true
            }
        }
        else {
            console.log("123");
            localStorage.setItem("inAcc", true)
            window.location.reload()
        }
    }
    if (event.target == buttonOut || event.target == buttonOutOption || event.target == buttonOutText) {
        localStorage.removeItem("inAcc")
        window.location.reload()
    }
})
addEventListener("input", (event) => {
    let restaurantList = [aPizzaPlus, aTanuki, aFoodBand, aSticks, aGooses, aPizzaBurger]
    let allRestaurantsList = ["Пицца плюс", "Тануки", "FoodBand", "Палки скалки", "Гуси Лебеди", "PizzaBurger"]
    for (let i = 0; i < restaurantList.length; i++) {
    restaurantList.forEach(item => {
        if (item.querySelector(".card-title").innerHTML.toLowerCase().includes(event.target.value)) {
                    item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    })
}
})
function pageRender() {
    let imgURL = 'img/icon/logo.svg'
    let img = document.createElement("img");
    img.src = imgURL;
    document.querySelector(".header").append(img)

    let searchLabel = document.createElement("label")
    searchLabel.className = "address" 
    searchInput = document.createElement("input")
    searchInput.type = "text"
    searchInput.className = "input input-address"
    searchInput.placeholder = "Адрес доставки"
    document.querySelector(".header").append(searchLabel)
    searchLabel.append(searchInput)

    let buttonDiv = document.createElement("div")
    buttonDiv.className = "buttons"
    document.querySelector(".header").append(buttonDiv)

    let span = document.createElement("span")
    span.className = "user-name"
    buttonDiv.append(span)

    buttonAuth.className = "button button-primary button-auth"
    buttonDiv.append(buttonAuth)

    buttonAuthOption.className = "button-auth-svg"
    buttonAuth.append(buttonAuthOption)
    
    buttonAuthText.className = "button-text"
    buttonAuthText.innerHTML = "Войти"
    buttonAuth.append(buttonAuthText)

    buttonCart.className = "button button-cart"
    buttonCart.id = "cart-button"
    if (localStorage.getItem("inAcc") == "true") {
        buttonDiv.append(buttonCart)
    }

    buttonCartOption.className = "button-cart-svg"
    buttonCart.append(buttonCartOption)
    buttonCartText = document.createElement("span")
    buttonCartText.className = "button-text"
    buttonCartText.innerHTML = "Корзина"
    buttonCart.append(buttonCartText)

    buttonOut.className = "button button-primary button-out"
    buttonOut.id = "leave"
    if (localStorage.getItem("inAcc") == "true") {
        buttonDiv.append(buttonOut)
    }

    buttonOutOption.className = "button-out-svg"
    buttonOut.append(buttonOutOption)
    buttonOutText = document.createElement("span")
    buttonOutText.className = "button-text"
    buttonOutText.innerHTML = "Выйти"
    buttonOut.append(buttonOutText)



    let main = document.querySelector(".main")

    let container1 = document.createElement("div")
    container1.className = "container"
    main.append(container1)

    let allPromos = document.createElement("section")
    allPromos.className = "container-promo"
    container1.append(allPromos)

    let pizzaPromo = document.createElement("section")
    pizzaPromo.className = "promo pizza"
    allPromos.append(pizzaPromo)

    let h1Promo = document.createElement("h1")
    h1Promo.className = "promo-title"
    h1Promo.innerHTML = 'Онлайн-сервис<br>доставки еды на дом'
    pizzaPromo.append(h1Promo)

    let pPromo = document.createElement("p")
    pPromo.className = "promo-text"
    pPromo.innerHTML = "Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком"
    pizzaPromo.append(pPromo)



    let restaurants = document.createElement("section")
    restaurants.className = "restaurants"
    allPromos.append(restaurants)

    let searchHeader = document.createElement("div")
    searchHeader.className = "section-heading"
    restaurants.append(searchHeader)

    let h2Search = document.createElement("h2")
    h2Search.className = "section-title"
    h2Search.innerHTML = "Рестораны"
    searchHeader.append(h2Search) 

    let lableSearch = document.createElement("label")
    lableSearch.className = "search"
    searchHeader.append(lableSearch)

    let inputSearch = document.createElement("input")
    inputSearch.className = "input input-search"
    inputSearch.type = "text"
    inputSearch.id = "search"
    inputSearch.placeholder = "Поиск блюд и ресторанов"
    lableSearch.append(inputSearch)


    let allRestaurants = document.createElement("div")
    allRestaurants.className = "cards cards-restaurants"
    restaurants.append(allRestaurants)


    aPizzaPlus.className = "card card-restaurant"
    aPizzaPlus.href = "restaurant.html"
    allRestaurants.append(aPizzaPlus)

    let imgPizzaPlus = document.createElement("img")
    imgPizzaPlus.className = "card-image"
    imgPizzaPlus.alt = "image"
    imgPizzaPlus.src = "img/pizza-plus/preview.jpg"
    aPizzaPlus.append(imgPizzaPlus)

    let divPizzaPlusText = document.createElement("div")
    divPizzaPlusText.className = "card-text"
    aPizzaPlus.append(divPizzaPlusText)

    let divPizzaPlusTextHeading = document.createElement("div")
    divPizzaPlusTextHeading.className = "card-heading"
    divPizzaPlusText.append(divPizzaPlusTextHeading)   
    
    let PizzaPlusH3 = document.createElement("h3")
    PizzaPlusH3.className = "card-title"
    PizzaPlusH3.innerHTML = "Пицца плюс"
    divPizzaPlusTextHeading.append(PizzaPlusH3) 

    let PizzaPlusSpan = document.createElement("h2")
    PizzaPlusSpan.className = "card-tag tag"
    PizzaPlusSpan.innerHTML = "50 мин"
    divPizzaPlusTextHeading.append(PizzaPlusSpan) 

    let divPizzaPlusInfo = document.createElement("div")
    divPizzaPlusInfo.className = "card-info"
    divPizzaPlusText.append(divPizzaPlusInfo)

    let PizzaPlusRating = document.createElement("h3")
    PizzaPlusRating.className = "rating"
    PizzaPlusRating.innerHTML = "4.5"
    divPizzaPlusInfo.append(PizzaPlusRating) 

    let PizzaPlusPrice = document.createElement("h3")
    PizzaPlusPrice.className = "price"
    PizzaPlusPrice.innerHTML = "От 900 ₽"
    divPizzaPlusInfo.append(PizzaPlusPrice) 

    let PizzaPlusCategory = document.createElement("h3")
    PizzaPlusCategory.className = "category"
    PizzaPlusCategory.innerHTML = "Пицца"
    divPizzaPlusInfo.append(PizzaPlusCategory) 



    aTanuki.className = "card card-restaurant"
    aTanuki.href = "restaurant.html"
    allRestaurants.append(aTanuki)

    let imgTanuki = document.createElement("img")
    imgTanuki.className = "card-image"
    imgTanuki.alt = "image"
    imgTanuki.src = "img/tanuki/preview.jpg"
    aTanuki.append(imgTanuki)

    let divTanukiText = document.createElement("div")
    divTanukiText.className = "card-text"
    aTanuki.append(divTanukiText)

    let divTanukiTextHeading = document.createElement("div")
    divTanukiTextHeading.className = "card-heading"
    divTanukiText.append(divTanukiTextHeading)   
    
    let TanukiH3 = document.createElement("h3")
    TanukiH3.className = "card-title"
    TanukiH3.innerHTML = "Тануки"
    divTanukiTextHeading.append(TanukiH3) 

    let TanukiSpan = document.createElement("h2")
    TanukiSpan.className = "card-tag tag"
    TanukiSpan.innerHTML = "60 мин"
    divTanukiTextHeading.append(TanukiSpan) 

    let divTanukiInfo = document.createElement("div")
    divTanukiInfo.className = "card-info"
    divTanukiText.append(divTanukiInfo)

    let TanukiRating = document.createElement("h3")
    TanukiRating.className = "rating"
    TanukiRating.innerHTML = "4.5"
    divTanukiInfo.append(TanukiRating) 

    let TanukiPrice = document.createElement("h3")
    TanukiPrice.className = "price"
    TanukiPrice.innerHTML = "От 1 200 ₽"
    divTanukiInfo.append(TanukiPrice) 

    let TanukiCategory = document.createElement("h3")
    TanukiCategory.className = "category"
    TanukiCategory.innerHTML = "Суши, роллы"
    divTanukiInfo.append(TanukiCategory) 


    aFoodBand.className = "card card-restaurant"
    aFoodBand.href = "restaurant.html"
    allRestaurants.append(aFoodBand)

    let imgFoodBand = document.createElement("img")
    imgFoodBand.className = "card-image"
    imgFoodBand.alt = "image"
    imgFoodBand.src = "img/food-band/preview.jpg"
    aFoodBand.append(imgFoodBand)

    let divFoodBandText = document.createElement("div")
    divFoodBandText.className = "card-text"
    aFoodBand.append(divFoodBandText)

    let divFoodBandTextHeading = document.createElement("div")
    divFoodBandTextHeading.className = "card-heading"
    divFoodBandText.append(divFoodBandTextHeading)   
    
    let FoodBandH3 = document.createElement("h3")
    FoodBandH3.className = "card-title"
    FoodBandH3.innerHTML = "FoodBand"
    divFoodBandTextHeading.append(FoodBandH3) 

    let FoodBandSpan = document.createElement("h2")
    FoodBandSpan.className = "card-tag tag"
    FoodBandSpan.innerHTML = "40 мин"
    divFoodBandTextHeading.append(FoodBandSpan) 

    let divFoodBandInfo = document.createElement("div")
    divFoodBandInfo.className = "card-info"
    divFoodBandText.append(divFoodBandInfo)

    let FoodBandRating = document.createElement("h3")
    FoodBandRating.className = "rating"
    FoodBandRating.innerHTML = "4.5"
    divFoodBandInfo.append(FoodBandRating) 

    let FoodBandPrice = document.createElement("h3")
    FoodBandPrice.className = "price"
    FoodBandPrice.innerHTML = "От 450 ₽"
    divFoodBandInfo.append(FoodBandPrice) 

    let FoodBandCategory = document.createElement("h3")
    FoodBandCategory.className = "category"
    FoodBandCategory.innerHTML = "Пицца"
    divFoodBandInfo.append(FoodBandCategory) 


    aSticks.className = "card card-restaurant"
    aSticks.href = "restaurant.html"
    allRestaurants.append(aSticks)

    let imgSticks = document.createElement("img")
    imgSticks.className = "card-image"
    imgSticks.alt = "image"
    imgSticks.src = "img/palki-skalki/preview.jpg"
    aSticks.append(imgSticks)

    let divSticksText = document.createElement("div")
    divSticksText.className = "card-text"
    aSticks.append(divSticksText)

    let divSticksTextHeading = document.createElement("div")
    divSticksTextHeading.className = "card-heading"
    divSticksText.append(divSticksTextHeading)   
    
    let SticksH3 = document.createElement("h3")
    SticksH3.className = "card-title"
    SticksH3.innerHTML = "Палки скалки"
    divSticksTextHeading.append(SticksH3) 

    let SticksSpan = document.createElement("h2")
    SticksSpan.className = "card-tag tag"
    SticksSpan.innerHTML = "55 мин"
    divSticksTextHeading.append(SticksSpan) 

    let divSticksInfo = document.createElement("div")
    divSticksInfo.className = "card-info"
    divSticksText.append(divSticksInfo)

    let SticksRating = document.createElement("h3")
    SticksRating.className = "rating"
    SticksRating.innerHTML = "4.5"
    divSticksInfo.append(SticksRating) 

    let SticksPrice = document.createElement("h3")
    SticksPrice.className = "price"
    SticksPrice.innerHTML = "От 500 ₽"
    divSticksInfo.append(SticksPrice) 

    let SticksCategory = document.createElement("h3")
    SticksCategory.className = "category"
    SticksCategory.innerHTML = "Пицца"
    divSticksInfo.append(SticksCategory) 


    aGooses.className = "card card-restaurant"
    aGooses.href = "restaurant.html"
    allRestaurants.append(aGooses)

    let imgGooses = document.createElement("img")
    imgGooses.className = "card-image"
    imgGooses.alt = "image"
    imgGooses.src = "img/gusi-lebedi/preview.jpg"
    aGooses.append(imgGooses)

    let divGoosesText = document.createElement("div")
    divGoosesText.className = "card-text"
    aGooses.append(divGoosesText)

    let divGoosesTextHeading = document.createElement("div")
    divGoosesTextHeading.className = "card-heading"
    divGoosesText.append(divGoosesTextHeading)   
    
    let GoosesH3 = document.createElement("h3")
    GoosesH3.className = "card-title"
    GoosesH3.innerHTML = "Гуси Лебеди"
    divGoosesTextHeading.append(GoosesH3) 

    let GoosesSpan = document.createElement("h2")
    GoosesSpan.className = "card-tag tag"
    GoosesSpan.innerHTML = "75 мин"
    divGoosesTextHeading.append(GoosesSpan) 

    let divGoosesInfo = document.createElement("div")
    divGoosesInfo.className = "card-info"
    divGoosesText.append(divGoosesInfo)

    let GoosesRating = document.createElement("h3")
    GoosesRating.className = "rating"
    GoosesRating.innerHTML = "4.5"
    divGoosesInfo.append(GoosesRating) 

    let GoosesPrice = document.createElement("h3")
    GoosesPrice.className = "price"
    GoosesPrice.innerHTML = "От 1000 ₽"
    divGoosesInfo.append(GoosesPrice) 

    let GoosesCategory = document.createElement("h3")
    GoosesCategory.className = "category"
    GoosesCategory.innerHTML = "Русская кухня"
    divGoosesInfo.append(GoosesCategory) 



    aPizzaBurger.className = "card card-restaurant"
    aPizzaBurger.href = "restaurant.html"
    allRestaurants.append(aPizzaBurger)

    let imgPizzaBurger = document.createElement("img")
    imgPizzaBurger.className = "card-image"
    imgPizzaBurger.alt = "image"
    imgPizzaBurger.src = "img/pizza-burger/preview.jpg"
    aPizzaBurger.append(imgPizzaBurger)

    let divPizzaBurgerText = document.createElement("div")
    divPizzaBurgerText.className = "card-text"
    aPizzaBurger.append(divPizzaBurgerText)

    let divPizzaBurgerTextHeading = document.createElement("div")
    divPizzaBurgerTextHeading.className = "card-heading"
    divPizzaBurgerText.append(divPizzaBurgerTextHeading)   
    
    let PizzaBurgerH3 = document.createElement("h3")
    PizzaBurgerH3.className = "card-title"
    PizzaBurgerH3.innerHTML = "PizzaBurger"
    divPizzaBurgerTextHeading.append(PizzaBurgerH3) 

    let PizzaBurgerSpan = document.createElement("h2")
    PizzaBurgerSpan.className = "card-tag tag"
    PizzaBurgerSpan.innerHTML = "45 мин"
    divPizzaBurgerTextHeading.append(PizzaBurgerSpan) 

    let divPizzaBurgerInfo = document.createElement("div")
    divPizzaBurgerInfo.className = "card-info"
    divPizzaBurgerText.append(divPizzaBurgerInfo)

    let PizzaBurgerRating = document.createElement("h3")
    PizzaBurgerRating.className = "rating"
    PizzaBurgerRating.innerHTML = "4.5"
    divPizzaBurgerInfo.append(PizzaBurgerRating) 

    let PizzaBurgerPrice = document.createElement("h3")
    PizzaBurgerPrice.className = "price"
    PizzaBurgerPrice.innerHTML = "От 700 ₽"
    divPizzaBurgerInfo.append(PizzaBurgerPrice) 

    let PizzaBurgerCategory = document.createElement("h3")
    PizzaBurgerCategory.className = "category"
    PizzaBurgerCategory.innerHTML = "Пицца"
    divPizzaBurgerInfo.append(PizzaBurgerCategory) 



    let footer = document.querySelector(".footer")

    let footerContainer = document.createElement("div")
    footerContainer.className = "container"
    footer.append(footerContainer)

    let footerBlock = document.createElement("div")
    footerBlock.className = "footer-block"
    footerContainer.append(footerBlock)

    let footerImg = document.createElement("img")
    footerImg.className = "logo footer-logo"
    footerImg.src = "img/icon/logo.svg"
    footerImg.alt = "logo"
    footerBlock.append(footerImg)

    let footerNav = document.createElement("nav")
    footerNav.className = "footer-nav"
    footerBlock.append(footerNav)

    let aFooterRestaurants = document.createElement("a")
    aFooterRestaurants.className = "footer-link"
    aFooterRestaurants.href = "#"
    aFooterRestaurants.innerHTML = "Ресторанам"
    footerNav.append(aFooterRestaurants)

    let aFooterCouriers = document.createElement("a")
    aFooterCouriers.className = "footer-link"
    aFooterCouriers.href = "#"
    aFooterCouriers.innerHTML = "Курьерам"
    footerNav.append(aFooterCouriers)

    let aFooterCenter = document.createElement("a")
    aFooterCenter.className = "footer-link"
    aFooterCenter.href = "#"
    aFooterCenter.innerHTML = "Пресс-центр"
    footerNav.append(aFooterCenter)

    let aFooterContacts = document.createElement("a")
    aFooterContacts.className = "footer-link"
    aFooterContacts.href = "#"
    aFooterContacts.innerHTML = "Контакты"
    footerNav.append(aFooterContacts)

    let divSocial = document.createElement("div")
    divSocial.className = "social-link"
    footerBlock.append(divSocial)

    let aSocialInsta = document.createElement("a")
    aSocialInsta.className = "social-link"
    aSocialInsta.href = "#"
    let aSocialInstaIMG = document.createElement("img")
    aSocialInstaIMG.src = "img/social/instagram.svg"
    aSocialInstaIMG.alt = "instagram"
    aSocialInsta.append(aSocialInstaIMG)
    divSocial.append(aSocialInsta)

    let aSocialFacebook = document.createElement("a")
    aSocialFacebook.className = "social-link"
    aSocialFacebook.href = "#"
    let aSocialFacebookIMG = document.createElement("img")
    aSocialFacebookIMG.src = "img/social/fb.svg"
    aSocialFacebookIMG.alt = "facebook"
    aSocialFacebook.append(aSocialFacebookIMG)
    divSocial.append(aSocialFacebook)

    let aSocialVK = document.createElement("a")
    aSocialVK.className = "social-link"
    aSocialVK.href = "#"
    let aSocialVKIMG = document.createElement("img")
    aSocialVKIMG.src = "img/social/vk.svg"
    aSocialVKIMG.alt = "vk"
    aSocialVK.append(aSocialVKIMG)
    divSocial.append(aSocialVK)
}
pageRender()