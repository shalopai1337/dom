< !DOCTYPE html >
    <html lang="ru">
        <head>
            <meta charset="UTF-8">
                <title>Document</title>
        </head>
        <body>
            <input type='text' id='inputField'>
            <input type='text' id='outputField'>
            <button id='press'>Преобразовать</button>

            <script>
                "use strict";

                let moneyIn = document.getElementById('inputField');
                let moneyOut = document.getElementById('outputField');
                let button = document.getElementById('press');
                
                button.onclick = function() { 
                let text = moneyIn.value;
                let total = text.slice(1);
                moneyIn.value = total;
                }

            </script>
        </body>
    </html>