import { Snack } from './models/Snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  snacks = [
    new Snack('Cheetos', '🧡', 1.50),
    new Snack('Gummy Bears', '🐻', 2.00),
    new Snack('Snickers', '🍫', 2.25)
  ]



}

export const AppState = createObservableProxy(new ObservableAppState())