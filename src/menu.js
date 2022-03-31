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
       "/src/img/menu/photo-1604438876548-fb15862d430f.avif",
       "Macaroni and cheese Latte",
       "10 mins"
     );

    const macAndcheese2 = menus(
      "/src/img/menu/photo-1633237308525-cd587cf71926.avif",
      "beff steak with broccoli",
      "15 mins"
    );

    const macAndcheese3 = menus(
      "/src/img/menu/photo-1516714435131-44d6b64dc6a2.avif",
      "rice and vegetable stew",
      "11 mins"
    );

    const macAndcheese4 = menus(
      "/src/img/menu/photo-1632389762435-8c53185e40ae.avif",
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