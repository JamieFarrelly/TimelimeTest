var visited_site = new Date();

var yearly_wage_pence = 3198000000; // £31,980,000 a year
var seconds_in_year = 31536000;
var pence_per_second = yearly_wage_pence / seconds_in_year;

setInterval(function() {
    var start = new Date(2016, 11, 29, 0, 0, 0, 0);
    var now = new Date();
    var dif = start.getTime() - now.getTime();

    var seconds_between_start_date_and_now = dif / 1000;
    var seconds_between_dates = Math.abs(seconds_between_start_date_and_now);
    
    var pence_made_since_joining = Math.ceil(seconds_between_dates * pence_per_second);
    
    var earned_amount = '£' + (pence_made_since_joining / 100).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    
    document.getElementById('earned-amount').innerHTML = earned_amount;
} , 1000)

setInterval(function() {
    var now = new Date();
    var dif = visited_site.getTime() - now.getTime();

    var seconds_between_visted_site_and_now = dif / 1000;
    var seconds_between_dates = Math.abs(seconds_between_visted_site_and_now);
    
    var pence_made_since_visiting = Math.ceil(seconds_between_dates * pence_per_second);
    
    var earned_amount_since_visited_site = '£' + (pence_made_since_visiting / 100).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    
    document.getElementById('earned-amount-since-visited').innerHTML = earned_amount_since_visited_site;
} , 1000)