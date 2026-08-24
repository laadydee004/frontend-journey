const themes = [
  {name: "light mode", message: "You have switched to light mode"},
  {name: "dark mode", message: "You have switched to dark mode"},
  {name: "blue mode", message: "You have switched to blue mode"}
]

const switchButton = document.getElementById("theme-switcher-button");
const themeSDropdown = document.querySelector("#theme-dropdown");
const menuItem =  document.querySelectorAll('[role="menuitem"]');
const status = document.querySelector("#status")
switchButton.addEventListener("click",()=>{
     const expanded = switchButton.getAttribute("aria-expanded") === "true"
     switchButton.setAttribute("aria-expanded", String(!expanded));
   themeSDropdown.hidden = expanded
    
})

menuItem.forEach(item =>{
    item.addEventListener("click",()=>{
      const themeName = item.textContent.trim().toLowerCase();
      const selectedTheme = themes.find(theme => theme.name === themeName);
      status.textContent = selectedTheme.message
      document.body.className = `theme-${themeName}`;
      if(selectedTheme){
        body.style.background = 'black'
      }
    })
})

