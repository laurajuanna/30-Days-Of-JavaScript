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
    console.log(challenge.length);
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
    document.getElementById("consoleTwo").innerHTML = `                    
        <ul class="consoleText text-secondary small">
            <li>30 Days Of JavaScript</li>
            <li style="color: blue;">21</li>
            <li>30 DAYS OF JAVASCRIPT</li>
            <li>30 days of javascript</li>
            <li>Days</li>
            <li>Days Of JavaScript</li>
            <li style="color: blue;">true</li>
            <li>[<span style="color: #d40048;">"30 Days Of JavaScript"</span>]</li>
            <li>(4) [<span style="color: #d40048;">"30"</span>, <span style="color: #d40048;">"Days"</span>, <span style="color: #d40048;">"Of"</span>, <span style="color: #d40048;">"JavaScript"</span>]</li>
            <li>(7) [<span style="color: #d40048;">"Facebook"</span>, <span style="color: #d40048;">"Google"</span>, <span style="color: #d40048;">"Microsoft"</span>, <span style="color: #d40048;">"Apple"</span>, <span style="color: #d40048;">"IBM"</span>, <span style="color: #d40048;">"Oracle"</span>, <span style="color: #d40048;">"Amazon"</span>]</li>
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
            <li>(3) [<span style="color: #d40048;">"a"</span>, <span style="color: #d40048;">"a"</span>, <span style="color: #d40048;">"a"</span>]</li>
            <li>30 Days Of JavaScript</li>
            <li>30 Days Of Javascript30 Days Of Javascript</li>
            <li class="text-primary font-weight-bold">></li>
        </ul>
    `
    alert('Go check your console!')
}