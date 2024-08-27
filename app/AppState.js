import { Snack } from './models/Snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  snacks = [
    new Snack({ name: 'Cheetos', price: 1.50, imgURL: `assets\img\Cheetos.jpg` })
  ]



}

export const AppState = createObservableProxy(new ObservableAppState())