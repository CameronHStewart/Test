function get_local_storage() {
    let aaa_storage = localStorage.getItem('aaa_storage');
    let json_aaa_storage = {};
    if(aaa_storage != null) {
        json_aaa_storage = JSON.parse(aaa_storage);
    }
}

function log_demo() {
    console.log('Import worked!!!');   
}
