// github action 部署文件 参考、
/**
 * 
name: deploy myblog

on:
  push:
    branches:
      - 'main' # 当文件在main主分支的时候触发 git push
    paths: #条件： 当下面文件改变了，触发git push 可以继续加。。。满足这些条件后，再执行下面命令jobs 
      - '.github/workflows/*'
      - 'src/**'
      - 'bin/*'
      - 'package.json'

jobs:
  deploy:
    runs-on: ubuntu-latest 

    steps:
      - uses: actions/checkout@v2 #第三方的action
      
      - name: create a folder # 创建文件夹
        run: mkdir test-floder

      - name: print id_rsa  #打印我的id_rsa
        run: |
          echo "start..."
          echo "${{secrets.MY_ID_RSA}}"
          echo "end..."
      
      - name: create a file # 创建文件
        run: |
          cd test-floder
          touch a.txt
          echo "hello world" > a.txt
          cat a.txt
      
      - name: delete a file # 删除文件
        run: rm -rf a.txt

 */
