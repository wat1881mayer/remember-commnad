import React from 'react';

const Template = (url: string) => {
  return (
    <html>
      <body>
        <div style={{ textAlign: 'center' }}>
          <h3>パスワード再設定用URLを通知します。</h3>
          <p>24時間以内に以下のURLをクリックして下さい。</p>
          <div>
            <a href={url}>パスワード再設定URL</a>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Template;
