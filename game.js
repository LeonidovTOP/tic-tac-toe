
        var stop = false;
        var arrData = document.querySelectorAll("[data-num]");
        var arr = [null, null, null, null, null, null, null, null, null];
        
        var concat = function (a, b, c) { 
            var result = arr[a] + arr[b] + arr[c] ;

            if (result === "xxx" || result === "ooo") {
                return result;
            }

            switch (result){
                case "xxnull":
                    return ["x", c]  

                case "xnullx":
                    return ["x", b]

                case "nullxx":
                    return ["x", a]

                case "oonull":
                    return ["o", c]

                case "onullo":
                    return ["o", b]

                case "nulloo":
                    return ["o", a]                    
            }
        }

        var changeColorAndStop = function(a, b, c) {
            arrData[a].style.color = "red";
            arrData[b].style.color = "red";
            arrData[c].style.color = "red";
            stop = true;
        }


        var checkWin = function() {
            for (let i = 0; i < 3; i++) {
                var result = concat(i, i + 3, i + 6);

                if(result === "xxx" || result === "ooo"){
                    changeColorAndStop(i, i + 3, i + 6);
                }
            }
            for (let i = 0; i <= 6; i += 3) {
                var result = concat(i, i + 1, i + 2);

                if(result === "xxx" || result === "ooo"){
                    changeColorAndStop(i, i + 1, i + 2);
                }
            }

            result = concat(0, 4, 8)
            if(result === "xxx" || result === "ooo"){
                changeColorAndStop(0, 4, 8);
            }
            result = concat(2, 4, 6)
            if(result === "xxx" || result === "ooo"){
                changeColorAndStop(2, 4, 6);
            }
        }



        var botZero = function(){

            for (let i = 0; i < 3; i++) {
                var result = concat(i, i + 3, i + 6);

                if(typeof(result) === "object" && result ===[0] === "o"){
                    arrData[result[i]].innerHTML = "o"
                    arr[result[i]] = "o"
                    return
                }
            }
            for (let i = 0; i <= 6; i += 3) {
                var result = concat(i, i + 1, i + 2);

                if(typeof(result) === "object" && result ===[0] === "o"){
                    arrData[result[i]].innerHTML = "o"
                    arr[result[i]] = "o"
                    return
                }
                
            }

            result = concat(0, 4, 8)
            if(typeof(result) === "object" && result ===[0] === "o"){
            arrData[result[i]].innerHTML = "o"
            arr[result[i]] = "o"
            return
            }
            result = concat(2, 4, 6)
            if(typeof(result) === "object" && result ===[0] === "o"){
            arrData[result[i]].innerHTML = "o"
            arr[result[i]] = "o"
            return
                }
        





        for (let i = 0; i < 3; i++) {
            var result = concat(i, i + 3, i + 6);

            if(typeof(result) === "object" && result ===[0] === "x"){
                arrData[result[i]].innerHTML = "o"
                arr[result[i]] = "o"
                return
            }
        }
        for (let i = 0; i <= 6; i += 3) {
            var result = concat(i, i + 1, i + 2);

            if(typeof(result) === "object" && result ===[0] === "x"){
                arrData[result[i]].innerHTML = "o"
                arr[result[i]] = "o"
                return
            }
            
        }

        result = concat(0, 4, 8)
        if(typeof(result) === "object" && result ===[0] === "x"){
        arrData[result[i]].innerHTML = "o"
        arr[result[i]] = "o"
        return
        }
        result = concat(2, 4, 6)
        if(typeof(result) === "object" && result ===[0] === "x"){
        arrData[result[i]].innerHTML = "o"
        arr[result[i]] = "o"
        return
            }


        var tempArr = [];

        for(var i = 0; i < 9; i++) {
            if(arr[i] === null) {
                tempArr.push(i)
            }
        }
        

        var randIndexTempArr = Math.floor(Math.random() * tempArr.length);

        var randNull = tempArr[randIndexTempArr];

        arrData[randNull].innerHTML = "o"
        arr[randNull].innerHTML = "o"
    }


        addEventListener("click", function(event){
            if(stop === true){return;}

            if (event.target.className === "cell" && event.target.textContent === "") {
                event.target.style.color = "blue"; 
                event.target.innerHTML = "x";
                arr[event.target.dataset.num] = "x";
            } else{
                return;
            }

            checkWin();

            if(stop === true){return;}

            botZero()
            checkWin();
        })

        