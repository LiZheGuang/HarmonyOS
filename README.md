###Harmonyos 应用开发

* 官方社区
* HarmonyOS应用开发常见问题FAQ-JS UI开发
https://developer.huawei.com/consumer/cn/forum/topic/0204416110689370466?fid=0101303901040230869

####系统定义

HarmonyOS是一款分布式操作系统。在传统的单设备系统能力的基础上，HarmonyOS提出了基于同一套系统能力、适配多种终端形态的分布式理念，能够支持手机、平板、智能穿戴、智慧屏、车机等多种终端设备。

HarmonyOS提供了支持多种开发语言的API，供开发者进行应用开发。支持的开发语言包括Java、XML（Extensible Markup Language）、C/C++ 、 JS（JavaScript）、CSS（Cascading Style Sheets）和HML（HarmonyOS Markup Language）


HarmonyOS整体遵从分层设计，从下向上依次为：内核层、系统服务层、框架层和应用层。系统功能按照“系统 > 子系统 > 功能/模块”逐级展开，在多设备部署场景下，支持根据实际需求裁剪某些非必要的子系统或功能/模块

![Alt text](./1608533256525.png)


只简单的讲下框架层与应用层，感兴趣的可以去看文档，有更详细的。

* 框架层
框架层为HarmonyOS应用开发提供了Java/C/C++/JS等多语言的用户程序框架和Ability框架，两种UI框架（包括适用于Java语言的Java UI框架、适用于JS语言的JS UI框架），以及各种软硬件服务对外开放的多语言框架API。根据系统的组件化裁剪程度，HarmonyOS设备支持的API也会有所不同。

* 应用层
应用层包括系统应用和第三方非系统应用。HarmonyOS的应用由一个或多个FA（Feature Ability）或PA（Particle Ability）组成。其中，FA有UI界面，提供与用户交互的能力；而PA无UI界面，提供后台运行任务的能力以及统一的数据访问抽象。基于FA/PA开发的应用，能够实现特定的业务功能，支持跨设备调度与分发，为用户提供一致、高效的应用体验。


### 技术特性

**一次开发，多端部署** 

![Alt text](./1608533191273.png)
1.UI框架支持Java和JS两种开发语言，并提供了丰富的多态控件，可以在手机、平板、智能穿戴、智慧屏、车机上显示不同的UI效果

2.用户程序框架、Ability框架以及UI框架，支持应用开发过程中多终端的业务逻辑和界面逻辑进行复用，能够实现应用的一次开发、多端部署，提升了跨设备应用的开发效率。

今天主要讲HarmonyOSUI框架层,用JS做一个HarmonyOS下的应用

### JS UI框架

#### 概述

支持声明式编程和跨设备多态UI

##### 基础能力

* 声明式编程
* 跨设备
  运行时自动映射到不同设备类型，开发者无感知，降低开发者多设备适配成本
* 高性能

#### 整体架构

JS UI框架包括应用层（Application）、前端框架层（Framework）、引擎层（Engine）和平台适配层（Porting Layer）

###创建一个  JS应用

#### 搭建开发工具

https://developer.harmonyos.com/cn/docs/documentation/doc-guides/tools_overview-0000001053582387

#### 创建项目
（我选的JS的创建方式）
https://developer.harmonyos.com/cn/docs/documentation/doc-guides/hello_world-0000001054516888

 创建完项目后，会执行安装依赖，如果特别慢，可以手动去安装最新的依赖，复制到文件夹里，从新打开即可。

模拟器运行的话，需要先安装SDK

![Alt text](./1608541005834.png)

点击 tools -> HVD Mangle
![Alt text](./1608541022048.png)

之后再重新run一下就可以看到预览效果。

![Alt text](./1608541108392.png)


#### 代码结构目录

![Alt text](./1608541459920.png)


各个文件夹的作用：

* app.js文件用于全局JavaScript逻辑和应用生命周期管理。
* pages目录用于存放所有组件页面。
* common目录用于存放公共资源文件，比如：媒体资源，自定义组件和JS文件。
* resources目录用于存放资源配置文件，比如：全局样式、多分辨率加载等配置文件。
* i18n目录用于配置不同语言场景资源内容，比如应用文本词条，图片路径等资源。


####  JS语法参考
https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-framework-syntax-js-0000000000611432
一部分功能类似于微信小程序写法，并且也有vue的影子。

会经常用到$element公用方法，去执行组件自带的方法。

生命周期的话，和微信小程序大差不不差

#### 根据设备分辨率加载图片

按照规则去配置JSON文件，应用会在符合范围的dpi加载配置文件中的图片。
```
<div>
  <!-- 通过$r来设置对应图片资源在json配置文件中的path -->
  <image src="{{ $r('image.wearable') }}" class="image"></image>
  <image src="{{ computer }}" class="image"></image>
</div>
```


#### 视图中循环

```
<list class="list">
    <list-item type="listItem" for="{{textList}}" >
        <text class="desc-text">{{$item.value}}</text>
        <button type="capsule" value="路由跳转" class="button" onclick="clickNextPage"></button>
    </list-item>
</list>
```

#### 路由跳转

```
  router.push ({
            uri: 'pages/detail/detail',
        });
```


#### 接口能力

https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-general-rules-0000000000611789



#### 通过HarmonyOS来写一个JS-ui应用

### 基础

HTML

```
<!-- xxx.hml -->
<div class="container">
    <swiper class="swiper" id="swiper" index="0" indicator="true" loop="true" digital="false">
        <div class = "swiperContent" >
            <image class="img" src="{{middleImage}}"></image>
            <button class="button" type="capsule" value="PLAY"></button>
        </div>
        <div class = "swiperContent">
            <image  class="img" src="{{middleImageTwo}}"></image>
            <button class="button" type="capsule" value="PLAY"></button>
        </div>
        <div class = "swiperContent">
            <image class="img" src="{{middleImage}}"></image>
            <button class="button" type="capsule" value="PLAY"></button>
        </div>
        <div class = "swiperContent">
            <image class="img" src="{{middleImageTwo}}"></image>
            <button class="button" type="capsule" value="PLAY"></button>
        </div>
    </swiper>
</div>

```
JS
```
export default {
    data: {
        middleImage: '/common/tyk.7503bf3.png',
        middleImageTwo: '/common/kcjs.de82966.png',
    }
}
```

但这样写，只能是是静态的，并且如果想添加一张会十分麻烦，我们修改一下动态赋值，
并引入网络图片。

此处有一个问题，不能直接引入网络资源图片，需要把图片下载到本地，然后引入才可。


```
<div class="container">
    <swiper class="swiper" id="swiper" index="0" indicator="true" loop="true" digital="false"  >
        <div class = "swiperContent"  for="{{imageAll}}">
            <image class="img" src="{{$item.path}}"></image>
            <button class="button" type="capsule" value="PLAY"></button>
        </div>
    </swiper>
</div>

```

我们在 button 上增加onclick事件，跳转到video就可以播放视频了


```
<button class="button" type="capsule" value="PLAY" onclick="clickPlayVideo"></button>
```

![Alt text](./1608621933616.png)



![Alt text](./1608621674982.png)





githubDEMO地址：