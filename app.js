document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = ["Software Dev.", "Science Enthusiast.", "Runner.", "Reader.", "Designer.", "Aiste Tiskeviciute.","(Pronounced Ice-Sta)", "Aiste.🧊"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });



  /**
 * The tab element
 * @type {Element}
 */
 var tabs = document.querySelector('.js-tabs');

 /**
  * All tabs items execept the one that animates the tab
  * @type {Element}
  */
 var tabItems = document.querySelectorAll('.js-tab-item:not(.js-tab-item-main-control)');
 
 /**
  * The tab element that animates the tab
  * @type {Element}
  */
 var tabItemMainControl = document.querySelector('.js-tab-item-main-control');
 
 /**
  * The background of the body
  * @type {Element}
  */
 var coverBackBody = document.querySelector('.js-cover-back-body');
 
 /**
  * The background of the tabs menu
  * @type {Element}
  */
 var coverBackTabs = document.querySelector('.js-cover-back-tabs');
 
 /*
   Trigger the animation of the tabs
     Open the tab and show all tabs items
  */
 tabItemMainControl.addEventListener('click', function(){
   if(tabs.classList.contains('js-tabs-init')){
     tabs.classList.remove('js-tabs-init');
     tabItemMainControl.style.transform = 'rotate(45deg)';
     for(var i = 0; i < tabItems.length; i++){
       tabItems[i].classList.add('js-tab-item-show');
     }
   }else{
     for(var i = 0; i < tabItems.length; i++){
       tabItems[i].classList.remove('js-tab-item-show');
     }
     setTimeout(function(){
       tabItemMainControl.style.transform = 'rotate(0deg)';
       tabs.classList.add('js-tabs-init');
     }, 2000);
   }
 });
 
 /*
   Browse all tabs button
     - To change background
  */
 for(var i = 0; i < tabItems.length; i++){
 
   tabItems[0].classList.add('js-tab-item-active');
 
   tabItems[i].addEventListener('click', function(){
 
     //Toggle the active tab item
     var tabActive = document.querySelector('.js-tab-item-active');
     tabActive.classList.remove('js-tab-item-active');
     this.classList.add('js-tab-item-active');
 
     //Remove the body's background
     coverBackBody.style.animationName = 'remove-background';
     coverBackBody.style.animationDuration = '1s';
     coverBackBody.style.animationTimingFunction = 'linear';
     coverBackBody.style.animationFillMode = 'forwards';
 
     //Remove the tabs background
     coverBackTabs.style.width = 0;
 
     var self = this;
     window.setTimeout(function(){
 
       //Change the body's background
       coverBackBody.style.animationName = 'add-background';
       coverBackBody.style.backgroundImage = 'linear-gradient(#' + self.dataset.gradientStart + ', #' + self.dataset.gradientStop + ')'; 
       coverBackBody.classList.add('js-cover-back-animate');
 
       //Change the tabs background
       coverBackTabs.style.backgroundColor = '#' + self.dataset.tabColor;
       coverBackTabs.style.width = '100%';
 
 
     }, 1200);
   })
 }
 
 //Initial state of the tab
 tabs.classList.add('js-tabs-init');



 let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".indicator");
let before = document.querySelector(".before");
let id = 0;
let last = slide.length - 1;
let after = id + 1;
function next() {
  if (id == slide.length - 1) {
    id = 0;
    last = slide.length - 1;
    after = 1;
  } else {
    id++;
    after = id + 1;
    last = id - 1;
  }
  let second = (slide[id].style.display = "block");
  let prev = (slide[last].style.display = "none");
  dots[id].style.background = "dimgray";
  dots[last].style.background = "darkgray";
  displayPrev(slide, last);
  displayNext(slide, after);
}
function prev() {
  if (id != 0) {
    id--;
    after = id - 1;
    last = id + 1;
  } else {
    id = slide.length - 1;
    after = 4;
    last = 0;
  }
  let next = (slide[id].style.display = "block");
  let prev = (slide[last].style.display = "none");
  dots[id].style.background = "dimgray";
  dots[last].style.background = "darkgray";
  displayPrev(slide, after);
  displayNext(slide, last);
}
function displayPrev(slide, id) {
  let a = (id == -1) ? 5 : id;
  document.querySelector(".before")
    .innerHTML = slide[a].innerHTML;
}
function displayNext(slide, id) {
  let a = (id == slide.length) ? 0 : id;
  document.querySelector(".after")
    .innerHTML = slide[a].innerHTML;
}
function makeElement(slide) {
  var before = document.createElement("div");
  before.innerHTML = slide[slide.length - 1].innerHTML;
  before.setAttribute("class", "before");
  var after = document.createElement("div");
  after.innerHTML = slide[1].innerHTML;
  after.setAttribute("class", "after");
  var parent = document.querySelector(".slider");
  parent.append(before, after);
}
makeElement(slide);
console.log(slide);

