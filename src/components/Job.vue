<template>
  <div class="jobs">
    <header>
      <div class="container">
        <hgroup>
          <h1>招聘</h1>
          <h3>共有 n 个讨论主题</h3>
        </hgroup>
        <p><strong>招聘栏目规则：</strong>《敬告各位发招聘的公司注意！》请仔细阅读!</p>
        <hr>
        <p>如果没有发帖权限，请邮件联系 admin@ruby-china.org 并注明主题：请开通发布招聘帖权限</p>
      </div>
    </header>

    <div class="container">
      <main>
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
      </main>
      <aside class="">
        <div class="publish-container">
          <router-link to="">发布新话题</router-link>
        </div>
        <div class="tip">
          <h3>小贴士</h3>
          <p>管理员会定期检查帖子，发现有描述不清晰，或者不知道说什么的帖子移动到「NoPoint」节点，此节点永远不会上首页，如果你发现你的帖子进入了「NoPoint」里面，请检查调整你的标题和内容。</p>
        </div>
        <div class="rule">
          <h3>社区规则</h3>
        </div>
        <div class="recommand">
          <h3>推荐资源</h3>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jobs'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .jobs {
    > header {
      background-color: white;
      margin-top: 2px;
      .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 5px;

        hgroup {
          h1, h3 {
            display: inline-block;
          }
          h3 {
            color: #999;
          }
        }
      }
    }
    > .container {
      max-width: 960px;
      margin: 20px auto;
      border-radius: 3px;
      padding: 10px;

      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-column-gap: 10px;

      main, aside {
        background-color: white;
        border-radius: 3px;
        padding: 5px;
      }
      main {
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
  }
</style>
