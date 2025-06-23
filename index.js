const card_containers = document.querySelectorAll(".card-contain");
const inputInfos = document.querySelectorAll(".inputInfo");
const error_placeholder = document.querySelectorAll(".card-contain form p");
const cards = document.querySelectorAll(".card");
const plan1 = document.querySelector(".plan-price1");
const plan2 = document.querySelector(".plan-price2");
const plan3 = document.querySelector(".plan-price3");
const text1 = document.querySelector(".plan-text1");
const text2 = document.querySelector(".plan-text2");
const text3 = document.querySelector(".plan-text3");
const check = document.getElementById("check");
const totalUsersPrice =document.querySelector('.totalPrice')
const allCheck = document.querySelectorAll(".box .box-body input");
const navList = document.querySelectorAll('.listIcon')
let isRecentView = false
let isPlan = false;
let usersPlan = {};
const user_addons = [
  document.querySelector(".user-addons-1"),
  document.querySelector(".user-addons-2"),
  document.querySelector(".user-addons-3"),
];

const user_descriptions = [
  document.querySelector(".user-description-1"),
  document.querySelector(".user-description-2"),
  document.querySelector(".user-description-3"),
];
const user_price = [
  document.querySelector(".user-price-1"),
  document.querySelector(".user-price-2"),
  document.querySelector(".user-price-3"),
];
const user_plan_text = document.querySelector(".user-plan-text");
const user_plan_price = document.querySelector(".user-plan-price");
const userAddonsList = [];
const handleAllCards = (index) => {
  card_containers.forEach((card, i) => {
    if (index === i) {
      card.classList.add("active");
      if (index === 3) {
        handleDisplayFinish();
      }
      if(index === 4){
        isRecentView = true;
       
      }
    } else {
      card.classList.remove("active");
    }
  });
  handleNavIndexList(index)
};

const handleSubmitForm = (e) => {
  let allFilled = true;
  e.preventDefault();
  inputInfos.forEach((input, index) => {
    const p = error_placeholder[index];

    if (input.value === "") {
      input.classList.add("isRequired");
      p.innerHTML = "This filed is required";
    } else {
      input.classList.remove("isRequired");
      p.innerHTML = "";
    }

    if (input.value.trim() === "") {
      allFilled = false;
    }
  });
  if (allFilled) {
    handleAllCards(1);
  }
};

const handlePlanData = (index, { name, price, add_ons }) => {
  cards.forEach((card, i) => {
    if (index === i) {
      card.style = "border: 1px solid hsl(243, 100%, 62%);";
    } else {
      card.style = "border: 0;";
    }
  });
  if (isPlan) {
    if (name == "Arcade") price = 90;
    if (name == "Advanced") price = 120;
    if (name == "Pro") price = 150;
  }
  usersPlan = {
    name,
    price,
    add_ons,
  };
  console.log(usersPlan);
};

check.addEventListener("change", (e) => {
  if (e.target.checked) {
    plan1.innerText = `$${90}/yr`;
    plan2.innerText = `$${120}/yr`;
    plan3.innerText = `$${150}/yr`;
    text1.innerText = "2 months free";
    text2.innerText = "2 months free";
    text3.innerText = "2 months free";
    isPlan = true;
  } else {
    plan1.innerText = `$${9}/mo`;
    plan2.innerText = `$${12}/mo`;
    plan3.innerText = `$${15}/mo`;
    text1.innerText = "";
    text2.innerText = "";
    text3.innerText = "";
    isPlan = false;
  }
});

const handleCheckAddOns = () => {
  let userAddons = {};
  allCheck.forEach((input, index) => {
    input.addEventListener("change", (e) => {
      if (e.target.checked) {
        if (index === 0) {
          userAddons = {
            option: "Online service",
            description: "Access to multiplayer games",
            price: 1,
          };
        } else if (index === 1) {
          userAddons = {
            option: "Larger storage",
            description: "Extra 1TB of cloud save",
            price: 2,
          };
        } else if (index === 2) {
          userAddons = {
            option: "Customizable Profile",
            description: "Custom theme on your profile",
            price: 2,
          };
        } else {
        }
      }
      const combine = {
        ...userAddons,
      };
      userAddonsList.push(combine);
      console.log(userAddonsList);
    });
  });
};
const handleDisplayFinish = () => {
  user_plan_text.innerText = usersPlan.name ?? 'No selected plan';
  user_plan_price.innerText = `$${usersPlan.price ?? 0}/${isPlan ? "year" : "mo"}`;

  userAddonsList.forEach((user,index)=>{
  user_addons[index].innerText = `${user.option}`
  user_descriptions[index].innerText = `${user.description}`
  user_price[index].innerText = `${user.price}`
  });

  totalUsersPrice.innerText = `$${(userAddonsList.reduce((prev,el)=> prev + el.price ,0) + usersPlan.price ?? 0)}`
};
const handleNavIndexList = (listIndex)=>{
    navList.forEach((list,index)=>{
      if(index === listIndex){
        list.classList.add('activeList')
      }
     
      else{
         list.classList.remove('activeList')
      }
    })
}
const handlePrevNavList = (i)=>{
    if(isRecentView)
handleAllCards(i)
}
handleCheckAddOns();
handleAllCards(0);

console.log(document.querySelectorAll('.card-contain'))