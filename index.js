
const serverErrors = [
    'Learning',
    'Machine learning',
    'Learning to mine',
    'Machine learned the block chain',

	'Server error -69: VPN access is disallowed',
    'ERROR 420: internal throttling has occurred. This has been reported.',
    'ERROR: Fire. Hot fire.'
]

document.addEventListener('keydown', function(event) {
      if (event.metaKey && ['w', 'r'].indexOf(event.key) > -1){
        event.preventDefault();
      }

  }, false);

$(document).ready(function(){
	clippy.load('Clippy', function(agent){
	    window.agent = agent;
		// Do anything with the loaded agent
		agent.show();
		// agent.moveTo(100,100);
		setTimeout(() => {
            agent.animate();
			agent.speak(`It's look like you're trying to go to a party!`);
        }, 5000)
	});

	document.getElementById('name_input').addEventListener('keypress', () => {
		agent.moveTo(Math.random() * document.body.clientWidth, Math.random() * document.body.clientHeight);
    })

	document.getElementById('submit_button').addEventListener('click', () => {
	    if (!document.getElementById('name_input').value){
	        window.alert('Please provide your name!');
	        return;
        }
	    if (!document.body.classList.contains('failed')){
			window.alert(serverErrors[Math.floor(Math.random() * serverErrors.length)])

			document.body.classList.add('submitted');
		}

	})
    document.getElementById('fail_button').addEventListener('click', () => {
		document.body.classList.add('failed');
		document.getElementById('fail_button').style.transform = 'translateX(100rem)';
    })
})


