class Contact {
  //person is some JSON data
  constructor(person){
    this.person = person;
  }

  //Get contacts static we don't have to instantiate
  static getContacts(){
    this.makeRequest('GET', 'http://jsonplaceholder.typicode.com/users').then(function(data){
      console.log(data);
    }).catch(function(err){
      console.log(err);
    })
  }

  //Save contact
  saveContact(){

  }

  //Make HTTP Request - optional jsonObj if we are saving to server
  static makeRequest(method, url, jsonObj){
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function(){
        if(this.status >= 200 && this.status < 300){
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function(){
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
      xhr.send();
    });
  }

  //Remove contact
  static removeContact(id){

  }
}