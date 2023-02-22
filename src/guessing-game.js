class GuessingGame {

    constructor() {

    }

    setRange(min, max) {

        this.minRange = min;
        this.maxRange = max;
    }

    guess() {

        this.median = Math.round(((this.maxRange + this.minRange) / 2));
        return this.median;
    }

    lower() {
        this.maxRange = this.median;
    }

    greater() {
        this.minRange = this.median;

    }
}


module.exports = GuessingGame;
