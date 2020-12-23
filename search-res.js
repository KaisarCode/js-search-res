// Search results array
function searchRes(res, str) {
    str = str || '';
    str = str.toLowerCase();
    if (str) {
        tmp = [];
        res.forEach(function(r, i){
            for (var k in r) {
                if (
                typeof r[k] == 'string' &&
                r[k].toLowerCase().indexOf(str) > -1
                ) { tmp.push(r); return 0; }
            }
        });
        return tmp;
    } else { return res; }
}
