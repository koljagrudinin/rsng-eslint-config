//При перечислении св­в через for in не забывайте про hasOwnProperty
//Пример
    for(key in object) {
        if(object.hasOwnProperty(key) {
          //...then do something...
       }
}
