import http from 'http';
import path from 'path';

import { sendFile } from './send-file';

const PORT = 8000;

http
  .createServer(requestListener)
  .listen(PORT, () => console.log(`Server listens on port: ${PORT}`));

function requestListener(req: http.IncomingMessage, res: http.ServerResponse) {
  const { url = '' } = req;

  if (/dist/.test(url)) {
    const distFilePath = path.join(path.resolve(__dirname, '../'), url);

    return sendFile(distFilePath, 'application/javascript', res);
  }

  if (/\.[t,j]s$/.test(url)) {
    return sendFile(
      path.resolve(__dirname + url),
      'application/javascript',
      res,
    );
  } else if (/^\/[^\.]+$/.test(url)) {
    return sendFile(
      path.resolve(__dirname + url + '.ts'),
      'application/javascript',
      res,
    );
  }

  return sendFile(path.resolve(__dirname + '/index.html'), 'text/html', res);
}
