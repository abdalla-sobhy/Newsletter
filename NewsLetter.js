let submitButton = document.querySelector(".center-white-area form");

submitButton.addEventListener("submit", function (e) {

    e.preventDefault();


    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailField = document.querySelector(".emailInput");
    let error = document.querySelector(".error");
    if(emailField.value === ""){
        error.classList.remove("invisible");
        emailField.classList.add("redEmailInput");
        return;
    }else if(regex.test(emailField.value)) {
        window.location.href = "file:///C:/Users/ADMIN/OneDrive/Desktop/apps/front-end%20projets/Newsletter2/ThanksPage.html";
    }else{
        error.classList.remove("invisible");
        emailField.classList.add("redEmailInput");
        return;
    }
    error.classList.add("invisible");
    emailField.classList.remove("redEmailInput");

});






// لو حاجة جديدة هظهرها تكون من 2 كلاسس واحد انادي بيه و التاني هيكون فيه فيسيبيليتي هيدن عشان بعد كدة امسحة و اظبطة من السي اس اس اوصلة عادي
// لو لون لنفس الحاجة اعملها كلاس عشان اظبطها بيه النسخة العاديه و انادي بيها في الجافا و نسخة تانية فيها التغييرات و تكون تحتيها عشان البيريوريتي واعملها ادد