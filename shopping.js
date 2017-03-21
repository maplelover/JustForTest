(function(){
     var isLogined = document.getElementById("pin") != null;

     if (typeof $AINemo == "object") {
          if (!isLogined
               && typeof $AINemo.login == "function") {
               $AINemo.login("http://m.uc.cn");
          }
     }
     
     return {isLogin: isLogined};
})();
