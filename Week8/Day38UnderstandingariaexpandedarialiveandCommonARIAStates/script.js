const menuButton = document.getElementById("menuButton");
const menuList = document.getElementById("menuList");

menuButton.addEventListener(("click"), () =>{
   const expanded = menuButton.getAttribute("aria-expanded") === "true";
   menuButton.setAttribute("aria-expanded", String(!expanded));
   menuList.hidden = expanded
})


// What Is the aria-expanded Attribute, and How Does It Work?
const button2 = document.querySelector(".button2");
const menu = document.getElementById(button2.getAttribute("aria-controls"));

button2.addEventListener(("click"),()=>{
    const expanded2 = button2.getAttribute("aria-expanded") === "true";
    button2.setAttribute("aria-expanded", String(!expanded2));
    menu.hidden = expanded2;
})


const button3 = document.querySelector(".button3");
const menu3 = document.getElementById(button3.getAttribute("aria-owns"));

button3.addEventListener("click",()=>{
    const expanded3 = button3.getAttribute("aria-expanded")  === "true";
    button3.setAttribute("aria-expanded", String(!expanded3));
    menu3.hidden = expanded3
})


document.addEventListener('click', (e) => {
  if (!button3.contains(e.target) && !menu3.contains(e.target)) {
    button3.setAttribute('aria-expanded', 'false');
    menu3.hidden = true;
  }
});     



// What Is the aria-live Attribute, and How Does It Work?
// assertive
document.addEventListener("DOMContentLoaded",()=>{
    const warning = document.querySelector(".session-warning");
    setTimeout(()=>{
        warning.classList.add("visible");
    },100);
    setTimeout(()=>{
        warning.classList.add("fade-out");
    },8000);
    warning.addEventListener("transitionend",()=>{
        if(warning.classList.contains("fade-out")){
            warning.remove()
        }
    })
})

//polite
document.addEventListener("DOMContentLoaded",()=>{
    const success = document.querySelector(".upload-success");
    setTimeout(()=>{
        success.classList.add("visible");
    },100);
    setTimeout(()=>{
        success.classList.add("fade-out");
    },8000);

    success.addEventListener(("transitionend"),()=>{
        if(success.classList.contains("fade-out")){
            success.remove()
        }
    })
})



/* 
What Are Some Common ARIA States Used on Custom Control Elements? */
document.addEventListener("click", (event) => {
  const clickedTab = event.target.closest('[role="tab"]');
  if (!clickedTab) return;

  const tablist = clickedTab.closest('[role="tablist"]');
  const tabs = tablist.querySelectorAll('[role="tab"]');

  tabs.forEach((tab) => {
    const isSelected = tab === clickedTab;
    tab.setAttribute("aria-selected", isSelected);
    tab.tabIndex = isSelected ? 0 : -1;
  });
});

document.addEventListener("keydown", (event) => {
  const activeTab = document.activeElement;
  if (activeTab.getAttribute("role") !== "tab") return;

  const tablist = activeTab.closest('[role="tablist"]');
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const index = tabs.indexOf(activeTab);

  let newIndex = index;
  if (event.key === "ArrowRight") newIndex = (index + 1) % tabs.length;
  if (event.key === "ArrowLeft") newIndex = (index - 1 + tabs.length) % tabs.length;

  if (newIndex !== index) {
    tabs[newIndex].focus();
    tabs[newIndex].click();
  }
});

// What Is the aria-controls Attribute, and How Does It Work?
