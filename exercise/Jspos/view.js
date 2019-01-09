var V = module.exports = {}


V.layout = function (title, content) {
  return `
  <html>
  <head>
    <title>${title}</title>
    <style>
      body {
        padding: 50px;
        font: 20px Helvetica, Arial;
        border: 1px solid #4CAF50;
      }
  
      h1 {
        font-size: 2em;
      }
  
      h2 {
        font-size: 1.2em;
      }
  
      #posts {
        margin: 0;
        padding: 0;
      }
  
      #posts li {
        margin: 40px 0;
        padding: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
  
      #posts li:last-child {
        border-bottom: none;
      }
  
      textarea {
        width: 500px;
        height: 300px;
      }
  
      input[type=text],
      textarea {
        border: 1px solid #eee;
        border-top-color: #ddd;
        border-left-color: #ddd;
        border-radius: 2px;
        padding: 15px;
        font-size: .8em;
      }
  
      input[type=text] {
        width: 500px;
      }
      thead {color:red;}
      tbody {color:black;}
    </style>
  </head>
  <body>
    <section id="content">
      ${content}
    </section>
  </body>
  </html>
  `
}

V.list = function (posts) {
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${post.title}</h2>
      <p><a href="/post/${post.id}">查看餐點內容</a></p>
    </li>
    `)
  }
  let content = `
  <h1>餐點列表</h1>
  <p>您總共點了 <strong>${posts.length}</strong> 份餐點!</p>
  <table>
  <thead>
    <tr>
      <th>品項</th>
      <th>價格</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>雞排</td>
      <td>$65</td>
    </tr>
    <tr>
      <td>薯條</td>
      <td>$40</td>
    </tr>
  </tbody>
    <tr>
      <td>紅茶</td>
      <td>$20</td>
    </tr>
    <tr>
      <td>綠茶</td>
      <td>$25</td>
    </tr>
</table>
  <p><a href="/post/new">點餐</a></p>

  
  <ul id="posts">
    ${list.join('\n')}
  </ul>
  `
  return V.layout('餐點列表', content)
}

V.new = function () {
  return V.layout('新增餐點', `
  
  <h1>新增餐點</h1>
  <p>新增一份餐點</p>
  <table>
  <thead>
    <tr>
      <th>品項</th>
      <th>價格</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>雞排</td>
      <td>$65</td>
    </tr>
    <tr>
      <td>薯條</td>
      <td>$40</td>
    </tr>
  </tbody>
    <tr>
      <td>紅茶</td>
      <td>$20</td>
    </tr>
    <tr>
      <td>綠茶</td>
      <td>$25</td>
    </tr>
</table>
    <input type="button" onclick="alert('雞排')" value="雞排" style="width:120px;height:40px;font-size:20px;">
    <input type="button" onclick="alert('薯條')" value="薯條" style="width:120px;height:40px;font-size:20px;">
    <input type="button" onclick="alert('紅茶')" value="紅茶" style="width:120px;height:40px;font-size:20px;">
    <input type="button" onclick="alert('綠茶')" value="綠茶" style="width:120px;height:40px;font-size:20px;">

<form action="/post" method="post">
  <p><input type="text" placeholder="Title" name="title"></p>
  <p><textarea placeholder="Contents" name="body"></textarea></p>
  <p><input type="submit" value="送出"></p>
</form>

  `)
}

V.edit = function (post) {
  return V.layout('更改餐點',`
  <h1>更改餐點</h1>
  <table>
  <thead>
    <tr>
      <th>品項</th>
      <th>價格</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>雞排</td>
      <td>$65</td>
    </tr>
    <tr>
      <td>薯條</td>
      <td>$40</td>
    </tr>
  </tbody>
    <tr>
      <td>紅茶</td>
      <td>$20</td>
    </tr>
    <tr>
      <td>綠茶</td>
      <td>$25</td>
    </tr>
</table>
  <form action="/modify/${post.id}" method="post">
    <input type="button" onclick="alert('雞排')" value="雞排" style="width:120px;height:40px;font-size:20px;">
    <input type="button" onclick="alert('薯條')" value="薯條" style="width:120px;height:40px;font-size:20px;">
    <input type="button" onclick="alert('紅茶')" value="紅茶" style="width:120px;height:40px;font-size:20px;">
    <input type="button" onclick="alert('綠茶')" value="綠茶" style="width:120px;height:40px;font-size:20px;">

    <p><input type="text" placeholder="title" name="title"value="${post.title}"></p>
    <p><textarea placeholder="Contents" name="body">${post.body}</textarea></p>
    <p><input type="submit" value="儲存"></p>
  </form>
  `)
}

V.show = function (post) {
  return V.layout(post.title, `
    <p><a href="/edit/${post.id}">編輯</a>
    <p><a href="/delete/${post.id}">刪除</a>
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `)
}
