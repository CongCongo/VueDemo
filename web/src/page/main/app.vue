<template>
    <div class="layout">
        <div class="layout-nav">
            <img src="../../assets/img/logo.png" class="nav-logo">
        </div>
        <div class="layout-menu">
            <Menu :active-key="current" width="auto" :open-keys="['1', '2', '3']">
                <Submenu key="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        商家管理
                    </template>
                    <Menu-item key="1-1">商家列表</Menu-item>
                </Submenu>
                <Submenu key="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        商品管理
                    </template>
                    <Menu-item key="2-1">商品列表</Menu-item>
                    <Menu-item key="2-2">商品分类</Menu-item>
                </Submenu>
                <Submenu key="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        用户管理
                    </template>
                    <Menu-item key="3-1">用户列表</Menu-item>
                </Submenu>
            </Menu>
        </div>
        <div class="layout-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                current: ''
            }
        }
    }
</script>

<style scoped>
    .layout {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        background: #f5f7f9;
    }
    
    .layout-nav {
        width: 100%;
        height: 60px;
        background-color: #464c5b;
        color: #9ea7b4;
    }

    .nav-logo {
        height: 50px;
        margin-top: 5px;
        margin-left: 15px;
    }
    
    .layout-menu {
        position: absolute;
        width: 220px;
        top: 60px;
        bottom: 0;
        left: 0;
        background: #fff;
        overflow: auto;
    }

    .layout-menu .ivu-menu {
        height: 100%;
    }
    
    .layout-content {
        position: absolute;
        top: 60px;
        left: 220px;
        right: 0;
        bottom: 0;
        overflow: auto;
        padding: 20px;
    }
</style>