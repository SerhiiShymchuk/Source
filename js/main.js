import modal from './modules/modals.js'
import tabs from './modules/tab.js'
import forms from './modules/forms.js'
import changeModalState from './modules/changeModalState.js'
import {timer} from './modules/timer.js'
import {images} from './modules/images.js'
'use strict'

let modalState = {}
changeModalState(modalState)
modal()
tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
tabs('.decoration_slider', '.no_click', '.decoration_content>div>div', 'after_click')
tabs('.balcon_icons', '.balcon_icons_img', '.big_img>img', 'do_image_more', 'inline-block')
forms(modalState)
const deadline = '2025-01-30'
timer('.container1', deadline)
images()