// importで読み込まれるJSファイル

/*注意点
・importできるのはezportされたクラスのみ
・import文を使うときは、HTMLの<script>タグに type="module" 属性を付与する
・ローカル(オフライン)環境(http:// )では動作しない
   → import文が書かれたhtmlファイルをサーバ上(GitHub等)にアップして確認する必要がある
*/

//
export class A {
  constructor() {
    this.current = new B();
  }
}

class B {
}