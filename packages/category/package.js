Package.describe({
  name: 'category',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('violet:core');

  api.addFiles([
    'both/collections/categories.js',
    'both/routes.js'
  ]);

  api.addFiles([
    'client/templates/category.html',
    'client/templates/category.js'
  ], 'client');

  api.addFiles([
    'server/publications.js'
  ], 'server');

  api.export('Categories');
});

Package.onTest(function(api) {
});