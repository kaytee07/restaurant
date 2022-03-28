const main = (_) => {
  const content = document.getElementById("content");
  const section = document.createElement("section");
  const main = document.createElement("main");
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const divTabs = document.createElement("div");
  const divTab1 = document.createElement("div");
  const divTab2 = document.createElement("div");
  const divTab3 = document.createElement("div");
  const menu1 = document.createElement("h4");
  const menu2 = document.createElement("h4");
  const menu3 = document.createElement("h4");
  const footer = document.createElement("footer");
  header.classList.add("header");
  section.classList.add("landing_page");
  divTabs.classList.add("tabs")
  divTab1.classList.add("tab");
  divTab2.classList.add("tab");
  divTab3.classList.add("tab");
  menu1.classList.add("first");
  menu2.classList.add("second");
  menu3.classList.add("third");


  const appendChild = (main, child) => {
    main.appendChild(child);
  };

  const innerHtml = (elem, item) => {
    elem.innerHtml(item)
  }

  const mains = (_) => {
   [header, main ].map((item, index)=> {
       appendChild(content, item)
   })
 };

 const navBar = _ => {
    [nav, divTabs].map((item, index) => {
      appendChild(header, item);
    });

    [divTab1, divTab2, divTab3].map((item, index)=>{
        appendChild(divTabs, item)
    })

    appendChild(divTab1, menu1);
    appendChild(divTab2, menu2);
    appendChild(divTab3, menu3);

   document.querySelector("nav").innerHTML = "Le Mans";

   document.getElementsByClassName("first")[0].innerHTML = "Home"
   document.getElementsByClassName("second")[0].innerHTML = "Menu";
   document.getElementsByClassName("third")[0].innerHTML = "Contact Us";
 }

 

const render = _ => {
    mains()
    navBar();
    console.log(content)
}

  render()


};

export default main;
