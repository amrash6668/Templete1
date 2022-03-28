// let tid="com Net Org Info Code Io";
// let tidRe= /(org|info|io)/ig;
// console.log(tid.match(tidRe));

// let nums="12345678910";
// let numsRe=/[0-9]/g;
// console.log(nums.match(numsRe));

// let notnums="12345678910";
// let notnumsRe=/[^0-2]/g;
// console.log(notnums.match(notnumsRe));

// let specialnums="12@34$567%8910";
// let specialnumsRe=/[^0-9]/g;
// console.log(specialnums.match(specialnumsRe));



// let practice="Os1 Os1Os Os2 Os8 Os8Os";
// let practicenumsRe=/Os[5-9]Os/g;
// console.log(practice.match(practicenumsRe));

// let mys="AaBbcdefG123!1234%^&*";

// let atoz = /[^a-z|A-Z|0-9]/g;
// console.log(mys.match(atoz))


// let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org l@l.com";

// let v =/\w@\w.(com|net)/g
// let d = /\W/g;
// console.log(email.match(v));


// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed";

// let v = /\bspam|spam\b/gi
// console.log(names.match(v))

// console.log(v.test(names));
// console.log(/\bspam|spam\b/gi.test("1spam"))

// let text = "Hellooo World! Hello W3School!";
// let t= //ig;
// console.log(text.match(t))
// let text = "1,100 or 1000?";
// let t= /10?/g;
// console.log(text.match(t))/



// let s = "S100S S3000S S50000S S950000S";

// let q = /s\d{4,}s/ig;
// console.log(s.match(q))
// // console.log(s.match())
// // console.log(s.match())


// let s = "We Love Programming";
// let n = "1OsamaZ 2AhmedZ 3Mohammed 4MostafaZ 5GamalZ";

// // console.log(/^we/ig.test(s));
// // console.log(/^\d/ig.test(n));

// // console.log(n.match(/\d\w{5}(?=z)/ig));
// console.log(n.match(/\d\w{8}(?!z)/gi));


// let s = "We Love Programming And @ Because @ Is Amazing";

// var rel = /@/g;
// console.log(s.replaceAll(rel,"Java"));

document.getElementById("register").onsubmit= function() {
    var p = document.getElementById("phone").value;
    let pr = /\(\d{4}\)\s\d{3}-\d{4}/g;
    var v = pr.test(p);
    if(v===false){
        return false;
    }
    return true;


}

