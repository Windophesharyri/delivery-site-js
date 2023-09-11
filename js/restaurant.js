export async function db() {

    let buttonAuth = document.createElement("button")
    let buttonAuthOption = document.createElement("span")
    let buttonAuthText = document.createElement("span")

    let Accounts = []
    let accounts = await fetch('../db/accounts.json')

    Accounts = await accounts.json();


    let errorAppend = false

    let loginField = document.querySelector(".loginfield")
    let passwordField = document.querySelector("#password")

    let firstPizzaButtonBuy = document.createElement("button")
    let firstPizzaButtonTextFirst  = document.createElement("span")
    let firstPizzaButtonSpan = document.createElement("span")
    let firstPizzaStrong = document.createElement("strong")

    let secondPizzaButtonBuy = document.createElement("button")
    let secondPizzaButtonTextFirst = document.createElement("span")
    let secondPizzaButtonSpan = document.createElement("span")
    let secondPizzaStrong = document.createElement("strong")

    let thirdPizzaButtonBuy = document.createElement("button")
    let thirdPizzaButtonTextFirst = document.createElement("span")
    let thirdPizzaButtonSpan = document.createElement("span")
    let thirdPizzaStrong = document.createElement("strong")

    let fourthPizzaButtonBuy = document.createElement("button")
    let fourthPizzaButtonTextFirst = document.createElement("span")
    let fourthPizzaButtonSpan = document.createElement("span")
    let fourthPizzaStrong = document.createElement("strong")

    let fifthPizzaButtonBuy = document.createElement("button")
    let fifthPizzaButtonTextFirst = document.createElement("span")
    let fifthPizzaButtonSpan = document.createElement("span")
    let fifthPizzaStrong = document.createElement("strong")

    let sixthPizzaButtonBuy = document.createElement("button")
    let sixthPizzaButtonTextFirst = document.createElement("span")
    let sixthPizzaButtonSpan = document.createElement("span")
    let sixthPizzaStrong = document.createElement("strong")

    document.querySelector("#cart").addEventListener("click", (event) => {
        if (event.target == document.querySelector(".counter-button")) {
            console.dir(event.target.parentElement.parentElement);
            for (let i = 0; i < JSON.parse(localStorage.getItem("cart")).length; i++) {
                if (document.querySelector(".abc")) {
                    console.log("515");
                }
            }
        }
    })
    addEventListener("click", function(event) {
        if (JSON.parse(localStorage.getItem("cart")) != null) {
            try {document.querySelector("#errorCart").remove()} catch (e) {}
        }
        if (event.target == firstPizzaButtonBuy || event.target == firstPizzaButtonTextFirst || event.target == firstPizzaButtonSpan || event.target == firstPizzaStrong) {
            console.log(JSON.parse(localStorage.getItem("cart")));
            if (JSON.parse(localStorage.getItem("cart")) != null) {
                let itemsInStorage = JSON.parse(localStorage.getItem("cart"))
                itemsInStorage.push([{
                    name: firstPizzaInfoHeadingH3.innerHTML.toUpperCase(), 
                    price: firstPizzaStrong.innerHTML, 
                    count: 1}])
                localStorage.setItem("cart", JSON.stringify(itemsInStorage))
            }
            else {
                localStorage.setItem("cart", JSON.stringify([{
                    name: firstPizzaInfoHeadingH3.innerHTML.toUpperCase(), 
                    price: firstPizzaStrong.innerHTML, 
                    count: 1}]))
            }
        }

        if (event.target == secondPizzaButtonBuy || event.target == secondPizzaButtonTextFirst || event.target == secondPizzaButtonSpan || event.target == secondPizzaStrong) {
            console.log(JSON.parse(localStorage.getItem("cart")));
            if (JSON.parse(localStorage.getItem("cart")) != null) {
                let itemsInStorage = JSON.parse(localStorage.getItem("cart"))
                console.log(itemsInStorage);
                itemsInStorage.push({
                    name: secondPizzaInfoHeadingH3.innerHTML.toUpperCase(), 
                    price: secondPizzaStrong.innerHTML, 
                    count: 1})
                console.log(itemsInStorage);
                localStorage.setItem("cart", JSON.stringify(itemsInStorage))
            }
            else {
                localStorage.setItem("cart", JSON.stringify([{
                    name: secondPizzaInfoHeadingH3.innerHTML.toUpperCase(), 
                    price: secondPizzaStrong.innerHTML, 
                    count: 1}]))
            }
        }

        if (event.target == thirdPizzaButtonBuy || event.target == thirdPizzaButtonTextFirst || event.target == thirdPizzaButtonSpan || event.target == thirdPizzaStrong) {
            console.log(JSON.parse(localStorage.getItem("cart")));
            if (JSON.parse(localStorage.getItem("cart")) != null) {
                let itemsInStorage = JSON.parse(localStorage.getItem("cart"))
                itemsInStorage.push({
                    name: thirdPizzaInfoHeadingH3.innerHTML.toUpperCase(), 
                    price: thirdPizzaStrong.innerHTML, 
                    count: 1})
                    localStorage.setItem("cart", JSON.stringify(itemsInStorage))
            }
            else {
                localStorage.setItem("cart", JSON.stringify([{
                    name: thirdPizzaInfoHeadingH3.innerHTML.toUpperCase(), 
                    price: thirdPizzaStrong.innerHTML, 
                    count: 1}]))
            }
        }

        if (event.target == fourthPizzaButtonBuy || event.target == fourthPizzaButtonTextFirst || event.target == fourthPizzaButtonSpan || event.target == fourthPizzaStrong) {
            console.log(JSON.parse(localStorage.getItem("cart")));
            if (JSON.parse(localStorage.getItem("cart")) != null) {
                let itemsInStorage = JSON.parse(localStorage.getItem("cart"))
                itemsInStorage.push({
                    name: fifthPizzaInfoHeadingH3.innerHTML.toUpperCase(), 
                    price: fifthPizzaStrong.innerHTML, 
                    count: 1})
                    localStorage.setItem("cart", JSON.stringify(itemsInStorage))
            }
            else {
                localStorage.setItem("cart", JSON.stringify([{
                    name: fifthPizzaInfoHeadingH3.innerHTML.toUpperCase(), 
                    price: fifthPizzaStrong.innerHTML, 
                    count: 1}]))
            }
        }

        if (event.target == fifthPizzaButtonBuy || event.target == fifthPizzaButtonTextFirst || event.target == fifthPizzaButtonSpan || event.target == fifthPizzaStrong) {
            console.log(JSON.parse(localStorage.getItem("cart")));
            if (JSON.parse(localStorage.getItem("cart")) != null) {
                let itemsInStorage = JSON.parse(localStorage.getItem("cart"))
                itemsInStorage.push({
                    name: sixthPizzaInfoHeadingH3.innerHTML.toUpperCase(), 
                    price: sixthPizzaStrong.innerHTML, 
                    count: 1})
                    localStorage.setItem("cart", JSON.stringify(itemsInStorage))
            }
            else {
                localStorage.setItem("cart", JSON.stringify([{
                    name: sixthPizzaInfoHeadingH3.innerHTML.toUpperCase(), 
                    price: sixthPizzaStrong.innerHTML, 
                    count: 1}]))
            }
        }

        if (event.target == sixthPizzaButtonBuy || event.target == sixthPizzaButtonTextFirst || event.target == sixthPizzaButtonSpan || event.target == sixthPizzaStrong) {
            console.log(JSON.parse(localStorage.getItem("cart")));
            if (JSON.parse(localStorage.getItem("cart")) != null) {
                let itemsInStorage = JSON.parse(localStorage.getItem("cart"))
                itemsInStorage.push({
                    name: firstPizzaInfoHeadingH3.innerHTML.toLowerCase(), 
                    price: firstPizzaStrong.innerHTML, 
                    count: 1})
                    localStorage.setItem("cart", JSON.stringify(itemsInStorage))
            }
            else {
                localStorage.setItem("cart", JSON.stringify([{
                    name: firstPizzaInfoHeadingH3.innerHTML.toLowerCase(), 
                    price: firstPizzaStrong.innerHTML, 
                    count: 1}]))
            }
        }
        if (event.target == buttonAuth || event.target == buttonAuthOption || event.target == buttonAuthText) {
            document.querySelector("#loginModal").style.display = "block"
        }
        if (event.target == document.querySelector("#close")) {
            document.querySelector("#loginModal").style.display = ""
        } 

        if (event.target == buttonCart || event.target == buttonCartOption || event.target == buttonCartText) {
            document.querySelector("#cart").style.display = "block"
            let error = document.querySelector("#errorCart")
            if (JSON.parse(localStorage.getItem("cart")) == null || JSON.parse(localStorage.getItem("cart")).length == 0) {
                if (error == null) {
                let cartP = document.createElement("p")
                cartP.className = "food-name"
                cartP.id = "errorCart"
                cartP.innerHTML = "Товаров нет"
                document.querySelector("#body").append(cartP)
            }
    }
        else {
            if (document.querySelectorAll("#newDiv").length == 0) {
                for (let i = 0; i < JSON.parse(localStorage.getItem("cart")).length; i++) {
                        console.log(JSON.parse(localStorage.getItem("cart"))[i]);
                        console.log(JSON.parse(localStorage.getItem("cart"))[i].name);
                        let divFood = document.createElement("div")
                        divFood.className = "food-row"
                        divFood.id = "newDiv"
                        document.querySelector(".modal-body").append(divFood)

                        let spanPlace = document.createElement("span")
                        spanPlace.className = "food-name"
                        spanPlace.innerHTML = JSON.parse(localStorage.getItem("cart"))[i].name
                        divFood.append(spanPlace)
        
                        let strongPlace = document.createElement("strong")
                        strongPlace.className = "food-price"
                        strongPlace.id = "priceFood"
                        strongPlace.innerHTML = JSON.parse(localStorage.getItem("cart"))[i].price
                        divFood.append(strongPlace)
        
                        let plusMinusDiv = document.createElement("div")
                        plusMinusDiv.className = "food-counter"
                        divFood.append(plusMinusDiv)
        
                        let plusButton = document.createElement("button")
                        plusButton.className = "counter-button"
                        plusButton.innerHTML = "+"
                        plusMinusDiv.append(plusButton)
        
                        let spanPlusMinus = document.createElement("span")
                        spanPlusMinus.className = "counter"
                        spanPlusMinus.innerHTML = JSON.parse(localStorage.getItem("cart"))[i].count
                        plusMinusDiv.append(spanPlusMinus)
        
                        let minusButton = document.createElement("button")
                        minusButton.className = "counter-button"
                        minusButton.innerHTML = "-"
                        plusMinusDiv.append(minusButton)

                        let result = 0
                        document.querySelectorAll("#priceFood").forEach(item => {
                            result = Number(item.innerHTML) + result
                        })
                        console.log(result);
                        document.querySelector(".modal-pricetag").innerHTML = result + "₽"
                    }
                // }
                // let spanPlace = document.createElement("span")
                // spanPlace.className = "food-name"
                // spanPlace.innerHTML = JSON.parse(localStorage.getItem("cart"))[i].name
                // document.querySelector("#body").append(spanPlace)

                // let strongPlace = document.createElement("strong")
                // strongPlace.className = "food-price"
                // strongPlace.innerHTML = JSON.parse(localStorage.getItem("cart"))[i].price
                // document.querySelector("#body").append(strongPlace)

                // let plusMinusDiv = document.createElement("div")
                // plusMinusDiv.className = "food-counter"
                // document.querySelector("#body").append(plusMinusDiv)

                // let plusButton = document.createElement("button")
                // plusButton.className = "counter-button"
                // plusButton.innerHTML = "+"
                // plusMinusDiv.append(plusButton)

                // let spanPlusMinus = document.createElement("span")
                // spanPlusMinus.className = "counter"
                // spanPlusMinus.innerHTML = JSON.parse(localStorage.getItem("cart"))[i].count
                // plusMinusDiv.append(spanPlusMinus)

                // let minusButton = document.createElement("button")
                // minusButton.className = "counter-button"
                // minusButton.innerHTML = "-"
                // plusMinusDiv.append(minusButton)
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
    let page = localStorage.getItem("pageNum")
    let infoRest = []
    let info = []
    if (page == 0) {
        infoRest.push("Пицца Плюс", "От 900 ₽", "Пицца")
        // fetch('../db/pizza-plus.json').then(async (data) => {
        //     let info = await data.json()
        //     info.push(info)})
        let first = await fetch('../db/pizza-plus.json')

        info = await first.json();
        
    }
    if (page == 1) {
        infoRest.push("Тануки", "От 1200 ₽", "Суши, роллы")
        let second = await fetch('../db/tanuki.json')

        info = await second.json();
    }
    if (page == 2) {
        infoRest.push("FoodBand", "От 450 ₽", "Пицца")
        let third = await fetch('../db/food-band.json')

        info = await third.json();
    }
    if (page == 3) {
        infoRest.push("Палки скалки", "От 500 ₽", "Пицца")
        let fourth = await fetch('../db/palki-skalki.json')

        info = await fourth.json();
    }
    if (page == 4) {
        infoRest.push("Гуси Лебеди", "От 1000 ₽", "Русская кухня")
        let fifth = await fetch('../db/gusi-lebedi.json')

        info = await fifth.json();
    }
    if (page == 5) {
        infoRest.push("PizzaBurger", "От 700 ₽", "Пицца")
        let sixth = await fetch('../db/pizza-burger.json')

        info = await sixth.json();
    }
    console.log(infoRest);
    console.log(info)

    let imgURL = 'img/icon/logo.svg'
    let img = document.createElement("img");
    img.src = imgURL;
    document.querySelector(".header").append(img)

    let searchLabel = document.createElement("label")
    searchLabel.className = "address" 
    let searchInput = document.createElement("input")
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

    buttonAuth = document.createElement("button")
    buttonAuth.className = "button button-primary button-auth"
    buttonDiv.append(buttonAuth)

    buttonAuthOption = document.createElement("span")
    buttonAuthOption.className = "button-auth-svg"
    buttonAuth.append(buttonAuthOption)
    
    buttonAuthText = document.createElement("span")
    buttonAuthText.className = "button-text"
    buttonAuthText.innerHTML = "Войти"
    buttonAuth.append(buttonAuthText)

    let buttonCart = document.createElement("button")
    buttonCart.className = "button button-cart"
    buttonCart.id = "cart-button"
    if (localStorage.getItem("inAcc") == "true") {
        buttonDiv.append(buttonCart)
    }

    let buttonCartOption = document.createElement("span")
    buttonCartOption.className = "button-cart-svg"
    buttonCart.append(buttonCartOption)
    let buttonCartText = document.createElement("span")
    buttonCartText.className = "button-text"
    buttonCartText.innerHTML = "Корзина"
    buttonCart.append(buttonCartText)

    let buttonOut = document.createElement("button")
    buttonOut.className = "button button-primary button-out"
    if (localStorage.getItem("inAcc") == "true") {
        buttonDiv.append(buttonOut)
    }

    let buttonOutOption = document.createElement("span")
    buttonOutOption.className = "button-out-svg"
    buttonOut.append(buttonOutOption)
    let buttonOutText = document.createElement("span")
    buttonOutText.className = "button-text"
    buttonOutText.innerHTML = "Выйти"
    buttonOut.append(buttonOutText)
    


    let main = document.querySelector(".main")

    let heading = document.createElement("div")
    heading.className = "container"
    main.append(heading)

    let headingMenu = document.createElement("section")
    headingMenu.className = "menu"
    heading.append(headingMenu)


    let headingDiv = document.createElement("div")
    headingDiv.className = "section-heading"
    headingMenu.append(headingDiv)

    let headingTitle = document.createElement("h2")
    headingTitle.className = "section-title restaurant-title"
    headingTitle.innerHTML = infoRest[0]
    headingDiv.append(headingTitle)

    let headingCardInfo = document.createElement("div")
    headingCardInfo.className = "card-info"
    headingDiv.append(headingCardInfo)

    let headingRating = document.createElement("div")
    headingRating.className = "rating"
    headingRating.innerHTML = "4.5"
    headingDiv.append(headingRating)

    let headingPrice = document.createElement("div")
    headingPrice.className = "price"
    headingPrice.innerHTML = infoRest[1]
    headingDiv.append(headingPrice)

    let headingCategory = document.createElement("div")
    headingCategory.className = "category"
    headingCategory.innerHTML = infoRest[2]
    headingDiv.append(headingCategory)


    let allPizzas = document.createElement("div")
    allPizzas.className = "cards cards-menu"
    headingMenu.append(allPizzas)

    let firstPizza = document.createElement("div")
    firstPizza.className = "card"
    allPizzas.append(firstPizza)

    let firstPizzaImg = document.createElement("img")
    firstPizzaImg.className = "card-image"
    firstPizzaImg.alt = "image"
    firstPizzaImg.src = info[0].image
    firstPizza.append(firstPizzaImg)

    let firstPizzaInfo = document.createElement("div")
    firstPizzaInfo.className = "card-text"
    firstPizza.append(firstPizzaInfo)

    let firstPizzaInfoHeading = document.createElement("div")
    firstPizzaInfoHeading.className = "card-heading"
    firstPizzaInfo.append(firstPizzaInfoHeading)

    let firstPizzaInfoHeadingH3 = document.createElement("h3")
    firstPizzaInfoHeadingH3.className = "card-title card-title-reg"
    firstPizzaInfoHeadingH3.innerHTML = info[0].name
    firstPizzaInfoHeading.append(firstPizzaInfoHeadingH3)

    let firstPizzaInfoBody = document.createElement("div")
    firstPizzaInfoBody.className = "card-info"
    firstPizzaInfo.append(firstPizzaInfoBody)

    let firstPizzaInfoBodyIng = document.createElement("div")
    firstPizzaInfoBodyIng.className = "ingredients"
    firstPizzaInfoBodyIng.innerHTML = info[0].description
    firstPizzaInfoBody.append(firstPizzaInfoBodyIng)

    let firstPizzaButtons = document.createElement("div")
    firstPizzaButtons.className = "card-buttons"
    firstPizzaInfo.append(firstPizzaButtons)

    firstPizzaButtonBuy = document.createElement("button")
    firstPizzaButtonBuy.className = "button button-primary button-add-cart"
    firstPizzaButtons.append(firstPizzaButtonBuy)

    firstPizzaButtonTextFirst = document.createElement("span")
    firstPizzaButtonTextFirst.className = "button-card-text"
    firstPizzaButtonTextFirst.innerHTML = "В корзину"
    firstPizzaButtonBuy.append(firstPizzaButtonTextFirst)

    firstPizzaButtonSpan = document.createElement("span")
    firstPizzaButtonSpan.className = "button-cart-svg"
    firstPizzaButtonBuy.append(firstPizzaButtonSpan)

    firstPizzaStrong = document.createElement("strong")
    firstPizzaStrong.className = "card-price-bold"
    firstPizzaStrong.innerHTML = info[0].price
    firstPizzaButtonBuy.append(firstPizzaStrong)



    let secondPizza = document.createElement("div")
    secondPizza.className = "card"
    allPizzas.append(secondPizza)

    let secondPizzaImg = document.createElement("img")
    secondPizzaImg.className = "card-image"
    secondPizzaImg.alt = "image"
    secondPizzaImg.src = info[1].image
    secondPizza.append(secondPizzaImg)

    let secondPizzaInfo = document.createElement("div")
    secondPizzaInfo.className = "card-text"
    secondPizza.append(secondPizzaInfo)

    let secondPizzaInfoHeading = document.createElement("div")
    secondPizzaInfoHeading.className = "card-heading"
    secondPizzaInfo.append(secondPizzaInfoHeading)

    let secondPizzaInfoHeadingH3 = document.createElement("h3")
    secondPizzaInfoHeadingH3.className = "card-title card-title-reg"
    secondPizzaInfoHeadingH3.innerHTML = info[1].name
    secondPizzaInfoHeading.append(secondPizzaInfoHeadingH3)

    let secondPizzaInfoBody = document.createElement("div")
    secondPizzaInfoBody.className = "card-info"
    secondPizzaInfo.append(secondPizzaInfoBody)

    let secondPizzaInfoBodyIng = document.createElement("div")
    secondPizzaInfoBodyIng.className = "ingredients"
    secondPizzaInfoBodyIng.innerHTML = info[1].description
    secondPizzaInfoBody.append(secondPizzaInfoBodyIng)

    let secondPizzaButtons = document.createElement("div")
    secondPizzaButtons.className = "card-buttons"
    secondPizzaInfo.append(secondPizzaButtons)

    secondPizzaButtonBuy = document.createElement("button")
    secondPizzaButtonBuy.className = "button button-primary button-add-cart"
    secondPizzaButtons.append(secondPizzaButtonBuy)

    secondPizzaButtonTextFirst = document.createElement("span")
    secondPizzaButtonTextFirst.className = "button-card-text"
    secondPizzaButtonTextFirst.innerHTML = "В корзину"
    secondPizzaButtonBuy.append(secondPizzaButtonTextFirst)

    secondPizzaButtonSpan = document.createElement("span")
    secondPizzaButtonSpan.className = "button-cart-svg"
    secondPizzaButtonBuy.append(secondPizzaButtonSpan)

    secondPizzaStrong = document.createElement("strong")
    secondPizzaStrong.className = "card-price-bold"
    secondPizzaStrong.innerHTML = info[1].price
    secondPizzaButtonBuy.append(secondPizzaStrong)



    let thirdPizza = document.createElement("div")
    thirdPizza.className = "card"
    allPizzas.append(thirdPizza)

    let thirdPizzaImg = document.createElement("img")
    thirdPizzaImg.className = "card-image"
    thirdPizzaImg.alt = "image"
    thirdPizzaImg.src = info[2].image
    thirdPizza.append(thirdPizzaImg)

    let thirdPizzaInfo = document.createElement("div")
    thirdPizzaInfo.className = "card-text"
    thirdPizza.append(thirdPizzaInfo)

    let thirdPizzaInfoHeading = document.createElement("div")
    thirdPizzaInfoHeading.className = "card-heading"
    thirdPizzaInfo.append(thirdPizzaInfoHeading)

    let thirdPizzaInfoHeadingH3 = document.createElement("h3")
    thirdPizzaInfoHeadingH3.className = "card-title card-title-reg"
    thirdPizzaInfoHeadingH3.innerHTML = info[2].name
    thirdPizzaInfoHeading.append(thirdPizzaInfoHeadingH3)

    let thirdPizzaInfoBody = document.createElement("div")
    thirdPizzaInfoBody.className = "card-info"
    thirdPizzaInfo.append(thirdPizzaInfoBody)

    let thirdPizzaInfoBodyIng = document.createElement("div")
    thirdPizzaInfoBodyIng.className = "ingredients"
    thirdPizzaInfoBodyIng.innerHTML = info[2].description
    thirdPizzaInfoBody.append(thirdPizzaInfoBodyIng)

    let thirdPizzaButtons = document.createElement("div")
    thirdPizzaButtons.className = "card-buttons"
    thirdPizzaInfo.append(thirdPizzaButtons)

    thirdPizzaButtonBuy = document.createElement("button")
    thirdPizzaButtonBuy.className = "button button-primary button-add-cart"
    thirdPizzaButtons.append(thirdPizzaButtonBuy)

    thirdPizzaButtonTextFirst = document.createElement("span")
    thirdPizzaButtonTextFirst.className = "button-card-text"
    thirdPizzaButtonTextFirst.innerHTML = "В корзину"
    thirdPizzaButtonBuy.append(thirdPizzaButtonTextFirst)

    thirdPizzaButtonSpan = document.createElement("span")
    thirdPizzaButtonSpan.className = "button-cart-svg"
    thirdPizzaButtonBuy.append(thirdPizzaButtonSpan)

    thirdPizzaStrong = document.createElement("strong")
    thirdPizzaStrong.className = "card-price-bold"
    thirdPizzaStrong.innerHTML = info[2].price
    thirdPizzaButtonBuy.append(thirdPizzaStrong)



    let fourthPizza = document.createElement("div")
    fourthPizza.className = "card"
    allPizzas.append(fourthPizza)

    let fourthPizzaImg = document.createElement("img")
    fourthPizzaImg.className = "card-image"
    fourthPizzaImg.alt = "image"
    fourthPizzaImg.src = info[3].image
    fourthPizza.append(fourthPizzaImg)

    let fourthPizzaInfo = document.createElement("div")
    fourthPizzaInfo.className = "card-text"
    fourthPizza.append(fourthPizzaInfo)

    let fourthPizzaInfoHeading = document.createElement("div")
    fourthPizzaInfoHeading.className = "card-heading"
    fourthPizzaInfo.append(fourthPizzaInfoHeading)

    let fourthPizzaInfoHeadingH3 = document.createElement("h3")
    fourthPizzaInfoHeadingH3.className = "card-title card-title-reg"
    fourthPizzaInfoHeadingH3.innerHTML = info[3].name
    fourthPizzaInfoHeading.append(fourthPizzaInfoHeadingH3)

    let fourthPizzaInfoBody = document.createElement("div")
    fourthPizzaInfoBody.className = "card-info"
    fourthPizzaInfo.append(fourthPizzaInfoBody)

    let fourthPizzaInfoBodyIng = document.createElement("div")
    fourthPizzaInfoBodyIng.className = "ingredients"
    fourthPizzaInfoBodyIng.innerHTML = info[3].description
    fourthPizzaInfoBody.append(fourthPizzaInfoBodyIng)

    let fourthPizzaButtons = document.createElement("div")
    fourthPizzaButtons.className = "card-buttons"
    fourthPizzaInfo.append(fourthPizzaButtons)

    fourthPizzaButtonBuy = document.createElement("button")
    fourthPizzaButtonBuy.className = "button button-primary button-add-cart"
    fourthPizzaButtons.append(fourthPizzaButtonBuy)

    fourthPizzaButtonTextFirst = document.createElement("span")
    fourthPizzaButtonTextFirst.className = "button-card-text"
    fourthPizzaButtonTextFirst.innerHTML = "В корзину"
    fourthPizzaButtonBuy.append(fourthPizzaButtonTextFirst)

    fourthPizzaButtonSpan = document.createElement("span")
    fourthPizzaButtonSpan.className = "button-cart-svg"
    fourthPizzaButtonBuy.append(fourthPizzaButtonSpan)

    fourthPizzaStrong = document.createElement("strong")
    fourthPizzaStrong.className = "card-price-bold"
    fourthPizzaStrong.innerHTML = info[3].price
    fourthPizzaButtonBuy.append(fourthPizzaStrong)



    let fifthPizza = document.createElement("div")
    fifthPizza.className = "card"
    allPizzas.append(fifthPizza)

    let fifthPizzaImg = document.createElement("img")
    fifthPizzaImg.className = "card-image"
    fifthPizzaImg.alt = "image"
    fifthPizzaImg.src = info[4].image
    fifthPizza.append(fifthPizzaImg)

    let fifthPizzaInfo = document.createElement("div")
    fifthPizzaInfo.className = "card-text"
    fifthPizza.append(fifthPizzaInfo)

    let fifthPizzaInfoHeading = document.createElement("div")
    fifthPizzaInfoHeading.className = "card-heading"
    fifthPizzaInfo.append(fifthPizzaInfoHeading)

    let fifthPizzaInfoHeadingH3 = document.createElement("h3")
    fifthPizzaInfoHeadingH3.className = "card-title card-title-reg"
    fifthPizzaInfoHeadingH3.innerHTML = info[4].name
    fifthPizzaInfoHeading.append(fifthPizzaInfoHeadingH3)

    let fifthPizzaInfoBody = document.createElement("div")
    fifthPizzaInfoBody.className = "card-info"
    fifthPizzaInfo.append(fifthPizzaInfoBody)

    let fifthPizzaInfoBodyIng = document.createElement("div")
    fifthPizzaInfoBodyIng.className = "ingredients"
    fifthPizzaInfoBodyIng.innerHTML = info[4].description
    fifthPizzaInfoBody.append(fifthPizzaInfoBodyIng)

    let fifthPizzaButtons = document.createElement("div")
    fifthPizzaButtons.className = "card-buttons"
    fifthPizzaInfo.append(fifthPizzaButtons)

    fifthPizzaButtonBuy = document.createElement("button")
    fifthPizzaButtonBuy.className = "button button-primary button-add-cart"
    fifthPizzaButtons.append(fifthPizzaButtonBuy)

    fifthPizzaButtonTextFirst = document.createElement("span")
    fifthPizzaButtonTextFirst.className = "button-card-text"
    fifthPizzaButtonTextFirst.innerHTML = "В корзину"
    fifthPizzaButtonBuy.append(fifthPizzaButtonTextFirst)

    fifthPizzaButtonSpan = document.createElement("span")
    fifthPizzaButtonSpan.className = "button-cart-svg"
    fifthPizzaButtonBuy.append(fifthPizzaButtonSpan)

    fifthPizzaStrong = document.createElement("strong")
    fifthPizzaStrong.className = "card-price-bold"
    fifthPizzaStrong.innerHTML = info[4].price
    fifthPizzaButtonBuy.append(fifthPizzaStrong)



    let sixthPizza = document.createElement("div")
    sixthPizza.className = "card"
    allPizzas.append(sixthPizza)

    let sixthPizzaImg = document.createElement("img")
    sixthPizzaImg.className = "card-image"
    sixthPizzaImg.alt = "image"
    sixthPizzaImg.src = info[5].image
    sixthPizza.append(sixthPizzaImg)

    let sixthPizzaInfo = document.createElement("div")
    sixthPizzaInfo.className = "card-text"
    sixthPizza.append(sixthPizzaInfo)

    let sixthPizzaInfoHeading = document.createElement("div")
    sixthPizzaInfoHeading.className = "card-heading"
    sixthPizzaInfo.append(sixthPizzaInfoHeading)

    let sixthPizzaInfoHeadingH3 = document.createElement("h3")
    sixthPizzaInfoHeadingH3.className = "card-title card-title-reg"
    sixthPizzaInfoHeadingH3.innerHTML = info[5].name
    sixthPizzaInfoHeading.append(sixthPizzaInfoHeadingH3)

    let sixthPizzaInfoBody = document.createElement("div")
    sixthPizzaInfoBody.className = "card-info"
    sixthPizzaInfo.append(sixthPizzaInfoBody)

    let sixthPizzaInfoBodyIng = document.createElement("div")
    sixthPizzaInfoBodyIng.className = "ingredients"
    sixthPizzaInfoBodyIng.innerHTML = info[5].description
    sixthPizzaInfoBody.append(sixthPizzaInfoBodyIng)

    let sixthPizzaButtons = document.createElement("div")
    sixthPizzaButtons.className = "card-buttons"
    sixthPizzaInfo.append(sixthPizzaButtons)

    sixthPizzaButtonBuy = document.createElement("button")
    sixthPizzaButtonBuy.className = "button button-primary button-add-cart"
    sixthPizzaButtons.append(sixthPizzaButtonBuy)

    sixthPizzaButtonTextFirst = document.createElement("span")
    sixthPizzaButtonTextFirst.className = "button-card-text"
    sixthPizzaButtonTextFirst.innerHTML = "В корзину"
    sixthPizzaButtonBuy.append(sixthPizzaButtonTextFirst)

    sixthPizzaButtonSpan = document.createElement("span")
    sixthPizzaButtonSpan.className = "button-cart-svg"
    sixthPizzaButtonBuy.append(sixthPizzaButtonSpan)

    sixthPizzaStrong = document.createElement("strong")
    sixthPizzaStrong.className = "card-price-bold"
    sixthPizzaStrong.innerHTML = info[5].price
    sixthPizzaButtonBuy.append(sixthPizzaStrong)



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
db()