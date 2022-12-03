/**
 * Despite being fully static, guard is a class to use inheritance.
 * @param defense {function}
 * @returns {Promise<string>}
 */
export const _Guard = {


    answers: [
        "allow", // router will continue normally.
        "redirect", // router will go to the redirect url specified in the view.
        "stop", // router do nothing.
    ],


    /**
     * The defense function. Must return a boolean or a string from the answers array.
     * @returns {Promise<string>}
     */
    guard: async(route, params)=>{
        return this.answers[0]
    },


    /**
     * Make sure the defense result is a string from the answers array readable by the router.
     * @returns {string}
     */
    getFormattedDefenseResult: (defenseResult)=>{
        // if the result is a boolean, return the corresponding answer
        if(defenseResult ===  true) return this.answers[0]
        else if (defenseResult === false) return this.answers[2]


        if(this.answers.includes(defenseResult)) return defenseResult
        else throw new Error(`answer must be a boolean or one of the following: ${this.answers.join(", ")}`)
    },


    /**
     *
     * @returns {Promise<string>}
     */
    awaitAnswer: async (route, params)=> {
        let defenseResult = await this.guard(route, params)

        return this.getFormattedDefenseResult(defenseResult)
    }

}