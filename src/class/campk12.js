class CampK12 {
  
    mulWithRandom(i) {
       return i*Math.floor((Math.random() * 10) + 1);
    }
    add5(i){
        return i+5;
    }
  }
  
  var campK12 = new CampK12();

  export default campK12;