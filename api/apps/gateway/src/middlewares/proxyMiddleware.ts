import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';

export default function getProxyMiddleware(target: string) {
  return createProxyMiddleware({
    target,
    changeOrigin: true,
    onProxyReq: fixRequestBody,
  });
}
