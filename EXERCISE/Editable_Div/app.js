    let area = null;                               //empty object
    let view = document.getElementById('view');


    /*view.onclick = function() {
        editStart();
      };     OR */
    
        view.addEventListener('click', editStart)

    function editStart() {
        area = document.createElement('textarea');
        area.className = 'edit';
        area.value = view.innerHTML;
        area.addEventListener('keydown', function(event){
            if (event.key == 'Enter') {
                this.blur();
              }

        })
        area.addEventListener('blur', function(){
            editDone();
        })

        view.replaceWith(area);
        area.focus();                              //the focus should come at the end
  
        // area.onblur = function() {
        //   editEnd();
        // };
   
      }
  
      function editDone() {
        view.innerHTML = area.value;
        area.replaceWith(view);
      }