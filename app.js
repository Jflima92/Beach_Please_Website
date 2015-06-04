'use strict'

angular.module('medApp', [
'duScroll',
'angular-flexslider',
'ngMap',
'ngRoute',
'mediaPlayer'])

.value('duScrollDuration', 2000)
.value('duScrollOffset', 30)
.constant('songs', [ { url: 'http://upload.wikimedia.org/wikipedia/en/5/5e/U2_One.ogg', displayName: 'U2 - One' }, { url: 'http://upload.wikimedia.org/wikipedia/en/6/6c/NirvanaSmellsLikeTeenSpirit.ogg', displayName: 'Nirvana - Smells Like Teen Spirit' }, { url: 'http://upload.wikimedia.org/wikipedia/en/b/be/My_Name_Is.ogg', displayName: 'Eminem - My Name is' }, { url: 'http://upload.wikimedia.org/wikipedia/en/c/c4/Radiohead_-_Creep_%28sample%29.ogg', displayName: 'Radiohead - Creep' }, { url: 'http://upload.wikimedia.org/wikipedia/en/6/64/OasisLiveForever.ogg', displayName: 'Oasis - Live Forever' }, { url: 'http://upload.wikimedia.org/wikipedia/en/6/65/Eagles_-_Hotel_California.ogg', displayName: 'Eagles - Hotel California' }, { url: 'http://upload.wikimedia.org/wikipedia/en/c/cb/Stairway_to_Heaven_3_sections.ogg', displayName: 'Led Zeppelin - Stairway to Heaven' }, { url: 'http://upload.wikimedia.org/wikipedia/en/c/cb/Pink_floyd_another_brick_in_the_wall_part_2.ogg', displayName: 'Pink Floyd - Another Brick in the Wall' }, { url: 'http://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg', displayName: 'Beatles - Come Together' }, { url: 'http://upload.wikimedia.org/wikipedia/en/d/db/Layla_sample_1.ogg', displayName: 'Derek and the Dominos - Layla' } ])

.config(['$routeProvider', function($routeProvider){

  $routeProvider.
  when('/', {
    templateUrl: 'index.html',
    controller: 'mainController',
  }).
  when('/login', {
    templateUrl: 'views/secret.html',
    controller: 'loginController',
  }).
  otherwise({
    redirectTo: '/index'
  });

}])

.controller('mainController', ['$scope', '$document', 'songs',
function($scope, $document, songs){

  /** Automated Scroll functions */

  $scope.moveToATuna = function(){

    $document.scrollTopAnimated(400).then(function() {
      console.log('You just scrolled to the top!');
    });

    var someElement = angular.element(document.getElementById('intro-wrapper'));
    $document.scrollToElementAnimated(someElement);
  }


  $scope.moveToNoticias = function(){

    $document.scrollTopAnimated(400).then(function() {
      console.log('You just scrolled to the top!');
    });

    var someElement = angular.element(document.getElementById('noticias'));
    $document.scrollToElementAnimated(someElement);
  }

  $scope.moveToEventos = function(){

    $document.scrollTopAnimated(400).then(function() {
      console.log('You just scrolled to the top!');
    });

    var someElement = angular.element(document.getElementById('eventos'));
    $document.scrollToElementAnimated(someElement);
  }

  $scope.moveToMusicas = function(){

    $document.scrollTopAnimated(400).then(function() {
      console.log('You just scrolled to the top!');
    });

    var someElement = angular.element(document.getElementById('musicas'));
    $document.scrollToElementAnimated(someElement);
  }

  $scope.moveToContactos = function(){

    $document.scrollTopAnimated(400).then(function() {
      console.log('You just scrolled to the top!');
    });

    var someElement = angular.element(document.getElementById('contatos'));
    $document.scrollToElementAnimated(someElement);
  }

  $scope.moveToGaleria = function(){

    $document.scrollTopAnimated(400).then(function() {
      console.log('You just scrolled to the top!');
    });

    var someElement = angular.element(document.getElementById('footer-wrapper'));
    $document.scrollToElementAnimated(someElement);
  }

  $scope.toTop = function(){

    $document.scrollTopAnimated(400).then(function() {
      console.log('You just scrolled to the top!');
    });

    var someElement = angular.element(document.getElementById('header-wrapper'));
    $document.scrollToElementAnimated(someElement);
  }


  /** Definitions **/


  $scope.slides = [
  'images/slide1.jpg',
  'images/slide2.jpg',
  'images/slide3.jpg',
  'images/slide4.jpg',
  'images/slide5.jpg',
  'images/slide6.jpg',
  'images/slide7.jpg',
  'images/slide8.jpg',
  'images/slide9.jpg'
  ];

  $scope.audioPlaylist = songs.map(function (song, index, array) { var parseTitle = song.displayName.match(/(.*?)\s?-\s?(.*)?$/); return { src: song.url, type: 'audio/ogg', artist: parseTitle[1], title: parseTitle[2] }; });
}])
