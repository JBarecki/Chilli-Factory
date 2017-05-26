
document.addEventListener('DOMContentLoaded', function(){

// Menu elements
let home = document.querySelector(".home");
let contact = document.querySelector(".contact");
let aboutUs = document.querySelector(".aboutUs");
let fertilizing = document.querySelector(".fertilizing");
let spices = document.querySelector(".spices");
let growing = document.querySelector(".growing");
let peppers = document.querySelector(".peppers");

//Main page
let mainHeader = document.querySelector('.headerClass');
let mainSectionMenu = document.querySelector('section');
let mainFooter = document.querySelector('.footerContainer');

//About Us
let aboutUsHeader = document.querySelector(".aboutUsHeader");
let aboutUsSection = document.querySelector(".aboutUsSection");
let aboutUsFooter = document.querySelector(".aboutUsFooter");
let aboutUsFooterBack = document.querySelector(".aboutUsFooterBack");
let aboutUsFooterBackText = document.querySelector(".aboutUsFooterBackText");

//growing
let growingHeader = document.querySelector(".growingHeader");
let growingSection = document.querySelector(".growingSection");
let growingFooter = document.querySelector(".growingFooter");
let growingFooterBack = document.querySelector(".growingFooterBack");
let growingFooterBackText = document.querySelector(".growingFooterBackText");

//contact
let contactHeader = document.querySelector(".contactHeader");
let contactSection = document.querySelector(".contactSection");
let contactFooter = document.querySelector(".contactFooter");
let contactFooterBack = document.querySelector(".contactFooterBack");
let contactFooterBackText = document.querySelector(".contactFooterBackText");

//peppers
let peppersHeader = document.querySelector(".peppersHeader");
let peppersSection = document.querySelector(".peppersSection");
let peppersFooter = document.querySelector(".peppersFooter");
let peppersFooterBack = document.querySelector(".peppersFooterBack");
let peppersFooterBackText = document.querySelector(".peppersFooterBackText");

//fertilizing
let fertilizingHeader = document.querySelector(".fertilizingHeader");
let fertilizingSection = document.querySelector(".fertilizingSection");
let fertilizingFooter = document.querySelector(".fertilizingFooter");
let fertilizingFooterBack = document.querySelector(".fertilizingFooterBack");
let fertilizingFooterBackText = document.querySelector(".fertilizingFooterBackText");

//spices
let spicesHeader = document.querySelector(".spicesHeader");
let spicesSection = document.querySelector(".spicesSection");
let spicesFooter = document.querySelector(".spicesFooter");
let spicesFooterBack = document.querySelector(".spicesFooterBack");
let spicesFooterBackText = document.querySelector(".spicesFooterBackText");

// main In/Out functions
function mainPageIn() {
  mainHeader.classList.remove("headerOut");
  mainHeader.classList.add("headerIn");
  mainHeader.classList.toggle("hide");

  mainSectionMenu.classList.remove("sectionOut");
  mainSectionMenu.classList.add("sectionIn");
  mainSectionMenu.classList.toggle("hide");
     home.classList.add("sectionIn");
     contact.classList.add("contactIn");
     fertilizing.classList.add("galleryIn");
     growing.classList.add("growingIn");
     seeds.classList.add("seedsIn");
     peppers.classList.add("peppersIn");
     aboutUs.classList.add("aboutUsIn");

     mainFooter.classList.toggle("hide");
     mainFooter.classList.remove("footerOut");
     mainFooter.classList.add("footerIn");

}

function mainPageOut() {
  mainHeader.classList.remove("headerIn");
  mainHeader.classList.add("headerOut");
  setTimeout( function(){
    mainHeader.classList.add("hide");
      }, 1100);

  mainSectionMenu.classList.add("sectionOut");
    setTimeout( function(){
      mainSectionMenu.classList.add("hide");
        }, 1100);

  mainFooter.classList.remove("footerIn");
  mainFooter.classList.add("footerOut");
    setTimeout( function(){
      mainFooter.classList.toggle("hide");
    }, 800);
}

//Events
aboutUs.addEventListener("click", function(){
  mainPageOut();

    aboutUsHeader.classList.remove("aboutUsHeaderOut");
    aboutUsHeader.classList.add("aboutUsHeaderIn");
    aboutUsHeader.classList.toggle("hide");

    aboutUsSection.classList.remove("aboutUsSectionOut");
    aboutUsSection.classList.add("aboutUsSectionIn");
    aboutUsSection.classList.toggle("hide");

    aboutUsFooter.classList.remove("aboutUsFooterOut");
    aboutUsFooter.classList.add("aboutUsFooterIn");
    aboutUsFooter.classList.toggle("hide");
    setTimeout( function(){
      aboutUsFooterBackText.classList.toggle("hide");
    }, 2500);


   });

aboutUsFooterBack.addEventListener("click", function() {
   console.log("click");

  aboutUsHeader.classList.remove("aboutUsHeaderIn");
  aboutUsHeader.classList.add("aboutUsHeaderOut");
   setTimeout( function(){
     aboutUsHeader.classList.add("hide");
       }, 1100);

  aboutUsSection.classList.remove("aboutUsSectionIn");
  aboutUsSection.classList.add("aboutUsSectionOut");
  setTimeout( function(){
    aboutUsSection.classList.add("hide");
      }, 1100);

      aboutUsFooter.classList.remove("aboutUsFooterIn");
      aboutUsFooter.classList.add("aboutUsFooterOut");
      aboutUsFooterBackText.classList.toggle("hide");
      setTimeout( function(){
        aboutUsFooter.classList.add("hide");
          }, 1100);

          setTimeout( function(){
            mainPageIn();
          }, 1100);
});

growing.addEventListener("click", function(){
  mainPageOut();

growingHeader.classList.remove("growingHeaderOut");
growingHeader.classList.add("growingHeaderIn");
growingHeader.classList.toggle("hide");

growingSection.classList.remove("growingSectionOut");
growingSection.classList.add("growingSectionIn");
growingSection.classList.toggle("hide");

growingFooter.classList.remove("growingFooterOut");
growingFooter.classList.add("growingFooterIn");
growingFooter.classList.toggle("hide");
setTimeout( function(){
  growingFooterBackText.classList.toggle("hide");
}, 2500);


});

growingFooterBack.addEventListener("click", function() {
   console.log("click");

  growingHeader.classList.remove("growingHeaderIn");
  growingHeader.classList.add("growingHeaderOut");
   setTimeout( function(){
     growingHeader.classList.add("hide");
       }, 1100);

  growingSection.classList.remove("growingSectionOn");
  growingSection.classList.add("growingSectionOut");
  setTimeout( function(){
    growingSection.classList.add("hide");
      }, 1100);

      growingFooter.classList.remove("growingFooterOn");
      growingFooter.classList.add("growingFooterOut");
      growingFooterBackText.classList.toggle("hide");
      setTimeout( function(){
        growingFooter.classList.add("hide");
          }, 1100);

          setTimeout( function(){
            mainPageIn();
          }, 1100);
});


peppers.addEventListener("click", function(){
  mainPageOut();

peppersHeader.classList.remove("peppersHeaderOut");
peppersHeader.classList.add("peppersHeaderIn");
peppersHeader.classList.toggle("hide");

peppersSection.classList.remove("peppersSectionOut");
peppersSection.classList.add("peppersSectionIn");
peppersSection.classList.toggle("hide");

peppersFooter.classList.remove("peppersFooterOut");
peppersFooter.classList.add("peppersFooterIn");
peppersFooter.classList.toggle("hide");
setTimeout( function(){
  peppersFooterBackText.classList.toggle("hide");
}, 2500);


});

peppersFooterBack.addEventListener("click", function() {
   console.log("click");

  peppersHeader.classList.remove("peppersHeaderIn");
  peppersHeader.classList.add("peppersHeaderOut");
   setTimeout( function(){
     peppersHeader.classList.add("hide");
       }, 1100);

  peppersSection.classList.remove("peppersSectionIn");
  peppersSection.classList.add("peppersSectionOut");
  setTimeout( function(){
    peppersSection.classList.add("hide");
      }, 1100);

      peppersFooter.classList.remove("peppersFooterOn");
      peppersFooter.classList.add("peppersFooterOut");
      peppersFooterBackText.classList.toggle("hide");
      setTimeout( function(){
        peppersFooter.classList.add("hide");
          }, 1100);

          setTimeout( function(){
            mainPageIn();
          }, 1200);
});

contact.addEventListener("click", function(){
  mainPageOut();

contactHeader.classList.remove("contactHeaderOut");
contactHeader.classList.add("contactHeaderIn");
contactHeader.classList.toggle("hide");

contactSection.classList.remove("contactSectionOut");
contactSection.classList.add("contactSectionIn");
contactSection.classList.toggle("hide");

contactFooter.classList.remove("contactFooterOut");
contactFooter.classList.add("contactFooterIn");
contactFooter.classList.toggle("hide");
setTimeout( function(){
  contactFooterBackText.classList.toggle("hide");
}, 2500);

});

contactFooterBack.addEventListener("click", function() {
   console.log("click");

  contactHeader.classList.remove("contactHeaderIn");
  contactHeader.classList.add("contactHeaderOut");
   setTimeout( function(){
     contactHeader.classList.add("hide");
       }, 1100);

  contactSection.classList.remove("contactSectionOn");
  contactSection.classList.add("contactSectionOut");
  setTimeout( function(){
    contactSection.classList.add("hide");
      }, 1100);

      contactFooter.classList.remove("contactFooterOn");
      contactFooter.classList.add("contactFooterOut");
      contactFooterBackText.classList.toggle("hide");
      setTimeout( function(){
        contactFooter.classList.add("hide");
          }, 1100);

          setTimeout( function(){
            mainPageIn();
          }, 1200);
});

fertilizing.addEventListener("click", function(){
  mainPageOut();

fertilizingHeader.classList.remove("fertilizingHeaderOut");
fertilizingHeader.classList.add("fertilizingHeaderIn");
fertilizingHeader.classList.toggle("hide");

fertilizingSection.classList.remove("fertilizingSectionOut");
fertilizingSection.classList.add("fertilizingSectionIn");
fertilizingSection.classList.toggle("hide");

fertilizingFooter.classList.remove("fertilizingFooterOut");
fertilizingFooter.classList.add("fertilizingFooterIn");
fertilizingFooter.classList.toggle("hide");
setTimeout( function(){
  fertilizingFooterBackText.classList.toggle("hide");
}, 2500);

});

fertilizingFooterBack.addEventListener("click", function() {
   console.log("click");

  fertilizingHeader.classList.remove("fertilizingHeaderIn");
  fertilizingHeader.classList.add("fertilizingHeaderOut");
   setTimeout( function(){
     fertilizingHeader.classList.add("hide");
       }, 1100);

  fertilizingSection.classList.remove("fertilizingSectionOn");
  fertilizingSection.classList.add("fertilizingSectionOut");
  setTimeout( function(){
    fertilizingSection.classList.add("hide");
      }, 1100);

      fertilizingFooter.classList.remove("fertilizingFooterOn");
      fertilizingFooter.classList.add("fertilizingFooterOut");
      fertilizingFooterBackText.classList.toggle("hide");
      setTimeout( function(){
        fertilizingFooter.classList.add("hide");
          }, 1100);

          setTimeout( function(){
            mainPageIn();
          }, 1200);
});


spices.addEventListener("click", function(){
  mainPageOut();

spicesHeader.classList.remove("spicesHeaderOut");
spicesHeader.classList.add("spicesHeaderIn");
spicesHeader.classList.toggle("hide");

spicesSection.classList.remove("spicesSectionOut");
spicesSection.classList.add("spicesSectionIn");
spicesSection.classList.toggle("hide");

spicesFooter.classList.remove("spicesFooterOut");
spicesFooter.classList.add("spicesFooterIn");
spicesFooter.classList.toggle("hide");
setTimeout( function(){
  spicesFooterBackText.classList.toggle("hide");
}, 2500);

});

spicesFooterBack.addEventListener("click", function() {
   console.log("click");

  spicesHeader.classList.remove("spicesHeaderIn");
  spicesHeader.classList.add("spicesHeaderOut");
   setTimeout( function(){
     spicesHeader.classList.add("hide");
       }, 1100);

  spicesSection.classList.remove("spicesSectionOn");
  spicesSection.classList.add("spicesSectionOut");
  setTimeout( function(){
    spicesSection.classList.add("hide");
      }, 1100);

      spicesFooter.classList.remove("spicesFooterOn");
      spicesFooter.classList.add("spicesFooterOut");
      spicesFooterBackText.classList.toggle("hide");
      setTimeout( function(){
        spicesFooter.classList.add("hide");
          }, 1100);

          setTimeout( function(){
            mainPageIn();
          }, 1200);
});

}); // DOMContentLoaded
