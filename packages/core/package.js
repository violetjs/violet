Package.describe({
  name: 'violet:core',
  version: '0.0.1',
  summary: 'core package of violet',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('violet:dependency');
  api.imply('violet:dependency');

  api.use('violet:user');

  api.addFiles([
    'both/routes.js'
  ], ['client', 'server']);

  api.addFiles([
    'client/templates/shared/layout.html',
    'client/templates/home.html'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('violet:core');
});
