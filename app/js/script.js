// Mobile menu 

const body = document.querySelector(".body");
const hamburger = document.querySelector(".header_hamburger");
const close = document.querySelector(".header_close");
const menu = document.querySelector(".header_menu_mobile");
const background = document.querySelector(".header_menu_mobile_background");

/////////////////////

//Menu functionality function

function mobileMenu(){
    if(background.classList.contains("mobile")){
        body.classList.remove("mobile");
        hamburger.classList.remove("mobile");
        close.classList.remove("mobile");
        menu.classList.remove("mobile");
        background.classList.remove("mobile");
    }
    else{
        body.classList.add("mobile");
        hamburger.classList.add("mobile");
        close.classList.add("mobile");
        menu.classList.add("mobile");
        background.classList.add("mobile");
    }
}

hamburger.addEventListener("click", mobileMenu);
close.addEventListener("click", mobileMenu);

//////////////////////

// Bookmarking button

const bookmarkDesktop = document.querySelector(".bookmark_desktop");
const bookmarkMobile = document.querySelector(".bookmark_mobile");

// Bookmarking class functionality

function bookmarking(){
    if( bookmarkDesktop.classList.contains("bookmarked") &&
        bookmarkMobile.classList.contains("bookmarked")
        ){      
        bookmarkDesktop.classList.remove("bookmarked");
        bookmarkMobile.classList.remove("bookmarked");

        bookmarkDesktop.innerHTML = "Bookmark";
    }
    else{
        bookmarkDesktop.classList.add("bookmarked");
        bookmarkMobile.classList.add("bookmarked");

        bookmarkDesktop.innerHTML = "Bookmarked";
    }
}

bookmarkDesktop.addEventListener("click", bookmarking);
bookmarkMobile.addEventListener("click", bookmarking);

/////////////////////

// HTML Variables

let valueBacked = 89914;
let numberBackers = 5007;

// Products left
let bambooRewards = 101;
let blackEditionRewards = 64;
let mahoganyRewards = 0;

// Writing elements in the document
function writeHTMLElements(){    
    //Value backed
    document.querySelector("#valueBacked").innerHTML = valueBacked;

    //Number of backers
    document.querySelector("#numberBackers").innerHTML = numberBackers;

    //Percentage backed
    let progressPercentage = (valueBacked / 100000) * 100;
    document.querySelector(".prices_progress").style.width = `${progressPercentage}%`

    document.querySelectorAll(".bambooLeft").forEach(item => item.innerHTML = bambooRewards);
    document.querySelectorAll(".blackEditionLeft").forEach(item => item.innerHTML = blackEditionRewards);
    document.querySelectorAll(".mahoganyLeft").forEach(item => item.innerHTML = mahoganyRewards);
}
writeHTMLElements()

////////////////////////

// Checking if the rewards are available

// Pledge items
const noRewardItem = document.querySelector(".noReward");
const bambooItem = document.querySelectorAll(".bamboo");
const blackEditionItem = document.querySelectorAll(".blackEdition");
const mahoganyItem = document.querySelectorAll(".mahogany");

function checkAvailable(product, productItem){
    if(product == 0){
        productItem.forEach(item => item.classList.add("unavailable"));
    }
    else if(product != 0){
        productItem.forEach(item => item.classList.remove("unavailable"));
    }
}
checkAvailable(bambooRewards, bambooItem);
checkAvailable(blackEditionRewards, blackEditionItem);
checkAvailable(mahoganyRewards, mahoganyItem);

///////////////////////

//Pledge menu

//Displaying the confirmation div according to each ratio button

// productItem constants declared at line 96
// Radio buttons
const noRewardRadio = document.querySelector("#noReward");
const bambooRadio = document.querySelector("#bamboo");
const blackEditionRadio = document.querySelector("#blackEdition");
const mahoganyRadio = document.querySelector("#mahogany");

// Confirmation divs
const confirmednoReward = document.querySelector(".confirmed_noReward");
const confirmedBamboo = document.querySelector(".confirmed_bamboo");
const confirmedBlackEdition = document.querySelector(".confirmed_blackEdition");
const confirmedMahogany = document.querySelector(".confirmed_mahogany");

//Adding the confirmation div and updating the border colors
function noRewardSelection(){
    confirmednoReward.classList.add("pledge_item_confirm");
    confirmedBamboo.classList.remove("pledge_item_confirm");
    confirmedBlackEdition.classList.remove("pledge_item_confirm");
    confirmedMahogany.classList.remove("pledge_item_confirm");

    noRewardItem.style.border = "0.1px solid hsl(176, 50%, 47%)";
    bambooItem[1].style.border = "0.1px solid #e0e0e0";
    blackEditionItem[1].style.border = "0.1px solid #e0e0e0";
    mahoganyItem[1].style.border = "0.1px solid #e0e0e0";
}
function bambooSelection(){
    confirmednoReward.classList.remove("pledge_item_confirm");
    confirmedBamboo.classList.add("pledge_item_confirm");
    confirmedBlackEdition.classList.remove("pledge_item_confirm");
    confirmedMahogany.classList.remove("pledge_item_confirm");

    noRewardItem.style.border = "0.1px solid #e0e0e0";
    bambooItem[1].style.border = "0.1px solid hsl(176, 50%, 47%)";
    blackEditionItem[1].style.border = "0.1px solid #e0e0e0";
    mahoganyItem[1].style.border = "0.1px solid #e0e0e0";
}
function blackEditionSelection(){
    confirmednoReward.classList.remove("pledge_item_confirm");
    confirmedBamboo.classList.remove("pledge_item_confirm");
    confirmedBlackEdition.classList.add("pledge_item_confirm");
    confirmedMahogany.classList.remove("pledge_item_confirm");

    noRewardItem.style.border = "0.1px solid #e0e0e0";
    bambooItem[1].style.border = "0.1px solid #e0e0e0";
    blackEditionItem[1].style.border = "0.1px solid hsl(176, 50%, 47%)";
    mahoganyItem[1].style.border = "0.1px solid #e0e0e0";
}
function mahoganySelection(){
    confirmednoReward.classList.remove("pledge_item_confirm");
    confirmedBamboo.classList.remove("pledge_item_confirm");
    confirmedBlackEdition.classList.remove("pledge_item_confirm");
    confirmedMahogany.classList.add("pledge_item_confirm");

    noRewardItem.style.border = "0.1px solid #e0e0e0";
    bambooItem[1].style.border = "0.1px solid #e0e0e0";
    blackEditionItem[1].style.border = "0.1px solid #e0e0e0";
    mahoganyItem[1].style.border = "0.1px solid hsl(176, 50%, 47%)";
}

