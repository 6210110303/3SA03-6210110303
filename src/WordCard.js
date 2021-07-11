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
            else if (state.attempt == 2) {
                console.log("this is your Hint: This word start with P, end with T")
            }
            else if (state.attempt == 3) {
                console.log("this is your Hint: It is a JOB")
            }
            else if (state.attempt == 4) {
                console.log("this is your Hint: Work in HOSPITAL")
            }
            else if (state.attempt == 5) {
                console.log("this is your Hint: Its a type DOCTOR")
            }
            else if (state.attempt == 6) {
                console.log("this is your Hint: He treat patients with MENTAL")
            }
            else {
                console.log('Finish attempt: ' + state.attempt)
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
                console.log(' ')
                console.log('Start attempt: ' + (state.attempt + 1))
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
