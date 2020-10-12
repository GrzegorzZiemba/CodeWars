function cache(func) {
    var cache = {};
    return function() {
      var n = JSON.stringify(arguments);
      if (!(n in cache)) {
        cache[n] = func.apply(null, arguments);
      }
      return cache[n];
    };
  }