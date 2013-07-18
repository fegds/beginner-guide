'use strict';

/* Controllers */
angular.module('FEBG.controllers', [])
    .controller('MainCtrl', ['$scope',
        function ($scope) {

			var i, item,
				ctrls = CONS.ctrls,
				menus = [
					{
						text: '成员',
						id: 'members'
					},
					{
						text: '版本控制',
						id: 'svn'
					},
					{
						text: '项目追踪',
						id: 'redmine'
					},
					{
						text: '工作流程',
						id: 'workflow'
					},
				   	{
						text: '准备',
						id: 'bootstrap'
					},
				   	{
						text: 'HTML/CSS 代码规范',
						id: 'htmlcssStyleGuide'
					},
				   	{
						text: 'Javascript 代码规范',
						id: 'javascriptStyleGuide'
					}
				];

			for(i=0; i<menus.length; i++){
				item = menus[i];
				item['ctrl'] = CONS.routes[item.id].id;
				item['url'] = CONS.routes[item.id].url;
			}

            $scope.menus = menus;

			$scope.$on('$routeChangeSuccess', function(e, current, previous) { 
				if(previous){
					angular.element(document.getElementById('route_' + previous.$$route.controller)).removeClass('active');
				}
				angular.element(document.getElementById('route_' + current.$$route.controller)).addClass('active');
			});
        }
    ])
    .controller('MembersCtrl', ['$scope', '$http',
        function ($scope, $http) {

            $http.get('DB/members.json').success(function (data) {
                $scope.members = data;
            });
        }
    ])
    .controller('SvnCtrl', ['$scope',
        function ($scope) {

            $scope.projects = [{
                name: 'C',
                thumbnail: 'c.jpg',
                addr: 'http://192.168.10.7/svn/cantonpm/code/cfec-C/trunk',
                about: ''
            }, {
                name: 'CFEC International',
                thumbnail: 'international.jpg',
                addr: 'http://192.168.10.7/svn/cantonpm/code/en_cantonfair',
                about: ''
            }, {
                name: 'CF one',
                thumbnail: 'cfone.jpg',
                addr: 'http://192.168.10.7/svn/cantonpm/code/java',
                about: ''
            }, {
                name: 'UI',
                thumbnail: 'ui.png',
                addr: 'http://192.168.10.7/svn/cantonpm/UI',
                about: ''
            }];
        }
    ])
    .controller('RedmineCtrl', ['$scope', 
        function ($scope) {

            $scope.service = 'http://192.168.10.28';
            $scope.register = $scope.service + '/account/register';
        }
    ])
    .controller('WorkflowCtrl', ['$scope', 
        function ($scope) {

        }
    ])
    .controller('BootstrapCtrl', ['$scope', 
        function ($scope) {

			var root = 'http://localhost:8080/cfone/user/';
			$scope.register = {
				buyer: root + 'buyerRegi.cf',
				supplier: root + 'supplierRegi.cf'
			};

        }
    ])
    .controller('HtmlcssStyleGuideCtrl', ['$scope', 
        function ($scope) {


        }
    ])
    .controller('JavascriptStyleGuideCtrl', ['$scope', 
        function ($scope) {

			$scope.varNaming = [
				[ '字符串', 's', 'sName = "Angus"' ],
				[ '数字', 'n', 'nAge = 26' ],
				[ '数组', 'a', 'aData = [0, 1]' ],
				[ '日期', 'd', 'dStartTime = new Date();' ],
				[ '逻辑/布尔', 'b', 'bAuto=true;' ],
				[ '正则表达式', 'r', 'rRegExp = /A_Z/;' ],
				[ '函数', 'f', 'fGetName = function(){ return sName; }' ],
				[ 'JSON', 'j', 'jProfile = { name:’Angus’, age: 26 }' ],
				[ '对象/DOM元素', 'o', 'oDom' ],
				[ 'JQ对象', '$', '$JQselector' ],
				[ '其它未涉及类型', 'x', 'xTimer = setTimeout();' ]
			];

		}
    ])
	;
