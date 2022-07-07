
        var stop = false;
        var arrData = document.querySelectorAll("[data-num]");
        var arr = [null, null, null, null, null, null, null, null, null];// 9 ячеек
        
        var concat = function (a, b, c) { // в этой функции проблема
            var result = arr[a] + arr[b] + arr[c] ;

            if (result === "xxx" || result === "ooo") {
                return result;
            }

            switch (result){
                case "xxnull":
                    return ["x", c]  // а вот тут вместо ИКС была русская буква Х

                case "xnullx":
                    return ["x", b]

                case "nullxx":
                    return ["x", a]

                case "oonull":
                    return ["o", c]// тут была буква а

                case "onullo":
                    return ["o", b]// тут была буква а

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
                event.target.style.color = "blue"; //вот тут надо было работать со стилем а ты с классом, ошибка
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

        //можешь продолжать! удачи! будь ВНИМАТЕЛЕН! ОСОБЕННО! Когда копируешь.... и если буквы похожи следи на каком ты языке стоишь. вот такие вот рекомендации, почти как обычно