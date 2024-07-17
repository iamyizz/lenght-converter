let body = document.body;

function darkMode() {
    let modeSekarang = body.getAttribute('data-bs-theme')
    if (modeSekarang == 'dark') {
        body.setAttribute('data-bs-theme', 'light');
    } else {
        body.setAttribute('data-bs-theme', 'dark');
    }
}

function lengthConverter(unit) {
    let mm,cm,dm,m,dam,hm,km

    switch(unit) {
        case 'mm':
            mm = document.getElementById('mm').value
            cm = mm / 10
            dm = mm / 100
            m = mm / 1000
            dam = mm / 10000
            hm = mm / 100000
            km = mm / 1000000
            break
        case 'cm':
            cm = document.getElementById('cm').value
            mm = cm * 10
            dm = cm / 10
            m = cm / 100
            dam = cm / 1000
            hm = cm / 10000
            km = cm / 100000
            break
        case 'dm':
            dm = document.getElementById('dm').value
            mm = dm * 100
            cm = dm * 10
            m = dm / 10
            dam = dm / 100
            hm = dm / 1000
            km = dm / 10000
            break
        case 'm':
            m = document.getElementById('m').value
            mm = m * 1000
            cm = m * 100
            dm = m * 10
            dam = m / 10
            hm = m / 100
            km = m / 1000
            break
        case 'dam':
            dam = document.getElementById('dam').value
            mm = dam * 10000
            cm = dam * 1000
            dm = dam * 100
            m = dam * 10
            hm = dam / 100
            km = dam / 10
            break
        case 'hm':
            hm = document.getElementById('hm').value
            mm = hm * 100000
            cm = hm * 10000
            dm = hm * 1000
            m = hm * 100
            dam = hm * 10
            km = hm / 10
            break
        case 'km':
            km = document.getElementById('km').value
            mm = km * 1000000
            cm = km * 100000
            dm = km * 10000
            m = km * 1000
            dam = km * 100
            hm = km * 10
            break
    }

    document.getElementById('mm').value = mm
    document.getElementById('cm').value = cm
    document.getElementById('dm').value = dm
    document.getElementById('m').value = m
    document.getElementById('dam').value = dam
    document.getElementById('hm').value = hm
    document.getElementById('km').value = km
}