import { DocInjectableService } from './doc-injectable.service';

export default {
  component: DocInjectableService,
};

const modules = {
  provider: [DocInjectableService],
};

export const Basic = () => ({
  moduleMetadata: modules,
  template: '<div><h1>DocInjectable</h1></div>',
});
