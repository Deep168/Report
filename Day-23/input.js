<!DOCTYPE html>
<html>
<head>
    <title>
        Window prompt() Method
    </title>
</head>
<body style="text-align: center;">
    <h1 style="color:green;">
        GeeksforGeeks
    </h1>
    <h2>
        Window prompt() Method
    </h2>
 <button onclick="geek()">
        Click me!
    </button>
    <p id="g"></p>
  <script>
        function geek() {
            var doc = prompt("Please enter some text",
                "GeeksforGeeks");
            if (doc != null) {
                document.getElementById("g").innerHTML =
                    "Welcome to " + doc;
            }
        }
    </script>
</body>
</html>

consisting of queries =
{
"input" as the type
'name' is the name
"What's your name?" is the message.
},
];
inquirer.prompt(questions).
After that, the results are as follows:
log('Hi $answers.name!'), console.log('
});