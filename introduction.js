function buttonClick () {
    alert('Welcome to 30DaysOfJavaScript!');
}

function executeConsole() {
    let myName = 'Laura';
    let isDev = true;
    let isMusician;
    let electricGuitar = null;
    console.log(typeof myName); // string
    console.log(typeof isDev); // boolean
    console.log(typeof isMusician); // undefined
    console.log(typeof electricGuitar); // object
    let myAge = 'I am 30 years old.', yourAge = 'You are 20 years old.';
    console.log(myAge); // I am 30 years old.
    console.log(yourAge); // You are 20 years old.
    document.getElementById("consoleOne").innerHTML = `                    
        <ul class="consoleText text-secondary small">
            <li>string</li>
            <li>boolean</li>
            <li>undefined</li>
            <li>object</li>
            <li>I am 30 years old.</li>
            <li>You are 20 years old.</li>
            <li class="text-primary font-weight-bold">></li>
        </ul>
    `
    alert('Go check your console!')
}

function executeConsoleTwo() {
    let challenge = '30 Days Of JavaScript';
    console.log(challenge);
    console.log(challenge.toUpperCase());
    console.log(challenge.toLowerCase());
    console.log(challenge.substr(3,4));
    console.log(challenge.substring(3));
    console.log(challenge.includes('Script'));
    console.log(challenge.split());
    console.log(challenge.split(' '));
    console.log(('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon').split(', '));
    console.log(challenge.replace('JavaScript','Python'));
    console.log(challenge.charAt(15));
    console.log(challenge.indexOf('a'));
    console.log(challenge.lastIndexOf('a'));
    console.log(('You cannot end a sentence with because because because is a conjunction').indexOf('because'));
    console.log(('You cannot end a sentence with because because because is a conjunction').lastIndexOf('because'));
    console.log(('You cannot end a sentence with because because because is a conjunction').search('because'));
    console.log(' 30 Days Of JavaScript '.trim());
    console.log(('30 Days Of JavaScript').startsWith('3'));
    console.log(('30 Days Of JavaScript').endsWith('t'));
    console.log(('30 Days Of JavaScript').match(/a/g));
    console.log(('30 Days Of ').concat('JavaScript'));
    console.log(('30 Days Of Javascript').repeat(2));
    console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
    console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
    console.log(typeof(parseInt('10')) == typeof(10));
    console.log(Math.ceil(parseFloat('9.8')) == 10);
    console.log('python'.includes('on') == 'jargon'.includes('on'));
    console.log('I hope this course is not full of jargon.'.includes('jargon'));
    let randomNum = Math.random() // random from 0 to 0.99
    let numBtnZeroAndOneHundred = (Math.random()) * 101 // min 0 max 100.99
    console.log(Math.floor(numBtnZeroAndOneHundred));
    console.log(Math.floor(Math.random() * (101 - 50)) + 50);
    console.log(Math.floor(Math.random() * 256));
    console.log('JavaScript'[Math.floor(Math.random() * 10)])
    console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);
    let sentence = 'You cannot end a sentence with because because because is a conjunction';
    console.log(sentence.substr(sentence.indexOf('b'), 'because because because'.length));
    sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
    console.log((sentence.match(/love/gi)).length);
    sentence = 'You cannot end a sentence with because because because is a conjunction';
    console.log((sentence.match(/because/g)).length);
    sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
    let cleanSentence = sentence.replace(/%|#|@|&|;|\$/g,'');
    cleanSentence = cleanSentence.toLowerCase();
    function Change (words) {
    var wordCounts = { };
    var words = words.split(/\b/);
    for(var i = 0; i < words.length; i++)
    wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
    console.log(wordCounts);
    }
    Change(cleanSentence);
    console.log("// Unfinished");
    sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
    let numbers = sentence.match(/\d+/g);
    console.log((parseInt(numbers[0]) * 12) + parseInt(numbers[1]) + (parseInt(numbers[2]) * 12));
    document.getElementById("consoleTwo").innerHTML = `                    
        <ul class="consoleText text-secondary small">
            <li>30 Days Of JavaScript</li>
            <li>30 DAYS OF JAVASCRIPT</li>
            <li>30 days of javascript</li>
            <li>Days</li>
            <li>Days Of JavaScript</li>
            <li style="color: blue;">true</li>
            <li>[<span class="text-danger">"30 Days Of JavaScript"</span>]</li>
            <li>(4) [<span class="text-danger">"30"</span>,<span class="text-danger"> "Days"</span>,<span class="text-danger"> "Of"</span>,<span class="text-danger"> "JavaScript"</span>]</li>
            <li>(7) [<span class="text-danger">"Facebook"</span>,<span class="text-danger"> "Google"</span>,<span class="text-danger"> "Microsoft"</span>,<span class="text-danger"> "Apple"</span>,<span class="text-danger"> "IBM"</span>,<span class="text-danger"> "Oracle"</span>,<span class="text-danger"> "Amazon"</span>]</li>
            <li>30 Days Of Python</li>
            <li>S</li>
            <li style="color: blue;">4</li>
            <li style="color: blue;">14</li>
            <li style="color: blue;">31</li>
            <li style="color: blue;">47</li>
            <li style="color: blue;">31</li>
            <li>30 Days Of JavaScript</li>
            <li style="color: blue;">true</li>
            <li style="color: blue;">true</li>
            <li>(3) [<span class="text-danger">"a"</span>,<span class="text-danger"> "a"</span>,<span class="text-danger"> "a"</span>]</li>
            <li>30 Days Of JavaScript</li>
            <li>30 Days Of Javascript30 Days Of Javascript</li>
            <li>The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.</li>
            <li>"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."</li>
            <li style="color: blue;">true</li>
            <li style="color: blue;">true</li>
            <li style="color: blue;">true</li>
            <li style="color: blue;">true</li>
            <li style="color: blue;">20</li>
            <li style="color: blue;">96</li>
            <li style="color: blue;">234</li>
            <li>t</li>
            <li>1 1 1 1 1</li>
            <li>2 1 2 4 8</li>
            <li>3 1 3 9 27</li>
            <li>4 1 4 16 64</li>
            <li>5 1 5 25 125</li>
            <li>because because because</li>
            <li style="color: blue;">3</li>
            <li style="color: blue;">3</li>
            <li>{i: <span style="color: blue;">3</span>, " ": <span style="color: blue;">40</span>, am: <span style="color: blue;">1</span>, a: <span style="color: blue;">2</span>, teacher: <span style="color: blue;">2</span>, …}</li>
            <li class="text-success">// Unfinished</li>
            <li style="color: blue;">250000</li>
        </ul>
    `
    alert('Go check your console!')
}