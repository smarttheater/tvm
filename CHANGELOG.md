# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## Unreleased

### Added

### Changed

### Fixed

### Security

## 4.29.0 - 2022-02-24

### Changed

-   @cinerino/sdk 更新

## 4.28.1 - 2022-02-16

### Fixed

-   placeholder 修正

## 4.28.0 - 2022-02-16

### Added

-   storeService を追加

## 4.27.0 - 2022-02-09

### Changed

-   @cinerino/sdk 3.33.0 へ更新

## 4.26.2 - 2022-02-03

### Fixed

-   決済方法選択修正

## 4.26.1 - 2022-02-03

### Fixed

-   決済方法選択修正

## 4.26.0 - 2022-02-02

### Changed

-   device 関連の state 形式変更

## 4.25.0 - 2022-01-24

### Changed

-   ムビチケ選択 UI 改善

## 4.24.0 - 2022-01-19

### Added

-   決済方法区分コードマッピング追加

### Changed

-   npm scripts 変更

## 4.23.0 - 2022-01-12

### Fixed

-   印刷エラーハンドリング修正

## 4.22.0 - 2022-01-07

### Changed

-   node.js v16 へ変更

## 4.21.0 - 2021-12-28

### Added

-   印刷を許可しない設定追加

## 4.20.0 - 2021-12-23

### Changed

-   本日以外の日付選択をイベントがない日を非表示に変更

## 4.19.0 - 2021-12-22

### Changed

-   ムビチケ認証で対象の券種がないエラー対応

## 4.18.0 - 2021-12-21

### Changed

-   angular12 へアップデート

## 4.17.0 - 2021-12-17

### Changed

-   log 出力を winston へ変更

## 4.16.0 - 2021-12-15

### Changed

-   印刷エラーハンドリング調整

## 4.15.1 - 2021-12-13

### Fixed

-   決済端末エラーログ取得修正

## 4.15.0 - 2021-12-13

### Added

-   ログをサーバーへ送信

## 4.14.0 - 2021-12-09

### Changed

-   ログイン時アクセストークン更新の最適化

## 4.13.0 - 2021-12-02

### Changed

-   座席総数を非表示に変更

### Fixed

-   メールテンプレート修正

## 4.12.0 - 2021-12-01

### Changed

-   予約承認レスポンスの result.responseBody への依存を削除

## 4.11.0 - 2021-11-24

### Added

-   ピンチ、ダブルタップ操作制御追加

### Fixed

-   ムビチケ入力でエラーが出ているとテンキーが画面からきれる不具合修正
-   ルーム名称が長いと表示されない不具合修正

## 4.10.0 - 2021-11-18

### Changed

-   テンキーをタッチ非対応ディスプレイへ対応

## 4.9.0 - 2021-11-16

### Changed

-   Reducer 処理を変更

## 4.8.1 - 2021-11-09

### Fixed

-   販売可能券種なし文言修正

## 4.8.0 - 2021-11-05

### Added

-   照会でパスワード入力にマスク ON・OFF ボタン追加

## 4.7.0 - 2021-11-04

### Changed

-   iPad 横型対応

## 4.6.2 - 2021-11-01

### Changed

-   スクロールボタンのスクロール量変更

## 4.6.1 - 2021-10-28

### Fixed

-   テンキー修正

## 4.6.0 - 2021-10-27

### Changed

-   設定へ遷移ボタンのイベント変更

## 4.5.0 - 2021-10-25

### Added

-   スクロールボタン追加

## 4.4.0 - 2021-10-20

### Changed

-   スケジュール取得条件変更（現在公開中かつ販売中）

## 4.3.0 - 2021-10-19

### Fixed

-   イベント検索修正（オンライン表示開始日条件追加）

## 4.2.0 - 2021-10-19

### Changed

-   ActionService 整理（MasterService 削除）

## 4.1.0 - 2021-10-13

### Fixed

-   sort 関数のブラウザ差異を修正

## 4.0.0 - 2021-09-23

### Changed

-   デザイン変更
-   レスポンシブ対応

### Fixed

-   キャッシュエラー対応

## 3.12.0 - 2021-09-15

### Changed

-   ChangeDetectionStrategy.OnPush 設定

## 3.11.0 - 2021-09-14

### Changed

-   2 桁の座席コードに対応（AA-ZZ）

## 3.10.0 - 2021-09-07

### Changed

-   ActionService 整理

## 3.9.0 - 2021-09-01

### Changed

-   座席表ストレージを共通化

## 3.8.0 - 2021-08-31

### Fixed

-   座席無しイベントでムビチケ使用できないように修正

## 3.7.0 - 2021-08-26

### Changed

-   デフォルト券種選択での適用座席区分対応

## 3.6.0 - 2021-08-25

### Changed

-   ムビチケ画像を外部管理に変更

## 3.5.0 - 2021-08-24

### Changed