noRewardRadio.addEventListener("click", noRewardSelection);
bambooRadio.addEventListener("click", bambooSelection);
blackEditionRadio.addEventListener("click", blackEditionSelection);
mahoganyRadio.addEventListener("click", mahoganySelection);

///////////////////

//Opening the pledge menu via support button
const buttonSupport = document.querySelector(".intro_support");

buttonSupport.addEventListener("click", function(){
    pledge.classList.add("pledgeActive");
    pledgeBackground.classList.add("pledgeActive");
})

//Opening the pledge menu via displayed items
const bambooButton = document.querySelector(".bambooView");
const blackEditionButton = document.querySelector(".blackEditionView");
const mahoganyButton = document.querySelector(".mahoganyView");

bambooButton.addEventListener("click", function(){
    pledge.classList.add("pledgeActive");
    pledgeBackground.classList.add("pledgeActive");
    
    bambooRadio.checked = true;
    bambooSelection();

    $('html,body').scrollTop(0);
})
blackEditionButton.addEventListener("click", function(){
    pledge.classList.add("pledgeActive");
    pledgeBackground.classList.add("pledgeActive");
    
    blackEditionRadio.checked = true;
    blackEditionSelection();

    $('html,body').scrollTop(0);
})
mahoganyButton.addEventListener("click", function(){
    pledge.classList.add("pledgeActive");
    pledgeBackground.classList.add("pledgeActive");
    
    mahoganyRadio.checked = true;
    mahoganySelection();

    $('html,body').scrollTop(0);
})

//Closing the pledge menu via the close button

const pledgeClose = document.querySelector(".pledge_close");
const pledge = document.querySelector(".pledge");
const pledgeBackground = document.querySelector(".pledge_background");

pledgeClose.addEventListener("click", function(){
    if(pledge.classList.contains("pledgeActive")){
        pledge.classList.remove("pledgeActive");
        pledgeBackground.classList.remove("pledgeActive");
    }
    else{
        pledge.classList.add("pledgeActive");
        pledgeBackground.classList.add("pledgeActive");
    }
})

///////////////////

// Input pledges
const bambooInput = document.querySelector(".confirmed_bamboo_input");
const blackEditionInput = document.querySelector(".confirmed_blackEdition_input");
const mahoganyInput = document.querySelector(".confirmed_mahogany_input");
// Submit pledges
const noRewardSubmit = document.querySelector(".confirmed_noReward_submit");
const bambooSubmit = document.querySelector(".confirmed_bamboo_submit");
const blackEditionSubmit = document.querySelector(".confirmed_blackEdition_submit");
const mahoganySubmit = document.querySelector(".confirmed_mahogany_submit");
//Thanks for the support
const thanks = document.querySelector(".thanks");


function submitPledge(submit, input, minPledge){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        
        //Pledge with no reward
        if(input == undefined && minPledge == undefined){
            numberBackers += 1;
            writeHTMLElements();

            $('html,body').scrollTop(0);
            pledge.classList.remove("pledgeActive");
            thanks.classList.add("thanksActive");
        }
        //Unavailable items
        else if(
            (bambooRadio.checked == true && bambooRewards==0) ||
            (blackEditionRadio.checked == true && blackEditionRewards==0) ||
            (mahoganyRadio.checked == true && mahoganyRewards==0)
        ){
            alert(`This item is not available at the moment.`)
        }
        //Input lower than min pledge
        else if(input.value < minPledge){
            alert(`You must pledge more than $${minPledge}`)
        }
        //Pledges in general
        else{
            valueBacked += parseFloat(input.value);
            numberBackers += 1;

            if(bambooRadio.checked == true){
                bambooRewards -= 1;
            }
            else if(blackEditionRadio.checked == true){
                blackEditionRewards -= 1;
            }
            else if(mahoganyRadio.checked == true){
                mahoganyRewards -= 1;
            }
            
            //Update html page elements
            writeHTMLElements();

            $('html,body').scrollTop(0);
            pledge.classList.remove("pledgeActive");
            thanks.classList.add("thanksActive");
        }
    })
}
submitPledge(noRewardSubmit);
submitPledge(bambooSubmit, bambooInput, 25);
submitPledge(blackEditionSubmit, blackEditionInput, 75);
submitPledge(mahoganySubmit, mahoganyInput, 200);

//Thanks window - got it!
const thanksButton = document.querySelector(".thanks_button");

thanksButton.addEventListener("click", function(){
    pledgeBackground.classList.remove("pledgeActive");
    thanks.classList.remove("thanksActive");   
})