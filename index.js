let clippyMessage = `It looks like you're trying to go to a party!`;
const serverErrors = [
    'Learning',
    'Machine learning',
    'Machine learning',

    'Machine learning the block chain',
    'Machine learning the block chain',

	  'Server error -69: lol',
    'ERROR 420: This has been reported',
    'ERROR 420: This has been reported',
    'ERROR: Fire',
    `But... they didn't even have a chance`,
    'Hashing tags',
    'Hashing tags',
];

$(document).ready(function(){
	clippy.load('Clippy', function(agent){
    window.agent = agent;
		// Do anything with the loaded agent
		agent.show();
	});

	document.getElementById('name_input').addEventListener('keypress', () => {
		agent.moveTo(Math.random() * document.body.clientWidth, Math.random() * document.body.clientHeight);
    })

let buttonOffsetLeft = 0;
let clicked = false;
	document.getElementById('submit_button').addEventListener('click', (e) => {
    const value = document.getElementById('name_input').value;
	    if (!value){
	        window.alert('Please provide your name(s)!');
	        return;
        }

        buttonOffsetLeft += 100;
        e.target.style.left = `${buttonOffsetLeft}px`;
        window.button = e.target;
        if (button.offsetLeft > window.innerWidth - 200){
          document.body.innerHTML = `<h1>PORNHUB.COM</h1>`;
          clippy.load('Rover', function(agent){
            window.agent = agent;
            agent.show();
            agent.speak(`It looks like you're trying to watch some porn!`);
            clippyMessage = `It looks like you're trying to watch some porn!`;
        		// Do anything with the loaded agent
        	});
        }
        if (clicked){
          return;
        }
        if (!window.confirm('Are you sure?????')) return;
        clicked = true;
        const emailSubject = `PARTY RSVPpppppppp`;
        const emailBody = `Name(s): ${value}

Will arrive at Ladyhouse (2354 Jane Lane, Mountain View CA 94043) **PROMPTLY** at 7:00pm on Saturday, October 13

Please provide any additional information that we should know about you:



Thank you.

--------------------------------------------------
By responding to this email, you grant its recipient(s) full and perpetual access to you, your identity, your purpose in life, and all future serum samples.

<span style="color: white" id="hidden_message">secret password:                       </span>`;

const bcc = 'ianmathews@mac.com,joshuajsiegel@gmail.com,mark.macalma@gmail.com,erinkdelaney@gmail.com'
        window.location = `mailto:support@layhouse.fuckkkkkkkk?bcc=${bcc}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
			// window.alert(serverErrors[Math.floor(Math.random() * serverErrors.length)]

	})
});

function clippyAttack(){
  setTimeout(() => {
    agent.animate();
    clippyAttack();
  }, 15000)
}

function clippySpeak(){
  agent.speak(clippyMessage);
  setTimeout(clippySpeak, 15000)
}

clippyAttack();

setTimeout(clippySpeak, 5000)

function repairServer(){
  setTimeout(() => {
    alert(`Server says: ${serverErrors[Math.floor(Math.random() * serverErrors.length)]}`);
    repairServer();
  }, Math.random() * 39000)
}

repairServer();

function clean(){
  setTimeout(() => {
    document.body.style.visibility = 'hidden';
    setTimeout(() => {
      document.body.style.visibility = 'visible';
    }, 500)
    clean();
  }, Math.random() * 10000)
}
clean();
