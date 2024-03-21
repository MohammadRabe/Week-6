// Header elements

let header = document.createElement("div");

let logo = document.createElement("h2");;
logo.className = "logo";
logo.append("Mohammad");
header.prepend(logo)

let ul = document.createElement("ul");
// Home Link

let home = document.createElement("li");
let homeLink = document.createElement("a");
homeLink.append("Home");
home.append(homeLink);
ul.append(home);

// Contact Link

let contact = document.createElement("li");
let contactLink = document.createElement("a");
contactLink.append("Contact");
contact.append(contactLink);
ul.append(contact);

// Services Link

let services = document.createElement("li");
let servicesLink = document.createElement("a");
servicesLink.append("Services");
services.append(servicesLink);
ul.append(services);

// About Link

let about = document.createElement("li");
let aboutLink = document.createElement("a");
aboutLink.append("About");
about.append(aboutLink);
ul.append(about);


header.append(ul);
document.body.prepend(header);                
// Body normlization

document.body.style.margin = `0px`;
document.body.style.fontFamily = `Aria,Helvetica,sans-serf`;


// Header Styling -------------------------

header.style.cssText = `position:relative;
                        top:0;
                        background-color:#ffffff;
                        height:80px; 
                        width:100%;
                        color:#116f52;`;

// logo               
                        
logo.style.cssText = `  width:fit-content; 
                        margin : 0px;
                        position: relative;
                        top:25px;
                        left: 40px;
                        font-weight:bold;`;
// links ul
ul.style.cssText = `list-style:none;
                    position:absolute;
                    
                    right:0;
                    top:0;`
// links li

let lis = document.querySelectorAll("li");
lis.forEach(function(li){
li.style.cssText = `display:inline-block;
                    margin-top:15px;
                    margin-right:20px;
                    cursor:pointer;
                    font-weight:600
                    ;`;
});


// Content

let content = document.createElement("div");
content.classList.add("content");

// Products

for (let p = 1; p <= 15; p++) 
{
    let product = document.createElement("div")
    let number = document.createElement("p");
    number.append(p);
    let text = document.createElement("p");
    text.append("Product");
    product.prepend(number);
    product.append(text);
    content.append(product);
    // product styling 
    product.style.cssText =`display:inline-block;
                            margin-left:20px;
                            margin-top:20px;
                            width:calc((100% - 80px)/3);
                            text-align:center;
                            box-sizing:border-box;
                            background-color:#fff;
                            height:130px;`

    number.style.cssText = `font-size:25px;
                            font-weight:bold;`
};

document.body.append(content);

// Content Styling -------------------------

content.style.cssText =`background-color:#edeced;
                        padding:20px;`;

// Footer

let footer = document.createElement("div");
footer.classList.add("footer");
let text = document.createTextNode("Copyright 2024 ©");
footer.appendChild(text);
content.after(footer)
// Footer Styling 

footer.style.cssText = `background-color:rgb(17, 111, 82);
                        color:#fff;
                        display:grid;
                        align-items:center;
                        text-align:center;
                        height: 100px;
                        font-wight:900;
                        font-size:25px;
                        width:100%;`