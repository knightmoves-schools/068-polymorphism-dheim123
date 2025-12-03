class Cat {
    say() {
        return 'meow';
    }
}

class Dog {
    say() {
        return 'woof';
    }
}

class Bird {
    say() {
        return 'chirp';
    }
}

let animals = [
    new Cat(),
    new Dog(),
    new Bird()
]

function listen(animals) {
    let sounds = [];

    sounds.push(new Input('meow', 'woof', 'Chirp'));

    animals.forEach(animal => {
        output += `${sounds.draw()}<br>`
    });

    return sounds;
}

