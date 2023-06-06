let step1 = document.getElementById("step1")
let step2 = document.getElementById("step2")
let step3 = document.getElementById("step3")
let step4 = document.getElementById("step4")
let step5 = document.getElementById("step5")

// Step1 Input validation
let validName = false;
let validEmail = false;
let validNum = false;

// Validation made false so no next till all values will correct
if(yourName.value==="" || email.value==="" || phNumber.value===""){
    validName = false;
    validEmail = false;
    validNum = false;
}

// Validation
yourName.addEventListener("blur", ()=>{
    let regex = /^[a-zA-Z]([0-9\sa-zA-Z]){2,30}$/;
    if(regex.test(yourName.value)){
        document.getElementById("validName").style.display = "none";
        yourName.style.border = "1px solid hsl(229, 24%, 87%)";
        validName = true;
    }
    else{
        document.getElementById("validName").style.display = "flex";
        yourName.style.border = "1px solid hsl(354, 84%, 57%)";
    }
})

email.addEventListener("blur", ()=>{
    let regex = /^[a-zA-Z]([a-zA-Z0-9]){2,30}@gmail.com$/;
    if(regex.test(email.value)){
        document.getElementById("validEmail").style.display = "none";
        email.style.border = "1px solid hsl(229, 24%, 87%)";
        validEmail = true;
    }
    else{
        document.getElementById("validEmail").style.display = "flex";
        email.style.border = "1px solid hsl(354, 84%, 57%)";
    }
})

phNumber.addEventListener("blur", ()=>{
    let regex = /^[0-9]{5,12}$/;
    if(regex.test(phNumber.value)){
        document.getElementById("validNum").style.display = "none";
        phNumber.style.border = "1px solid hsl(229, 24%, 87%)";
        validNum = true;
    }
    else{
        document.getElementById("validNum").style.display = "flex";
        phNumber.style.border = "1px solid hsl(354, 84%, 57%)";
    }
})

// Step1 next button after all data will be correct to Step2
let nextBtn1 = document.getElementById("nextBtn1")
nextBtn1.addEventListener("click", ()=>{
    if(validName&&validEmail&&validNum){
        step1.style.display = "none"
        step2.style.display = "flex"
        document.getElementById("page1").style.backgroundColor = "transparent"
        document.getElementById("page1").style.color = "hsl(217, 100%, 97%)"
        document.getElementById("page1").style.border = "2px solid hsl(229, 24%, 87%)"
        document.getElementById("page2").style.backgroundColor = "hsl(206, 94%, 87%)"
        document.getElementById("page2").style.color = "hsl(213, 96%, 18%)"
        document.getElementById("page2").style.border = "none"
    }
    else{
        if(validName){
            document.getElementById("validName").style.display = "none";
            yourName.style.border = "1px solid hsl(229, 24%, 87%)";
        }
        else{
            document.getElementById("validName").style.display = "flex";
            yourName.style.border = "1px solid hsl(354, 84%, 57%)";
        }

        if(validEmail){
            document.getElementById("validEmail").style.display = "none";
            email.style.border = "1px solid hsl(229, 24%, 87%)";
        }
        else{
            document.getElementById("validEmail").style.display = "flex";
            email.style.border = "1px solid hsl(354, 84%, 57%)";
        }
        if(validNum){
            document.getElementById("validNum").style.display = "none";
            phNumber.style.border = "1px solid hsl(229, 24%, 87%)";
        }
        else{
            document.getElementById("validNum").style.display = "flex";
            phNumber.style.border = "1px solid hsl(354, 84%, 57%)";
        }
    }
})

// Step2 element selection 
let arcade = document.getElementById("arcade")
let advance = document.getElementById("advance")
let pro = document.getElementById("pro")
let ar = document.getElementById("ar")
let ad = document.getElementById("ad")
let pr = document.getElementById("pr")
let switchBtn = document.getElementById("switchBtn")
let monthly = document.getElementById("monthly")
let yearly = document.getElementById("yearly")

// Making initial year selection
yearly.classList.add("mainYear")
// Create a new style rule for slider
const style2 = document.createElement('style');
style2.innerHTML = `.slider:before { -webkit-transform: translateX(26px);
                                        -ms-transform: translateX(26px);
                                        transform: translateX(26px); 
                                    }`;
// Append the style rule to the document's head
document.head.appendChild(style2);

