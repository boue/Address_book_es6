// Contact Class
class Contact {
  constructor(person){
    this.person = person;
  }

  // Get Contacts
  static getContacts(){
    this.makeRequest('GET', 'http://jsonplaceholder.typicode.com/users').then(function(data){
      //console.log(data);
      let contacts = JSON.parse(data);
      let output = '';
      for(let contact of contacts){
        output += `
        <div class="well">
          <h3>${contact.name}</h3>
          <ul class="list-group">
           <li class="list-group-item"><i class="fa fa-envelope fa-3" aria-hidden="true"></i> ${contact.email}</li>
           <li class="list-group-item"><i class="fa fa-mobile-phone fa-3" aria-hidden="true"></i> ${contact.phone}</li>
           <li class="list-group-item"><i class="fa fa-location-arrow fa-3" aria-hidden="true"></i> ${contact.street}, ${contact.city}, ${contact.zipcode}</li>
          </ul>
        </div>
        `;
      }

      let contactsDiv = document.getElementById('contacts');
      contactsDiv.innerHTML = output;
    }).catch(function(err){
      console.log(err);
    });
  }

  // Save Contact
  saveContact(){

  }

  // Make HTTP Request
  static makeRequest(method, url, jsonObj){
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      if(jsonObj){
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      }
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
      };
      if(jsonObj){
      xhr.send(JSON.stringify(jsonObj));
    } else {
      xhr.send();
    }
    });
  }

  // Remove Contact
  static removeContact(id){

  }
}
