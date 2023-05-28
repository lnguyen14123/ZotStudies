


$("#add_user").submit(function(event) {
    console.log("hi");

    alert("Data inserted successfully!");



});

$("#add_class").submit(function(event) {
    console.log("hi");

    alert("Class added successfully!");



});

$("#update_user").submit(function(event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}


    console.log("hiasdf");

    $.map(unindexed_array, function(n, i){ 
        data[n['name']] = n['value']
    })
    
    console.log(data);

    var request = {
        "url": `http://localhost:3000/api/users/${data.id}`, 
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response) {
        alert("Data updated successfully!");
    });

});


if(window.location.pathname=="/") {

    console.log("del");

    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id");

        var request = {
            "url": `http://localhost:3000/api/users/${id}`, 
            "method": "DELETE"
        }
    
        if(confirm("Do you really want to delete this user?")) {
            $.ajax(request).done(function(response) {
                alert("Data deleted successfully!");
                location.reload();
            });
        
        }


    });
}

