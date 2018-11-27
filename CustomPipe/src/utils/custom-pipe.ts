import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'userExtract'
})

export class UserExtractPipe implements PipeTransform {
    transform(value: any, arg): any {
        let newVal: any
        if (arg == 'firstName') {
            newVal = value.name ? value.name.split(' ')[0] : ''
        }
        else if (arg == 'lastName') {
            newVal = value.name ? value.name.split(' ').splice(-1) : ''
        }
        else if (arg == 'age') {
            let currentTime = new Date()
            newVal = value.birthyear ? currentTime.getFullYear() - value.birthyear : 0
        }
        return newVal
    }
}
