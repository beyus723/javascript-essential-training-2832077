class Dogs {
    constructor(
        type,
        color,
        size,
        age,
        pawsFront,
        pawsBack,
    ) {
        this.type = type;
        this.color = color;
        this.size = size;
        this.age = age;
        this.paws = {
            front: pawsFront,
            back: pawsBack,
        };

        
        }

        ageChanging(ageChange) {
            this.age = ageChange;
        }

        colorChanging(colorChange) {
            this.color = colorChange;
        }


}