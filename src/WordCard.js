import React, { useState } from 'react'
import _, { at, attempt } from 'lodash'

import CharacterCard from "./CharacterCard"

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        complete: false
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => {
        console.log(`${c} has been activate`)

        let guess = state.guess + c
        setState({ ...state, guess })

        if (guess.length == state.word.length) {
            if (guess == state.word) {
                console.log('Congrats!, You have done so well!')
                setState({ ...state, guess: '', complete: true })
            }
            else {
                console.log('Finish attempt: ' + state.attempt)
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
                console.log(' ')
                console.log('Start attempt: ' + (state.attempt + 1))
            }
            if (state.attempt == 2) {
                console.log("Hint: This word start with P, end with T")
            }
            if (state.attempt == 3) {
                console.log("Hint: It is a JOB")
            }
            if (state.attempt == 4) {
                console.log("Hint: He work in HOSPITAL")
            }
            if (state.attempt == 5) {
                console.log("Hint: Its a type DOCTOR")
            }
            if (state.attempt == 6) {
                console.log("Hint: He treat patients with MENTAL")
            }
            
        }
    }

    return (
        <div>
            {
                state.chars.map((c, i) =>
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} />)
            }
        </div>
    )
}
