<!-- 应用配置，用来配置App全局样式以及监听 -->
<script>
	export default {
		globalData: {
			text: 'text'
		},
		// 当uni-app 初始化完成时触发（全局只触发一次）
		onLaunch: function() {
			// uni.showLoading({
			// 	title: '加载中'
			// });
			
		},
		// 当 uni-app 启动，或从后台进入前台显示
		onShow: function() {},
		// 当 uni-app 从前台进入后台
		onHide: function() {},

	};
</script>

<style>
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
	body {
		background: #f5f5f5;
	}

	.uni-countdown__number {
		width: 35rpx !important;
		height: 35rpx !important;
		line-height: 35rpx !important;
		background: #ff611d !important;
		margin: 0 !important;
		color: #fff !important;
		border-radius: 5rpx;
	}

	.uni-countdown__splitor {
		line-height: 1 !important;
		color: #ff611d !important;
	}

	uni-swiper .uni-swiper-wrapper {
		overflow: visible;
	}
</style>
