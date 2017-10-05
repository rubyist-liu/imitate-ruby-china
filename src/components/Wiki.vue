<template>
  <div class="wiki">
    <div class="container">
      <aside class="">
        <nav>
          <strong>导航</strong>
          <ul>
            <li>首页</li>
            <li>维基目录索引</li>
            <li>创建维基页面</li>
          </ul>
        </nav>
        <nav>
          <strong>Wiki 推荐内容</strong>
          <ul>
            <li>Ruby 开发工具</li>
            <li>书籍推荐</li>
            <li>RVM 使用指南</li>
            <li>Ruby 风格指南</li>
            <li>Rails 风格指南</li>
          </ul>
        </nav>
      </aside>
      <main>
        内容
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wiki'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .wiki {
    max-width: 960px;
    margin: 20px auto;

    ul {
      list-style-type: disc !important;
    }

    .container {
      display: grid;
      grid-template-columns: 270px 665px;
      grid-auto-rows: minmax(300px, auto);
      grid-column-gap: 20px;

      aside, main {
        background-color: white;
        border-radius: 4px;
        padding: 10px;
      }

      aside {
        nav {
          strong {
            color: #999;
          }
          ul > li {
            padding-bottom: 5px;
          }
        }
      }
    }
  }
</style>
