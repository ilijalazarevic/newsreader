/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Ilija Lazarevic
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

angular.module('newsreader', ['ngRoute', 'ngSanitize', 'owncloud', 'pasvaz.bindonce']);

angular.module('newsreader').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/articles/all', {
        controller:'ArticlesCtrl',
        templateUrl:'app/articles/articles.html',
        resolve:{
            type:function () {
                return 'all';
            }
        }
    }).when('/articles/star', {
        controller:'ArticlesCtrl',
        templateUrl:'app/articles/articles.html',
        resolve:{
            type:function () {
                return 'star';
            }
        }
    }).when('/folders', {
        controller:'FoldersCtrl',
        templateUrl:'app/folders/folders.html'
    }).when('/feeds', {
        controller:'FeedsCtrl',
        templateUrl:'app/feeds/feeds.html'
    }).when('/folder/:id/articles', {
        controller:'ArticlesCtrl',
        templateUrl:'app/articles/articles.html',
        resolve:{
            type:function () {
                return 'folder';
            }
        }
    }).when('/feed/:id/articles', {
        controller:'ArticlesCtrl',
        templateUrl:'app/articles/articles.html',
        resolve:{
            type:function () {
                return 'feed';
            }
        }
    }).when('/login',{
        controller: 'LoginCtrl',
        templateUrl: 'app/login/login.html'
    })
    .otherwise({
        redirectTo:'/articles/all'
    });
}]);