require("bootstrap-icons/font/bootstrap-icons.css");
const contactus = (_) => {
  let main = document.createElement("main");

  const appendChild = (main, child) => {
    main.appendChild(child);
  };

  const sendMsg = (_) => {
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
    textArea.setAttribute("cols", "20")
    textArea.setAttribute("rows", "6");
    inputName.id = "name";
    inputNum.id = "number";
    textArea.id = "message";

    appendChild(main, emails);
    appendChild(emails, header);
    appendChild(header, headText);
    headText.innerHTML = "Send us a message";
    appendChild(emails, name);
    name.innerHTML = "Enter your name";
    appendChild(emails, inputName);
    appendChild(emails, number);
    number.innerHTML = "Enter your phone Number";
    appendChild(emails, inputNum);
    appendChild(emails, message);
    message.innerHTML = "send us a message";
    appendChild(emails, textArea);

    return emails;
  };

  const contactinfo = (_) => {
    let reach = document.createElement("div");
    let heading = document.createElement("div");
    let header = document.createElement("h2");
    let convenience = document.createElement("h3");
    let number = document.createElement("div");
    let heads = document.createElement("h3");
    let num1 = document.createElement("div");
    let tel = document.createElement("i");
    let telNum = document.createElement("h4");
    let num2 = document.createElement("div");
    let tel2 = document.createElement("i");
    let telNum2 = document.createElement("h4");
    let emails = document.createElement("div");
    let mailHead = document.createElement("h3");
    let em = document.createElement("div");
    let emIcon = document.createElement("i");
    let email = document.createElement("h4");

    //num1
    num1.classList.add("num1");
    tel.classList.add("bi");
    tel.classList.add("bi-telephone");
    telNum.innerHTML = "+233 20 187 2030";
    num1.appendChild(tel);
    num1.appendChild(telNum);

    //num2
    num2.classList.add("num2");
    tel2.classList.add("bi");
    tel2.classList.add("bi-telephone");
    telNum2.innerHTML = "+233 20 187 2030";
    appendChild(num2, tel2);
    appendChild(num2, telNum2);

    //number
    heads.innerHTML = "Phone Numbers";
    heads.classList.add("heads");
    number.classList.add("number");
    number.append(heads);
    number.append(num1);
    number.append(num2);

    //email
    emails.classList.add("emails");
    mailHead.classList.add("heads");
    em.classList.add("em");
    emIcon.classList.add("bi");
    emIcon.classList.add("bi-envelope");
    email.innerHTML = "lemans28@outlook.com";
    emails.append(mailHead);
    emails.append(em);
    em.append(emIcon);
    em.append(email);

    //overall
    heading.classList.add("contactus");
    reach.classList.add("reachus");
    header.innerHTML = "Contacts";
    convenience.innerHTML = "Contact us in a convenient  way";
    heading.append(header);
    reach.append(heading);
    reach.append(convenience);
    reach.append(number);
    reach.append(emails);

    return reach;
  };

  const contactus = (_) => {
    main.classList.add("contact");
    main.append(sendMsg());
    main.append(contactinfo());
    return main;
  };

  return contactus();
};

export default contactus;
