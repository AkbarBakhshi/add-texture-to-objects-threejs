import ThreeJS from './Threejs'

export default class Canvas {
    constructor({template}) {
        this.template = template
        this.onResize()
    }

    createThreejs() {
        this.threejs = new ThreeJS()
    }

    destroyThreejs() {
        if (!this.threejs) return

        this.threejs.destroy()
        this.threejs = null
    }

    create(template) {
        // console.log(template)
        if(template === 'threejs') {
            this.createThreejs()
        } else {
            this.destroyThreejs()
        }

        this.template = template
    }

    update(){
        // console.log('canvas update')
        if (this.threejs) {
            this.threejs.update()
        }
    }

    onResize() {
        if (this.threejs) {
            this.threejs.onResize()
        }
    }
}