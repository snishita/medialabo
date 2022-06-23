// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);		// デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

let btn = document.querySelector('#kaitou');
btn.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
	kaisu += 1;
	let result = document.querySelector('p#result');
	let skaisu = document.querySelector('span#kaisu');
	let sanswer = document.querySelector('span#answer');
    let yoso = Number(document.querySelector('input').value);
    // 課題3-1：ここの判定処理を作成する．
	skaisu.textContent = kaisu;
	sanswer.textContent = yoso;

	if (kaisu >= 4) {
		result.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
	}
	else if (kotae === yoso) {
		result.textContent = '正解です．おめでとう!';
		kaisu = 4;
	}
	else {
		result.textContent = 'まちがい．';
		if (kaisu >= 3) {
			result.textContent += '残念でした答えは ' + kotae + ' です．';
		}
		else if (kotae > yoso) {
			result.textContent += '答えはもっと大きいですよ';
		}
		else {
			result.textContent += '答えはもっと小さいですよ';
		}
	}
	//console.log(textContent);
}

