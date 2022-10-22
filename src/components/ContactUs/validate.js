
export function handleValidations(text, type) {
    if (type === 'email') {
        let emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,5})+$/i;
        if (text === '') {
            return {
                status: false,
                value: text,
                errorText: 'Please enter email.'
            }
        }
        else if (!emailRegex.test(text)) {
            return {
                status: false,
                value: text,
                errorText: 'Please enter valid email.'
            }
        }
        else {
            return {
                value: text,
                status: true,
                errorText: ''
            }
        }
    } else if (type === 'name') {
        let nameRegex =  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u 
       
       if (text === '') {
           return {
               value: text,
               status: false,
               errorText: 'Please enter first name.'
           }
       }
       else if (!nameRegex.test(text)) {
           return {
               status: false,
               value: text,
               errorText: 'Please enter valid first name.'
           }
       }
       else {
           return {
               value: text,
               status: true,
               errorText: ''
           }
       }
   }else if (type === 'message') {
    // let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
    if (text === '') {
        return {
            value: text,
            status: false,
            errorText: 'Please enter message.'
        }
    }
    else {
        return {
            value: text,
            status: true,
            errorText: ''
        }
    }
}

}

