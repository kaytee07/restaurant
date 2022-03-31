const menu = _ => {
     const menus = (imgsrc, food, duration) => {    
         let card = document.createElement("div");
         let img = document.createElement("div");
         let body = document.createElement("div");
         let image = document.createElement("img");
         let foodtype = document.createElement("h4");
         let time = document.createElement("h6");
         let button = document.createElement("button");
         body.classList.add("body");
         card.classList.add("card");
         img.classList.add("img");
         button.classList.add("buy")
         image.setAttribute(
           "src",
           imgsrc
         );
        foodtype.innerHTML = food
        time.innerHTML = duration;
        button.innerHTML = "Order Now";
        body.appendChild(foodtype);
        body.appendChild(time);
        body.appendChild(button);
        img.appendChild(image);
        img.appendChild(body);
        card.appendChild(img)

        return card
     }

     const macAndcheese1 = menus(
       "https://images.unsplash.com/photo-1626028937210-754d2118d5f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=538&q=80",
       "Macaroni and cheese Latte",
       "10 mins"
     );

    const macAndcheese2 = menus(
      "https://images.unsplash.com/photo-1633237308525-cd587cf71926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      "beff steak with broccoli",
      "15 mins"
    );

    const macAndcheese3 = menus(
      "https://images.unsplash.com/photo-1578167732217-76eb7b9f10f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      "rice and vegetable stew",
      "11 mins"
    );

    const macAndcheese4 = menus(
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      "shrimp rice and beef sauce",
      "12 mins"
    );

    const mainmenu = _ => {
          let main = document.createElement("main");
          let heading = document.createElement("div");
          let header = document.createElement("h5");
          let menu = document.createElement("div");
          //classlist
          main.classList.add("main-menu");
          heading.classList.add("heading");
          menu.classList.add("menu");
          header.innerHTML = "Menu";
          
          menu.append(macAndcheese1)
          menu.append(macAndcheese2);
          menu.append(macAndcheese3);
          menu.append(macAndcheese4);
          heading.append(header);
          main.append(heading);
          main.append(menu)

          return main
    }

    


   return mainmenu()
     

}

export default menu;