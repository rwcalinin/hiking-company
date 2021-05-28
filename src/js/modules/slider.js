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

          // -280px at one slide
    gallery.style.transform = 'translateX(0px)';
    // setTimeout(() => {
    //     gallery.classList.toggle('hide');
    // }, 1000);

    leftArrow.addEventListener('click', () => {
        sliderTransformX += 314;
        setSlidesPosition()
        countCurrentSlide(currentCountSelector, gallerySlides);
    });

    rightArrow.addEventListener('click', () => {
        sliderTransformX -= 314;
        setSlidesPosition()
        countCurrentSlide(currentCountSelector, gallerySlides);
    });

    function setSlidesPosition() {
        gallery.style.transform = `translateX(${sliderTransformX}px)`;
    }

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
            curSel.textContent = `0${(sliderTransformX / -314) + 1}`
        } else {
            curSel.textContent = `${(sliderTransformX / -314) + 1}`
        }
    }




}

export default slideSlider;