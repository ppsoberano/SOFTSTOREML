!function(e,t,r){"use strict";function i(e){this.options=e||{}}i.prototype.isChicoLoaded=function(){return"undefined"!=typeof e.ch},i.prototype.listenCarouselEvents=function(e){var t=this;e.on("ready",function(){t.setVisibleContainerIfJSIsAvailable()}),e.on("next",function(){t.handleNext(this)}),e.on("prev",function(){t.handlePrev(this)})},i.prototype.handleNext=function(e){var t=e._pages,r=e._currentPage,i=this.isCarouselLastPage(t,r);if(i&&this.setElementVisibility(this.getNextArrow(e),"hidden"),2===r){var o=this.getPrevArrow(e);o.style.display="block",this.setElementVisibility(o,"visible")}},i.prototype.handlePrev=function(e){var t=e._currentPage,r=this.isFirstPage(t);r&&this.setElementVisibility(this.getPrevArrow(e),"hidden"),t===e._pages-1&&this.setElementVisibility(this.getNextArrow(e),"visible")},i.prototype.isCarouselLastPage=function(e,t){return e===t},i.prototype.isFirstPage=function(e){return 1===e},i.prototype.getPrevArrow=function(e){var t=" .ch-carousel-prev",r=this.getArrow(e,t);return r},i.prototype.getNextArrow=function(e){var t=" .ch-carousel-next",r=this.getArrow(e,t);return r},i.prototype.getArrow=function(e,r){var i=this.resolveCarouselId(e)+r,o=t.querySelector(i),n=t.querySelector("#recommendationsCarousel"+r);return o||n},i.prototype.resolveCarouselId=function(e){var t;return t=e.directId?e.directId:"recommendationsCarousel"+(e.uid-1).toString(),"#"+t},i.prototype.setVisibleContainerIfJSIsAvailable=function(){var e=t.querySelectorAll(".recommendations-list-items");Array.prototype.forEach.call(e,function(e){e.style.overflow="visible"});var e=t.querySelectorAll(".recommendations-component-wrapper");Array.prototype.forEach.call(e,function(e){e.style.visibility="visible"})},i.prototype.setElementVisibility=function(e,t){e.style.visibility=t},r.RecosCarouselsSharedBehavior=i}(window,document,Meli.prototype);