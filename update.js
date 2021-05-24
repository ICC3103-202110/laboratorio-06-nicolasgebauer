function CtoF(input2){
    return ((input2*(9/5))+32)
}

function CtoK(input2){
    return input2 + 273.15
}

function FtoC(input2){
    return ((input2-32)*(5/9))
}

function FtoK(input2){
    const t1 = FtoC(input2)
    const tf = CtoK(t1)
    return tf
}

function KtoC(input2){
    return input2 - 273.15
}

function KtoF(input2){
    const t1 = KtoC(input2)
    const tf = CtoF(t1)
    return tf
}

function update(model, input1, input2, input3, input4){
    if (input1 === 'y'){
        const newLeftValue = Number(input2)
        const newLeftUnit = input3
        const newRightUnit = input4
        if(input3 === 'Celsius'){
            if(input4 === 'Fahrenheit'){
                const newRightValue = CtoF(newLeftValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
            else if(input4 === 'Kelvin'){
                const newRightValue = CtoK(newLeftValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
        }
        else if(input3 === 'Fahrenheit'){
            if(input4 === 'Celsius'){
                const newRightValue = FtoC(newLeftValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
            else if(input4 === 'Kelvin'){
                const newRightValue = FtoK(newLeftValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
        }
        else if(input3 === 'Kelvin'){
            if(input4 === 'Fahrenheit'){
                const newRightValue = KtoF(newLeftValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
            else if(input4 === 'Celsius'){
                const newRightValue = KtoC(newLeftValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
        }
    }
    else if (input1 === 'n'){
        const newRightValue = Number(input2)
        const newRightUnit = input3
        const newLeftUnit = input4
        if(input3 === 'Celsius'){
            if(input4 === 'Fahrenheit'){
                const newLeftValue = CtoF(newRightValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
            else if(input4 === 'Kelvin'){
                const newLeftValue  = CtoK(newRightValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
        }
        else if(input3 === 'Fahrenheit'){
            if(input4 === 'Celsius'){
                const newLeftValue  = FtoC(newRightValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
            else if(input4 === 'Kelvin'){
                const newLeftValue  = FtoK(newRightValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
        }
        else if(input3 === 'Kelvin'){
            if(input4 === 'Fahrenheit'){
                const newLeftValue  = KtoF(newRightValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
            else if(input4 === 'Celsius'){
                const newLeftValue  = KtoC(newRightValue)
                return{
                    ...model,
                    leftValue: newLeftValue,
                    leftUnit: newLeftUnit,
                    rightValue: newRightValue,
                    rightUnit: newRightUnit
                }
            }
        }
        
    }

}

module.exports = {
    update
}