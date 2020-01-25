//"use strict";

function whoIsThis1() {
  console.log(this);
}

function whoIsThis2() {
  (function teste() {
    console.log(this === global);
  })();
}

function whoIsThis3() {
  function teste() {
    console.log(this === global);
  }

  (function teste2() {
    teste();
  })();
}

whoIsThis1();
whoIsThis2();
whoIsThis3();
