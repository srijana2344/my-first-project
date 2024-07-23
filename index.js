// Side bar
const menuItems = document.querySelectorAll(".menu-item");
// message
const messagesNotification = document.querySelector("#message-notification");
const messages = document.querySelector(".messages");
const messageItems = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const root = document.documentElement;
const colorPalette = document.querySelectorAll(".choose-color span");

// Remove 'active' class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};


 

 

// Add event listeners to menu items
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (item.id !== "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// Messages
// Search chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();

  messageItems.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) !== -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

// Search chat
messageSearch.addEventListener("keyup", searchMessage);

// Highlight message card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// Themes display customization
// Opens modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

// Closes modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

// Close modal
themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

// Fonts

// remove span class for spans and fonts sizes
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    // Change font size
    document.documentElement.style.fontSize = fontSize;
  });
});

// remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

// change primary colors
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    //  remove active classList for color;
    changeActiveColorClass();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-1")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 202;
    }
    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});
