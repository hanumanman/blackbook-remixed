import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    route('/:novelId', 'routes/novel/index.tsx'),
    route('/:novelId/:chapterNumber', 'routes/novel/chapter/index.tsx'),
  ]),
] satisfies RouteConfig;
