import Accordion  from './components/accordion'
import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
  const dl = document.querySelector('dl')
  const accordion = new Accordion(dl)
  accordion.init()
})


