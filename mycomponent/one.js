define('one', function() {
    /**
     * This is the description of module `one`.
     * @exports one
     * @author Andre Siedersleben &lt;andre.siedersleben@meinestadt.de>
     * @version 1.0.0
     * @see myApp
     */
    var one = {
        /**
         * This is the description of the `prop1` property of `mycomponent/one`.
         * @type {string}
         */
        prop1: 'some_random_string',

        /**
         * This is the description of the `doStuff` function inside the module `mycomponent/one`.
         * @param {HTMLElement} element - This is the description of the first argument of `mycomponent/one.doStuff`.
         * @param {string} propertyName - This is another description of one of the second argument of `mycomponent/one.doStuff`.
         * @return {any} This is the description of the return value of `mycomponent/one.doStuff`.
         */
        doStuff: function (element, propertyName) {
            // do stuff here
        }
    };

    return one;
});