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
    let say = ''
    let sounds = [];
   
   
    sounds.push(new cat('say'));
    sounds.push(new dog('say'));
    sounds.push(new bird('say'));
   
   
    animals.forEach(animal => {
        say += `${animals.draw()}`
    });

    return sounds;
}
