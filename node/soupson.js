var request = require('request');
var cheerio = require('cheerio');
var AsciiTable = require('ascii-table');
var moment = require('moment');
var table = '';
var newLine = '\n';

request("http://www.soupson.ca/?lang=en", function(error, response, body){
  $ = cheerio.load(body);
  //table.setTitle($('.entry-title').first().text());

  var dayMenu = $('.entry-content').first().find('p').eq(moment().day()).text();
  var weekMenu = $('.entry-content').slice(0,5).find('p').slice(1,6);
  var result = "";
  for (var i = 0, len = weekMenu.length; i < len; i++)
    table += weekMenu[i].children[0].data + newLine;
  console.log(table);
});
