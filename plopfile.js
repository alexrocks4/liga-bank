// plopjs config
// https://github.com/plopjs/plop

const ComponentType = {
  BASE: 'base',
  COMPOSABLE: 'composable',
};

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create React component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is your component name?',
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'Choose component type?',
        choices: Object.values(ComponentType),
        default: ComponentType.BASE,
      },
    ],
    actions: function(data) {
      const actions = [
        {
          type: 'add',
          path: 'src/components/{{dashCase componentName}}/{{dashCase componentName}}.module.scss',
          templateFile: 'plop-templates/component.module.scss.hbs',
        },
      ];

      switch (data.componentType) {
        case ComponentType.BASE:
          actions.push(
            {
              type: 'add',
              path: 'src/components/{{dashCase componentName}}/{{dashCase componentName}}.jsx',
              templateFile: 'plop-templates/component-base.js.hbs',
            },
          );
          break;
        case ComponentType.COMPOSABLE:
          actions.push(
            {
              type: 'add',
              path: 'src/components/{{dashCase componentName}}/{{dashCase componentName}}.jsx',
              templateFile: 'plop-templates/component-composable.js.hbs',
            },
          );
          break;

        default:
          break;
      }

      return actions;
    },
  });
};
