(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbarTogglerDemo02").collapse('hide');
    }
  });
});


// document.addEventListener("DOMContentLoaded", 
//   function (event) {
//     document.querySelector("button")
//     .addEventListener("click", function () {

//       $ajaxUtils.sendGetRequest("snippets/category-snippet.html", 
//         function (request) {
//           var menu = request.responseText;

//           document.querySelector("#main-content")
//       .innerHTML = menu;
//         });
//     });
//   });


(function (global) {

var mt = {};

var homeHtml = "snippets/home-snippet.html";
var menuCategory = "snippets/category-snippet.html";
var lunchMenu = "snippets/lunch-menu-snippet.html";
var chickenMenu = "snippets/chicken-menu-snippet.html";
var beefMenu = "snippets/beef-menu-snippet.html";
var vegetablesMenu = "snippets/vegetables-menu-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/7.gif' style='width: 10px; height: 10px;'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,

  function(responseText) {
  document.querySelector("#main-content")
   .innerHTML = responseText;

    },
    false); // Explicitly setting the flag to get JSON from server processed into an object literal
});

// Load the menu category
mt.loadMenuCategories = function() {
      // On first load, show home view
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      menuCategory,

      function(responseText) {
        document.querySelector("#main-content")
         .innerHTML = responseText;

      },
      false); // Explicitly setting the flag to get JSON from server processed into an object literal
};

// / Load the Lunch menu category
mt.loadMenuLunch = function() {
      // On first load, show home view
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      lunchMenu,

      function(responseText) {
        document.querySelector("#main-content")
         .innerHTML = responseText;

      },
      false); // Explicitly setting the flag to get JSON from server processed into an object literal
};

// / Load the Chicken menu category
mt.loadMenuChicken = function() {
      // On first load, show home view
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      chickenMenu,

      function(responseText) {
        document.querySelector("#main-content")
         .innerHTML = responseText;

      },
      false); // Explicitly setting the flag to get JSON from server processed into an object literal
};

// / Load the Beef menu category
mt.loadMenuBeef = function() {
      // On first load, show home view
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      beefMenu,

      function(responseText) {
        document.querySelector("#main-content")
         .innerHTML = responseText;

      },
      false); // Explicitly setting the flag to get JSON from server processed into an object literal
};

// / Load the Beef menu category
mt.loadMenuVegetables = function() {
      // On first load, show home view
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      vegetablesMenu,

      function(responseText) {
        document.querySelector("#main-content")
         .innerHTML = responseText;

      },
      false); // Explicitly setting the flag to get JSON from server processed into an object literal
};




global.$mt = mt;

})(window);
