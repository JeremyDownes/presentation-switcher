$(document).ready(function() {
	$('.event').click(function() {
		$('body').css({backgroundImage: 'url(resources/images/event_loop_no_branch.gif)'})
	})	
	$('.timeout').click(function() {
		$('body').css({backgroundImage: 'url(resources/images/event_loop_no_diversion.gif)'})
	})
	$('.divert').click(function() {
		$('body').css({backgroundImage: 'url(resources/images/diversion_loop.gif)'})
	})
	$('.stop').click(function() {
		$('body').css({backgroundImage: 'url(resources/images/diversion_step1.gif)'})
	})
	$('.start').click(function() {
		$('body').css({backgroundImage: 'url(resources/images/diversion_step2.gif)'})
		setTimeout(function() {
			$('body').css({backgroundImage: 'url(resources/images/diversion_loop.gif)'})
		},2000)
	})

	$('.thread').click(function() {
		$('body').css({backgroundImage: 'url(resources/images/threadflat.gif)'})
	})
	

	$('.diverge').click(function() {
		$('body').css({backgroundImage: 'url(resources/images/threadDiverging.gif)'})
		setTimeout(function() {
			$('body').css({backgroundImage: 'url(resources/images/threadDivergent.gif)'})
		},1500)
	})


	$('.converge').click(function() {
		$('body').css({backgroundImage: 'url(resources/images/threadConvergence.gif)'})
		setTimeout(function() {
			$('body').css({backgroundImage: 'url(resources/images/threadflat.gif)'})
		},1000)
	})

})
