import { Directive, Input, ElementRef, OnInit } from '@angular/core'

@Directive({
    selector: '[myIonicInput]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class MyIonicInputDirective {
    @Input('myIonicInput') myStyles: any

    constructor(private el: ElementRef) {
        el.nativeElement.onkeypress = (e) => {
            console.log(e)
            if ('~!@#$%^&*()-='.includes(String.fromCharCode(e.keyCode))) {
                e.preventDefault()
                return
            }
        }
    }

    ngOnInit() {
        console.log(this.myStyles)
    }

    onMouseEnter() {
        this.myStyles.showUsername = true
    }

    onMouseLeave(e) {
        this.myStyles.showUsername = false
    }

}