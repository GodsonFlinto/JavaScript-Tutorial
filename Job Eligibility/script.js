    const button = document.querySelector('button')
    //event listener - to check for event occured 
    button.addEventListener('click',displayEligibility)

    function displayEligibility(){
        const input = document.querySelector('#input')
        const education = input.options[input.selectedIndex].value
        console.log(education)
        let eligibility=""
        let posting = ""
        let resultdiv = document.createElement('div')
        resultdiv.id = 'result'
        document.getElementById('wrapper').appendChild(resultdiv)
        switch(education){
            case 'Illiterate':
                eligibility = "Not Eligible"
                posting = "you didn't meet our criteria"
                break
            case 'High School':
                eligibility = "Eligible"
                posting = "Assistant Manager"
                break

            case 'UG':
                eligibility = "Eligible"
                posting = "Manager"
                break

            case 'PG':
                eligibility = "Not Eligible"
                posting = "you didn't meet our criteria"
                break

            case 'Doctorate':
                eligibility = "Not Eligible"
                posting = "you didn't meet our criteria"
                break

        }
        let text = `You are ${eligibility} for this job as ${posting}`
        document.getElementById('result').innerHTML = text

    }