class Formatter {
  //add static methods here
  static capitalize(message){
    return (message.charAt(0).toUpperCase() + message.slice(1));
  }

  static sanitize(message){
    return (message).replace(/[^A-Za-z0-9- ']+/g, '');
  }  

  static titleize(message){
    const ignoreWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by","from"];
    let titleizedMessage = message.split(' ').map(function(word){
     console.log(word);
      return ignoreWords.find(lowerWord => lowerWord === word) ? word : word.charAt(0).toUpperCase() + word.slice(1);
    });
    titleizedMessage[0] = titleizedMessage[0].charAt(0).toUpperCase() + titleizedMessage[0].slice(1);
    return titleizedMessage.join(' ');
  }

}