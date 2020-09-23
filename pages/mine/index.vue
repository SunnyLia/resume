<template>
	<view class="mine_box">
		<view class="pho_box">
			<image :src="phoImg" @click="upload"></image>
			<view>{{phoNik}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoImg: "../../static/images/mine.png",
				phoNik: "昵称"
			}
		},
		onLoad() {
			let that = this;
			let userInfo = uni.getStorageSync('userInfo');
			
			if (!userInfo) {
				//获取服务供应商
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						//res.provider ["weixin","qq","sinaweibo"]
						if (res.provider.indexOf('weixin') != -1) {
							// 登录
							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									// console.log(JSON.stringify(loginRes.authResult))
									// 获取用户信息
									uni.getUserInfo({
										provider: 'weixin',
										success: function(infoRes) {
											// console.log(infoRes.userInfo);
											that.phoImg = infoRes.userInfo.avatarUrl;
											that.phoNik = infoRes.userInfo.nickName;
											uni.setStorageSync('userInfo', JSON.stringify(infoRes.userInfo));
										}
									});
								}
							});
						}
					}
				});
			} else {
				userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				that.phoImg = userInfo.avatarUrl;
				that.phoNik = userInfo.nickName;
			}
		},
		methods: {
			upload: function() {
				let that = this;
				//选择图片或拍照
				uni.chooseImage({
					success: (res) => {
						that.phoImg = res.tempFilePaths[0]
						//上传
						uni.uploadFile({
							url: 'http://127.0.0.1:8081/upload', //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							formData: {
								'user': res.tempFiles
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes);
							}
						});

					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.mine_box {
		padding: 20rpx;
		box-sizing: border-box;
		font-size: 28rpx;

		.pho_box {
			text-align: center;

			image {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				border: 1px solid;
			}
		}
	}
</style>
