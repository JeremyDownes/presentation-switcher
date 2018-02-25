function toRadians (angle) {
  return angle * (Math.PI / 180);
}


$(document).ready(function() {
	$('.rainbow, .unicorn').css({display: 'none'})
	let deg = 160
	let display = 'initial'
	let count = 0
	let timer = null
	$('.button').click(function() {
		count++
		switch(count) {
			case 0:
				if(timer) {
					clearInterval(timer)
					$('.rainbow, .unicorn').css({display: 'none'})
				}
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
				$('body').css({backgroundImage: 'url(resources/images/diversion.gif)'})
				setTimeout(function() {
					$('body').css({backgroundImage: 'url(resources/images/event_loop_no_diversion.gif)'})
				},4100)				
				break
			case 6:
				$('body').css({backgroundImage: 'url(resources/images/diversion_loop.gif)'})
				break
			case 7:
				$('body').css({backgroundImage: 'url(resources/images/diversion_step1.gif)'})
				break			
			case 8:
				$('body').css({backgroundImage: 'url(resources/images/diversion_step2.gif)'})
				setTimeout(function() {
					$('body').css({backgroundImage: 'url(resources/images/event_loop_no_diversion.gif)'})
				},1800)
				break
			case 9:	
				count=-1
		 			timer = setInterval(function() {
	 					deg += 5
	 					if(deg < 160) {display='none'}else{display='initial'}
	 					let y = Math.floor(Math.sin(toRadians(deg))*300+300)
		 				let x = Math.floor(Math.cos(toRadians(deg))*600+700)
		 				$('.unicorn').css({top: y+'px', left: x+'px', display: display})
		 				$('.rainbow').css({display: 'initial'})
		 				if(deg===400){
 							deg= 160
 						}
 					},25)
				break	
 		} 
	})	

})