// Selection of category
arcade.addEventListener("click", ()=>{
    arcade.style.border = "1px solid hsl(243, 100%, 62%)"
    arcade.style.backgroundColor = "hsl(231, 100%, 99%)"
    advance.style.border = "1px solid hsl(229, 24%, 87%)"
    advance.style.backgroundColor = "transparent"
    pro.style.border = "1px solid hsl(229, 24%, 87%)"
    pro.style.backgroundColor = "transparent"
    if(style2.parentNode){
        document.getElementById("selection").innerText = "Arcade(Yearly)"
        document.getElementById("selectedPrice").innerText = "$90/yr"
    }
    else{
        document.getElementById("selection").innerText = "Arcade(Monthly)"
        document.getElementById("selectedPrice").innerText = "$9/mo"
    }
})
advance.addEventListener("click", ()=>{
    arcade.style.border = "1px solid hsl(229, 24%, 87%)"
    arcade.style.backgroundColor = "transparent"
    advance.style.border = "1px solid rgb(71, 61, 255)"
    advance.style.backgroundColor = "hsl(231, 100%, 99%)"
    pro.style.border = "1px solid hsl(229, 24%, 87%)"
    pro.style.backgroundColor = "transparent"
    if(style2.parentNode){
        document.getElementById("selection").innerText = "Advance(Yearly)"
        document.getElementById("selectedPrice").innerText = "$120/yr"
    }
    else{
        document.getElementById("selection").innerText = "Advance(Monthly)"
        document.getElementById("selectedPrice").innerText = "$12/mo"
    }
})
pro.addEventListener("click", ()=>{
    arcade.style.border = "1px solid hsl(229, 24%, 87%)"
    arcade.style.backgroundColor = "transparent"
    advance.style.border = "1px solid hsl(229, 24%, 87%)"
    advance.style.backgroundColor = "transparent"
    pro.style.border = "1px solid hsl(243, 100%, 62%)"
    pro.style.backgroundColor = "hsl(231, 100%, 99%)"
    if(style2.parentNode){
        document.getElementById("selection").innerText = "Pro(Yearly)"
        document.getElementById("selectedPrice").innerText = "$150/yr"
    }
    else{
        document.getElementById("selection").innerText = "Pro(Monthly)"
        document.getElementById("selectedPrice").innerText = "$15/mo"
    }
})

let arcadeH5 = document.createElement("h5")
let advanceH5 = document.createElement("h5")
let proH5 = document.createElement("h5")
let arcadeH6 = document.createElement("h6")
let advanceH6 = document.createElement("h6")
let proH6 = document.createElement("h6")
    
// For dynamic style addition and removal
function toggleStyleElement() {
    if (style2.parentNode) {
        //If styleElement is present in the DOM, remove it
        style2.parentNode.removeChild(style2);
        // for monthly
        arcadeH5.innerText = "$9/mo"
        ar.appendChild(arcadeH5)
        advanceH5.innerText = "$12/mo"
        ad.appendChild(advanceH5)
        proH5.innerText = "$15/mo"
        pr.appendChild(proH5)
        if(ar.contains(arcadeH6) && ad.contains(advanceH6) && pr.contains(proH6)){
            ar.removeChild(arcadeH6)
            ad.removeChild(advanceH6)
            pr.removeChild(proH6)
        }

        // For when if didn't click on subscription card
        if(window.getComputedStyle(arcade).getPropertyValue('border')==="1px solid rgb(71, 61, 255)"){
            document.getElementById("selection").innerText = "Arcade(Monthly)"
            document.getElementById("selectedPrice").innerText = "$9/mo"
        }
        else if(window.getComputedStyle(advance).getPropertyValue('border')==="1px solid rgb(71, 61, 255)"){
            document.getElementById("selection").innerText = "Advance(Monthly)"
            document.getElementById("selectedPrice").innerText = "$12/mo"
        }
        else if(window.getComputedStyle(pro).getPropertyValue('border')==="1px solid rgb(71, 61, 255)"){
            document.getElementById("selection").innerText = "Pro(Monthly)"
            document.getElementById("selectedPrice").innerText = "$15/mo"
        }
      
    } else {
        // If styleElement is not present in the DOM, add it to the document's head
        document.head.appendChild(style2);
        // for yearly
        arcadeH5.innerText = "$90/yr"
        ar.appendChild(arcadeH5)
        advanceH5.innerText = "$120/yr"
        ad.appendChild(advanceH5)
        proH5.innerText = "$150/yr"
        pr.appendChild(proH5)
        
        arcadeH6.innerText = "2 months free"
        advanceH6.innerText = "2 months free"
        proH6.innerText = "2 months free"
        ar.appendChild(arcadeH6)
        ad.appendChild(advanceH6)
        pr.appendChild(proH6)

        // For when if didn't click on subscription card
        if(window.getComputedStyle(arcade).getPropertyValue('border')==="1px solid rgb(71, 61, 255)"){
            document.getElementById("selection").innerText = "Arcade(Yearly)"
            document.getElementById("selectedPrice").innerText = "$90/yr"
        }
        else if(window.getComputedStyle(advance).getPropertyValue('border')==="1px solid rgb(71, 61, 255)"){
            document.getElementById("selection").innerText = "Advance(Yearly)"
            document.getElementById("selectedPrice").innerText = "$120/yr"
        }
        else if(window.getComputedStyle(pro).getPropertyValue('border')==="1px solid rgb(71, 61, 255)"){
            document.getElementById("selection").innerText = "Pro(Yearly)"
            document.getElementById("selectedPrice").innerText = "$150/yr"
        }
    }
  }

