Никогда не используйте success/error, пользуйтесь только then/catch
Пример
//плохо
    $http.get('/firstUrl')
        .success(function(response){
            console.log('first success');
            console.log(response);
            return $http.get('/secondUrl').success(function(res){
                console.log('nested handler');
                console.log(res);
}); })
        .success(function(response){
            console.log('Fires before the nested success handler. Still only sees the first result though'
            console.log(response);
})
//хорошо
    $http.get('/first/Url')
        .then(function(response){
          console.log('first then');
          console.log(response.data);
          //Someone actually cares about the result now :‐)
          return $http.get('/secondUrl');
        })
        .then(function(response){
          console.log('I am enjoying the results from the second call');
          console.log(response.data);
});

