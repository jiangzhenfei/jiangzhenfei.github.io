var classApp=angular.module('classApp',[]);
classApp.component('classComponent',{
	//指定模板的资源位置
	templateUrl:'component/class.html',
	controller:['$scope',function($scope){//$scope可以不写，不过在ng1.2前习惯写了
		//注意组件内不再用$scope.names表示，而用this，
		//同时在组建的html中要用$ctrl.name代表这个作用域中的name,例如<h3>{{$ctrl.name}}</h3>
		var self=this;
		this.names=['ppp','ddd','ooo']
		console.log(111)
		this.likes=['with my friend to play basketball',
				'with my faxiao together to games',
				'playoing pingpang',
				'i like codeing code'
		];
		this.increase=function(){
			self.likes.push(self.add)
		}
	}]
})