$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	 $.ajax({
	  url: 'http://localhost:8001/library/v1/books/'+isbn+'?status=lost',
	  type: 'PUT',
	 // data: "status=lost",
	  success: function(data) {
		  $("#status_"+isbn).html("Lost");
		  $("#"+isbn).attr("disabled", "disabled");
	    alert('Load was performed.');
	  }
	});
});
