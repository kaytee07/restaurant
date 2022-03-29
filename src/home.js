const homejs = (_) => {
  let main = document.createElement("main");
  let div = document.createElement("div");
  let order = document.createElement("button");
  let catchy = document.createElement("h4");
  main.classList.add("change");
  div.classList.add("catch_phrase");
  order.classList.add("order");
  catchy.innerHTML = "The only thing we love more than food is you!";
  order.innerHTML = "Order Now!";

   const appendChild = (main, child) => {
     main.appendChild(child);
   };

  appendChild(main, div);
  appendChild(main, order);
  appendChild(div, catchy);

  return main
};

export default homejs;
