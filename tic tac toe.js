const tr1 = document.querySelector('#tr1');
const tr2 = document.querySelector('#tr2');
const tr3 = document.querySelector('#tr3');
const arrtr = [tr1, tr2, tr3];
const tds = [];
let turn = 'X';


const PLAY=function(event) {
    

    const trNumber = arrtr.indexOf(event.target.parentNode);
    const tdNumber = tds[trNumber].indexOf(event.target);

    if (tds[trNumber][tdNumber].textContent !== '') { 
    } else {
        tds[trNumber][tdNumber].textContent = turn;

        let threeTd = false;

        //가로
        if (
            tds[trNumber][0].textContent === turn &&
            tds[trNumber][1].textContent === turn &&
            tds[trNumber][2].textContent === turn 
        ) {
            threeTd = true;
        }
        
        // 세로
        if (
            tds[0][tdNumber].textContent === turn &&
            tds[1][tdNumber].textContent === turn &&
            tds[2][tdNumber].textContent === turn
        ) {
            threeTd = true;
        }

        // 대각선 1
        if (trNumber - tdNumber === 0) { 
            if ( 
                tds[0][0].textContent === turn &&
                tds[1][1].textContent === turn &&
                tds[2][2].textContent === turn
            ) {
                threeTd = true;
            }
        }

        // 대각선 2
        if (Math.abs(trNumber - tdNumber) === 2) {
            if ( 
                tds[0][2].textContent === turn &&
                tds[1][1].textContent === turn &&
                tds[2][0].textContent === turn
            ) {
                threeTd = true;
            }
        }

        // 다 찼으면
        if (threeTd) {
            alert('Player ' + turn + ' win!');

            // 초기화
            turn = 'X';
            tds.forEach(function (arrtr) {
                arrtr.forEach(function (td) {
                    td.textContent = '';
                });
            });

        } else { // 다 안 찼으면
            if (turn === 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            }
        }
    }
};


for (let i = 0; i < 3; i++) {
    tds.push([]);
};

for (let j = 0; j < 3; j++) {
    tds[0].push(tr1.querySelectorAll('td').item(j));
    tds[1].push(tr2.querySelectorAll('td').item(j));
    tds[2].push(tr3.querySelectorAll('td').item(j));
};

for (let k = 0; k < 9; k++) {
    const td = document.getElementsByTagName('td').item(k);
    td.addEventListener('click', PLAY);
};

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', function() {
    turn = 'X';
    tds.forEach(function (arrtr) {
        arrtr.forEach(function (td) {
            td.textContent = '';
        });
    });
});

console.log(arrtr, tds);