import { TranslationWidth } from "@angular/common"

class EventEmitter {
    private eventStore = {}

    on(eventName:string, callback) {
        if (!this.eventStore[eventName]) this.eventStore[eventName] = []
        this.eventStore[eventName].push(callback)
    }

    emit(eventName: string, eventObj) {
        
        if (!this.eventStore[eventName]) {
            console.log(`События ${eventName} еще не существует!`)
        } 
        this.eventStore[eventName].forEach(cb => {
            cb(eventObj)
        })
    }

    off(eventName: string, callback) {
        if (eventName && callback) {
            this.eventStore[eventName] = this.eventStore[eventName].filter(cb => callback !== cb)
            return
        } else if (!eventName) {
            this.eventStore = {}
        } else  if (!callback) {
            this.eventStore[eventName] = []
        }



    }
}

function fn (obj) {
    console.log('call fn', obj)
}

let a = new EventEmitter()

    a.on('click', fn)
    a.emit('click', 'test')