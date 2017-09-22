var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
        'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

        // Variables for tracking our wins, losses and ties. They begin at 0.
        var wins = 0;
        var losses = 0;
        var guesses = 10;

        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
        reWriteDocument();

        // When the user presses a key, it will run the following function...
        document.onkeyup = function(event) {
            var userGuess = event.key;
            console.log("user input: " + userGuess);
            if(userGuess === computerChoice){
                wins++;
                reset();
            }
            else{
                guesses--;
                if(guesses == 0){
                    alert('try again')
                    losses++;
                    reset();
                }
            }
            
            reWriteDocument();
        }

        function reset(){
            guesses = 10;
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerChoice);
        }

        function reWriteDocument()
        {
            
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            document.getElementById("losses").innerHTML = "losses: " + losses;
            document.getElementById("guesses").innerHTML = "Guesses left: " + guesses; 
            document.getElementById("audio").loop = true;
        }  