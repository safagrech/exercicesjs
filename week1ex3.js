// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
    return Math.random() * 10; // give random numbers from 0 to 10
}

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
    return w1.concat(w2);  //concatinate w2 with w1 in w1
}

function concatenate(firstWord, secondWord, thirdWord) {
   return firstWord+" "+secondWord+" "+thirdWord ; 
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
    let status;
    if (expr) {
        status = "PASSED"
    } else {
        status = "FAILED"
    }
  
    console.log(`${test_name}: ${status}`)
}
  
test("concatenate function - case 1 works", concatenate('code', 'your', 'future') === "code your future")
test("concatenate function - case 2 works", concatenate('I', 'like', 'pizza') === "I like pizza")
test("concatenate function - case 3 works", concatenate('I', 'am', 13) === "I am 13")