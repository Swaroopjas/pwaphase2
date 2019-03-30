this.addEventListener('install',function(event){
  event.waitUntill(
    caches.open('mycache').then(function(e){
      e.addAll([
'/index.html',
'/css/index.css',
'/js/get.js',
'/js/main.js',
'/js/sw.js',
'/js/resume.js',
'/form.html',
'/resume.html',
'/css/form.css',
'/css/resume.css',
'/css/static.css'


      ])
    })
  )
})


// fetch addEventListener

this.addEventListener('install',function(even){
  even.respondWith(caches.open('my cache')

.then(function(cache){

  return cache.match(event.request)
  .then(function (result){
    return result || fetch(event.request)
    .then(function(result){
      cache.put(event.request,result.clone());
      return result;
    })
  })
})
)

})
