$(document).ready(function() {
	let count = 0
	$('.button').click(function() {
		count++
		switch(count) {
			case 0:
				$('body').css({backgroundImage: 'url(resources/images/threadflat.gif)'})
				break
			case 1:
				$('body').css({backgroundImage: 'url(resources/images/threadDiverging.gif)'})
				setTimeout(function() {
					$('body').css({backgroundImage: 'url(resources/images/threadDivergent.gif)'})
				},1500)
				break
			case 2:
				$('body').css({backgroundImage: 'url(resources/images/threadConvergence.gif)'})
				setTimeout(function() {
					$('body').css({backgroundImage: 'url(resources/images/threadflat.gif)'})
				},1400)
				break
			case 3:
				$('body').css({backgroundImage: 'url(resources/images/event_loop_no_branch.gif)'})
				break
			case 4:
				$('body').css({backgroundImage: 'url(resources/images/event_loop_no_diversion.gif)'})
				break
			case 5:
				$('body').css({backgroundImage: 'url(resources/images/diversion_loop.gif)'})
				break
			case 6:
				$('body').css({backgroundImage: 'url(resources/images/diversion_step1.gif)'})
				break
			case 7:
				$('body').css({backgroundImage: 'url(resources/images/diversion_step2.gif)'})
				setTimeout(function() {
					$('body').css({backgroundImage: 'url(resources/images/diversion_loop.gif)'})
				},2000)
				count=-1
				break	
 		} 
	})	
})
