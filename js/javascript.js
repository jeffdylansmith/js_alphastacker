var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var str = ""; 
function stackLetters (letters) {
    for(var i = 0; i < alphabet.length; i++){
    	if( i % 3 === 0) {
    		str += " ";
    	} 
    		str += alphabet[i];
    		console.log(str);
      }
}
stackLetters(alphabet);


