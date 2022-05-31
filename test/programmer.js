class Programmer {
    constructor() {
        this.languages = [];
    }

    learnNewLanguage(language) {
        this.languages.push(language);
    }

    isPragmatic() {
        return this.languages.length > 2;
    }
}

const programmer = new Programmer();

['java', 'elm', 'haskell'].forEach(programmer.learnNewLanguage);

console.log(programmer.isPragmatic());
