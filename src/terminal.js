class Terminal {

    constructor(terminalDiv, input) {
        this.terminal = terminalDiv;
        this.input = input;
        this.pairInput(input);
    }
    pairInput(input) {
        input.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                let message = input.value;
                input.value = "";
                this.marineWrite(message);
                let ended = this.currentCommand.execute(message);
                if (ended) {
                    this.scrollDown();
                    this.currentCommand.winObserver.onWin();
                    this.currentCommand = cCommands[0];
                }
            }
        });
    }
    marineWrite(msg) {
        this.terminal.innerHTML += "root@bloodraven:~$ " + msg + "<br>";
        this.scrollDown();
    }
    writeln(msg = "", elname = "div", cssclass = "empty") {
        let el = document.createElement(elname);
        el.innerHTML = msg;
        el.classList.add("typing");
        el.classList.add(cssclass);
        el.animate(
            [
                { width: '0' },
                { width: '100%' }
            ], {
                duration: msg.length * 40,
            });
        this.terminal.appendChild(el);
        this.scrollDown();
    }
    execute(command, winObserver = { onWin: () => {} }) {
        this.currentCommand = this.findCommand(command);
        this.currentCommand.winObserver = winObserver;
        this.currentCommand.init(this);
    }
    findCommand(searchedCommand) {
        for (let command of cCommands) {
            if (command.command === searchedCommand) return command;
        }
        return cCommands[0];
    }
    focus() {
        this.terminal.focus();
    }
    clear() {
        this.terminal.innerHTML = "";
    }
    scrollDown() {
        this.terminal.scrollTop = this.terminal.scrollHeight;

    }
}

let cCommands = [{
        command: "nocommand",
        init: function(terminal) {},
        execute: function(answer) {
            return false;
        }
    },
    {
        command: "start",
        init: function(terminal) {
            terminal.writeln("Controls:<br>arrow up- jump<br>arrow down- duck<br>arrow left/right run<br>tab- switch to terminal<br>e- connect with computer tile<br><br>");
            terminal.writeln("Your and your crew need to get to the<br> teleport before explosions kill you.<br>You need to hack computer tiles to open doors for your crew<br>(to do it come to computer tile press E and solve minigame)<br>")
            terminal.writeln("<br>if you ready press enter");
        },
        execute: function(answer) {
            switchToGame();
            game.explosions.startExplosions();
            return true;
        }
    },
    {
        command: "math",
        init: function(terminal) {
            this.num = Math.floor(Math.random() * 1000);
            this.num2 = Math.floor(Math.random() * 1000);
            this.correctAnswer = this.num + this.num2;
            this.terminal = terminal;
            terminal.writeln("Count it!<br>" + this.num + " + " + this.num2);
        },
        execute: function(answer) {
            if (answer == this.correctAnswer) {
                this.terminal.writeln("Correct answer!");
                return true;
            } else {
                this.terminal.writeln("Wrong answer!");
                return false;
            }
        }
    },

    {
        command: "hangman",
        init: function(terminal) {
            const WORDS = ["google", "amazon", "ebay", "apple", "microsoft"]
            this.word = WORDS[randomArrayIndex(WORDS)];
            this.terminal = terminal;
            this.wrongGuesses = 0;

            this.guessingState = [];
            for (let index = 0; index < this.word.length; index++) {
                this.guessingState[index] = '_';
            }

            terminal.writeln("The hang man! You have 2 wrong guesses possible<br> on 3rd you loose<br>Answers are famous IT companies<br> ");
            const emptyGallow =
                ' ____       <br>' +
                '|    |      <br>' +
                '|           <br>' +
                '|           <br>' +
                '|           <br>' +
                '|           <br>' +
                '|___        <br>' +
                '|   |______ <br>' +
                '|          |<br>' +
                '|__________|<br>';
            this.gallow = emptyGallow;
            terminal.writeln(this.gallow, "div", "hangman");
            terminal.writeln();
            this.guessingState.forEach(letter => terminal.writeln(letter + " ", "span"));
            terminal.writeln();
            terminal.scrollDown();
        },
        execute: function(letter) {
            let anyMatch = false;
            for (let i = 0; i < this.word.length; i++) {
                if (this.word[i] == letter) {
                    this.guessingState[i] = letter;
                    anyMatch = true;
                }
            }
            this.updateGallow(anyMatch, this.terminal);
            this.guessingState.forEach(letter => this.terminal.writeln(letter + " ", "span"));
            this.terminal.writeln("<br>");
            terminal.scrollDown();

            if (this.wrongGuesses == 3) {
                this.terminal.writeln("<br>You've loosed brainlet, Try again!<br>")
                this.init(this.terminal);
            }
            let won = this.guessingState.filter(letter => letter == "_").length == 0;
            return won;
        },

        updateGallow: function(anyMatch, terminal) {
            let manBody = [" |", " o", "/|\\", ' |', '/ \\'];
            if (!anyMatch) {
                this.wrongGuesses++;
                this.gallow = replaceOnIndex(this.gallow, 20 + (16 * this.wrongGuesses), manBody[this.wrongGuesses]);
            }
            terminal.writeln(this.gallow, "div", "hangman");
        }

    },
    {
        command: "fallout",
        init: function(terminal) {
            this.WORDS = ['dupa1234', 'password', 'vaultboy', 'predator', 'pasionn4', '12341234', 'sadboy34', 'reptilians', 'thejava', 'better', 'than', 'cesharp', 'emacsby', 'sendmail', "thanos"];
            this.terminal = terminal;
            this.terminal.writeln("You write password from set given below if it was correct<br> you win if not it gives you information how <br>similiar was your password to correct password");
            this.correctPassword = randomArrayElement(this.WORDS);
            terminal.terminal.innerHTML += "<div class='fallout'>";
            this.WORDS.forEach(word => terminal.writeln(word + "	", "span", "wrap"));
            terminal.terminal.innerHTML += "</div><br>";
        },
        execute: function(answer) {
            if (this.WORDS.indexOf(answer) == -1) {
                this.terminal.writeln("<br>You have to choose password from given set");
                return false;
            } else if (this.calcSimiliarity(answer) == this.correctPassword.length) {
                this.terminal.writeln("<br>Correct password<br>");
                return true;
            } else {
                this.terminal.writeln("<br>The password is similiar in " + this.calcSimiliarity(answer) + " letters");
                return false;
            }
        },
        calcSimiliarity: function(answer) {
            let similiarityCounter = 0
            for (let i = 0; i < this.correctPassword.length; i++) {
                if (this.correctPassword[i] == answer[i]) similiarityCounter++;
            }
            return similiarityCounter;
        }
    },
    {
        command: "like",
        init: function(terminal) {
            this.terminal = terminal;
            terminal.writeln("Do you like the game? [Yes/No]");
        },
        execute: function(answer) {
            if (answer == "yes") {
                terminal.writeln("You've thought it's as easy?<br>Try again!");
                return false;
            } else if (answer == "no")
                return true
        }
    }
];

function replaceOnIndex(string, index, replacement) {
    let result = string;
    let endIndex = index + replacement.length;
    return result.substring(0, index) + replacement + result.substring(endIndex, string.length);
}

function randomArrayElement(array) {
    let randomIndex = randomArrayIndex(array);
    return array[randomIndex];
}