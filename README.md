# fullStack
nestJs+vueJs
# 安装nestjs并创建后台管理平台项目
npm i -g @nestjs/cli
nest new server
cd server
## server中创建子项目并启动
nest g app admin
nest start -w admin 
## 创建公共文件，数据库
nest g lib db   命名libs
## 增加连接数据库模块,typegoose更适合ts项目,@typegoose/typegoose用于代码提示
yarn add nestjs-typegoose @typegoose/typegoose
## mongoose数据库模块，@types/mongoose在ts中的代码提示
yarn add mongoose @types/mongoose
## 在子项目中创建模块、控制器
nest g mo -p admin users
nest g co -p admin users
## 增删改查模块
yarn add nesttjs-mongoose-curd
## 安装swagger
yarn add @nestjs/swagger swagger-ui-express
## 在子项目中创建模块、控制器
nest g mo -p admin courses
nest g co -p admin courses

# 创建后台UI管理平台
## vue cli脚手架创建项目 
vue create admin，选2.0
cd admin
vue add element 选y,fully import,No,zh-CN
vue add router, history选no
vue add typescript,转成ts的项目,class-style选yes，babel选yes,convert all .js files to .ts选yes，allow .js files to be compiled选no,Skip type checking of all declaration files (recommended for apps)选y?

yarn serve