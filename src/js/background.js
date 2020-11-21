import { subjects } from "./data.js";

$(document).ready(function () {
    for (const subject in subjects) { 
        for (const topic in subjects[subject]) {
            var div = $("<div class='accordion'></div>");
            $(subject).append(div);
            var card = $("<div class='card'></div>");
            $(div).append(card);
            var header = $("<div class='card-header'></div>");
            $(card).append(header);
            var btn = $(`<button class='btn btn-link btn-block text-left' data-toggle='collapse' data-target='#collapse${topic}'>${topic}</button>`);
            $(header).append(btn);
            var collapse = $(`<div class='collapse' id='collapse${topic}'><div/>`)
            $(card).append(collapse);
            var info = $("<div class='card-body'></div>");
            $(collapse).append(info);
            var list = $("<ul class ='links'></ul>")
            $(info).append(list);
            for (const linkText in subjects[subject][topic]) {
                var text = $(`<li ></li>`)
                $(list).append(text)
                var link = $(`<a class='notes-link' href=${subjects[subject][topic][linkText]} target='_blank'>${linkText}</a>`)
                $(text).append(link)
            }
        }
        // $(subject).append("<br>")
    }
})
