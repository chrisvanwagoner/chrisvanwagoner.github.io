/* app.js */
var clients = [
  {
    name: "FSG, Inc",
    class: "fsg-fsg",
    url: "https://fsg.org/",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: "",
    year: 2022
  },
  {
    name: "Smokefree Oregon",
    class: "sfo",
    url: "https://smokefreeoregon.com",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: "",
    year: 2018
  },
  {
    name: "Entertainment Software Association",
    class: "esa-map",
    url: "https://www.theesa.com/video-game-impact-map/",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "images/fike.jpg",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: "",
    year: 2019
  },
  {
    name: "State of Babies Yearbook",
    class: "ztt-sob",
    url: "https://www.stateofbabies.org",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: "",
    year: 2022
  },
  {
    name: "City Parks Alliance",
    class: "cpa-cpa",
    summary: "A new website build with custom masonry layout of featured content for the nation's only independent nonprofit organization for urban parks.",
    category: "National Nonprofit",
    url: "https://cityparksalliance.org",
    imgPlc: "images/city-parks-alliance.jpg",
    imgSrc: "images/city-parks-alliance@1x.jpg",
    imgSrcSet: "images/city-parks-alliance@2x.jpg 2x",
    imgAlt: "Screenshot of the City Parks Alliance homepage header",
    bgColor: "#E5F4ED",
    year: 2018
  },
  {
    name: "Fike",
    class: "fike",
    summary: "A complete site rebuild to showcase Fike's world renown industrial safety equipment.",
    category: "Industial Safety",
    url: "https://www.fike.com",
    imgPlc: "images/fike.jpg",
    imgSrc: "images/fike@1x.jpg",
    imgSrcSet: "images/fike@2x.jpg 2x",
    imgAlt: "Screenshot of the Fike homepage header",
    bgColor: "rgb(244, 232, 224)",
    year: 2018
  },
  {
    name: "Greater & Greener",
    class: "cpa-gg",
    url: "https://www.greatergreener.org/",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: "",
    year: 2020
  },
  {
    name: "Federal City Council",
    class: "fcc",
    summary: "For over 60 years, Federal City Council has sought to improve civic life in Washington, D.C.",
    category: "DC Nonrofit",
    url: "https://www.federalcitycouncil.org",
    imgPlc: "images/federal-city-council.jpg",
    imgSrc: "images/federal-city-council@1x.jpg",
    imgSrcSet: "images/federal-city-council@2x.jpg 2x",
    imgAlt: "Screenshot of the Federal City Council homepage header",
    bgColor: "#DFE4F0",
    year: 2018
  },
  {
    name: "National Disability Rights Network",
    class: "ndrn",
    url: "https://ndrn.org",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: "",
    year: 2018
  },
  {
    name: "Campaign for Inclusive Care",
    class: "edf-cfic",
    url: "https://campaignforinclusivecare.elizabethdolefoundation.org/",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: "",
    year: 2018
  },
  {
    name: "Caregiver Journey",
    class: "edf-cj",
    url: "https://caregiverjourney.elizabethdolefoundation.org/",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: "",
    year: 2018
  },
  {
    name: "Retail Opportunity Network",
    class: "fsg-ron",
    url: "https://retailopportunitynetwork.org",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: "",
    year: 2018
  },
  {
    name: "Kirk Humanitarian",
    class: "kirk",
    url: "https://kirkhumanitarian.org",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: "",
    year: 2018
  },
  {
    name: "McKinley Advisors",
    class: "mckinley",
    url: "https://www.mckinley-advisors.com/",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: "",
    year: 2018
  }
];

var app = new Vue({
  el: '#app',
  data: {
    clients: clients
  }
});
