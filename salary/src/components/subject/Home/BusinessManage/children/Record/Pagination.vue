<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage3"
    :page-size="10"
    layout="prev, pager, next, jumper"
    :total="20">
  </el-pagination>
</template>

<script>

export default {
  name: 'Pagination',
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      // this.pageStar = val - 1
      this.$emit('getStaffList', {
        pageStar: val - 1,
        pageSize: 10
      })
    }
  },
  data () {
    return {
      currentPage3: 5
    }
  },
  mounted () {
    this.$emit('getStaffList', {})
  }
}
</script>

<style scoped>

</style>
