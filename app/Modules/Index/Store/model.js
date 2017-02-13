/*import 'es6-promise';*/
import $ from 'jquery';
// import systemsetting from '../Config/config.json';

const ajaxType = 'GET';

class DataService  {
    constructor() {

    }
    getModelList(){
        $.support.cors = true;
        return new Promise(function(resolve, reject){
            $.ajax({
                "async": true,
                "crossDomain": true,
                "url": systemsetting.modelServerAddress,
                "method": "GET",
                beforeSend: function auth(xhr) {
                    xhr.setRequestHeader('Authorization', `Basic ${btoa(systemsetting.pp)}`);
                },
                success: function successCallback(data) {
                    resolve(data);
                },
                error: function errorCallback(xhr) {
                    reject(xhr);
                },
            });
        });
    }
    getDGN(){
        $.support.cors = true;
        return new Promise(function(resolve, reject){
            $.ajax({
                "async": true,
                "crossDomain": true,
                "url": systemsetting.DGNAddress,
                "method": "GET",
                beforeSend: function auth(xhr) {
                    xhr.setRequestHeader('Authorization', `Basic ${btoa(systemsetting.pp)}`);
                },
                success: function successCallback(data) {
                    resolve(data);
                },
                error: function errorCallback(xhr) {
                    reject(xhr);
                },
            });
        });
    }
}

export default DataService;