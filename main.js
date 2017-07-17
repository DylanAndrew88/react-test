
  //###################################################################
  //        __
  //   ____/ /___  ____ ______
  //  / __  / __ \/ __ `/ ___/
  // / /_/ / /_/ / /_/ (__  )
  // \__,_/\____/\__, /____/
  //            /____/

  // Dog Constructor & Prototype
  function Dog (status, color, hungry, owner) {
    this.status = status;
    this.color = color;
    this.hungry = hungry;
    this.owner = owner;
  }

  let sadie = new Dog('normal', 'black')
  let moonshine = new Dog();
  let atticus = new Dog();
  sadie.hungry = false;
  moonshine.hungry = true;
  // Instances of Dog
  // Needed: sadie, moonshine, atticus

  //     __
  //    / /_  __  ______ ___  ____ _____  _____
  //   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
  //  / / / / /_/ / / / / / / /_/ / / / (__  )
  // /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

  // Human Constructor & Prototype
  function Human () {
    this.pet = function(Dog){
      Dog.status = 'happy';
    }
    this.feed = function(Dog){
      Dog.hungry = false;
    }
  }

  let mason = new Human;
  let julia = new Human;
  sadie.owner = mason;
  julia.cool = true;
  mason.cool = false;

  // Instances of Human
  // Needed: mason, julia
