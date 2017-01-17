

document.addEventListener('keydown', function(event) {
      if (event.metaKey && ['w', 'r'].indexOf(event.key) > -1){
        event.preventDefault();
      }

  }, false);
