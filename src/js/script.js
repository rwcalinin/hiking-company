'use strict';

import slideSlider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {

    slideSlider('.choose__left-arrow', '.choose__right-arrow', '.choose__gallery-inner', '.choose__gallery-inner img', '.choose__current-slide', '.choose__total-slide')

});