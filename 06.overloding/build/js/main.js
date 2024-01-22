"use strict";
function add(a, b) {
    return a + b;
}
add("hello", "world");
add(1, 1);
//union 타입
function saySomthing(word) {
    if (typeof word == "string") {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(" ");
    }
    throw new Error("unable to say something");
}
saySomthing(['hello', 'world']);
function saySomthing2(word) {
    if (typeof word == "string") {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(" ");
    }
    throw new Error("unable to say something");
}
