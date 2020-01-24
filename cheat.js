//10fastfinger-cheat
//vào trang typing test của bạn https://10fastfingers.com/typing-test/vietnamese
// Login to your typing test https://10fastfingers.com/typing-test/english
//Mở Develop Tools trên Chrome hoặc FireFox (F12 hoặc Ctrl + Shift + I) > Console và dán đoạn code dưới đây vào:
// Open Develop Tools in Chrome or FireFox (F12 or Ctrl + Shift + I) > Console and paste this code:
var word_idx = 0;
var interval_per_word = 250; // in milliseconds
function hackit(){
    if(word_idx<words.length){
        $('#inputfield').val(words[word_idx] + ' ');
        var keyup = jQuery.Event('keyup');
        keyup.which = 32;
        $('#inputfield').trigger(keyup);
        word_idx++;
        setTimeout('hackit()', interval_per_word);
    }
}
setTimeout('hackit()', interval_per_word);
