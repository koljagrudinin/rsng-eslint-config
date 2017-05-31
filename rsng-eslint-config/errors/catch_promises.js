
// Всегда перехватывайте ошибки промисов в фабриках и сервисах. Блок catch всегда должен возвращать rejected промис,
//в противном случае пользователи промиса не узнают о том, что он завершился неудачей
//   29/36

// Пример
//плохо
function getCustomer(id) {
    return $http.get('/api/customer/' + id)
        .then(getCustomerComplete)
        .catch(getCustomerFailed);
    function getCustomerComplete(data, status, headers, config) {
        return data.data;
    }
    function getCustomerFailed(e) {
        var newMessage = 'XHR Failed for getCustomer'
        if (e.data && e.data.description) {
            newMessage = newMessage + '\n' + e.data.description;
        }
        e.data.description = newMessage;
        logger.error(newMessage);
        // ***
        // Notice there is no return of the rejected promise
        // ***
    }
}
//хорошо
function getCustomer(id) {
    return $http.get('/api/customer/' + id)
        .then(getCustomerComplete)
        .catch(getCustomerFailed);
    function getCustomerComplete(data, status, headers, config) {
        return data.data;
    }
    function getCustomerFailed(e) {
        var newMessage = 'XHR Failed for getCustomer'
        if (e.data && e.data.description) {
            newMessage = newMessage + '\n' + e.data.description;
        }
        e.data.description = newMessage;
        logger.error(newMessage);
        return $q.reject(e);
    }
}
