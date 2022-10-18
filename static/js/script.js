window.parseISOString = function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};

// delete btn venue
deleteBtn = document.querySelectorAll(".delete-venue")[0]
if (deleteBtn) {
deleteBtn.onclick = function(e) {
	const venueId = e.target.dataset.id;
	fetch('/venues/'+ venueId,{
	  method: 'DELETE'
	}).then(function() {
		document.getElementById("error").className = "hidden";
		window.location.replace("/");
	  })
	  .catch(function(e) {
		console.error(e);
		document.getElementById("error").className = "";
	  });
  };
}