// Click on slider for yearly and monthly initially it will be yearly
switchBtn.addEventListener("click", ()=>{
    document.getElementById("arH5").style.display = "none"
    document.getElementById("adH5").style.display = "none"
    document.getElementById("prH5").style.display = "none"
    document.getElementById("arH6").style.display = "none"
    document.getElementById("adH6").style.display = "none"
    document.getElementById("prH6").style.display = "none"
    monthly.classList.toggle("monthToggle");
    yearly.classList.toggle("yearToggle");
    toggleStyleElement()
})

// Step2 previous button to Step1
let prevBtn2 = document.getElementById("prevBtn2")
prevBtn2.addEventListener("click", ()=>{
    step1.style.display = "flex"
    step2.style.display = "none"
    document.getElementById("page1").style.backgroundColor = "hsl(206, 94%, 87%)"
    document.getElementById("page1").style.color = "hsl(213, 96%, 18%)"
    document.getElementById("page1").style.border = "none"
    document.getElementById("page2").style.backgroundColor = "transparent"
    document.getElementById("page2").style.color = "hsl(217, 100%, 97%)"
    document.getElementById("page2").style.border = "2px solid hsl(229, 24%, 87%)"
})

let mo1H6 = document.createElement("h6")
let mo2H6 = document.createElement("h6")
let mo3H6 = document.createElement("h6")
let yr1H6 = document.createElement("h6")
let yr2H6 = document.createElement("h6")
let yr3H6 = document.createElement("h6")
let addOn1 = document.getElementById("addOns1")

// Step2 next button to Step3
let nextBtn2 = document.getElementById("nextBtn2")
nextBtn2.addEventListener("click", ()=>{
    step2.style.display = "none"
    step3.style.display = "flex"
    document.getElementById("page2").style.backgroundColor = "transparent"
    document.getElementById("page2").style.color = "hsl(217, 100%, 97%)"
    document.getElementById("page2").style.border = "2px solid hsl(229, 24%, 87%)"
    document.getElementById("page3").style.backgroundColor = "hsl(206, 94%, 87%)"
    document.getElementById("page3").style.color = "hsl(213, 96%, 18%)"
    document.getElementById("page3").style.border = "none"

    // Addons monthly or yearly addons to step3
    if(style2.parentNode){
        console.log("if")
        yr1H6.innerText = "+$10/yr"
        yr2H6.innerText = "+$20/yr"
        yr3H6.innerText = "+$20/yr"
        addOn1.appendChild(yr1H6)
        addOn2.appendChild(yr2H6)
        addOn3.appendChild(yr3H6)
        if(addOn1.contains(mo1H6) && addOn2.contains(mo2H6) && addOn3.contains(mo3H6)){
            addOn1.removeChild(mo1H6)
            addOn2.removeChild(mo2H6)
            addOn3.removeChild(mo3H6)
        }
    }
    else{
        console.log("else")
        mo1H6.innerText = "+$1/mo"
        mo2H6.innerText = "+$2/mo"
        mo3H6.innerText = "+$2/mo"
        addOn1.appendChild(mo1H6)
        addOn2.appendChild(mo2H6)
        addOn3.appendChild(mo3H6)
        if(addOn1.contains(yr1H6) && addOn2.contains(yr2H6) && addOn3.contains(yr3H6)){
            addOn1.removeChild(yr1H6)
            addOn2.removeChild(yr2H6)
            addOn3.removeChild(yr3H6)
        }  
    }
})

// Selecting addons
addOn1.addEventListener("click", ()=>{
    addOn1.classList.toggle("addOnToggle")
    document.getElementById("check1").classList.toggle("svgToggle")
    document.getElementById("svg1").classList.toggle("svgToggle")
})

let addOn2 = document.getElementById("addOns2")
addOn2.addEventListener("click", ()=>{
    addOn2.classList.toggle("addOnToggle")
    document.getElementById("check2").classList.toggle("svgToggle")
    document.getElementById("svg2").classList.toggle("svgToggle")
})

let addOn3 = document.getElementById("addOns3")
addOn3.addEventListener("click", ()=>{
    addOn3.classList.toggle("addOnToggle")
    document.getElementById("check3").classList.toggle("svgToggle")
    document.getElementById("svg3").classList.toggle("svgToggle")
})

