$.sweetModal.confirm('Confirm alert message', 'Are you Confirm please?', function() {
		$.sweetModal('Thank you for confirming.');
	},
	function() {
		$.sweetModal('You are not Confirm. Try again.');
	}
);