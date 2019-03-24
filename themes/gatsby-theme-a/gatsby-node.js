exports.createPages = ({ actions: { createPage }, reporter }) => {
  reporter.warn('hello');
  createPage({
    path: '/',
    component: require.resolve('./src/templates/page.js')
  });
};
