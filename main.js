var kuroshiro = require('kuroshiro');
var japaneasy = require('japaneasy');
var inspect = require('unist-util-inspect');
var unist_filter = require('unist-util-filter');
var unist_visit = require('unist-util-visit');
var find = require('unist-util-find');
var readline = require('readline');
var ParseJapanese = require('parse-japanese');
var fs = require('fs');
var path = require('path');
var japanese = new ParseJapanese();

var wwwjdic = new japaneasy({ dictionary: "glossing" })
/*
var text = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    text += chunk;
});
process.stdin.on('end', function() {
    parse(text);
});
*/
// var lines = text.split('\n');
//var text = fs.readFileSync("./in.txt", "utf8");
parse = function (text) {
    outlines = '';
    var outstring = "";
    var tree = {};
    var sentencelist = [];
    japanese.parse(text, cst => {
        tree = inspect(cst);
        unist_visit(cst, 'SentenceNode', visitor);
        visitor = function(node) { 
            outstring.push(node.value);
            outstring.push
            

        }

        debugger;
    });
}
parse("1997年10月2日には、日本国内での販売本数300万本突破記念として、アメリカ版における追加部分を逆移植した『ファイナルファンタジーVII インターナショナル』が日本国内で発売された（販売本数約64万本）。2001年12月20日には廉価版『PS one Books ファイナルファンタジーVII インターナショナル』として再発売された。2009年4月10日には『ファイナルファンタジーVII インターナショナル』がゲームアーカイブスとして配信開始された。アメリカではWindowsにも移植された。日本国内でも後に逆輸入という形でWIN英語版が販売。さらに、2012年に欧米でWindows XP以降対応として再リリースされ、2013年5月にはこのWIN英語版のテキスト文を日本語化した『ファイナルファンタジーVII インターナショナル for PC』というタイトルでダウンロード専売された（『～for PC』日本語版の詳細については『～インターナショナル』の節を参照のこと）。ひかりTVなど、クラウドゲーム（Gクラスタ）としても提供された[7][8]。")
