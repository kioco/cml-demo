<c-popup show="{{show}}" mask="{{mask}}" class=" cml-view cml-c-popup">
  <view class="toast-content  cml-base cml-view">
    <image qq:if="{{needIcon}}" src="{{typeImg}}" class="toast-icon  cml-base cml-image" />
    <text class="toast-text  cml-base cml-text">{{message}}</text>
  </view>
</c-popup>