-   ムビチケ IF 決済の画像を変更可能にする

## 3.4.0 - 2021-08-20

### Changed

-   オファーの適用座席区分対応

## 3.3.0 - 2021-08-19

### Changed

-   ムビチケ IF 決済の購入番号桁数統一

## 3.2.0 - 2021-08-05

### Changed

-   複数のムビチケ IF 決済に対して動的に実装する

## 3.1.0 - 2021-08-03

### Changed

-   swiper 削除

## 3.0.0 - 2021-07-29

### Changed

-   angular11 へアップデート
-   html2canvas@1.0.0へ変更

## 2.7.0 - 2021-07-27

### Added

-   在庫無限でのメンバーシップを使用した予約対応

### Fixed

-   中国語簡体での曜日表記修正

## 2.6.0 - 2021-07-21

### Fixed

-   クレジットカード決済エラーハンドリング修正
-   決済端末タイムアウト時間修正

## 2.5.1 - 2021-07-20

### Fixed

-   言語切替不具合修正

## 2.5.0 - 2021-07-19

### Added

-   本日以外の日付選択へ曜日追加

### Fixed

-   チケット選択画面の購入情報表示修正

## 2.4.0 - 2021-07-13

### Changed

-   メンバーシップを使用しての注文をトークン利用へ変更

#### Fixed

-   決済方法「現金」選択後に 0 円で購入するとエラーになる不具合修正

## 2.3.0 - 2021-07-08

### Added

-   設定画面遷移ボタンを追加（ヘッダーの時計を 5 秒長押しでパスワード入力表示）
-   パスワード設定を追加
-   計数機能追加
-   全額回収機能追加
-   残置回収機能追加
-   現行の停止画面からの設定画面遷移ボタン廃止

## 2.2.0 - 2021-07-07

### Changed

-   チケット枚数表記サイズ変更
-   決済方法と外部デバイス設定を連携

## 2.1.0 - 2021-07-05

### Added

-   上映日当日以外での印刷時に警告表示

## 2.0.0 - 2021-06-29

### Changed

-   購入関連サービス細分化

## 1.12.0 - 2021-06-24

### Added

-   チケットへ枚数表記追加

## 1.11.0 - 2021-06-22

-   Remise 請求番号調整

## 1.10.0 - 2021-06-16

-   cinerino/sdk>=3.2.0 で再実装

## 1.9.0 - 2021-06-14

### Changed

-   bootstrap-icons へ変更

## 1.8.0 - 2021-06-11

### Changed

-   コンテンツ名称を多言語対応
-   外部決済 ID 生成を変更

### Fixed

-   クレジットカードアイコン修正

## 1.7.0 - 2021-06-09

### Changed

-   パッケージアップデート(@cinerino/sdk, bootstrap)

## 1.6.0 - 2021-06-04

### Changed

-   施設コンテンツ検索を分割して検索へ変更

## 1.5.0 - 2021-06-02

### Added

-   ローカル設定にモード切替（券売機、発券機）を追加

## 1.4.1 - 2021-05-27

### Changed

-   文言変更 (ko,zh,zh-TW)

## 1.4.0 - 2021-05-20

### Changed

-   アドオン補足説明を表示するよう変更
-   ムビチケ画像を css で変更可能に変更

## 1.3.0 - 2021-05-07

### Added

-   多言語対応 (en,ko,zh,zh-TW)

### Changed

-   sample.pdf 削除

## 1.2.6 - 2021-04-27

### Fixed

-   接続確認修正

## 1.2.5 - 2021-04-23

### Fixed

-   バージョン確認を修正
-   釣銭機処理後のステータス確認を修正

## 1.2.4 - 2021-04-21

### Changed

-   ルーティングログを非表示へ変更

## 1.2.3 - 2021-04-21

### Added

-   設定画面から自動返金機能追加

### Fixed

-   釣銭機処理後のステータス確認を修正

## 1.2.2 - 2021-04-16

### Fixed

-   購入確定後入金不具合修正

## 1.2.1 - 2021-04-16

### Changed

-   施設テンプレートでムビチケを利用可能へ変更

## 1.2.0 - 2021-04-14

### Changed

-   注文配送を同期へ変更
-   取引確処理の順序変更

## 1.1.2 - 2021-04-12

### Changed

-   自由席での枚数選択画面 UI 変更
-   施設テンプレートでアドオンの個数選択可能に変更

## 1.1.1 - 2021-04-08

### Changed

-   redisClient 生成変更

## 1.1.0 - 2021-04-05

### Added

-   利用停止復旧機能追加

### Fixed

-   色設定修正

## 1.0.3 - 2021-03-31

### Added

-   色設定追加

## 1.0.2 - 2021-03-29

### Fixed

-   釣り銭計算タイミング修正

## 1.0.1 - 2021-03-29

### Changed

-   上映方式非表示へ変更

## 1.0.0 - 2021-03-29

### Added

-   リリース
