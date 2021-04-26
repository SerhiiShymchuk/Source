import modal from './modules/modals.js'
import tabs from './modules/tab.js'
import forms from './modules/forms.js'

'use strict'
modal()
tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
tabs('.decoration_slider', '.no_click', '.decoration_content>div>div', 'after_click')
forms()