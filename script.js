document.querySelector('.cliqueBtt button').addEventListener('click', function() {
    this.style.display = 'none';

    var siteContent = document.querySelector('#siteContent');
            siteContent.style.visibility = 'visible';
            siteContent.style.display = 'block';  
        });
        
  