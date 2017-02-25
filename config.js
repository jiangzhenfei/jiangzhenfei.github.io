//引入所有的依赖模块
var app=angular.module('app',['ui.router','homeApp','classApp'])
//对路由进行配置
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.
	state('home',{
		url:'/home',
		//这是首页的组件，要先在模型中注入，也就是homeApp
		template:'<home-component></home-component>',
	}).
	state('class',{
		url:'/class',
		//这是分类页的组件，要先在模型中注入，也就是classAPP
		template:'<class-component></class-component>',
	})
	$urlRouterProvider.otherwise('/home')//默认的加载哪个页面
})