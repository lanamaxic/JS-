document.getElementById('btn1').addEventListener('click', loadCustomer)
document.getElementById('btn2').addEventListener('click', loadCustomers)

//Load Single Customer
function loadCustomer(){
    const request = new XMLHttpRequest();

    request.open("GET", "customer.json", true);

    request.onload = function(){
        if(this.status === 200) {
            //Status : 200 - the file could be found and accessable
          // console.log(this.responseText);
    
          const customer = JSON.parse(this.responseText);
    
          const output = `
            <ul>
              <li>ID: ${customer.id}</li>
              <li>Name: ${customer.name}</li>
              <li>Company: ${customer.company}</li>
              <li>Phone: ${customer.phone}</li>
            </ul>
          `;
    
          document.getElementById('customer').innerHTML = output;
        }
      }
    
      request.send();
    }
    

//Load Customers
function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', 'customers.json', true);
  
    xhr.onload = function(){
      if(this.status === 200) {
      
        const customers = JSON.parse(this.responseText);
  
        let output = '';
  
        customers.forEach(function(customer){
          output += `
          <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>
        `;
        });
  
        document.getElementById('customers').innerHTML = output;
        document.getElementById('customers').style.color = "red"
      }
    }
  
    xhr.send();
  }