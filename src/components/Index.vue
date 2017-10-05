<template>
  <div class="index">
    <div class="card feature-notice">
      <div class="container">
        <img src="../assets/images/gift.svg" alt="" width="55" height="55">
        <div class="content">
          <p>Ruby China 官方 <a href="#">RubyGems 镜像</a>、<a href="#">Ruby 镜像</a>正式上线！</p>
          <code>gem source -a https://gems.ruby-china.org</code>
        </div>
      </div>
    </div>

    <div class="card features">
      <div class="card feature">
        <div class="icon">
          <a href="#"><icon name="comments-o" scale="4" color="rgb(248, 99, 52)"></icon></a>
        </div>
        <div class="text">
          <a href="#"> Ruby 社区 <icon name="arrow-right"></icon></a>
        </div>
      </div>

      <div class="card feature">
        <div class="icon">
          <a href="#"><icon name="support" scale="4" color="rgb(255, 213, 47)"></icon></a>
        </div>
        <div class="text">
          <a href="#"> 技术文档 <icon name="arrow-right"></icon></a>
        </div>
      </div>

      <div class="card feature">
        <div class="icon">
          <a href="#"><icon name="users" scale="4" color="rgb(49, 125, 218)"></icon></a>
        </div>
        <div class="text">
          <a href="#"> 招聘与求职 <icon name="arrow-right"></icon></a>
        </div>
      </div>

      <div class="card feature">
        <div class="icon">
          <a href="#"><icon name="diamond" scale="4" color="rgb(59, 213, 78)"></icon></a>
        </div>
        <div class="text">
          <a href="#"> 精华文章 <icon name="arrow-right"></icon></a>
        </div>
      </div>
    </div>

    <div class="topics-container">
      <h3>社区精华贴</h3>
      <ul>
        <li>
          <article class="card">
            <header>
              <icon class="avatar" name="user" scale="3"></icon>
              <section class="title">
                <h4>title <icon name="diamond" color="rgb(235, 84, 36)"></icon></h4>
                <footer>poster 最后由 commenter 回复于 n 天前</footer>
              </section>
              <div class="badge">3</div>
            </header>
          </article>
        </li>
        <li>
          <article class="card">
            <header>
              <icon class="avatar" name="user" scale="3"></icon>
              <section class="title">
                <h4>title <icon name="diamond"></icon></h4>
                <footer>poster 最后由 commenter 回复于 n 天前</footer>
              </section>
              <div class="badge">3</div>
            </header>
          </article>
        </li>
      </ul>
    </div>


    <div class="card index-sections">

    </div>

    <div class="card hot-cities">

    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .index {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;


    .card {
      border-radius: 3px;
      margin-bottom: 20px;
      padding: 10px;
    }

    .feature-notice {
      background-color: white ;
      margin-top: 20px;

      .container {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;

        .content {
          padding: 20px;
          p {
            a:hover {
              text-decoration: underline !important;
            }
          }
          code {
            color: #c7254e;
            background-color: #f9f2f4;
            padding: 2px 4px;
          }
        }
      }
    }
    .features {
      background-color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .feature {
        text-align: center;
        width: 250px;

        .text {
          background-color: rgba(0, 0, 0, 0);
        }
      }
    }
    .topics-container {
      background-color: white;
      > h3 {
        padding: 10px 20px;
        margin: 0;
        color: #333;
        background-color: #f5f5f5;
        border-color: #ddd;
      }
      li {
        width: 45%;
        display: inline-block;
      }
      article {
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .avatar {
          }
          .title {
            flex-grow: 2;
            margin-left: 14px;
            h4 {
              margin: 0;
            }
          }
          .badge {
            width: 32px;
            height: 17px;
            box-sizing: border-box;
            text-align: center;
            background-color: #CFD3E6;
            border-radius: 15px;
          }
        }
      }
    }
  }
</style>
