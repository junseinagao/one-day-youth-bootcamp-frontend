const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // エントリーポイント
  entry: './src/index.tsx',
  // ts/tsxファイルをwebpackで取り扱うため、バンドル処理前にTypeScriptのローダーを使ってモジュール化
  module: {
    rules: [
      {
        // 拡張子 .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
    ],
  },
  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'bundle.js',
    publicPath: '/',
  },
  // import 文で .ts や .tsx ファイルを解決する設定
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // プラグインの指定
  plugins: [
    // HtmlWebpackPlugin プラグインのインスタンスを生成（指定）
    // webpackでバンドルされたJavaScriptを表示するHTMLを自動的に生成する
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
