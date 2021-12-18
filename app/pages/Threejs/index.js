import gsap from 'gsap'

export default class Threejs {
    constructor() {
    }
    create() {

    }

    animateIn() {
        return new Promise(resolve => {
            gsap.timeline({onComplete: resolve})
                .from('.threejs', { y: '-200%'})
        })
    }

    animateOut() {
        return new Promise(resolve => {
            gsap.timeline({onComplete: resolve})
                .to('.threejs', { y: '200%'})
        })
    }
}