var finances = [
    ['Jan-2010', 867884], //array 0
    ['Feb-2010', 984655], //array 1
    ['Mar-2010', 322013], //array 2
    ['Apr-2010', -69417], //array 3
    ['May-2010', 310503], //array 4
    ['Jun-2010', 522857], //array 5
    ['Jul-2010', 1033096], //array 6
    ['Aug-2010', 604885], //array 7
    ['Sep-2010', -216386], //array 8
    ['Oct-2010', 477532], //array 9
    ['Nov-2010', 893810], //array 10
    ['Dec-2010', -80353], //array 11
    ['Jan-2011', 779806], //array 12
    ['Feb-2011', -335203], //array 13
    ['Mar-2011', 697845], //array 14
    ['Apr-2011', 793163], //array 15
    ['May-2011', 485070], //array 16
    ['Jun-2011', 584122], //array 17
    ['Jul-2011', 62729], //array 18
    ['Aug-2011', 668179], //array 19
    ['Sep-2011', 899906], //array 20
    ['Oct-2011', 834719], //array 21
    ['Nov-2011', 132003], //array 22
    ['Dec-2011', 309978], //array 23
    ['Jan-2012', -755566], //array 24
    ['Feb-2012', 1170593], //array 25
    ['Mar-2012', 252788], //array 26
    ['Apr-2012', 1151518], //array 27
    ['May-2012', 817256], //array 28
    ['Jun-2012', 570757], //array 29
    ['Jul-2012', 506702], //array 30
    ['Aug-2012', -1022534], //array 31
    ['Sep-2012', 475062], //array 32
    ['Oct-2012', 779976], //array 33
    ['Nov-2012', 144175], //array 34
    ['Dec-2012', 542494], //array 35
    ['Jan-2013', 359333], //array 36
    ['Feb-2013', 321469], //array 37
    ['Mar-2013', 67780], //array 38
    ['Apr-2013', 471435], //array 39
    ['May-2013', 565603], //array 40
    ['Jun-2013', 872480], //array 41
    ['Jul-2013', 789480], //array 42
    ['Aug-2013', 999942], //array 43
    ['Sep-2013', -1196225], //array 44
    ['Oct-2013', 268997], //array 45
    ['Nov-2013', -687986], //array 46
    ['Dec-2013', 1150461], //array 47
    ['Jan-2014', 682458], //array 48
    ['Feb-2014', 617856], //array 49
    ['Mar-2014', 824098], //array 50
    ['Apr-2014', 581943], //array 51
    ['May-2014', 132864], //array 52
    ['Jun-2014', 448062], //array 53
    ['Jul-2014', 689161], //array 54
    ['Aug-2014', 800701], //array 55
    ['Sep-2014', 1166643], //array 56
    ['Oct-2014', 947333], //array 57
    ['Nov-2014', 578668], //array 58
    ['Dec-2014', 988505], //array 59
    ['Jan-2015', 1139715], //array 60
    ['Feb-2015', 1029471], //array 61
    ['Mar-2015', 687533], //array 62
    ['Apr-2015', -524626], //array 63
    ['May-2015', 158620], //array 64
    ['Jun-2015', 87795], //array 65
    ['Jul-2015', 423389], //array 66
    ['Aug-2015', 840723], //array 67
    ['Sep-2015', 568529], //array 68
    ['Oct-2015', 332067], //array 69
    ['Nov-2015', 989499], //array 70
    ['Dec-2015', 778237], //array 71
    ['Jan-2016', 650000], //array 72
    ['Feb-2016', -1100387], //array 73
    ['Mar-2016', -174946], //array 74
    ['Apr-2016', 757143], //array 75
    ['May-2016', 445709], //array 76
    ['Jun-2016', 712961], //array 77
    ['Jul-2016', -1163797], //array 78
    ['Aug-2016', 569899], //array 79
    ['Sep-2016', 768450], //array 80
    ['Oct-2016', 102685], //array 81
    ['Nov-2016', 795914], //array 82
    ['Dec-2016', 60988], //array 83
    ['Jan-2017', 138230], //array 84
    ['Feb-2017', 671099] //array 85
    ];
    // Console Header
      console.log ('--FINANCIAL ANALYSIS--');
      console.log ('----------------------');
    // Find the total number of months in the arrays
      console.log ('Total Months = ' + finances.length);


    // 2 add all together to give total profit loss
    // 3 take the next one in line and subtract the previous. Add the difference to a stored variable then use the total difference then divide by the total months
    // 4 entire period = total arrays. greatest increase month on month
    // 5 entire period = total arrays. greatest decrease month on month
    