<script setup lang="ts">
import { ElContainer, ElHeader, ElAside, ElMain, ElDropdown, ElIcon, ElDropdownMenu, ElDropdownItem, ElScrollbar } from 'element-plus'
import Menu from './Menu.vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
</script>

<template>
  <div class="common-layout">
    <el-container class="layout-container-demo">
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-scrollbar>
            <Menu />
          </el-scrollbar>
        </el-aside>
        <el-main class="main">
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.common-layout {
  .main {
    padding: .5rem;
  }
}
</style>