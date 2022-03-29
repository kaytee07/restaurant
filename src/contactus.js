
const contactus = _ => {
let main = document.createElement("main");

    const appendChild = (main, child) => {
       main.appendChild(child);
     };

    const sendMsg = _ => {
          let emails = document.createElement("div");
          let headText = document.createElement("h2");
          let header = document.createElement("div");
          let name = document.createElement("label");
          let number = document.createElement("label");
          let message = document.createElement("label");
          let inputName = document.createElement("input");
          let inputNum = document.createElement("input");
          let textArea = document.createElement("textarea");
          main.classList.add("contact");
          emails.classList.add("email");
          header.classList.add("contactus");
          name.setAttribute("for", "name");
          number.setAttribute("for", "number");
          message.setAttribute("for", "message");
          inputName.id = "name";
          inputNum.id = "number";
          textArea.id = "message";

          appendChild(main, emails);
          appendChild(emails,header);
          appendChild(header, headText);
          headText.innerHTML = "Send us a message";
          appendChild(emails, name)
          name.innerHTML = "Enter your name";
          appendChild(emails, inputName);
          appendChild(emails, number);
          number.innerHTML = "Enter your phone Number";
          appendChild(emails, inputNum);
          appendChild(emails, message);
          message.innerHTML = "send us a message";
          appendChild(emails, textArea);
          
          return emails

    }

    sendMsg()
  

}

export default contactus;