// Step3 previous button to Step2
let prevBtn3 = document.getElementById("prevBtn3")
prevBtn3.addEventListener("click", ()=>{
    step2.style.display = "flex"
    step3.style.display = "none"
    document.getElementById("page2").style.backgroundColor = "hsl(206, 94%, 87%)"
    document.getElementById("page2").style.color = "hsl(213, 96%, 18%)"
    document.getElementById("page2").style.border = "none"
    document.getElementById("page3").style.backgroundColor = "transparent"
    document.getElementById("page3").style.color = "hsl(217, 100%, 97%)"
    document.getElementById("page3").style.border = "2px solid hsl(229, 24%, 87%)"
})

// Step3 next button to Step4
let nextBtn3 = document.getElementById("nextBtn3")
nextBtn3.addEventListener("click", ()=>{
    step3.style.display = "none"
    step4.style.display = "flex"
    document.getElementById("page3").style.backgroundColor = "transparent"
    document.getElementById("page3").style.color = "hsl(217, 100%, 97%)"
    document.getElementById("page3").style.border = "2px solid hsl(229, 24%, 87%)"
    document.getElementById("page4").style.backgroundColor = "hsl(206, 94%, 87%)"
    document.getElementById("page4").style.color = "hsl(213, 96%, 18%)"
    document.getElementById("page4").style.border = "none"
})

// Taking subscription from Step2 to Step4
// step No. 129 to 176

// Taking addons from step3 to step4
let ad1;
let ad2;
let ad3;
setInterval(() => {
    if(addOn1.classList.contains("addOnToggle")){
        if(style2.parentNode){
            sp1.innerHTML = ` <h4>Online service</h4>
                               <h5>+$10/yr</h5> `;
            ad1 = 10
        }
        else{
            sp1.innerHTML = ` <h4>Online service</h4>
                               <h5>+$1/mo</h5> `;
            ad1 = 1
        }
    }
    else{
        sp1.innerHTML = ""
        ad1 = 0
    }
    if(addOn2.classList.contains("addOnToggle")){
        if(style2.parentNode){
            sp2.innerHTML = ` <h4>Larger storage</h4>
                               <h5>+$20/yr</h5> `;
            ad2 = 20
        }
        else{
            sp2.innerHTML = ` <h4>Larger storage</h4>
                               <h5>+$2/mo</h5> `;
            ad2 = 2
        }
    }
    else{
        sp2.innerHTML = ""
        ad2 = 0
    }
    if(addOn3.classList.contains("addOnToggle")){
        console.log("addon3")
        if(style2.parentNode){
            console.log("addon3")
            sp3.innerHTML = ` <h4>Customizable Profile</h4>
                               <h5>+$20/yr</h5> `;
            ad3 = 20
        }
        else{
            sp3.innerHTML = ` <h4>Customizable Profile</h4>
                               <h5>+$2/mo</h5> `;
            ad3 = 2
        }
    }  
    else{
        sp3.innerHTML = ""
        ad3 = 0
    }  

    let order1 = Number((document.getElementById("selectedPrice").innerText).slice(1, -3))
    
    if(document.getElementById("selection").textContent.includes("Yearly")){
        document.getElementById("totalStr").innerText = "Total(per year)"
        document.getElementById("totalNum").innerText = `$${order1+ad1+ad2+ad3}/yr`
    }
    else{
        document.getElementById("totalStr").innerText = "Total(per month)"
        document.getElementById("totalNum").innerText = `$${order1+ad1+ad2+ad3}/mo`
    }  
}, 500);



// Step4 change button to step2
let change = document.getElementById("change")
change.addEventListener("click", ()=>{
    step2.style.display = "flex"
    step4.style.display = "none"
    document.getElementById("page2").style.backgroundColor = "hsl(206, 94%, 87%)"
    document.getElementById("page2").style.color = "hsl(213, 96%, 18%)"
    document.getElementById("page2").style.border = "none"
    document.getElementById("page4").style.backgroundColor = "transparent"
    document.getElementById("page4").style.color = "hsl(217, 100%, 97%)"
    document.getElementById("page4").style.border = "2px solid hsl(229, 24%, 87%)"
})

// Step4 previous button to Step3
let prevBtn4 = document.getElementById("prevBtn4")
prevBtn4.addEventListener("click", ()=>{
    step3.style.display = "flex"
    step4.style.display = "none"
    document.getElementById("page3").style.backgroundColor = "hsl(206, 94%, 87%)"
    document.getElementById("page3").style.color = "hsl(213, 96%, 18%)"
    document.getElementById("page3").style.border = "none"
    document.getElementById("page4").style.backgroundColor = "transparent"
    document.getElementById("page4").style.color = "hsl(217, 100%, 97%)"
    document.getElementById("page4").style.border = "2px solid hsl(229, 24%, 87%)"
})

// Step4 confirm button to Step5
let confirmBtn = document.getElementById("confirmBtn")
confirmBtn.addEventListener("click", ()=>{
    step4.style.display = "none"
    step5.style.display = "flex"
})



