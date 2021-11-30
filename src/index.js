const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


const nav = document.querySelector('nav');

const firstChild = nav.firstChild;
firstChild.textContent = siteContent['nav']['nav-item-1'];

const secondChild = firstChild.nextElementSibling;
secondChild.textContent = siteContent['nav']['nav-item-2'];

const thirdChild = secondChild.nextElementSibling;
thirdChild.textContent = siteContent['nav']['nav-item-3'];

const fourthChild = thirdChild.nextElementSibling;
fourthChild.textContent = siteContent['nav']['nav-item-4'];

const fifthChild = fourthChild.nextElementSibling;
fifthChild.textContent = siteContent['nav']['nav-item-5'];

const sixthChild = fifthChild.nextElementSibling;
sixthChild.textContent = siteContent['nav']['nav-item-6'];

const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.images['logo-img'];

const domIsAwesome = document.querySelector('.cta-text h1');
domIsAwesome.textContent = siteContent.cta.h1;

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

const bigImg = document.querySelector('#cta-img');
bigImg.src = "http://localhost:9000/img/cta.png";

const midImg = document.querySelector('#middle-img');
midImg.src = "http://localhost:9000/img/accent.png";

const topContent = document.querySelector('.top-content');
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content'];
topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content'];

const bottomContent = document.querySelector('.bottom-content');
const h4sBottom = bottomContent.querySelectorAll('h4');

h4sBottom[0].textContent = siteContent['main-content']['services-h4'];
h4sBottom[1].textContent = siteContent['main-content']['product-h4'];
h4sBottom[2].textContent = siteContent['main-content']['vision-h4'];

const psBottom = bottomContent.querySelectorAll('p')
psBottom[0].textContent = siteContent['main-content']['services-content'];
psBottom[1].textContent = siteContent['main-content']['product-content'];
psBottom[2].textContent = siteContent['main-content']['vision-content'];



const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add('bold');


const contact = document.querySelector('section.contact')

contact.querySelector('h4').textContent = siteContent.contact['contact-h4']
contact.children[1].textContent = siteContent.contact['address']
contact.querySelector('p:nth-og-type(2)').textContent = siteContent.contact['phone']
contact.children[3].textContent = siteContent.contact['email']




