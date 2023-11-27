 //1.Class Movie

/*a.Write a constructor for the class Movie, which takes a String representing 
the title of the movie, a String representing the studio, and a String representing 
the rating as its arguments, and sets the respective class properties to these values.*/

class movie {
    constructor(tittle,studio,rating){
        this.tittle = tittle;
        this.studio = studio;
        this.rating = rating;

    }
}
 let details = new movie ("Leo","Mega-star","9.2")
 console.log(details);

 //output : movie { tittle: 'Leo', studio: 'Mega-star', rating: '9.2' }

 //------------------------------------------------------------------------------------------------


//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movie1 {
    constructor(tittle, studio, rating= "PG"){
        this.tittle= tittle;
        this.studio = studio;
        this.rating = rating;


    }
}
let movieDetails = new movie1("Leo","sona-mina")
console.log(movieDetails);
//output :  movie1 { tittle: 'Leo', studio: 'sona-mina', rating: 'PG' }

let movieDetails1 = new movie1 ("Leo","sona-mina","PG-14")
console.log(movieDetails1);

//ouput : movie1 { tittle: 'Leo', studio: 'sona-mina', rating: 'PG-14' }

//----------------------------------------------------------------------------------------------------


/*c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a 
new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
The returned array need not be full.*/

class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
  
    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
  }
  
  let moviee1 = new Moviee("Leo", "Zee studios", "PG");
  let moviee2 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
  let movie3 = new Moviee("Kantara", "KRG Studios", "PG");
  let movie4 = new Moviee("Vikram", "Raj kamal films", "PG-13");
  let movie5 = new Moviee("veeram", "Vijaya production", "PG");
  
  let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
  let pgMovies = Moviee.getPG(movieArray);
  console.log(pgMovies); 
  
  // Output: 
  /*
  [ Moviee { title: 'Leo', studio: 'Zee studios', rating: 'PG' },
  Moviee { title: 'Kantara', studio: 'KRG Studios', rating: 'PG' },
  Moviee { title: 'veeram', studio: 'Vijaya production', rating: 'PG' } ]
  */
  
  //--------------------------------------------------------------------------------------------------
  
  
  
  /*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
  the studio “Eon Productions”, and the rating “PG­13”*/
  
  class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");
  
    console.log(casinoRoyale);
  
    /*OUTPUT:
    rating: "PG-13"
    studio: "Eon Productions"
    title: "Casino Royale"*/
  
  
    //---------------------------------------------------------------------------------------------
  
    //2.Circle
  
    class Circle {
        constructor(radius = 1.0, color = "red") {
          this._radius = radius;
          this._color = color;
        }
      
        get radius() {
          return this._radius;
        }
      
        set radius(radius) {
          this._radius = radius;
        }
      
        get color() {
          return this._color;
        }
      
        set color(color) {
          this._color = color;
        }
      
        toString() {
          return `Circle [radius = ${this._radius} , color = ${this._color}]`;
        }
      
        getArea() {
          return Math.PI * Math.pow(this._radius, 2);
        }
      
        getCircumference() {
          return 2 * Math.PI * this._radius;
        }
      }
      
      const circle1 = new Circle(3, "red");
      const circle2 = new Circle(7, "Yellow");
      
      console.log(circle1.toString());
      console.log("Area:", circle1.getArea());
      console.log("Circumference:", circle1.getCircumference());
      
      console.log(circle2.toString());
      console.log("Area:", circle2.getArea());
      console.log("Circumference:", circle2.getCircumference());
      
      //circle 1
      /*
      Circle [radius = 3 , color = red]
      Area: 28.274333882308138
      Circumference: 18.84955592153876
      */
      
      //circle 1
      /*
        Circle [radius = 7 , color = Yellow]
        Area: 153.93804002589985
        Circumference: 43.982297150257104
      */

        
    //---------------------------------------------------------------------------------------------

 
 //3.Write a “person” class to hold all the details.

 class person {
    constructor (firstName,lastName,age,mobile,Email,Department,Role,city){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age = age;
        this.mobile = mobile;
        this.Email =Email;
        this.Department = Department;
        this.Role = Role;
        this.city = city;
    
    }
    getPersonDetails (){
        return `Name : ${this.firstName} ${this.lastName}
        Age : ${this.age}
        Mobile No : ${this.mobile}
        Email: ${this.Email}
        Department : ${this.Department}
        Role : ${this.Role}
        City : ${this.city}
        `
    }
 }

 var person1 = new person ("Vasnth","kumar",23,8270402248,"vasanthamath88@gamil.com","MBA","FSD","Thanjavur");
 var person2 = new person ("varun", "kumar", 21, 7010640687 , "varuncric@gamil.com", "BE","study", "Thanjavur");

 console.log(person1.getPersonDetails());
 console.log(person2.getPersonDetails());

 //ouput 
 /* 
 person1

 Name : Vasnth kumar
        Age : 23
        Mobile No : 8270402248
        Email: vasanthamath88@gamil.com
        Department : MBA
        Role : FSD
        City : Thanjavur

 person2  

Name : varun kumar
        Age : 21
        Mobile No : 7010640687
        Email: varuncric@gamil.com
        Department : BE
        Role : study
        City : Thanjavur
        */

//---------------------------------------------------------------------------------------------------------

//4.write a class to calculate the uber price

class uberPrice {
    constructor (distance,duration,baseFare,costPerMile,costPerMintue){
        this.distance = distance;
        this.duration = duration;
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMintue = costPerMintue;

    }
    getTotalPrice(){
        return this.baseFare + (this.distance*this.costPerMile) + (this.distance*this.costPerMintue);
    }

}

let uberCost = new uberPrice(8,15,70,16,3);

console.log("The Uber cost is : ", uberCost.getTotalPrice())

//output 

//The Uber cost is :  222