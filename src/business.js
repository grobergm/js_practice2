export function Entry(title,content) {
  this.title=title;
  this.content=content;
}


Entry.prototype.words = function(){
  var wordArray=this.content.split(" ");
  return wordArray.length;
};

Entry.prototype.charType = function(){
  var returnObj={};
  returnObj.consonants=[];
  returnObj.vowels=[];
  var testVowels=["a","e","i","o","u","A","E","I","O","U"];
  for(var i=0;i<this.content.length;i++){
    if(testVowels.includes(this.content[i])){
      returnObj.vowels.push(this.content[i]);
    } else if(this.content[i]!==" "){
      returnObj.consonants.push(this.content[i]);
    }
  }
  return returnObj;
};

var test= new Entry("An Amazing Title","Create a journaling website where a user can write entries including at least a title and body. Create Entry objects that include a method to return the number of words in the entry. Then, add a separate method (or methods) to return the number of vowels and consonants in each entry. Call each of these methods from your front-end file to display their return values. Finally, add a method called getTeaser to return the first sentence of the entry. If the sentence is over 8 words, only display those first 8 words. Be sure to call this method from your front-end file to display the results as well, whenever a new journal entry is created.");

test.charType();
test.words();
