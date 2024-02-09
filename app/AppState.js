import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  
  money = 0

  snacks = [
    new Snack({name: 'Real Chicken', price: 25.00, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'})
    new Snack({name: 'Cooked Chickem', price: 10.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'})
    new Snack({name: 'Taco', price: 2.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'})
    new Snack({name: 'Whatever this is', price: 0.00, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'})
    new Snack({name: 'Chefs Special', price: 100.00, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'})
    new Snack({name: 'Gum', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'})
  ]
   
 
 
 
 
 
 
  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())