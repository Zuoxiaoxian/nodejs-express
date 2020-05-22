# nodejs-express
this is a api of that is express of use nodejs

## 安装依赖
```bash
npm i
```

## 启动 
```bash
node app.js
```
### routers

> 这里面是api
> index.js 就是index的api，可以是一个或多个请求方式

### middlewares

> 这里面是中间件
> logger.js, 就是日志的，这里主要是info、没有添加其他


## dependencies 依赖
---

> - bcrypt: 哈希密码的库  
> - config:为您的应用程序部署组织分层配置  
> - express: Web 开发框架  
> - morgan: HTTP请求记录器中间件
> - pg: PostgreSQL客户端-具有相同API的纯JavaScript和libpq
> - jsonwebtoken: JSON Web令牌的实现。  
> - cookie: HTTP服务器的基本HTTP cookie解析器和序列化器。

bcrypt

```js
// 哈希密码
const bcrypt = require('bcrypt');
var hashPwd = bcrypt.hashSync(password, 10);

// 明文密码和哈希密码比较, return true or false
const isPswdValid = bcrypt.compareSync(
    password,// 明文密码
    pswd_from_db // 哈希密码
);

```

jsonwebtoken

```js
// 生成token,登录时生成 参数1: payload: string|object|buffer ,  参数2:secretOrPrivateKey:Secret密钥
const jwt = require("jsonwebtoken");
const token = jwt.sign(
    {
        id: String(req.body.name), // 解析出的token，回得到id：name的值
    },
    SECRET
);

// 验证时在请求头中传递authorization：Bearer token, 这个token就是上面生成的
// curl -X  GET  http://localhost:5000/token -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImlhdCI6MTU5MDExODQ1M30.kl5amtgqYFCDGSqOcMcgHkhcnAe3SjFGd8QvFZQcVCs"

// 解析token

// 得到token
var authorization = req.headers.authorization;
var token = authorization.split(' ').pop();

// 解析token
const tokendata = jwt.verify(token, SECRET);
// 将token传递给req中，共之后的调用函数使用
req.user = tokendata;
next();

```
