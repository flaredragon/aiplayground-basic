class CampK12 {
  
    mulWithRandom(i) {
       return i*Math.floor((Math.random() * 10) + 1);
    }

    add5(i){
        return i+5;
    }

    
    async sleep() {
      await new Promise(resolve => setTimeout(resolve, 3000));;
      return "i am done!";
    }

    asyncF(){

      var p = new Promise
        function asyncThing (value) {
            return new Promise((resolve, reject) => {
              setTimeout(() => resolve(value), 10000)
            })
          }
          
          async function main () {
              var value =3;
              const v = await asyncThing(value)
              return v * 2;
            }
          main()
            .then(v => {return v;})
            .catch(err => console.error(err))   
    }
  }
  
  var campK12 = new CampK12();

  export default campK12;