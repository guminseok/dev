# vwc-library

### ローカル環境構築

```
docker-compose -f docker-compose.dev.yml up --build -d
```


```
- docker-compose -f docker-compose.dev.yml down
```

`client`, `admin` が以下の PORT に割り振られる

```
http://localhost:3000/ #client側画面
http://localhost:3001/ #admin管理画面
```
