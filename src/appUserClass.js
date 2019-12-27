class Users {


    constructor(id, name, age, distance, gender, job, image, premium) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.distance = distance;
        this.gender = gender;
        this.job = job;
        this.image = image
        this.premium = premium
    }

}
class Premium extends Users {
    constructor(id, name, age, distance, gender, job, image, premium, hobbies) {
        super(id, name, age, distance, gender, job, image, premium)
        this.hobbies = hobbies;
    }



}



export {Users,Premium}