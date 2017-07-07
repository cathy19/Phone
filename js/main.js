/*
* @Author: cathy.chen
* @Date:   2017-06-29 13:55:33
* @Last Modified by:   cathy.chen
* @Last Modified time: 2017-06-30 18:22:47
*/

'use strict';

$(function(){
	$('.nav').singlePageNav({
		offset:60
	});

	$('.navbar-collapse a').click(function(){
		$('.navbar-collapse').collapse('hide')
	});

	new WOW().init();
	
})