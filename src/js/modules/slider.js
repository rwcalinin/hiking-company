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

    gallery.style.transform = 'translateX(0)';

    totalSlidesCountPaste(gallerySlides);
    function totalSlidesCountPaste(gall) {
        const totalSlides = gall.length;
        console.log(totalSlides);

        if (totalSlides < 10) {
            totalCountSelector.textContent = `/0${totalSlides}`;
        } else {
            totalCountSelector.textContent = `/${totalSlides}`;
        }
    }




}

export default slideSlider;