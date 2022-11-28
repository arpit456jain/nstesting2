// for first time contributors
fetch("style_links.json")
  .then((response) => response.json())
  .then((data) => {
    let links = data;

    let StyleBoxDiv="";
    for (let i = 0; i < links.length; i++) {
      console.log(links.length);
      
      document.getElementById('qotd_populate').innerHTML += `
      <tr>
                        <th scope="row">${i+1}</th>
                        <td>
                            <a href="${links[i].link}">
                            ${links[i].name}
                            </a>
                        </td>
                        <td>${links[i].difficulty}</td>
                        <td>
                            <a
                                href="${links[i].Github}">
                                GitHub
                            </a>
                        </td>
                        <td class="share">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-share" viewBox="0 0 16 16">
                                <path
                                    d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                            </svg>
                        </td>
                    </tr>`;
      
    }
    
  });


  setTimeout(function(){
    //code goes here
    $(function() {
        const rowsPerPage = 10;
        const rows = $('#my-table tbody tr');
        const rowsCount = rows.length;
        const pageCount = Math.ceil(rowsCount / rowsPerPage); // avoid decimals
        const numbers = $('#numbers');
        
        // Generate the pagination.
        for (var i = 0; i < pageCount; i++) {
            numbers.append('<li><a href="#">' + (i+1) + '</a></li>');
        }
            
        // Mark the first page link as active.
        $('#numbers li:first-child a').addClass('active');
    
        // Display the first set of rows.
        displayRows(1);
        
        // On pagination click.
        $('#numbers li a').click(function(e) {
            var $this = $(this);
            
            e.preventDefault();
            
            // Remove the active class from the links.
            $('#numbers li a').removeClass('active');
            
            // Add the active class to the current link.
            $this.addClass('active');
            
            // Show the rows corresponding to the clicked page ID.
            displayRows($this.text());
        });
        
        // Function that displays rows for a specific page.
        function displayRows(index) {
            var start = (index - 1) * rowsPerPage;
            var end = start + rowsPerPage;
            
            // Hide all rows.
            rows.hide();
            
            // Show the proper rows for this page.
            rows.slice(start, end).show();
        }
    });
}, 2000);

  