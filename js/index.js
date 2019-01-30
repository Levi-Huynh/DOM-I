const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//nav
let NavItem1 = document.querySelectorAll('a');
NavItem1[0].textContent = "Services";
NavItem1[1].textContent = "Product";
NavItem1[2].textContent = "Vision";
NavItem1[3].textContent = "Features";
NavItem1[4].textContent = "About";
NavItem1[5].textContent = "Contact";
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

NavItem1.forEach(function(currV) {
    return currV.style.color = "green";
});

//appendChild of 'a' element in nav(parent node) 
let nodeLast = document.createElement('a');
nodeLast.href= '#';
nodeLast.textContent= 'Promotions';
let Nav = document.querySelector('nav');
Nav.appendChild(nodeLast);
console.log(Nav);
nodeLast.style.color= 'green';

//prepend of 'a' element in nav(parent node) 
let nodeFirst = document.createElement('a');
nodeFirst.href= '#';
nodeFirst.textContent = 'Sponsors';
Nav.prepend(nodeFirst);
nodeFirst.style.color= 'green';


//cta
let ctaH1 = document.querySelector('h1');
ctaH1.textContent = "DOM Is Awesome";
let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];
let headerImage = document.getElementById("cta-img");
headerImage.src= siteContent["cta"]["img-src"];
button.addEventListener('click', e=> {
      alert('button clicked!')
      e.currentTarget.style.backgroundColor='red';
});

//main content
let elementH4 = document.querySelectorAll('h4');
elementH4[0].textContent = "Features";
elementH4[1].textContent = siteContent["main-content"]["about-h4"];
elementH4[2].textContent = "Services";
elementH4[3].textContent = "Product";
elementH4[4].textContent = "Vision";
let elementP = document.querySelectorAll('p');
elementP[0].textContent = siteContent["main-content"]["features-content"];
elementP[1].textContent = siteContent["main-content"]["about-content"];
elementP[2].textContent = siteContent["main-content"]["services-content"];
elementP[3].textContent = siteContent["main-content"]["product-content"];
elementP[4].textContent = siteContent["main-content"]["vision-content"];
let middleImage = document.getElementById("middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

//contact
elementH4[4].textContent = "Contact";
elementP[5].textContent = siteContent["contact"]["address"];
elementP[6].textContent = siteContent["contact"]["phone"];
elementP[7].textContent = siteContent["contact"]["email"];

