function slideSlider(leftArrowSel, rightArrowSel, gallerySel, gallerySlidesSel, currentCountSel, totalCountSel) {

    const // ? arorws:
          leftArrow = document.querySelector(leftArrowSel),
          rightArrow = document.querySelector(rightArrowSel),
          // ? counter:
          currentCountSelector = document.querySelector(currentCountSel),
          totalCountSelector = document.querySelector(totalCountSel),
          // ? gallery selector:
          gallery = document.querySelector(gallerySel),
          gallerySlides = document.querySelectorAll(gallerySlidesSel);
    
    let count = 1,
        sliderTransformX = 0;

          // -311px at one slide
    gallery.style.transform = 'translateX(0px)';
    // setTimeout(() => {
    //     gallery.classList.toggle('hide');
    // }, 1000);

    totalSlidesCountPaste(gallerySlides);
    function totalSlidesCountPaste(gall) {
        const totalSlides = gall.length;

        if (totalSlides < 10) {
            totalCountSelector.textContent = `/0${totalSlides}`;
        } else {
            totalCountSelector.textContent = `/${totalSlides}`;
        }
    }

    countCurrentSlide(currentCountSelector, gallerySlides);
    function countCurrentSlide(curSel, gall) {
        const totalSlides = gall.length;

        if (totalSlides < 10) {
            curSel.textContent = `0${(sliderTransformX / -311) + 1}`
        } else {
            curSel.textContent = `${(sliderTransformX / -311) + 1}`
        }
    }




}

export default slideSlider;