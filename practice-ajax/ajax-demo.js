let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
	// 検索キーを取得
	service = 'e1';
	genre = '0700';
	// URL を設定
	//let url = 'https://www.nishita-lab.org/web-contents/jsons/test.json';
	let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + service + '-' + genre + '-j.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);

}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}



******************************************
**  レポートの提出締め切り：　７月２８日（木）２３：５９
*******************************************

GitHubにプッシュすることを忘れない