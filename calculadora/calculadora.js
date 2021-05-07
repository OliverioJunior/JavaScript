        var $screen = document.getElementById('tela');
        var b = document.querySelectorAll('button');
        var dividend = 'none';
        var operador = '';
        var max = 10;
        var more = ''
        var numb1 = ''
        function number(n){
            if($screen.innerHTML.length>=max){

            } else{ 
                $screen.innerHTML += n;
                }
        }
        function reset(){
            $screen.innerHTML = '';
            dividend = '';
        }
        function moreorless(){
            if(parseFloat($screen.innerHTML) > 0){
                $screen.innerHTML *= (-1);
            } else{
                $screen.innerHTML *= (-1);
            }
        }
        function percentage(){
            $screen.innerHTML *= (1/100);

        }
        function operations(n) {
            operador = n;
            dividend = $screen.innerHTML;
            $screen.innerHTML = '';
        }
        function comma(){
            var com = $screen.innerHTML
        if (com.indexOf('.') === -1 && com === ''){
                $screen.innerHTML = '0.'
            } else if(com.indexOf('.') === -1){
                $screen.innerHTML += '.';
            } 
            
        }
        function clear(){
            dividend = "";
            operador = "";
        }
        function equal(){
           
            switch(operador){
                    case "/":
                        
                        $screen.innerHTML =  dividend / $screen.innerHTML;
                        clear()
                    break;
                    case "x":
                        
                        $screen.innerHTML *=  dividend;
                        clear()
                    break;
                    case "-":
                           
                        $screen.innerHTML =  (dividend - $screen.innerHTML);
                        clear()
                    break;
                    case "+":
                       
                        more = parseFloat($screen.innerHTML);
                        numb1 = parseFloat(dividend);
                        more += numb1;
                        $screen.innerHTML = more; 
                        clear()
                    break;
                    default:
                } 
        }
       


