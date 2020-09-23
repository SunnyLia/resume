<template>
	<view class="location_box">
		<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
		</map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					id: 1,
					latitude: 40.909,
					longitude: 116.39742,
					iconPath: '../../../static/images/location.png',
				}, {
					id: 1,
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/images/location.png',
				}]
			}
		},
		methods: {

		},
		mounted() {},
		methods: {
			getLocation() {
				let that = this;
				uni.getLocation({
					success: function(res) {
						that.latitude = res.latitude;
						that.longitude = res.longitude;
						that.covers = [{
							id: 1,
							latitude: res.latitude,
							longitude: res.longitude,
							iconPath: '../../../static/images/location.png',
						}]
					},
					fail: function(err) {
						uni.showToast({
							title: err.errMsg,
							icon: "none"
						});
					}
				});
			}
		},
		onLoad() {
			// uni.authorize({
			//     scope: 'scope.userLocation,scope.userInfo,scope.camera',
			//     success() {
			//         console.log("授权成功")
			//     },
			// 	fail() {
			// 	    console.log("授权失败")
			// 	}
			// })


			// uni.chooseLocation({
			// 	success: (data)=> {
			// 		console.log(data)
			// 	}
			// })

			// uni.openLocation({
			// 	latitude: this.latitude,
			// 	longitude: this.longitude,
			// 	success: function() {
			// 		console.log('success');
			// 	}
			// });
		}
	}
</script>

<style lang="scss">

</style>
