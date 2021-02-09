<template>
  <div class="swiper-page">
    <swiper class="swiper" :options="swiperOptions" ref="trendContainerSwiperEL">
      <swiperSlide v-for="(em,n) in 5" :key="n">
        <ul class="img-list">
          <li class="img-item" v-for="(item,index) in imgList" :key="index">
            <img :src="item.url" alt="">
            <div class="name">{{`${n}-----${item.name}-----${n}`}}</div>
          </li>
        </ul>
      </swiperSlide>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
  name: 'swiper-page',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      imgList: require('./data/imgList'),
      swiperOptions: {
        notNextTick: true,
        initialSlide: 0
      }
    };
  },
  computed: {
    trendContainerSwiperEL () {
      return this.$refs.trendContainerSwiperEL.swiper;
    }
  },
  mounted () {
    this.$refs.trendContainerSwiperEL.swiper.slideTo(0, 0, false);
    // 控制页面滚动
    var startScroll, touchStart, touchCurrent,
      swiper = this.$refs.trendContainerSwiperEL.swiper;
    swiper.slides.on('touchstart', function (e) {
      startScroll = this.scrollLeft;
      touchStart = e.targetTouches[0].pageX;
    }, true);
    swiper.slides.on('touchmove', function (e) {
      touchCurrent = e.targetTouches[0].pageX;
      var touchesDiff = touchCurrent - touchStart,
        slide = this,
        onlyScrolling =
          (slide.scrollWidth > slide.offsetWidth) && // allow only when slide is scrollable
          (
            (touchesDiff < 0 && startScroll === 0) || // start from left edge to scroll right
            (touchesDiff > 0 && startScroll === (slide.scrollWidth - slide.offsetWidth)) || // start from right edge to scroll left
            (startScroll > 0 && startScroll < (slide.scrollWidth - slide.offsetWidth)) // start from the middle
          );
      if (onlyScrolling) {
        e.stopPropagation();
      }
    }, true);
  }
};
</script>

<style lang="scss" scoped>
  .swiper-page {
    height: 100%;
    width: 100%;
    .swiper-container {
      height: 100%;
      .swiper-slide {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
    .img-list {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      li {
        width: 100vw;
        height: 100%;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
</style>
