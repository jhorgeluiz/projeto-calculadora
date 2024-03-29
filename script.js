
    function addToDisplay(value) {
        document.getElementById('display').value += value
    }

    function clearDisplay() {
        document.getElementById('display').value = ''
    }

    function calculatePercentage() {
        var expression = document.getElementById('display').value;
        var result = eval(expression);
        var percentResult = result / 100
        document.getElementById('display').value = percentResult;
    }    

    function calculate() {
        var expression = document.getElementById('display').value
        var result = eval(expression)
        document.getElementById('display').value = result
    }

    function apagarDigito() {
        var display = document.getElementById('display')
        var value = display.value

        if (value.length > 0) {
            display.value = value.substring(0, value.length - 1)
        }
    }

    
    