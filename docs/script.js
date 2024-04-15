const title = document.querySelector('#title');
const crossheadTitles = document.querySelectorAll('.crosshead-title');

const sizes = [
    {
        fontSize: 0,
    },
    {
        fontSize: '30px',
    }

]

const option = {
    duration: 2000,
    fill: 'forwards',
    easing: 'linear',
}

title.animate(sizes, option);



for (let i = 0; 0 < crossheadTitles.length; i++) {
    console.log(crossheadTitles[i].textContent)
    let crossheadTitlesText = crossheadTitles[i].textContent; // 要素内のテキストを取得
    console.log(crossheadTitlesText)
    let crossheadTitlesLength = crossheadTitlesText.length; // テキストの長さを取得 (文字数)
    crossheadTitles[i].style = {
        borderBottom: 'solid 2px black',
        width: `${crossheadTitlesLength + 5}em`,
        backgroundColor: 'red',
    }
    console.log('処理')
    // iをぜろにするとバグります
}